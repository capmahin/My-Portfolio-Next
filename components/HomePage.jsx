import React from "react";
import heroImage from "../public/assets/heroImage.jpeg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto  rounded-xl">
          <Image className=" rounded-xl" src={heroImage} alt="me" />
        </div>

        <h1 className=" font-bold text-gray-700 text-7xl font-signature">
           Full Stack developer
        </h1>

        <p className="text-gray-600 text-xl max-w-sm mx-auto p-2">
          I have 2 years of experience building and designing software.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS and Node, BootStrap.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;