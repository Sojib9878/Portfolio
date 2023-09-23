import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img from "../img/img_1.jpg";
import hero_img from "../img/hero_img.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function Hero() {
  return (
    <section id="hero">
      <div className="w-full bg-[#20242D] py-20">
        <div className=" container mx-auto px-4 md:px-[4rem] xl:px-[5rem]">
          <div className="mt-5 flex flex-col-reverse md:flex-row md:items-center md:gap-4 xl:mt-20 xl:gap-40">
            <div className="text-center text-white md:text-start">
              <h3 className="text-[1.2rem] xl:text-[1.6rem] font-sans font-bold">
                Hello,It's Me
              </h3>
              <h1 className="text-[2rem] xl:text-[3rem] font-bold tracking-[1px] font-sans">
                Merajul Islam
                <span className="text-[1.8rem] xl:text-[2.1rem] text-[#01eefe] ml-1">
                  {" "}
                  Sojib
                </span>
              </h1>
              <h3 className="text-[1.3rem] xl:text-[1.5rem] font-semibold font-sans">
                And I'm a{" "}
                <span className="text-[#01eefe]">Fullstack Developer</span>
              </h3>
              <p className="text-[0.8rem] xl:text-[1rem] font-sans py-4">
                Ami ar amar du chok, khokono jole vijabo na. A betha amari thak
                chaina karo santona. Pritibi valo base na, valo baste o jane na.
              </p>
              <div className="py-2 flex items-center justify-center gap-4 md:justify-start xl:pt-6">
                <Link href={"#"}>
                  <div className="p-2 border-2 rounded-full border-[#01eefe] shadow-sm shadow-[#01eefe] drop-shadow-3xl">
                    <ImFacebook className="text-[#01eefe] " />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="p-2 border-2 rounded-full border-[#01eefe] shadow-sm shadow-[#01eefe] drop-shadow-3xl">
                    <BsTwitter className="text-[#01eefe] " />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="p-2 border-2 rounded-full border-[#01eefe] shadow-sm shadow-[#01eefe] drop-shadow-3xl">
                    <BsInstagram className="text-[#01eefe] " />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="p-2 border-2 rounded-full border-[#01eefe] shadow-sm shadow-[#01eefe] drop-shadow-3xl">
                    <BiLogoLinkedin className="text-[#01eefe] " />
                  </div>
                </Link>
              </div>
              <div className="mt-4 flex justify-center md:justify-start xl:mt-8">
                <button
                  type="button"
                  className="text-black font-semibold bg-[#01eefe]  py-2 px-6 shadow-md shadow-[#01eefe] rounded-full hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  Download CV
                </button>
              </div>
            </div>
            <div className="flex justify-center py-10">
              <div className="">
                <Image
                  src={hero_img}
                  alt="pic"
                  height={800}
                  width={800}
                  className="w-full drop-shadow-3xl xl:-mt-10 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
