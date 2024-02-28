import { configureStore } from "@reduxjs/toolkit";
import adSlice from "./slices/adSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        advertisement: adSlice,
        user: userSlice,
    }, 
})