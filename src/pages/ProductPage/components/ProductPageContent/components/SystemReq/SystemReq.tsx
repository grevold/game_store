import { Product } from "../../../../../../types";
import { texts } from "../../../../../../texts";

import s from "./SystemReq.module.css";

interface Props {
  productData: Product;
}

export function SystemReq({ productData }: Props) {
  const { oc, videoCard, diskSpace, ram, processor } = productData;
  return (
    <div className={s.root}>
      <h1>Минимальные системные требования</h1>
      <ul className={s.container}>
        <li className={s.container_system_requirements}>
          <h2 className={s.system_requirements_key}>{texts.SystemReq.oc}</h2>
          <h3 className={s.system_requirements_value}>{oc}</h3>
        </li>
        <li className={s.container_system_requirements}>
          <h2 className={s.system_requirements_key}>
            {texts.SystemReq.videoCard}
          </h2>
          <h3 className={s.system_requirements_value}>{videoCard}</h3>
        </li>
        <li className={s.container_system_requirements}>
          <h2 className={s.system_requirements_key}>
            {texts.SystemReq.diskSpace}
          </h2>
          <h3 className={s.system_requirements_value}>{diskSpace}</h3>
        </li>
        <li className={s.container_system_requirements}>
          <h2 className={s.system_requirements_key}>{texts.SystemReq.ram}</h2>
          <h3 className={s.system_requirements_value}>{ram}</h3>
        </li>
        <li className={s.container_system_requirements}>
          <h2 className={s.system_requirements_key}>
            {texts.SystemReq.processor}
          </h2>
          <h3 className={s.system_requirements_value}>{processor}</h3>
        </li>
      </ul>
    </div>
  );
}
