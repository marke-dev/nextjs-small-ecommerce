"use client";

import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Product } from "../types";

import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";
import { priceString } from "../utils";

export default function Card({
  id,
  image,
  title,
  price,
  description,
}: Product) {
  const productRef = useRef<Product>({ id, image, title, price, description });

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);


  const CartButton = () => {
    const [isInCart, setIsInCart] = useState(cart.items.has(id));

    const handleAdd = () => {
        console.info("add to cart");
        setIsInCart(true);
        dispatch(addToCart(productRef.current));
      };

      const handleRemove = () => {
        console.info("removed from cart");
        setIsInCart(false);
        dispatch(removeFromCart(productRef.current));
      };

      const removeFromCartClass = "bg-transparent border-red-500 border-[1px] text-red-500 py-2 px-4 ml-2 ";
      const addToCartClass = "bg-transparent border-white border-[1px] text-white py-2 px-4 ml-2 ";


    return (
      <button
        className={isInCart ? removeFromCartClass : addToCartClass}
        onClick={() => {isInCart ?  handleRemove(): handleAdd()}}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    );
  };

  return (
    <section>
      <div className="border-[1px] border-zinc-900 rounded-md  overflow-hidden relative h-full">
        <div className="h-[400px] relative ">
          <img
            src={image}
            alt="hero"
            className="object-cover absolute h-full w-full"
          />
        </div>
        <div className="p-4 h-full">
          <h4 className="font-mono font-black text-2xl tracking-widest text-white">
            {title}
          </h4>

          <p className="text-gray-500 text-sm align-middle">id: {id}</p>
          <p className="py-4 font-black text-xl">${priceString(price)}</p>
          <p className="text-white font-mono text-sm h-[100px] overflow-y-scroll">
            {description}
          </p>

          <div className="relative mt-5 bottom-0">
            <button className="bg-transparent border-white border-[1px] text-white py-2 px-4 mr-2">
              Buy Now
            </button>
            <CartButton />
          </div>
        </div>
      </div>
    </section>
  );
}
