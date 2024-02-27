"use client";
import { useStateContext } from "../context/StateContext";
import React, { useState } from "react";

function CheckForm({ items, totalPrice }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [wilaya, setWilaya] = useState("");
  const [address, setAddress] = useState("");

  const { clearCart } = useStateContext();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/Orders", {
        method: "POST",
        body: JSON.stringify({
          items,
          totalPrice,
          fullName,
          phoneNumber,
          wilaya,
          address,
        }),
      });
      if (res.ok) {
        // console.log(order);

        setAddress("");
        setFullName("");
        setPhoneNumber("");
        setWilaya("");
        clearCart();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" py-5 items-center justify-center flex flex-col bg-background rounded gap-4 text-center">
      <h1 className="text-lg text-text">Check</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="FullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          required
          value={phoneNumber}
          maxLength="10"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Wilaya"
          required
          value={wilaya}
          onChange={(e) => setWilaya(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="w-full bg-slate-800 text-white  rounded py-2 mt-3">
          Confirme
        </button>
      </form>
    </div>
  );
}

export default CheckForm;
