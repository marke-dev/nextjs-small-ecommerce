/*
* This is a simple counter component that uses the store to keep track of the count
*
*/

"use client";

import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { useRef } from "react";
import { incrementByAmount, initializeCount } from "./counterSlice";

export default function Counter() {
  //this is to initialize the store with a value

  //   const store = useAppStore();
  //   const initialized = useRef(false);
  //   if (!initialized.current) {
  //     store.dispatch(initializeCount(-10))
  //     initialized.current = true
  //   }

  //this is to get the value of the store
  const count = 0;//useAppSelector((state) => state.counter.value);

  //this is to change the value of the store
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        className="text-black"
        value={count}
        type="text"
        onChange={(e) => dispatch(initializeCount(e.target.value))}
      />
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {count}
      </p>
    </div>
  );
}
