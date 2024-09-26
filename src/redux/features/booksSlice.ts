import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksState, Book } from "./types";

const initialState: BooksState = {
  genre: "Architecture",
  startIndex: 0,
  purchasedBooks: [],
  allBooks: [],
  items: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
      state.startIndex = 0;
      state.allBooks = [];
    },

    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
    addAllBooks: (state, action: PayloadAction<Book[]>) => {
      const newBooks = action.payload.filter(
        (book) =>
          !state.allBooks.some((existingBook) => existingBook.id === book.id)
      );
      state.allBooks = [...state.allBooks, ...newBooks];
    },
    toggleBookStatus: (state, action: PayloadAction<Book>) => {
      const bookId = action.payload.id;
      const bookIndex = state.purchasedBooks.findIndex(
        (book) => book.id === bookId
      );

      if (bookIndex === -1) {
        state.purchasedBooks.push({
          ...action.payload,
          status: "in the cart",
          qty: 1,
        });
      } else {
        state.purchasedBooks.splice(bookIndex, 1);
      }
    },
    addItem: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      const bookIndex = state.purchasedBooks.findIndex(
        (book) => book.id === bookId
      );
      if (bookIndex !== -1) state.purchasedBooks[bookIndex].qty += 1;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      const bookIndex = state.purchasedBooks.findIndex(
        (book) => book.id === bookId
      );

      if (bookIndex !== -1) {
        const book = state.purchasedBooks[bookIndex];

        book.qty > 1
          ? (book.qty -= 1)
          : state.purchasedBooks.splice(bookIndex, 1);
      }
    },
  },
});

export const {
  setGenre,
  setStartIndex,
  addAllBooks,
  toggleBookStatus,
  addItem,
  removeItem,
} = booksSlice.actions;
export default booksSlice.reducer;
