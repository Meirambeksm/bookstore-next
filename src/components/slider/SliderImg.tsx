import { FC } from "react";
import s from "./styles.module.css";
import Image from "next/image";

interface SliderImgProps {
  index: number;
}

const SliderImg: FC<SliderImgProps> = ({ index }) => {
  return (
    <div className={s.carouselImg}>
      <Image
        src={`/assets/banner${index}.png`}
        alt="banner #1"
        width={1120}
        height={702}
        priority
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default SliderImg;
