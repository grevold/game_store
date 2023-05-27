import { Product } from "../../../../../../types";

import s from "./SystemReq.module.css";

interface Props {
  productData: Product;
}

export function SystemReq({ productData }: Props) {
  return (
    <div className={s.root}>
      <h1>Минимальные системные требования</h1>
      <ul className={s.container}>
        {Object.entries(productData.SystemReq).map(([key, value]) => (
          <li className={s.container_system_requirements} key={key}>
            <h2 className={s.system_requirements_key}>
              {key
                .split("")
                .reduce(
                  (accumulator, current) =>
                    current === "_" ? accumulator + " " : accumulator + current,
                  ""
                )}
              :
            </h2>
            <h3 className={s.system_requirements_value}>
              {key === "Место_на_диске" || key === "Оперативная_память"
                ? value + " Гб"
                : value}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
