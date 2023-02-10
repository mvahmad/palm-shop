import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "store/features/counter";

import { productApi } from "apis/apiSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
