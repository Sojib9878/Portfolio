import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiUserGroup } from "react-icons/hi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsFillStarFill, BsBuilding } from "react-icons/bs";
import portfolio_img_1 from "../img/11.jpg";
import portfolio_img_2 from "../img/22.jpg";
import portfolio_img_3 from "../img/33.jpg";
import portfolio_img_4 from "../img/44.jpg";
import portfolio_img_5 from "../img/55.jpg";
import portfolio_img_6 from "../img/66.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="bg-[#20242D] w-full ">
        <div className="container mx-auto px-6 lg:px-[2.5rem] xl:px-[rem] py-10">
          <div className="text-center">
            <p className="text-[22px] font-semibold tracking-[1px] text-[#01eefe]">
              Portfolio
            </p>
            <h2 className="text-[2.5rem] font-bold tracking-[1px] leading-tight text-white py-4">
              What I Do for My Clients
            </h2>
          </div>
          <div className="pt-5">
            <ul className="flex justify-center gap-5 xl:gap-10">
              <li>
                <Link href={"#"} className="text-[20px] text-[#01eefe]">
                  All
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[20px] text-white hover:text-[#01eefe] transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[20px] text-white hover:text-[#01eefe] transition duration-300"
                >
                  Popup
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[20px]  text-white hover:text-[#01eefe] transition duration-300"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
            <div className=" relative bg-cover overflow-hidden bg-no-repeat rounded-[20px]">
              <Image
                src={portfolio_img_1}
                alt="portfolio-img"
                height={400}
                width={400}
                className="w-full h-full bg-cover bg-no-repeat hover:scale-110 ease-in-out transition-all duration-300 rounded-[20px]"
              />
            </div>

            <div className=" relative bg-cover overflow-hidden bg-no-repeat rounded-[20px]">
              <Image
                src={portfolio_img_2}
                alt="portfolio-img"
                height={400}
                width={400}
                className="w-full h-full bg-cover bg-no-repeat hover:scale-110 ease-in-out transition-all duration-300 rounded-[20px]"
              />
            </div>

            <div className=" relative bg-cover overflow-hidden bg-no-repeat rounded-[20px]">
              <Image
                src={portfolio_img_3}
                alt="portfolio-img"
                height={400}
                width={400}
                className="w-full h-full bg-cover bg-no-repeat hover:scale-110 ease-in-out transition-all duration-300 rounded-[20px]"
              />
            </div>

            <div className=" relative bg-cover overflow-hidden bg-no-repeat rounded-[20px]">
              <Image
                src={portfolio_img_4}
                alt="portfolio-img"
                height={400}
                width={400}
                className="w-full h-full bg-cover bg-no-repeat hover:scale-110 ease-in-out transition-all duration-300 rounded-[20px]"
              />
            </div>

            <div className=" relative bg-cover overflow-hidden bg-no-repeat rounded-[20px]">
              <Image
                src={portfolio_img_5}
                alt="portfolio-img"
                height={400}
                width={400}
                className="w-full h-full bg-cover bg-no-repeat hover:scale-110 ease-in-out transition-all duration-300 rounded-[20px]"
              />
            </div>

            <div className=" relative bg-cover overflow-hidden bg-no-repeat rounded-[20px]">
              <Image
                src={portfolio_img_6}
                alt="portfolio-img"
                height={400}
                width={400}
                className="w-full h-full bg-cover bg-no-repeat hover:scale-110 ease-in-out transition-all duration-300 rounded-[20px]"
              />
            </div>
          </div>
        </div>
         {/* ================================== */}
         {/* service small carts_start  */}

      <section className="service_bg_img w-full mt-10">
        <div className=" container mx-auto px-2 xl:px-[8rem]">
          <div className=" py-20 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {/* cart 1 start  */}
            <div className="py-10 text-center w-full bg-[#323846] shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className="p-1 border-[1px] border-[#01eefe] rounded-full">
                    <HiUserGroup className="p-1 text-[2.5rem] text-[#01eefe] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#01eefe]">
                  25+
                </li>
                <li className="text-white font-roboto text-[1.2rem]">
                  Active Clients
                </li>
              </ul>
            </div>

            {/* cart 2 start  */}

            <div className="py-10 text-center w-full bg-[#323846] shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className=" p-1 border-[1px] border-[#01eefe] rounded-full">
                    <IoMdCheckmarkCircle className="p-1 text-[2.5rem] text-[#01eefe] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#01eefe]">
                  120+
                </li>
                <li className="text-white font-roboto text-[1.2rem]">
                  project Complete
                </li>
              </ul>
            </div>

            {/* cart 3 start  */}

            <div className="py-10 text-center w-full bg-[#323846] shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className="p-1 border-[1px] border-[#01eefe] rounded-full">
                    <BsFillStarFill className="p-1 text-[2.5rem] text-[#01eefe] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#01eefe]">
                  5+
                </li>
                <li className="text-white font-roboto text-[1.2rem]">
                  Client Ratting
                </li>
              </ul>
            </div>

            {/* cart 4 start  */}
            <div className="py-10 text-center w-full bg-[#323846] shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className="p-1 border-[1px] border-[#01eefe] rounded-full">
                    <BsBuilding className="p-1 text-[2.5rem] text-[#01eefe] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#01eefe]">
                  7+
                </li>
                <li className="text-white font-roboto text-[1.2rem]">
                  Total Experience
                </li>
              </ul>
            </div>
            {/* cart 4 end  */}
          </div>
        </div>
      </section>
      {/* service small carts_end  */}
        {/* ================================== */}
      </div>
    </section>
  );
}

export default Portfolio;
