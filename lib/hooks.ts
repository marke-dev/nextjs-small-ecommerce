/*
* This file is used to create custom hooks for the redux store
*/
import { useDispatch, useSelector, useStore } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { AppDispatch, AppStore, RootState } from "./stores"



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = () => useStore<AppStore>()