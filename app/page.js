"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { GoMoveToTop } from "react-icons/go";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio/>
      <Pricing />
      <Contact />
      <Link
       to="hero" 
       spy={true} 
       smooth={true} 
       offset={-100} 
       duration={1000}>
        <div className="top_icon hover:shadow-md bottom-10  right-10 fixed z-50 ">
          <div className="  cursor-pointer animate-bounce hover:animate-none
           bg-[#01eefe]  bg-primary p-2 md:p-3 rounded-full shadow-sm shadow-[#01eefe]">
            <GoMoveToTop className="h-6 w-6 text-black" />
          </div>
        </div>
      </Link>
    </>
  );
}
