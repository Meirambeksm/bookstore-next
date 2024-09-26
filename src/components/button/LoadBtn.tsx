"use client";
import s from "./styles.module.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStartIndex } from "@/redux/features/booksSlice";
import { RootState, AppDispatch } from "@/redux/store";

const LoadBtn: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const startIndex = useSelector((state: RootState) => state.books.startIndex);

  return (
    <div className={s.loadBtnWrapper}>
      <button
        className={s.loadBtn}
        onClick={() => dispatch(setStartIndex(startIndex + 6))}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadBtn;
