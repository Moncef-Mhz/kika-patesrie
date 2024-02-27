import "./globals.css";
import { Providers } from "./Providers";
import { AuthProvider } from "./AuthProvider";
import PathProvider from "./PathProvider";
import { StateContext } from "../context/StateContext";
import FooterPathProvider from "./FooterPathProvider";
// import { NextUIProvider } from "@nextui-org/react";
// import Footer from "../components/Footer";

export const metadata = {
  title: "Kika Shop",
  description: "best pastry shop ever made in algeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <AuthProvider>
          {/* <NextUIProvider> */}
          <Providers>
            <StateContext>
              <PathProvider />
              {children}
              <FooterPathProvider />
            </StateContext>
          </Providers>
          {/* </NextUIProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
