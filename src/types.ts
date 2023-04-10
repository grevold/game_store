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
  CatalogPage = "/catalog",
  NewsPage = "/news",
  SignUpPage = "/sign-up",
  SignInPage = "/sign-in",
  CartPage = "/cart",

}
