"use client";
import React from "react";
import bannerImage from "../../assets/login.svg";
import Image from "next/image";
const BannerSection = () => {
  return (
    <div className="bg-gray-100 text-black p-4">
      <div className="container mx-auto flex items-center justify-around py-5">
        <div className="mr-4">
          <Image
            src={bannerImage} // Replace with the actual path to your image
            alt="Banner"
            className=" w-80 rounded-full "
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to Task Manager
          </h1>
          <p className="text-xl mb-8">
            Organize your tasks efficiently with our task manager app.
          </p>
          <button
            className="bg-cyan-600 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
            onClick={() => {
              // Add your action button click event handler logic here
              console.log("Action button clicked!");
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
