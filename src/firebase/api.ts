import { FirebaseApp } from "@firebase/app-types";
import {
  getDatabase,
  ref as databaseRef,
  set,
  get,
  child,
} from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { store } from "../store";
import {
  FetchProductsStatus,
  ImageInFirebaseStore,
  Product,
  UserAuthStatus,
  UserData,
} from "../types";
import { v4 } from "uuid";
import {
  getStorage,
  ref as storeRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { AddProductFormValues } from "../pages/AddProductPage/components/AddProductForm/useAddProductForm";

class FirebaseApi {
  private readonly auth: Auth;

  constructor() {
    const app = initializeApp(firebaseConfig) as FirebaseApp;
    this.auth = getAuth(); // Функция getAuth возвращает объект, который помогает нам работать с авторизацией firebase.
    onAuthStateChanged(this.auth, (user) => {
      this.handleUserAuthStatusChange(user);
    }); // Данная функция будет вызываться каждый раз, когда меняется стейт юзера.
  }

  /**
   * Регистрирует нового юзера с указанными email и password.
   * @param email - Электронная почта.
   * @param password - Пароль.
   */
  public async signUp(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Выполняет вход для юзера с указанным email и password.
   * @param email - Электронная почта.
   * @param password - Пароль.
   */
  public async signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Разлогинивает юзера.
   */
  public async signOut(): Promise<void> {
    await this.auth.signOut();
  }

  /**
   * Добавляет товар в корзину юзеру.
   *
   * @param userId айдишник юзера.
   * @param productId айдишник товара.
   */
  public async addProductToCart(
    userId: string,
    productId: string
  ): Promise<void> {
    const userData = await this.fetchUserData(userId);
    const database = getDatabase();
    userData.cart.push(productId);
    await set(databaseRef(database, `usersData/${userId}`), userData);
    store.addProductToCart(productId);
  }

  /**
   * Скачивает данные юзера.
   *
   * @param userId айдишник юзера.
   */
  public async fetchUserData(userId: string): Promise<UserData> {
    const dbRef = databaseRef(getDatabase());
    const snapshot = await get(child(dbRef, `usersData/${userId}`));
    if (!snapshot.exists()) {
      return {
        cart: [],
      };
    }
    const userData = snapshot.val() as UserData;
    return userData;
  }

  /**
   * Данный метод является обработчиком события, когда меняется авторизационный статус юзера, а, точнее, когда:
   * 1. Юзер нажал кнопку разлогина
   * 2. Юзер ввёл свои данные на странице "sign-in" и отправил
   * 3. Юзер ввёл свои данные на странице "sign-up" и отправил
   * 4. Юзер перезагрузил страницу
   * 5. Юзер открыл приложение в новой вкладке
   * @param user - обновлённые данные пользователя.
   */
  private async handleUserAuthStatusChange(user: User | null) {
    if (!user) {
      store.setUserState({
        status: UserAuthStatus.Unauthorized,
      });
      return;
    }
    store.setUserState({
      status: UserAuthStatus.Loading,
    });

    try {
      const userData = await this.fetchUserData(user.uid);
      store.setUserState({
        status: UserAuthStatus.Authorized,
        id: user.uid,
        userData,
      });
    } catch (error) {
      store.setUserState({
        status: UserAuthStatus.Unauthorized,
      });
    }
  }

  /**
   * Загружает картинку в хранилище firebase.
   * @param image - объект, описывающий картинку.
   */
  public async uploadImage(image: File): Promise<ImageInFirebaseStore> {
    const id = v4();
    const storage = getStorage();
    const storageRef = storeRef(storage, `images/${id}`);
    await uploadBytes(storageRef, image);
    const src = await getDownloadURL(storageRef);
    return { id, src };
  }

  /**
   * Загружает картинки в хранилище firebase.
   * @param images - объекты, описывающие картинки.
   */
  public async uploadImages(images: File[]): Promise<ImageInFirebaseStore[]> {
    const promises = images.map((image) => this.uploadImage(image));
    return Promise.all(promises);
  }

  /**
   * Записывает данные о продукте в базу данных.
   * @param productData - данные продукта из формы создания новых продуктов.
   */
  public async addProduct(productData: AddProductFormValues): Promise<void> {
    const productId = v4();
    const database = getDatabase();
    const images = await this.uploadImages(productData.images);
    const product = {
      ...productData,
      images,
    };
    await set(databaseRef(database, `products/${productId}`), product);
  }

  /**
   * Скачивает массив всех продуктов.
   */
  private async fetchAllProducts(): Promise<Product[]> {
    const dbRef = databaseRef(getDatabase());
    const snapshot = await get(child(dbRef, `products`));
    if (!snapshot.exists()) {
      throw new Error("Не удалось скачать продукты");
    }
    const snapshotVal: Record<string, any> = snapshot.val();
    const products: Product[] = Object.entries(snapshotVal).map(
      ([id, productData]) => ({
        ...productData,
        id,
      })
    );
    return products;
  }

  public fetchAllProductsAndPutThemToStore() {
    if (store.getProductsState().status === FetchProductsStatus.Success) {
      return;
    }

    this.fetchAllProducts().then(
      (products) => {
        store.setProductsState({
          status: FetchProductsStatus.Success,
          products,
        });
      },
      (error) => {
        store.setProductsState({
          status: FetchProductsStatus.Error,
          products: [],
        });
      }
    );
  }

  public async removeFromCart(userId: string, productId: string) {
    const userData = await this.fetchUserData(userId);
    const database = getDatabase();
    userData.cart = userData.cart.filter((id) => id !== productId);
    await set(databaseRef(database, `usersData/${userId}`), userData);
    store.removeProductFromCart(productId);
  }
}

export const firebaseApi = new FirebaseApi();
