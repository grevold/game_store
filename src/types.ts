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
  MainPage = "/",
  CatalogPage = "/catalog",
  NewsPage = "/news",
  SignUpPage = "/sign-up",
  SignInPage = "/sign-in",
  CartPage = "/cart",
  AddProductPage = "/add-product",
}

export interface NavRoute {
  title: string;
  path: RoutePath;
}

export interface ImageInFirebaseStore {
  src: string;
  id: string;
}

export interface Product {
  name: string;
  developer: string;
  label: string;
  description: string;
  price: number;
  genre: string;
  images: ImageInFirebaseStore[];
}
