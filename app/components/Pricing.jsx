import React from "react";
import Link from "next/link";
import Image from "next/image";
import pricing_img from "../img/price-icon_1.png";
import { ImCheckmark } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import {MdPriceChange} from "react-icons/md"

function Pricing() {
  return (
    <section id="pricing">
        <div className="bg-[#323846] w-full ">
      <div className="container mx-auto px-6 lg:px-[2.5rem] xl:px-[rem] py-10">
        <div className="pb-10 flex items-center justify-center gap-1">
         
          <h2 className="text-[2.4rem] text-center font-extrabold text-white">
            Pricing <span className="text-[#01eefe]"> Plan</span>
          </h2>
          
        </div>
        {/* pricing grid start */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
          {/* grid section--1 start */}

          <div className=" p-8 w-full bg-[#20242D] text-[#eaf1f1] hover:text-[#01eefe] ">
            <div>
              <MdPriceChange className="text-[4rem] text-[#01eefe]"/>
            </div>

            <h3 className="text-[2rem] font-bold mt-4">
             Bacic <span className="font-semibold text-[1.2rem]">/ Per Month</span>
            </h3>
            <p className="text-white text-[14px] py-5  border-dashed border-b-2">
              Setup and Fix GMC + Products Feed + 50 Products Activations + Run
              Shopping Ads
            </p>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Setup merchant account</p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                 Ad accounts connection
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">50 product details</p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Include keyword research
                </p>
              </li>
              <li className="flex gap-4 items-center border-dashed border-b-2 pb-5">
                <ImCheckmark />
                <p className="text-white text-[14px] ">
                  Shopping campaign setup
                </p>
              </li>
            </ul>
            <div className="mt-8 flex items-center  flex-col-reverse gap-5 md:flex-row md:justify-between">
              <div className="">
                <Link
                  href={"#"}
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full flex overflow-hidden items-center gap-1 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  <p>Order Now</p>
                  <FaArrowRight className="text-[1rem]" />
                </Link>
              </div>
              <div className="font-semibold text-[1.5rem]">$20.00</div>
            </div>
          </div>

          {/* grid section--2 start */}

          <div className=" p-8 w-full bg-[#20242D] text-[#eaf1f1] hover:text-[#01eefe] transition duration-200">
            <div>
              {/* <Image src={pricing_img} alt="pricing-logo" /> */}
              <MdPriceChange className="text-[4rem] text-[#01eefe]"/>
            </div>
            <h3 className="text-[2rem] font-bold mt-4">
             Standard <span className="font-semibold text-[1.2rem]">/ Per Month</span>
            </h3>
            <p className="text-white text-[14px] py-5 border-dashed border-b-2">
              I will setup and manage your google ads adwords ppc campaigns
            </p>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Account setup</p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">3 suggestions</p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  3 audience targeting suggestions
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">4 ad extensions</p>
              </li>
              <li className="flex gap-4 items-center border-dashed border-b-2 pb-5">
                <ImCheckmark />
                <p className="text-white text-[14px] ">Ongoing management</p>
              </li>
            </ul>
            <div className="mt-8 flex  items-center flex-col-reverse gap-5 md:flex-row md:justify-between">
              <div className="">
                <Link
                  href={"#"}
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full flex overflow-hidden items-center gap-1 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  <p>Order Now</p>
                  <FaArrowRight className="text-[1rem]" />
                </Link>
              </div>
              <div className="font-semibold text-[1.5rem]">$40.00</div>
            </div>
          </div>

          {/* grid section--3 start */}

          <div className=" p-8 w-full bg-[#20242D] text-[#eaf1f1] hover:text-[#01eefe] xl:w-full xl:col-span-1 md:w-[50%]  md:col-span-2 mx-auto 
             xl:mx-0 transition duration-200"
          >
            <div>
              {/* <Image src={pricing_img} alt="pricing-logo" /> */}
              <MdPriceChange className="text-[4rem] text-[#01eefe]"/>
            </div>
            <h3 className="text-[2rem] font-bold mt-4">
             Premium <span className="font-semibold text-[1.2rem]">/ Per Month</span>
            </h3>
            <p className="text-white text-[14px] py-5 border-dashed border-b-2">
              I will setup facebook ads campaign and instagram marketing Expert
              2 yeaar
            </p>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Target audience research
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Include keyword research
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Automated feed ads (DPA)
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Ad content creation</p>
              </li>
              <li className="flex gap-4 items-center border-dashed border-b-2 pb-5">
                <ImCheckmark />
                <p className="text-white text-[14px] ">Ads analytical report</p>
              </li>
            </ul>
            <div className="mt-8 flex  items-center  flex-col-reverse gap-5 md:flex-row md:justify-between ">
              <div className="">
                <Link
                  href={"#"}
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full flex overflow-hidden items-center gap-1 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  <p>Order Now</p>
                  <FaArrowRight className="text-[1rem]" />
                </Link>
              </div>
              <div className="font-semibold text-[1.5rem]">$80.00</div>
            </div>
          </div>
        </div>

        {/* grid section 2nd start */}

        <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-2 lg:gap-10">
          {/* grid section--1 start */}

          <div className="  p-8 w-full bg-[#20242D] text-[#eaf1f1] hover:text-[#01eefe] transition duration-200">
            <div>
              {/* <Image src={pricing_img} alt="pricing-logo" /> */}
              <MdPriceChange className="text-[4rem] text-[#01eefe]"/>
            </div>
            <h3 className="text-[2rem] font-bold mt-4">
             Business <span className="font-semibold text-[1.2rem]">/ Per Month</span>
            </h3>
            <p className="text-white text-[14px] py-5 border-dashed border-b-2">
              I will setup and optimize your linkedin ads for business
            </p>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Target audience research
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Include keyword research
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Automated feed ads (DPA)
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Ad content creation</p>
              </li>
              <li className="flex gap-4 items-center border-dashed border-b-2 pb-5">
                <ImCheckmark />
                <p className="text-white text-[14px] ">Ads analytical report</p>
              </li>
            </ul>
            <div className="mt-8 flex  items-center  flex-col-reverse gap-5 md:flex-row md:justify-between">
              <div className="">
                <Link
                  href={"#"}
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full flex overflow-hidden items-center gap-1 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  <p>Order Now</p>
                  <FaArrowRight className="text-[1rem]" />
                </Link>
              </div>
              <div className="font-semibold text-[1.5rem]">$120.00</div>
            </div>
          </div>

          {/* grid section--2 start */}

          <div className=" p-8 w-full bg-[#20242D] text-[#eaf1f1] hover:text-[#01eefe] transition duration-200">
            <div>
              {/* <Image src={pricing_img} alt="pricing-logo" /> */}
              <MdPriceChange className="text-[4rem] text-[#01eefe]"/>
            </div>

            <h3 className="text-[2rem] font-bold mt-4">
             Developer <span className="font-semibold text-[1.2rem]">/ Per Month</span>
            </h3>
            <p className="text-white text-[14px] py-5 border-dashed border-b-2">
              I will setup profitable shopify store design
            </p>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">
                  Unlimited Revisions
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Functional website</p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Responsive design</p>
              </li>
              <li className="flex gap-4 items-center">
                <ImCheckmark />
                <p className="text-white text-[14px]">Content upload</p>
              </li>
              <li className="flex gap-4 items-center border-dashed border-b-2 pb-5">
                <ImCheckmark />
                <p className="text-white text-[14px] ">
                  Setup payment gateway
                </p>
              </li>
            </ul>
            <div className="mt-8 flex  items-center  flex-col-reverse gap-5 md:flex-row md:justify-between">
              <div className="">
                <Link
                  href={"#"}
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full flex overflow-hidden items-center gap-1 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  <p>Order Now</p>
                  <FaArrowRight className="text-[1rem]" />
                </Link>
              </div>
              <div className="font-semibold text-[1.5rem]">$200.00</div>
            </div>
          </div>
        </div>
        {/* pricing grid end */}
      </div>
        </div>
    </section>
  );
}

export default Pricing;
