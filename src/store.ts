import { UserAuthStatus, UserState } from "./types";
import { makeAutoObservable } from "mobx";

class Store {
  private userState: UserState;

  constructor() {
    makeAutoObservable(this); // Вот этой строкой мы говорим, что объект (который будет создан при помощи класса Store) будет отслеживаемым (в том смысле, что при малейшем его изменении будут перерендериваться компоненты, подписанные на него).
    this.userState = {
      status: UserAuthStatus.Loading,
    };
  }

  /**
   * Возвращает стейт юзера.
   */
  public getUserState() {
    return this.userState;
  }

  /**
   * Обновляет стейт юзера.
   * @param newUserState новый статус юзера.
   */
  public setUserState(newUserState: UserState) {
    this.userState = newUserState;
  }

  public addProductToCart(productId: string) {
    if (this.userState.status !== UserAuthStatus.Authorized) return;
    this.userState.userData.cart = [...this.userState.userData.cart, productId];
  }

  public removeProductFromCart(productId: string) {
    if (this.userState.status !== UserAuthStatus.Authorized) return;
    this.userState.userData.cart = this.userState.userData.cart.filter(
      (id) => id !== productId
    );
  }
}

export const store = new Store();
