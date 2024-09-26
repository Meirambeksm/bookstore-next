"use client";
import s from "./styles.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProtectedRoute from "@/components/cart/ProtectedRout";
import PurchasedBook from "@/components/cart/PurchasedBook";
import Head from "next/head";

const Cart: FC = () => {
  const purchasedBooks = useSelector(
    (state: RootState) => state.books.purchasedBooks
  );

  const totalAmount = purchasedBooks.reduce((acc, book) => {
    const price = book?.saleInfo?.retailPrice?.amount || 0;
    return acc + price * book.qty;
  }, 0);

  const currency = purchasedBooks.find(
    (book) => book?.saleInfo?.retailPrice?.currencyCode !== undefined
  );

  return (
    <ProtectedRoute>
      <Head>
        <title>Cart | Bookstore</title>
        <meta
          name="description"
          content="Review your cart and proceed to checkout"
        />
      </Head>
      <main className={s.cart}>
        <h1 className={s.heading}>Shopping Cart</h1>
        <div className={s.listHeader}>
          <span>Item</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Delivery</span>
        </div>

        <ul className={s.cartList}>
          {purchasedBooks.map((book, i) => (
            <PurchasedBook key={i} book={book} />
          ))}
        </ul>

        <p className={s.total}>
          Total Amount: {currency?.saleInfo?.retailPrice?.currencyCode}{" "}
          {totalAmount.toFixed(2)}
        </p>
        <button className={s.checkoutBtn}>Checkout</button>
      </main>
    </ProtectedRoute>
  );
};

export default Cart;
