"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const navlinks = [
  { link: "/", name: "Home" },
  { link: "/shop", name: "Shop" },
  { link: "/#about", name: "About Us" },
  { link: "/contact", name: "Contact Us" },
];

const socials = [
  {
    link: "https://www.instagram.com/kika_patisserie_viennoiserie/",
    name: AiOutlineInstagram,
    id: 1,
  },
  { link: "/", name: AiOutlineFacebook, id: 2 },
];

function Footer() {
  const path = usePathname();

  return (
    <footer className="md:p-20 p-10 flex flex-col  bg-primary">
      <div className="flex items-center space-y-5 md:space-y-0 md:flex-row flex-col justify-between border-b border-text pb-10">
        <div>
          <Link
            href="/"
            className="font-black tracking-wider  hover:text-gray-200 duration-150 text-text text-3xl"
          >
            KIKA
          </Link>
        </div>
        <ul className="flex items-center gap-4  ">
          {navlinks.map((item) => (
            <Link
              href={item.link}
              className={
                path === item.link
                  ? "text-text duration-150  py-4"
                  : "text-gray-300 hover:text-text duration-150  py-4"
              }
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="flex item-center justify-center gap-4">
          {socials.map((item) => (
            <a href={item.link} key={item.id} target="_blank">
              <item.name size={25} color="white" />
            </a>
          ))}
        </div>
      </div>
      <h1 className="text-center text-text font-bold mt-10">
        All right reserved, Created by Moncef Meharzi
      </h1>
    </footer>
  );
}

export default Footer;
