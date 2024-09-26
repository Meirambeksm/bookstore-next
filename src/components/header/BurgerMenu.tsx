import s from "./styles.module.css";
import { FC } from "react";

const BurgerMenu: FC = () => {
  return (
    <div className={s.burger}>
      <div className={s.burgerItem}></div>
      <div className={s.burgerItem}></div>
      <div className={s.burgerItem}></div>
    </div>
  );
};

export default BurgerMenu;
