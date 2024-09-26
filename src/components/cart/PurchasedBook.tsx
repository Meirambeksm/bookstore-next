import s from "./styles.module.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/redux/features/booksSlice";
import handleRating from "@/utils/handleRating";
import { Book } from "@/redux/features/types";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";

interface PurchasedBookProps {
  book: Book;
}

const PurchasedBook: FC<PurchasedBookProps> = ({ book }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className={s.cartItem}>
      <div className={s.cartBook}>
        <div className={s.poster}>
          <Image
            className={s.image}
            src={
              book?.volumeInfo?.imageLinks?.thumbnail
                ? book?.volumeInfo?.imageLinks?.thumbnail
                : "/assets/no-image.jpeg"
            }
            alt="poster"
            width={102.5}
            height={145.05}
            priority
          />
        </div>

        <div className={s.info}>
          <h1>{book?.volumeInfo?.title}</h1>
          <span>{book?.volumeInfo?.authors?.join(", ")}</span>
          <div className={s.rating}>
            <div>
              {book?.volumeInfo?.averageRating
                ? handleRating(book?.volumeInfo?.averageRating).map(
                    (star, i) => (
                      <Image
                        src={star}
                        alt="star logo"
                        key={i}
                        width={12}
                        height={12}
                      />
                    )
                  )
                : ""}
            </div>

            <span className="review">
              {book?.volumeInfo?.ratingsCount
                ? `${book?.volumeInfo?.ratingsCount} ${
                    book?.volumeInfo?.ratingsCount === 1 ? "review" : "reviews"
                  }`
                : ""}
            </span>
          </div>
        </div>
      </div>

      <div className={s.cartAdditional}>
        <div className={s.quantityBtn}>
          <button onClick={() => dispatch(removeItem(book.id))}>
            <Image
              src="/assets/minus-btn.svg"
              alt="minus btn"
              width={21}
              height={21}
            />
          </button>
          <span>{book.qty}</span>
          <button onClick={() => dispatch(addItem(book.id))}>
            <Image
              src="/assets/plus-btn.svg"
              alt="plus btn"
              width={21}
              height={21}
            />
          </button>
        </div>

        <span className={s.price}>
          {book?.saleInfo?.retailPrice?.amount
            ? book?.saleInfo?.retailPrice?.amount
            : "No price available"}{" "}
          {book?.saleInfo?.retailPrice?.currencyCode}
        </span>

        <span className={s.delivery}>Shipping: delivery</span>
      </div>
    </li>
  );
};

export default PurchasedBook;
