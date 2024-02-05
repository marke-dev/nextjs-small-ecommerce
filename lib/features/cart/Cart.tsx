"use client";

import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Link href={'/cart'}>
      <button>CART ({cart.total})</button>
    </Link>
  );
};
