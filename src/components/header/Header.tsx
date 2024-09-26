import s from "./styles.module.css";
import { FC } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";
import Icons from "./Icons";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Logo />
        <Navigation />
        <BurgerMenu />
        <Icons />
      </div>
    </header>
  );
};

export default Header;
