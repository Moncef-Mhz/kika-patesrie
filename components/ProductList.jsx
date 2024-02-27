"use client";
import { useStateContext } from "../context/StateContext";
import React, { useEffect, useState } from "react";

function ProductList({ product }) {
  const [Product, setProduct] = useState();
  const { AddToCart, cartItems } = useStateContext();

  // let value = cartItems?.filter((item) => item._id === product._id);
  // console.log(value);

  useEffect(() => {
    setProduct(product);
  }, []);
  return (
    <div
      key={Product?._id}
      className="bg-gray-100 border rounded text-background p-2"
    >
      <img
        src={Product?.image}
        alt=""
        className="h-[250px] select-none rounded w-full object-cover"
      />
      <div className="flex flex-col">
        <div className="pt-2 px-2 flex items-center justify-between">
          <h1 className="text-xl">{Product?.name}</h1>
          <h1 className="text-xl">{Product?.price}DA</h1>
        </div>
        <div className="px-2">
          <p className="text-sm text-black/50">{Product?.description}</p>
        </div>
      </div>
      <div className="px-2 pb-2 pt-3">
        <button
          className="bg-background text-white w-full py-2 rounded-md cursor-pointer px-2"
          onClick={() => AddToCart(Product)}
        >
          Ajoute au panier
        </button>
      </div>
    </div>
  );
}

export default ProductList;
