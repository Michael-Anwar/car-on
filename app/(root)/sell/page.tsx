"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Page = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  return (
    <div className="bg-light m-4 rounded-lg py-5">
      <div className="Container flex flex-col">
        <h1 className="font-caveatRegular text-brandColor">Sell your car</h1>
        <div className="flex flex-col gap-8">
          <div className="info-section">
            <div className="info-heading">
              <h2>
                1/{" "}
                <span className="font-caveatRegular text-brandColor">
                  {" "}
                  Basic info{" "}
                </span>
              </h2>
            </div>
            <form className="inputs-container">
              <div className="input-container">
                <label htmlFor="">Car brand</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">Year</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">Car model</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">Price</label>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className="info-section">
            <div className="info-heading">
              <h2>
                2/{" "}
                <span className="font-caveatRegular text-brandColor">
                  {" "}
                  Location{" "}
                </span>
              </h2>
            </div>
            <form className="inputs-container">
              <div className="input-container">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
            </form>
            <div className="hr flex items-center gap-2 px-4 py-2">
              <hr className="border-brandColor w-full" />
              <span className="font-caveatRegular text-2xl text-brandColor">
                Or
              </span>
              <hr className="border-brandColor w-full" />
            </div>
            <button>user your current location</button>
          </div>
          <div className="info-section">
            <div className="info-heading">
              <h2>
                3/{" "}
                <span className="font-caveatRegular text-brandColor">
                  {" "}
                  Gallery{" "}
                </span>
              </h2>
            </div>
            <form className="">
              <label
                className="
               flex flex-col justify-center items-center
               w-full p-3
               border-dashed border-[3px] border-brandColor rounded-lg
               "
              >
                <input
                  type="file"
                  name=""
                  id=""
                  hidden
                  className="w-0"
                  multiple
                  onChange={handleFiles}
                  accept="image/*"
                />
                <IoCloudUploadOutline size={70} color=" rgb(248, 69, 37)" />
              </label>

              {uploadedImages.length > 0 && (
                <div className="flex flex-col gap-4 py-8">
                  {uploadedImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-full flex items-center gap-4 justify-between"
                    >
                      <div className="relative w-32 h-24">
                        <Image
                          src={img}
                          alt={`Uploaded ${index}`}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setUploadedImages((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
                        className="text-brandColor hover:text-red-600 transition p-4 bg-white rounded-md"
                        aria-label="Delete image"
                      >
                        <MdDelete size={24} />
                      </button>
                    </div>

                  ))}
                </div>
              )}
            </form>
          </div>
        </div>

        <button className="mx-auto my-8 bg-brandColor p-3 rounded-lg">
          <Link href="/listedconfirm"> list car</Link>
        </button>
      </div>
    </div>
  );
};

export default Page;
