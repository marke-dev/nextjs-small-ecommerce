"use client";

import { useAppSelector } from "../hooks";
import { CartItem } from "../types";
import { priceString } from "../utils";

export default function CartRow() {
  const cart = useAppSelector((state) => state.cart);

  const RowItem = (cart: CartItem) => {
    return (
      <tr className="border-b-2 border-slate-900 text-center">
        <td>
          <img src={cart.image} className="max-h-[250px] mx-auto" alt="" />
        </td>
        <td>
          <p>{cart.title}</p>{" "}
        </td>
        <td>
          <p>${priceString(cart.price)}</p>{" "}
        </td>
        <td>
          <p>{cart.quantity ?? 1}</p>{" "}
        </td>
      </tr>
    );
  };

  return (
    <tbody>
      {cart.items.size > 0 ? (
        Array.from(cart.items.values()).map((cart) => (
          <RowItem key={cart.id} {...cart} />
        ))
      ) : (
        <tr>
          <td colSpan={4} >
            <p className="text-center py-32 text-xl bg-slate-900">No items in cart</p>
          </td>
        </tr>
      )}
    </tbody>
  );
}
