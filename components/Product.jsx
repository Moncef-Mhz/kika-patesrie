"use client";
import ProductList from "./ProductList";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="md:p-20 p-10 w-full h-full  bg-secondary z-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl capitalize text-text  font-bold">features</h1>
        <Link href="/shop" className="text-white  underline">
          See All
        </Link>
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products ? (
          products
            ?.slice(0, 8)
            ?.map((item) => <ProductList product={item} key={item._id} />)
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
}

export default Product;
