import s from "../styles.module.css";
import { FC } from "react";
import Info from "./Info";
import Poster from "./Poster";
import { Book } from "@/redux/features/types";

interface CardProps {
  book: Book;
}

const Card: FC<CardProps> = ({ book }) => {
  return (
    <div className={s.card}>
      <Poster book={book} />
      <Info book={book} />
    </div>
  );
};

export default Card;
