"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

function AdminHeader() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        {open && (
          <motion.div
            {...framerSidebarBackground}
            className="h-screen w-[20%] relative bg-background flex  flex-col py-5 px-6"
          >
            <Link
              href="/"
              className="text-white font-bold text-2xl md:text-4xl mb-20"
            >
              kika
            </Link>
            <ul className="text-white flex flex-col gap-4 text-lg capitalize">
              {/* <Link
          href="/admin"
          className="hover:text-gray-400 duration-150 py-2 px-2 rounded-md "
          >
          Dashboard
        </Link> */}
              <Link
                href="/admin/Products"
                className="hover:text-gray-400 duration-150 py-2 px-2 rounded-md"
              >
                Products
              </Link>
              <Link
                href="/admin/Orders"
                className="hover:text-gray-400 duration-150 py-2 px-2 rounded-md"
              >
                Orders
              </Link>
              <Link
                href="/admin/Users"
                className="hover:text-gray-400 duration-150 py-2 px-2 rounded-md"
              >
                Users
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
        className="flex  items-center justify-center h-screen cursor-pointer "
      >
        {open ? (
          <MdChevronLeft
            // {...framerSidebarBackground}
            size={14}
            color="white"
            className=" bg-background w-5 h-7 rounded-r-sm"
            onClick={() => setOpen(false)}
          />
        ) : (
          <MdChevronRight
            // {...framerSidebarBackground}
            size={14}
            color="white"
            className=" bg-background w-5 h-7 rounded-r-sm"
            onClick={() => setOpen(true)}
          />
        )}
      </motion.div>
    </>
  );
}
const framerSidebarBackground = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
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

export default AdminHeader;
