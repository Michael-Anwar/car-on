"use client";
import Image from "next/image";
import React, { useState, useRef, ChangeEvent } from "react";
import { useAuth } from "@/app/context/AuthContext";
import LikedCars from "@/app/components/ui/profile/LikedCars";
import PostedCars from "@/app/components/ui/profile/PostedCars";
import { MdEdit } from "react-icons/md";

const Page = () => {
  const { user } = useAuth();
  const [tap, setTap] = useState("liked");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [updatedUser, setUpdatedUser] = useState({
    image: user?.image || "",
    phone: user?.phone || "",
    whatsapp: user?.whatsapp || "",
    location: user?.location || "",
  });

  const original = {
    image: user?.image || "",
    phone: user?.phone || "",
    whatsapp: user?.whatsapp || "",
    location: user?.location || "",
  };

  const hasChanges = Object.keys(updatedUser).some(
    (key) =>
      updatedUser[key as keyof typeof updatedUser] !==
      original[key as keyof typeof original]
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setUpdatedUser((prev) => ({ ...prev, image: preview }));
      // 🔁 Upload logic should be implemented here
    }
  };

  const handleUpdate = () => {
    console.log("Submit updated user:", updatedUser);
    // 🔁 You can send updatedUser to your backend here
  };

  return (
    <div className="Container grid gap-5 md:gap-0 md:grid-cols-[40%_60%] py-10">
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <div className="overflow-hidden rounded-full">
            <Image
              src={
                updatedUser.image?.trim()
                  ? updatedUser.image
                  : "/images/placeholders/default-avatar.png"
              }
              width={150}
              height={150}
              alt={`${user?.name || "User"} profile image`}
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </div>
          <div
            className="absolute top-0 right-0 bg-brandColor p-2 rounded-full cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <MdEdit />
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </div>

        <p className="text-3xl font-semibold">{user?.name}</p>
        <hr className="h-1 w-[50%]" />

        <div className="mt-6">
          <div className="flex items-center gap-4 mb-3">
            <label htmlFor="phone" className="w-[100px] font-medium">
              Mobile:
            </label>
            <input
              id="phone"
              type="text"
              className="flex-1 rounded px-3 py-2"
              value={updatedUser.phone}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, phone: e.target.value })
              }
              placeholder={user?.phone ? "" : "Add phone"}
            />
          </div>

          <div className="flex items-center gap-4 mb-3">
            <label htmlFor="whatsapp" className="w-[100px] font-medium">
              WhatsApp:
            </label>
            <input
              id="whatsapp"
              type="text"
              className="flex-1 rounded px-3 py-2"
              value={updatedUser.whatsapp}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, whatsapp: e.target.value })
              }
              placeholder={user?.whatsapp ? "" : "Add WhatsApp"}
            />
          </div>

          <div className="flex items-center gap-4 mb-3">
            <label htmlFor="location" className="w-[100px] font-medium">
              Address:
            </label>
            <input
              id="location"
              type="text"
              className="flex-1  rounded px-3 py-2"
              value={updatedUser.location}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, location: e.target.value })
              }
              placeholder={user?.location ? "" : "Add address"}
            />
          </div>
        </div>

        {hasChanges && (
          <button
            onClick={handleUpdate}
            className="mt-4 px-4 py-2 bg-brandColor text-white rounded"
          >
            Update Info
          </button>
        )}
      </div>

      <div>
        <div className="flex gap-2 mb-4">
          <button
            className="bg-light p-2 rounded"
            onClick={() => setTap("liked")}
          >
            liked
          </button>
          <button
            className="bg-light p-2 rounded"
            onClick={() => setTap("posted")}
          >
            posted
          </button>
        </div>
        {tap === "liked" ? <LikedCars /> : <PostedCars />}
      </div>
    </div>
  );
};

export default Page;
