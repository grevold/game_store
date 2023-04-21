import { FirebaseApp } from "@firebase/app-types";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
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
import { ImageInFirebaseStore, UserAuthStatus } from "../types";
import { v4 } from "uuid";
import {
  getStorage,
  ref as storeRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

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

  public async createDocument(id: string) {
    const database = getDatabase();
    await set(databaseRef(database, `testFolder/${id}`), {
      text: "Hello, world!",
    });
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
  private handleUserAuthStatusChange(user: User | null) {
    if (user) {
      store.setUserState({
        status: UserAuthStatus.Authorized,
      });
    } else {
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
}

export const firebaseApi = new FirebaseApi();
