import reducer from "./slice";

const { configureStore } = require("@reduxjs/toolkit");
reducer
export const store=configureStore({
    reducer:reducer
})