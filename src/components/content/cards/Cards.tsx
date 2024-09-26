import s from "../styles.module.css";
import { FC, useEffect } from "react";
import { useFetchBooksQuery } from "@/redux/services/booksApi";
import { addAllBooks, setStartIndex } from "@/redux/features/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Book } from "@/redux/features/types";
import { transformApiBookToBook } from "@/utils/utils";
import Spinner from "@/components/spinner/Spinner";
import Card from "./Card";

const Cards: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const genre = useSelector((state: RootState) => state.books.genre);
  const startIndex = useSelector((state: RootState) => state.books.startIndex);
  const allBooks = useSelector((state: RootState) => state.books.allBooks);
  const { data: books, isLoading } = useFetchBooksQuery({ genre, startIndex });

  useEffect(() => {
    dispatch(setStartIndex(0));
    dispatch(addAllBooks([]));
  }, [dispatch]);

  useEffect(() => {
    if (books && books.items) {
      const transformedBooks = books.items.map(transformApiBookToBook);
      dispatch(addAllBooks(transformedBooks));
    }
  }, [books, dispatch]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={s.cards}>
        {allBooks.map((book: Book, index: number) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </>
  );
};

export default Cards;
