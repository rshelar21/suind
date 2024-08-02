import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Layout: React.FC<{
  children: React.ReactNode;
  showSidebar?: boolean;
  showNavbar?: boolean;
}> = ({ children, showSidebar, showNavbar }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      console.log("No auth");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex w-full h-screen">
      {showSidebar && <Sidebar />}
      <div className="w-full relative h-full">
        {showNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
