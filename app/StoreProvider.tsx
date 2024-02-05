/*
* This file is used to create a store provider that will be used to wrap the entire app.
* This is useful for initializing the store with a value on app load.
* Add to the StoreProviderProps interface to include any other props that you want to pass to the store provider.
*/

'use client'

interface StoreProviderProps {
   //  count: number;
    children: React.ReactNode;
}

import { initializeCount } from "@/lib/features/counter/counterSlice";
import { AppStore, makeStore } from "@/lib/stores";
import { useRef } from "react"
import { Provider } from "react-redux"

//export default function StoreProvider({ count, children }: StoreProviderProps) {
export default function StoreProvider({ children }: StoreProviderProps) {
   const storeRef = useRef<AppStore>();

   if (!storeRef.current) {
      storeRef.current = makeStore();  
      // Initialize the store with the count value, on app load
      // storeRef.current.dispatch(initializeCount(count)); 
   }

   return <Provider store={storeRef.current}>{children}</Provider>
}