import { FC } from "react";
import Slider from "@/components/slider/Slider";
import Content from "@/components/content/Content";
import LoadBtn from "@/components/button/LoadBtn";
import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home | Bookstore</title>
        <meta
          name="description"
          content="Browse our collection of books by genre"
        />
      </Head>
      <main>
        <div>
          <Slider />
          <Content />
          <LoadBtn />
        </div>
      </main>
    </>
  );
};

export default Home;
