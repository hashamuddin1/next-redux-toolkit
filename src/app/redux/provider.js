"use client"
import { store } from "./store";

const { Provider } = require("react-redux");

//connect rtk to next app
export function Providers({children}){
    return <Provider store={store}>{children}</Provider>
}