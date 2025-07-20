import React from "react";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ScroolToTop from "../components/ui/ScroolToTop";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="relative max-w-full ">
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
        <ScroolToTop />
      </div>
    </AuthProvider>
  );
}
