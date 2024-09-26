import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiBook } from "../features/types";

interface FetchBooksQueryParams {
  genre: string;
  startIndex: number;
}

interface FetchBooksResponse {
  items: ApiBook[];
  totalItems: number;
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    fetchBooks: builder.query<FetchBooksResponse, FetchBooksQueryParams>({
      query: ({ genre, startIndex }) =>
        `volumes?q=subject:${genre}&key=AIzaSyCXUDV1ibZFH-hMDIJj96IArJdfOmcfqx8&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`,
    }),
  }),
});

export const { useFetchBooksQuery } = booksApi;
