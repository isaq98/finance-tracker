import { configureStore } from "@reduxjs/toolkit";
import { TableReducer } from "./reducers/TableReducer";

export const store = configureStore({
    reducer: TableReducer
});