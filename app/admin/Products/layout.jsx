import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

function layout({ children }) {
  return (
    <div className="py-5 px-10 flex flex-col">
      {/* <div className="flex  items-center justify-between ">
        <div className="border-b flex items-center justify-between w-full p-2">
          <h1 className="text-background text-xl">All Products</h1>
          <Link
            href={"/admin/Products/new"}
            className="bg-background p-2 rounded text-white"
          >
            <IoMdAdd size={20} />
          </Link>
        </div>
      </div> */}
      {/* <NextUIProvider> */}
      {children}
      {/* </NextUIProvider> */}
    </div>
  );
}

export default layout;
