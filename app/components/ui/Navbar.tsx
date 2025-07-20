"use client";
import Link from "next/link";
import ThemeSwitch from "../ui/ThemeSwitch";
import { IoPersonAdd } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useCallback } from "react";

import { useAuth } from "@/app/context/AuthContext";
import { FaUserMinus } from "react-icons/fa";
import Image from "next/image";
import Tooltip from "./Tooltip";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Explore", href: "/cars" },
];

const Navbar = () => {
  const toggleResponsiveNav = useCallback(() => {
    setIsresponsiveLinks((prev) => !prev);
  }, []);
  const pathName = usePathname();
  const [isresponsiveLinks, setIsresponsiveLinks] = useState(false);

  const closeResponsiveNav = () => {
    setIsresponsiveLinks(false);
  };

  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header
      className={`fixed top-0 right-0 left-0 flex items-center rounded-lg md:rounded-2xl  switch-colors z-50 transition-scale duration-500  ease-linear  ${
        pathName === "/" || pathName === "/blogs"
          ? "m-3"
          : "bg-background sticky rounded-none shadow-lg p-3 mb"
      }`}
    >
      <div className="Container w-full relative">
        <nav className="flex justify-between items-center my-3">
          <Link
            href="/"
            className="logo text-3xl md:text-5xl font-semibold cursor-pointer"
          >
            Car
            <span className="font-caveatRegular text-brandColor">On.</span>
          </Link>

          <div>
            <ul className="hidden md:flex justify-start gap-4 ">
              {links.map((link) => {
                const isActive = pathName === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={`text-lg font-semibold hover:text-brandColor nav-link relative ${
                      isActive ? "nav-link-active" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="controls flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link href={`/profile/${user?.id}`}>
                  <Image
                    src={
                      user?.image || "/images/placeholders/default-avatar.png"
                    }
                    loading="lazy"
                    alt={`${user?.name} profile image`}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </Link>
                <Tooltip text="logout">
                  <button onClick={logout}>
                    <FaUserMinus />
                  </button>
                </Tooltip>
              </>
            ) : (
              // If not logged in, display the signin icon
              <Link href="/signin">
                <IoPersonAdd />
              </Link>
            )}
            <ThemeSwitch />
            <Link
              href={"/sell"}
              className="hidden  md:flex items-center gap-2  bg-brandColor py-1 px-3 rounded-full text-white"
            >
              <IoMdAddCircleOutline />
              <span>Sell your car</span>
            </Link>
            <button
              className="inline md:hidden md:scale-0 md:w-0 "
              onClick={toggleResponsiveNav}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </nav>
        <div
          className={`${
            isresponsiveLinks
              ? "max-h-[400px] mb-4"
              : "max-h-0 overflow-hidden "
          }  md:m-0 md:scale-0 md:h-0 absolute w-full `}
        >
          <ul className=" flex flex-col justify-start gap-3 ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-semibold  "
                onClick={closeResponsiveNav}
              >
                <li className="bg-light p-2 rounded-md">{link.name}</li>
              </Link>
            ))}

            <li>
              <Link
                href="/sell"
                className="flex items-center  bg-brandColor py-1 px-3 rounded-full text-white"
                onClick={closeResponsiveNav}
              >
                <IoMdAddCircleOutline />
                <div className=" w-1 h-fit bg-white mx-1"></div>
                <span>Sell your car</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
