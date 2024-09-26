"use client";
import s from "./styles.module.css";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Login from "./Login";
import Image from "next/image";

const Icons: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const purchasedBooks = useSelector(
    (state: RootState) => state.books.purchasedBooks
  );

  const handleProfile = (): void => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      setOpen(!open);
    }
  };

  const handleShoppingCart = (): void => {
    if (isAuthenticated) {
      router.push("/cart");
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className={s.icons}>
      <button className={s.iconBtn} onClick={handleProfile}>
        <Image
          className={s.icon}
          src="/assets/user.svg"
          alt="user icon"
          width={12}
          height={15}
        />
      </button>

      <button className={s.iconBtn} onClick={handleShoppingCart}>
        <Image
          className={s.icon}
          src="/assets/shopbag.svg"
          alt="cart icon"
          width={14}
          height={17}
        />
        {purchasedBooks.length >= 1 && (
          <div className={s.cartLabel}>{purchasedBooks.length}</div>
        )}
      </button>

      {open && <Login setOpen={setOpen} />}
    </div>
  );
};

export default Icons;
