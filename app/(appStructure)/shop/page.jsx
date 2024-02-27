"use client";
import PaginationControls from "../../../components/PaginationControls";
import ProductList from "../../../components/ProductList";
import React, { useState, useEffect } from "react";

function page({ searchParams }) {
  const [products, setProduct] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchProduct = async () => {
    const res = await fetch(`/api/products?page=${page}`);
    const data = await res.json();

    setProduct(data);
  };

  //Pagination
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "20";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  useEffect(() => {
    fetchProduct();
    setProduct((prev) => prev.slice(start, end));
  }, []);

  const filterProducts = products.filter((products) =>
    products.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="md:px-20 px-10 pb-20 pt-28 ">
      <div className="p-5 border-b flex items-center flex-wrap justify-between">
        <h1 className="font-medium text-lg capitalize">filter</h1>
        {/* {filter} */}
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border outline-none border-[#ccc]"
        />
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {filterProducts?.map((item) => (
          <ProductList product={item} key={item._id} />
        ))}
      </div>
      <PaginationControls
        hasNextPage={end < products.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
}

export default page;
