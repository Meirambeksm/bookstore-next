"use client";
import s from "./styles.module.css";
import { FC, useEffect, useState } from "react";
import SliderImg from "./SliderImg";
import Sticker from "./Sticker";
import SliderBtn from "./SliderBtn";

const Slider: FC = () => {
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const changeBanner = () => {
      setIndex((prev) => (prev === 3 ? 1 : prev + 1));
    };
    const intervalId = setInterval(changeBanner, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleChangeBanner = (id: string) => {
    setIndex(Number(id));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleChangeBanner(e.currentTarget.id);
  };

  return (
    <section className={s.carousel}>
      <SliderImg index={index} />
      <Sticker mode="stickerFirst">Change old book on new</Sticker>
      <Sticker mode="stickerSecond">
        Top <br /> 100 <br /> books <br />
        2022
      </Sticker>
      <SliderBtn index={index} onClick={handleClick} />
    </section>
  );
};

export default Slider;
