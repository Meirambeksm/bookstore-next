import s from "./styles.module.css";
import { FC } from "react";
import Link from "next/link";

const Navigation: FC = () => {
  return (
    <nav>
      <ul className={s.navigation}>
        <Link href="/">
          <li className={`${s.item} ${s.active}`}>Books</li>
        </Link>
        <Link href="/audiobooks">
          <li className={s.item}>Audiobooks</li>
        </Link>
        <Link href="/stationery">
          <li className={s.item}>Stationery & Gifts</li>
        </Link>
        <Link href="/blog">
          <li className={s.item}>Blog</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
