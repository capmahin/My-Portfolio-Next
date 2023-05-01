import React from "react";
import LanguageFixer from "../../public/assets/portfolio/Language Fixer.png";
import Ecommerce from "../../public/assets/portfolio/E-commerce.png";
import BikeManufacture from "../../public/assets/portfolio/Bike-Manufacture.png";
import Tempareture from "../../public/assets/portfolio/Tempareture.png";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portfolios = [
    {
        id: 1,
        title: "Ecommerce app",
        imageSrc: Ecommerce,
        url: "E-commercer",
      },
      {
        id: 2,
        title: "Language Fixer",
        imageSrc: LanguageFixer,
        url: "Language-Fixer",
      },
      {
        id: 3,
        title: "Bike Manufacture Center",
        imageSrc: BikeManufacture,
        url: "Bike-Manufacture",
      },
      {
        id: 4,
        title: "Tempareture",
        imageSrc: Tempareture,
        url: "Tempareture",
      },
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider  text-black font-bold font-signature pb-16">
          Portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute;