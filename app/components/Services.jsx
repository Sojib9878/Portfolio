import React from "react";
import { Link } from "react-scroll";
import { BsCodeSlash } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { TiMail } from "react-icons/ti";

function Services() {
  return (
    <section id="services">
      <div className="w-full bg-[#20242D]">
        <div className="container mx-auto px-4 xl:px-[4rem]">
          <h2 className="text-[2rem] py-6 font-semibold text-white text-center">
            Our <span className="text-[#01eefe]"> services</span>
          </h2>
          <div className="pb-20 grid grid-cols-1 space-y-5 md:grid-cols-2 md:gap-8 md:space-y-0 xl:grid-cols-3">
            <div className="p-5 bg-[#323846] py-10 rounded-[15px]">
              <div className="flex justify-center py-2">
                <BsCodeSlash className="text-[3rem] text-[#01eefe] drop-shadow-4xl" />
              </div>
              <h2 className="py-2 text-center text-white font-bold text-[1.6rem]">
                Web Development
              </h2>
              <p className="text-center text-white ">
                Ami ar amar du chok, khokono jole vijabo na. A betha amari thak
                chaina karo santona. Pritibi valo base na, valo baste o jane na.
              </p>
              <div className="mt-6 flex justify-center ">
                <button
                  type="button"
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="p-5 bg-[#323846] py-10 rounded-[15px]">
              <div className="flex justify-center py-2">
                <FaPaintBrush className="text-[2.8rem] text-[#01eefe] drop-shadow-4xl" />
              </div>
              <h2 className="py-2 text-center text-white font-bold text-[1.6rem]">
                Grapich Design
              </h2>
              <p className="text-center text-white ">
                Ami ar amar du chok, khokono jole vijabo na. A betha amari thak
                chaina karo santona. Pritibi valo base na, valo baste o jane na.
              </p>
              <div className="mt-6 flex justify-center ">
                <button
                  type="button"
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="md:col-span-2 xl:col-span-1 p-5 bg-[#323846] py-10 rounded-[15px]">
              <div className="flex justify-center py-2">
                <SiGoogleanalytics className="text-[2.7rem] text-[#01eefe] drop-shadow-4xl" />
              </div>
              <h2 className="py-2 text-center text-white font-bold text-[1.6rem]">
                Digital Marketing
              </h2>
              <p className="text-center text-white ">
                Ami ar amar du chok, khokono jole vijabo na. A betha amari thak
                chaina karo santona. Pritibi valo base na, valo baste o jane na.
              </p>
              <div className="mt-6 flex justify-center ">
                <button
                  type="button"
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* ====================================== */}
      {/* hire me section start */}

      <section className=" w-full pb-10">
      <div className="hire_bg_img w-full">
        <div className=" py-[5rem]">
          <div className="text-center font-semibold text-white text-[1.3rem] md:text-[1.9rem]">
            Any Project On Your Mind?
          </div>
          <div className="flex gap-x-4 md:gap-5 justify-center flex-wrap">
            <div>
              <button
                className=" flex 
               transition-all duration-300 text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full space-x-2 items-center mt-10 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white "
              >
                <TiMail className="text-[1.4rem]" />
                <p>Hire Me</p>
              </button>
            </div>
            <div>
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset based on your layout
                duration={500}
                className=" flex-row-reverse gap-2  flex cursor-pointer 
                 text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full space-x-2 items-center  mt-10 hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300"
              >
                <FaArrowRight className="h-5 w-5" />
                <p>Social Media Link</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* hire me section end */}
      {/* ====================================== */}
      </div>

    </section>
  );
}

export default Services;
