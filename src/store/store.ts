import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import PersonSlice from "./features/personSlice";
import CountSlice from "./features/countSlice";

export const store = configureStore({
    reducer:{
        person: PersonSlice,
        count : CountSlice
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector