import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./services/booksApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksReducer from "./features/booksSlice";
import authReducer from "./features/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistBooksReducer = persistReducer(persistConfig, booksReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    books: persistBooksReducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      booksApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
