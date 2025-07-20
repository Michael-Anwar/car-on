"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Login failed");
      } else {
        // update your auth context
        login(data.user, data.token);
        localStorage.setItem("loginSuccess", "true");
        router.push("/");
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      toast.error("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 loginform">
      <div className="inputContainer">
        <label htmlFor="email">Enter Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="inputContainer relative">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-xl">
          Remember me
        </label>
      </div>
      <input
        className="input bg-brandColor text-white py-2 rounded cursor-pointer"
        type="submit"
        value={loading ? "Signing In..." : "Sign In"}
        disabled={loading}
      />
      <div className="text-xl text-center mt-2">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-brandColor underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
