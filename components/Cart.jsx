"use client";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";
import React from "react";
import { MdChevronLeft } from "react-icons/md";

function Cart() {
  const {
    getCartTotal,
    AddToCart,
    cartItems,
    removeFromCart,
    showCart,
    setShowCart,
  } = useStateContext();
  return (
    <div className=" fixed right-0 top-0 w-[70%] bg-primary h-full  flex flex-col justify-between ">
      <div>
        <div
          onClick={() => setShowCart(false)}
          className="text-lg cursor-pointer border-b text-white flex items-end gap-2 p-[26px]"
        >
          <MdChevronLeft size={25} />
          <h1 className="space-x-1">
            Cart
            <span>({cartItems.length})</span>
          </h1>
        </div>
        <div className="p-5 flex flex-col gap-3  overflow-y-auto  scroll-smooth max-h-96">
          {cartItems.length >= 1 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between">
                <div className="flex gap-1 items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md border"
                  />
                  <div className="flex text-white flex-col">
                    <h1>{item.name}</h1>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="text-white/70">&times; {item.quantity}</div>
                <div className="bg-slate-50 rounded-full p-1">
                  <div className="flex flex-col items-center gap-2  justify-between ">
                    <div
                      className="bg-background text-text  rounded-full cursor-pointer select-none w-5 text-center h-5 text-sm"
                      onClick={() => AddToCart(item)}
                    >
                      +
                    </div>
                    <h1>{item.quantity}</h1>
                    <div
                      className="bg-background text-text rounded-full cursor-pointer select-none w-5 text-center h-5 text-base items-center flex justify-center"
                      onClick={() => removeFromCart(item)}
                    >
                      &minus;
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-white text-center">Your cart item is empty!</h1>
          )}
        </div>
      </div>
      <div className="p-5 flex-col absolute bottom-0 right-0 w-full bg-primary flex border-t gap-2">
        <h1 className="text-white capitalize font-medium text-lg text-right">
          Total: {getCartTotal()}DA
        </h1>
        <Link
          href="/checkout"
          className="bg-slate-50 text-center w-full py-2 rounded"
          onClick={() => setShowCart(false)}
        >
          Confirme
        </Link>
      </div>
    </div>
  );
}

export default Cart;
