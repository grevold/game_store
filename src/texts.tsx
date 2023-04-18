export const texts = {
  Errors: {
    SignUp: {
      email: {
        required: "email нужно обязательно указать",
        email: "email невалидный",
      },
      password: {
        required: "пароль нужно обязательно придумать",
        min: "минимальная длина пароля должна быть 6 символов",
        repeatPassword: "пароли не совпадают",
      },
      firebaseErrors: {
        ["auth/email-already-in-use"]: "Пользователь с такими данными уже зарегестрирован.",
        ["auth/network-request-failed"]: "Похоже, у вас проблемы с интернетом.",
        default: "Что-то пошло не так.",
      },
    },
    SignIn: {
      email: {
        required: "введите логин",
        email: "такого логина не существует",
      },
      password: {
        required: "введите пароль",
        min: "минимальная длина пароля должна быть 6 символов",
      },
      firebaseErrors: {
        ["auth/user-not-found"]: "Пользователь с такими данными не найден.",
        ["auth/network-request-failed"]: "Похоже, у вас проблемы с интернетом.",
        default: "Что-то пошло не так.",
      },
    },
    AddProductError:"Заполните поле",
  },
  HeaderNav: {
    MainPage: "Главная",
    CatalogPage: "Каталог",
    NewsPage: "Новости",
    SignUpPage: "Sign Up",
    SignInPage: "Sign In",
    SignOut: "SignOut",
    AddProductPage: "Добавить товар"
  },
  AddProduct: {
    genres: ["Аркада", "Шутер", "Хоррор", "Action", "Симулятор", "Файтинг", "Платформер", "Стратегии", "RPG", "MMORPG"]
  }
};
