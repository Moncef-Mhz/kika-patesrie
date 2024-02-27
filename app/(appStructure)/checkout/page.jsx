"use client";
import CheckForm from "../../../components/CheckForm";
import { useStateContext } from "../../../context/StateContext";
import React, { useState } from "react";

function page() {
  const [open, setOpen] = useState(false);
  const { cartItems, getCartTotal } = useStateContext();
  const totalprice = getCartTotal();
  return (
    <div className="p-10 pt-32 grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-4">
      <div className="col-span-3 ">
        <table className="w-full border-collapse ">
          <thead>
            <tr>
              <th>Product</th>
              <th>category</th>
              <th>QTY</th>
            </tr>
          </thead>
          <tbody>
            {(cartItems || []).map((item) => (
              <tr className="" key={item._id}>
                <td className="flex items-center space-x-3 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded"
                  />
                  <h1>{item.name}</h1>
                </td>
                <td className="space-x-2">
                  {item.categories.map((item) => (
                    <span className="" key={item}>
                      {item}
                    </span>
                  ))}
                </td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-span-1  w-full ">
        <CheckForm items={cartItems} totalePrice={totalprice} />
      </div>
    </div>
  );
}

export default page;
