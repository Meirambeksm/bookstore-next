import s from "../styles.module.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookStatus } from "@/redux/features/booksSlice";
import { Book } from "@/redux/features/types";
import { AppDispatch, RootState } from "@/redux/store";
import handleRating from "@/utils/handleRating";
import Image from "next/image";

interface InfoProps {
  book: Book;
}

const Info: FC<InfoProps> = ({ book }) => {
  const dispatch = useDispatch<AppDispatch>();
  const purchasedBooks = useSelector(
    (state: RootState) => state.books.purchasedBooks
  );
  const isInCart = purchasedBooks.find((b) => b.id === book.id);
  const handlePurchaseBook = () => dispatch(toggleBookStatus(book));

  return (
    <div className={s.info}>
      <span className={s.author}>{book?.volumeInfo?.authors?.join(", ")}</span>
      <span className={s.name}>{book?.volumeInfo?.title}</span>
      <div className={s.rating}>
        <div>
          {book?.volumeInfo?.averageRating
            ? handleRating(book?.volumeInfo?.averageRating).map((star, i) => (
                <Image
                  src={star}
                  alt="star logo"
                  key={i}
                  width={12}
                  height={12}
                />
              ))
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

      <p className={s.description}>{book?.volumeInfo?.description}</p>
      <span className={s.price}>
        {book?.saleInfo?.retailPrice?.amount}{" "}
        {book?.saleInfo?.retailPrice?.currencyCode}
      </span>

      <button
        className={`${s.cardBtn} ${isInCart ? s.active : ""}`}
        id={book.id}
        onClick={handlePurchaseBook}
      >
        {isInCart ? "in the cart" : "buy now"}
      </button>
    </div>
  );
};

export default Info;
