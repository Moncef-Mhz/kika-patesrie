import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className=" w-full  relative h-screen overflow-x-hidden bg-hero flex items-center justify-center">
      <div className="z-20 text-center space-y-4">
        <h1 className="text-white font-bold md:text-6xl text-4xl  z-10 capitalize">
          Explorez nos délicieuses <br /> créations pâtissières.
        </h1>
        <p className="text-white/70 text-base font-normal">
          Délices sucrés, pâtisseries fraîches, joie intérieure.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/shop"
            className="text-background font-semibold hover:bg-background hover:text-white duration-150 hover:border-background bg-white text-center capitalize px-4 py-2 rounded-sm border-white border-2"
          >
            Order Now
          </Link>
          <button className="text-white font-semibold hover:bg-white hover:text-background  duration-150 bg-transparent text-center capitalize px-4 py-2 rounded-sm border-white border-2">
            About us
          </button>
        </div>
      </div>
      <div className="absolute bg-black/60 z-[1] h-full w-full"></div>
    </div>
  );
}

export default Hero;
