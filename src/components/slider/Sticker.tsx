import s from "./styles.module.css";
import React from "react";
import Image from "next/image";

interface StickerProps {
  children: React.ReactNode;
  mode: "stickerFirst" | "stickerSecond";
}

const Sticker: React.FC<StickerProps> = ({ children, mode }) => {
  return (
    <div className={`${s.sticker} ${s[mode]}`}>
      <span className={s.stickerText}>{children}</span>
      <Image
        src="/assets/arrow.svg"
        alt="arrow image"
        width={55}
        height={13.5}
      />
    </div>
  );
};

export default Sticker;
