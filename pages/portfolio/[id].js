import React from "react";
import LanguageFixer from "../../public/assets/portfolio/Language Fixer.png";
import Ecommerce from "../../public/assets/portfolio/E-commerce.png";
import BikeManufacture from "../../public/assets/portfolio/Bike-Manufacture.png";
import Tempareture from "../../public/assets/portfolio/Tempareture.png";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
    {
        id: 1,
        title: "Ecommerce app",
        imageSrc: Ecommerce,
        url: "E-commercer",
        href:"https://production-eccha-nir.vercel.app/",
      },
      {
        id: 2,
        title: "Language Fixer",
        imageSrc: LanguageFixer,
        url: "Language-Fixer",
        href:"https://language-fixer.vercel.app/",
      },
      {
        id: 3,
        title: "Bike Manufacture Center",
        imageSrc: BikeManufacture,
        url: "Bike-Manufacture",
        href:"https://bike-manufacture-center.vercel.app/",
      },
      {
        id: 4,
        title: "Tempareture",
        imageSrc: Tempareture,
        url: "Tempareture",
        href:"https://capmahin.github.io/City-Tempareture/",
      },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc , href } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-black font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-black tracking-wider font-signature">
          {title}
        </h1>

        <div className="relative w-80 md:w-full h-56  mx-auto shadow-md shadow-gray-600 overflow-hidden rounded-md my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" className="rounded-md duration-200 
                  hover:scale-110" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold font-signature">
          Description
        </h2>

        <p>
          Human thy god sainted is the distinctly shrieked grave bird shrieked,
          yore borrow nevermore but gaunt maiden have nothing darkness, answer
          evermore word there from raven, sorrowsorrow from on and nevermore of
          core. Whom the meant and while i of respiterespite his lamplight. Or
          being weary parting grave lent if. Rare came stillness whether the
          lord. Bust myself whom of soul silken. The that there this my, quaint
          that only lenore stern muttered and nothing or tapping. Here lie
          lining i still. A tis some and chamber flitting. Lamplight radiant
          from no yet what, upon that that one decorum leave.
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href={href}>
            <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/capmahin">
            <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;