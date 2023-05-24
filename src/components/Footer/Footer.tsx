import { Link } from "react-router-dom";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { TikTokIcon } from "../../icons/TikTok.Icon";
import { TwitchIcon } from "../../icons/TwitchIcon";
import { VkIcon } from "../../icons/VkIcon";
import { YouTubeIcon } from "../../icons/YouTubeIcon";
import s from "./Footer.module.css";
import { Logo } from "../../icons/Logo";

export function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.footer_content}>
          <div className={s.logo}>
            <Logo />
          </div>
          <ul className={s.nav}>
            <Link to={"/catalog"} className={s.link}>
              <li>Каталог</li>
            </Link>
            <Link to={"/catalog"} className={s.link}>
              <li>Отзывы</li>
            </Link>
            <Link to={"/catalog"} className={s.link}>
              <li>Скидки</li>
            </Link>
            <Link to={"/catalog"} className={s.link}>
              <li>Поддержка</li>
            </Link>
            <Link to={"/catalog"} className={s.link}>
              <li>О нас</li>
            </Link>
            <Link to={"/catalog"} className={s.link}>
              <li>Новинки</li>
            </Link>
            <Link to={"/catalog"} className={s.link}>
              <li>Блог</li>
            </Link>
          </ul>
          <ul className={s.socials}>
            <li className={s.socials_icon}>
              {" "}
              <Link to={"https://www.instagram.com/"}>
                <InstagramIcon />
              </Link>
            </li>
            <li className={s.socials_icon}>
              {" "}
              <Link to={"https://www.tiktok.com/"}>
                <TikTokIcon />
              </Link>
            </li>
            <li className={s.socials_icon}>
              {" "}
              <Link to={"https://www.twitch.tv/"}>
                <TwitchIcon />
              </Link>
            </li>
            <li className={s.socials_icon}>
              {" "}
              <Link to={"https://vk.com/"}>
                <VkIcon />
              </Link>
            </li>
            <li className={s.socials_icon}>
              {" "}
              <Link to={"https://www.youtube.com/"}>
                <YouTubeIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.copyrights}>
          © 2023 ICE GAMES. Все права защищены. Копирование любых материалов
          сайта запрещено! Все названия продуктов и игр, компаний и марок,
          логотипы, товарные знаки и другие материалы являются собственностью
          соответствующих владельцев. Только лицензионные ключи ко всем игровым
          платформам: Steam, Uplay, Battle.net, Origin и другие. Все продаваемые
          ключи закупаются у официальных дистрибьюторов и напрямую у издателей.
          В том числе издателей: 1C, 2K, Bandai Namco, Curve Digital, Capcom,
          Codemasters, Deep Silver, Disney, IO Interactive, Iceberg Interactive,
          Nordic Games, Paradox, Plug-in-Digital, Take-Two Interactive, Team17,
          Ubisoft, Бука, Новый Диск и другие.
        </div>
      </div>
    </div>
  );
}
