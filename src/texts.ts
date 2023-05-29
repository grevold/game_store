import { RoutePath } from "./types";

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
        ["auth/email-already-in-use"]:
          "Пользователь с такими данными уже зарегестрирован.",
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
    AddProductError: "Заполните поле",
  },
  AddProduct: {
    genres: [
      "Аркада",
      "Шутер",
      "Хоррор",
      "Action",
      "Симулятор",
      "Файтинг",
      "Платформер",
      "Стратегии",
      "RPG",
      "MMORPG",
    ],
  },
  Navigation: {
    authorized: [
      {
        title: "Главная",
        path: RoutePath.MainPage,
      },
      {
        title: "Каталог",
        path: RoutePath.CatalogPage,
      },
      {
        title: "Новости",
        path: RoutePath.NewsPage,
      },

      {
        title: "Добавить товар",
        path: RoutePath.AddProductPage,
      },
      {
        title: "Корзина",
        path: RoutePath.CartPage,
      },
    ],
    unauthorized: [
      {
        title: "Главная",
        path: RoutePath.MainPage,
      },
      {
        title: "Каталог",
        path: RoutePath.CatalogPage,
      },
      {
        title: "Новости",
        path: RoutePath.NewsPage,
      },
      {
        title: "Sign Up",
        path: RoutePath.SignUpPage,
      },
      {
        title: "Sign In",
        path: RoutePath.SignInPage,
      },
    ],
  },
  Banner: [
    {
      title: "Valorant",
      description:
        "VALORANT — это всемирно известный тактический шутер с матчами 5 на 5 и участием разных персонажей. Перехитрите, переиграйте и затмите противника с помощью грамотного применения умений, меткой стрельбы и слаженной командной работы.",
      price: 299,
      bg: "Valorant_bg.jpg",
      id: "?productId=49c40487-6a92-431e-9c57-468a2356b1dc",
    },
    {
      title: "Naraka Bladepoint",
      description:
        "NARAKA: BLADEPOINT — это мифическая, пропитанная духом боевых искусств PVP-битва на 60 игроков с обширным арсеналом оружия ближнего и дальнего боя и легендарными настраиваемыми героями, которые обладают эпическими способностями и умеют противостоять гравитации.",
      price: 599,
      bg: "Naraka_Bladepoint_bg.jpg",
      id: "?productId=225e600c-f6da-46dc-832e-810a081e56ec",
    },
    {
      title: "Mordhau",
      description:
        "MORDHAU — это средневековый многопользовательский слэшер от первого и третьего лица. Станьте наёмником и отправляйтесь на поле боя, где в вымышленном, но таком реалистичном мире бьются до 64 игроков. MORDHAU — это жестокие и динамичные рукопашные схватки, от которых невозможно оторваться.",
      price: 899,
      bg: "Mordhau_bg.jpg",
      id: "?productId=63fbb14a-f091-48fc-bd84-7b34a01bb999",
    },
    {
      title: "Wrekfest",
      description:
        "Нарушайте правила и гоняйте как никогда в жизни в Wreckfest! Эпические столкновения, нешуточная борьба до самого финиша и миллион способов гнуть и корёжить металл — вот что ждёт вас в Wreckfest, новой гоночной игре со сверхреалистичной симуляцией физики от легендарного разработчика Bugbear.",
      price: 499,
      bg: "Wrekfest_bg.jpg",
      id: "?productId=a923e2a9-c421-47ea-9ee2-b058b8475475",
    },
  ],
  Footer: {
    copyrightText: `© 2023 GAME STORE. Все права защищены. Копирование любых материалов
    сайта запрещено! Все названия продуктов и игр, компаний и марок,
    логотипы, товарные знаки и другие материалы являются собственностью
    соответствующих владельцев. Только лицензионные ключи ко всем игровым
    платформам: Steam, Uplay, Battle.net, Origin и другие. Все продаваемые
    ключи закупаются у официальных дистрибьюторов и напрямую у издателей.
    В том числе издателей: 1C, 2K, Bandai Namco, Curve Digital, Capcom,
    Codemasters, Deep Silver, Disney, IO Interactive, Iceberg Interactive,
    Nordic Games, Paradox, Plug-in-Digital, Take-Two Interactive, Team17,
    Ubisoft, Бука, Новый Диск и другие.`,
  },
  SystemReq: {
    oc: "OC",
    videoCard: "Видеокарта",
    diskSpace: "Место на диске",
    ram: "Оперативная память",
    processor: "Процессор",
  },
};
