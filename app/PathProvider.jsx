"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../components/header";
function PathProvider() {
  const path = usePathname();
  return <>{path.split("/")[1] !== "admin" && <Header />}</>;
}

export default PathProvider;
