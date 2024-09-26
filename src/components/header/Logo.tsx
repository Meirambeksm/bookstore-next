import s from "./styles.module.css";
import { FC } from "react";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/">
      <h1 className={s.logo}>Bookshop</h1>
    </Link>
  );
};

export default Logo;
