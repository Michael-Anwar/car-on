"use client";

import { useEffect } from "react";
import {toast, ToastPosition } from "react-hot-toast";

export type ToastType = "success" | "error" | "loading" | "custom";

interface ToasterProps {
  type: ToastType;
  message: string;
  position?: ToastPosition;
}

export default function Toaster({
  type,
  message,
}: ToasterProps) {
  useEffect(() => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "loading":
        toast.loading(message);
        break;
      case "custom":
        toast(message);
        break;
    }
  }, [type, message]);

  return null;
}
