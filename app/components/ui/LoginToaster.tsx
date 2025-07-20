"use client";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginToaster() {
  const { user } = useAuth();

  useEffect(() => {
    const success = localStorage.getItem("loginSuccess");
    if (success) {
      toast.success("Logged in successfully!");
      localStorage.removeItem("loginSuccess");
    }

    if (user && (!user.phone || !user.whatsapp)) {
      toast.error("Complete your profile info", { id: "complete-profile" });
    }
  }, [user]);

  return null;
}
