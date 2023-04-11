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
  },
  HeaderNav: {
    MainPage: "Главная",
    CatalogPage: "Каталог",
    NewsPage: "Новости",
    SignUpPage: "Sign Up",
    SignInPage: "Sign In",
  },
};
