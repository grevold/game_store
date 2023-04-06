export enum UserAuthStatus {
  Loading = "Loading",
  Unauthorized = "Unauthorized",
  Authorized = "Authorized",
}

// В таком виде данные юзера будут храниться в сторе.
export type UserState = {
  status: UserAuthStatus;
};

export enum RoutePath {
  MainPage = "*",
  SignUp = "/sign-up",
  CartPage = "/cart",
}
