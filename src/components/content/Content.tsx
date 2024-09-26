"use client";
import s from "./styles.module.css";
import { FC } from "react";
import Sidebar from "./sidebar/Sidebar";
import Cards from "./cards/Cards";

const Content: FC = () => {
  return (
    <section className={s.content}>
      <Sidebar />
      <Cards />
    </section>
  );
};

export default Content;
