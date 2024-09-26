"use client";
import "./page.module.css";
import "../styles/globals.css";
import "normalize.css";
import { FC, ReactNode } from "react";
import Header from "@/components/header/Header";
import store, { persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const font = Montserrat({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bookstore</title>
        <meta
          name="description"
          content="Discover a wide range of books at the Bookstore"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bookstore" />
        <meta
          property="og:description"
          content="Discover a wide range of books at the Bookstore"
        />
      </Head>
      <html>
        <body className={font.className}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Header />
              {children}
            </PersistGate>
          </Provider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
