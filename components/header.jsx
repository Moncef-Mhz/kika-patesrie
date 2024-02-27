"use client";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { AnimatePresence, motion } from "framer-motion";

const navlinks = [
  { link: "/", name: "Home" },
  { link: "/shop", name: "Shop" },
  { link: "/#about", name: "About Us" },
  { link: "/#contact", name: "Contact Us" },
];

function Header() {
  const { data: session } = useSession();
  const [dropdown, setDropDown] = useState(false);
  const [menu, setMenu] = useState(false);

  const { cartItems, setShowCart, showCart } = useStateContext();

  const path = usePathname();
  return (
    <div className="flex fixed z-30 items-center w-full justify-between md:px-20 px-10 h-[80px] bg-primary">
      <div className="block md:hidden relative text-text cursor-pointer ">
        <AiOutlineMenu
          size={25}
          onClick={() => {
            setMenu(true);
            setShowCart(false);
          }}
        />
      </div>
      {/*Mobile menu */}
      <AnimatePresence mode="wait" initial={false}>
        {menu && (
          <motion.div
            {...framerSidebarBackground}
            className="fixed top-0 flex flex-col justify-between px-7 left-0 w-[50%] h-full bg-primary"
          >
            <div className="text-text  my-7 cursor-pointer">
              <AiOutlineClose size={25} onClick={() => setMenu(false)} />
            </div>
            <div className="flex flex-col  text-xl mt-10 uppercase ">
              {navlinks.map((link, idx) => (
                <div
                  {...framerText(idx)}
                  key={link.name}
                  className={
                    path === link.link
                      ? "text-text duration-150  py-4"
                      : "text-gray-300 hover:text-text duration-150  py-4"
                  }
                >
                  <Link href={link.link} onClick={() => setMenu(false)}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-xl mb-10 mt-20  text-gray-300 hover:text-white  cursor-pointer ">
              {session ? (
                <div onClick={() => setDropDown(true)} className="relative">
                  {session.user.name}
                  {dropdown && (
                    <div className="absolute right-0 -top-5  bg-slate-50 text-background rounded ">
                      <ul className="flex flex-col items-start justify-start p-1 ">
                        {session.user.role === "admin" && (
                          <Link
                            href="/admin/Products"
                            className="text-sm   capitalize hover:bg-slate-400 w-full px-2 py-1 rounded"
                          >
                            Dashboard
                          </Link>
                        )}
                        {session ? (
                          <li
                            className="text-sm capitalize  hover:bg-slate-400 w-full px-2 py-1 rounded"
                            onClick={() => signOut()}
                          >
                            Sign Out
                          </li>
                        ) : (
                          <></>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div onClick={() => signIn("google")}>Register / SignIn</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/*End mobile menu */}
      <div>
        <Link
          href="/"
          className="font-black tracking-wider  hover:text-gray-200 duration-150 text-text text-3xl"
        >
          KIKA
        </Link>
      </div>
      <div className="md:flex hidden gap-4  ">
        {navlinks.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={
              path === link.link
                ? "text-text duration-150"
                : "text-gray-300 hover:text-text duration-150"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex relative items-center justify-center gap-4">
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setShowCart(true);
            setMenu(false);
          }}
        >
          {cartItems.length >= 1 ? (
            <div className="w-4 text-white text-center text-xs  h-4 -top-1 -right-1 bg-red-500 absolute rounded-full">
              {cartItems.length}
            </div>
          ) : (
            <></>
          )}

          <AiOutlineShoppingCart size={25} color="white" />
        </div>
        <div className="relative w-auto hidden md:block">
          <AiOutlineUser
            size={25}
            color="white"
            cursor="pointer"
            onClick={() => setDropDown((prev) => !prev)}
          />
          {dropdown && (
            <div
              //   onBlur={() => setDropDown(false)}
              className="absolute bg-slate-100 right-0 mt-4 rounded-md "
            >
              <ul className="select-none p-1  flex flex-col items-start justify-center  w-[150px]">
                {session?.user?.role === "admin" && (
                  <Link
                    href="/admin/Products"
                    className="text-black duration-150 cursor-pointer hover:text-white hover:bg-blue-300 w-full px-4 py-2 rounded-md"
                  >
                    Dashboard
                  </Link>
                )}
                {session ? (
                  <li
                    className="text-black duration-150 hover:text-white cursor-pointer hover:bg-red-300 w-full px-4 py-2 rounded-md"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </li>
                ) : (
                  <li
                    className="text-black duration-150 hover:text-white cursor-pointer hover:bg-green-300 w-full px-4 py-2 rounded-md"
                    onClick={() => signIn("google")}
                  >
                    Sign In
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  );
}

const framerSidebarBackground = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%", transition: { delay: 0.2 } },
  transition: { duration: 0.2 },
};
const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

export default Header;
