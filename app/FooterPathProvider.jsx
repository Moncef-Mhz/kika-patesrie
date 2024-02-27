"use client";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";

function FooterPathProvider() {
  const path = usePathname();
  return <>{path.split("/")[1] !== "admin" && <Footer />}</>;
}

export default FooterPathProvider;
