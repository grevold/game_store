export enum UserAuthStatus {
  Loading = "Loading",
  Unauthorized = "Unauthorized",
  Authorized = "Authorized",
}

export enum FetchProductsStatus {
  Loading = "Loading",
  Error = "Error",
  Success = "Success",
}

export interface UserData {
  cart: string[];
}

// В таком виде данные юзера будут храниться в store.
export type UserState =
  | {
      status: UserAuthStatus.Loading;
    }
  | {
      status: UserAuthStatus.Unauthorized;
    }
  | {
      status: UserAuthStatus.Authorized;
      id: string;
      userData: UserData;
    };

export type ProductsState = {
  status: FetchProductsStatus;
  products: Product[];
};

export enum RoutePath {
  MainPage = "/",
  CatalogPage = "/catalog",
  AboutUsPage = "/aboutUs",
  SignUpPage = "/sign-up",
  SignInPage = "/sign-in",
  CartPage = "/cart",
  ProductPage = "/product-page",
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
  id: string;
  name: string;
  developer: string;
  label: string;
  description: string;
  price: number;
  genre: string;
  images: ImageInFirebaseStore[];
  rate: number;
  oc: string;
  videoCard: string;
  diskSpace: number;
  ram: number;
  processor: string;
  key: string;
}

export interface ProductBanner {
  title: string;
  description: string;
  price: number;
  bg: string;
  id: string;
}
