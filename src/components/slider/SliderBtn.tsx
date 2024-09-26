import s from "./styles.module.css";
import { FC } from "react";

interface SliderBtnProps {
  index: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SliderBtn: FC<SliderBtnProps> = ({ index, onClick }) => {
  const indexes: number[] = [1, 2, 3];

  return (
    <div className={s.carouselBtns}>
      {indexes.map((i) => (
        <button
          className={`${s.carouselBtn} ${i === index ? s.active : ""}`}
          onClick={onClick}
          id={`${i}`}
          key={i}
        ></button>
      ))}
    </div>
  );
};

export default SliderBtn;
