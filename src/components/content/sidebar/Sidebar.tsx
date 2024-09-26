import s from "../styles.module.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setGenre } from "@/redux/features/booksSlice";

const Sidebar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeGenre = useSelector((state: RootState) => state.books.genre);

  const genres: string[] = [
    "Architecture",
    "Art & Fashion",
    "Biography",
    "Business",
    "Crafts & Hobbies",
    "Drama",
    "Fiction",
    "Food & Drink",
    "Health & Wellbeing",
    "History & Politics",
    "Humor",
    "Poetry",
    "Psychology",
    "Science",
    "Technology",
    "Travel & Maps",
  ];

  const handleGenreChange = (newGenre: string): void => {
    if (newGenre !== activeGenre) dispatch(setGenre(newGenre));
  };

  return (
    <aside className={s.sidebar}>
      {genres.map((genre) => (
        <li
          key={genre}
          className={`${s.sidebarItem} ${
            activeGenre === genre ? s.active : ""
          }`}
          onClick={() => handleGenreChange(genre)}
        >
          {genre}
        </li>
      ))}
    </aside>
  );
};

export default Sidebar;
