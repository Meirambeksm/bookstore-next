import { FC } from "react";
import s from "../styles.module.css";
import Image from "next/image";

interface Poster {
  volumeInfo: {
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

interface PosterProps {
  book: Poster;
}

const Poster: FC<PosterProps> = ({ book }) => {
  return (
    <div className={s.poster}>
      <Image
        className={s.image}
        src={
          book?.volumeInfo?.imageLinks?.thumbnail
            ? book?.volumeInfo?.imageLinks?.thumbnail
            : "/assets/no-image.jpeg"
        }
        alt="poster"
        width={213}
        height={300}
      />
    </div>
  );
};

export default Poster;
