import AdminHeader from "../../components/AdminHeader";
import React from "react";
import { AuthProvider } from "../AuthProvider";

function layout({ children }) {
  return (
    <div className="w-full flex">
      <AuthProvider>
        <AdminHeader />
        <div className=" w-full">{children}</div>
      </AuthProvider>
    </div>
  );
}

export default layout;
