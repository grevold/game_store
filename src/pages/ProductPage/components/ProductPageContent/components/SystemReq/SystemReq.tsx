import { Product } from "../../../../../../types";

import s from "./SystemReq.module.css";

interface Props {
  productData: Product;
}

export function SystemReq({ productData }: Props) {
  return (
    <div className={s.system_requirements}>
      <h1>Минимальные системные требования</h1>
      <ul className={s.container_activation}>
        {Object.entries(productData.systemRequirements).map((elem, index) => (
          <li className={s.container_system_requirements} key={index}>
            <h2>{elem[0]}</h2>
            <h3>{elem[1]}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
