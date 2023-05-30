import { Link } from "react-router-dom";
import { ProductBanner, RoutePath } from "../../../../../types";

import s from "./BannerSlide.module.css";

interface Props {
  product: ProductBanner;
}

export function BannerSlide({ product }: Props) {
  return (
    <Link className={s.root} to={`${RoutePath.ProductPage}/${product.id}`}>
      <div className={s.game_info}>
        <div className={s.container}>
          <h1 className={s.new}>Новинка</h1>
          <h1 className={s.title}>{product.title}</h1>
          <div className={s.description}>{product.description}</div>
          <div className={s.price}>
            <h2 className={s.product_price}>{product.price} ₽</h2>
            <button className={s.button_catalog}>В каталог</button>
          </div>
        </div>
      </div>
      <div className={s.simple_linear}></div>
      <img
        className={s.bg_image}
        src={`${process.env.PUBLIC_URL}/Banner/${product.bg}`}
      />
    </Link>
  );
}
