import { Book, ApiBook } from "@/redux/features/types";

export const transformApiBookToBook = (apiBook: ApiBook): Book => {
  return {
    id: apiBook.id,
    volumeInfo: apiBook.volumeInfo,
    saleInfo: apiBook.saleInfo,
    status: "buy now",
    qty: 1,
  };
};
