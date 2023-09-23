import React from "react";
import Link from "next/link";
import { ImCheckmark } from "react-icons/im";
import { FaRegPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="w-full bg-[#323846] py-10 pb-40">
        <div className="container mx-auto px-6 lg:px-[2.5rem] ">
          <div className=" pb-10 flex items-center justify-center gap-1">
            <h2 className="text-[2.4rem] text-center font-extrabold text-white">
              Get In <span className="text-[#01eefe]">Touch</span>
            </h2>
          </div>
          {/* carousel button section_start */}

          <div className="flex flex-col-reverse lg:flex-row-reverse shadow-lg">
            <div className=" w-full bg-[#20242D] py-10">
              {/* contact input-from start  */}
              <div className="space-y-5 p-5 xl:col-span-2">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-5 p-2 h-[3.5rem] w-full bg-[#323846] rounded-[8px] text-white  focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-5 p-2 h-[3.5rem] w-full bg-[#323846] rounded-[8px] text-white  focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="px-5 p-2 h-[3.5rem] w-full bg-[#323846] rounded-[8px] text-white  focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="text"
                    placeholder="Message"
                    rows="6"
                    className=" p-3 px-5 w-full bg-[#323846] rounded-[8px] text-white focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full hover:shadow-[#0fbcc9]  hover:bg-[#0fbcc9] hover:text-white transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <p>Send Message</p>
                      <FaRegPaperPlane className=" text-black animate-pulse" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* contact section location form  */}
            <div className="bg-[#20242D] w-full p-7 py-10 shadow-lg ">
              <div>
                <h2 className="text-[2.1rem] font-bold text-[#01eefe] md:text-[3rem]">
                  100% Satisfaction Guaranteed
                </h2>
                <p className="text-[0.9rem] font-semibold text-white leading-[27px]">
                  The portfolio is an essential part of a website where users
                  can find contact information or a contact form to connect with
                  the site owner for inquiries or collaborations.
                </p>
                <h3 className="text-[1.5rem] font-bold text-[#01eefe] md:text-[2rem]">
                  Waht will be the next step?
                </h3>
                <ul className="mt-5 space-y-2">
                  <li className="flex gap-4 items-center">
                    <ImCheckmark className="text-[#01eefe]" />
                    <p className="text-white font-semibold text-[14px]">
                      Setup merchant account
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <ImCheckmark className="text-[#01eefe]" />
                    <p className="text-white font-semibold text-[14px]">
                      Ad accounts connection
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <ImCheckmark className="text-[#01eefe]" />
                    <p className="text-white font-semibold text-[14px]">
                      50 product details
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* contact section end  */}
        </div>
      </div>
      {/* Footer section start  */}
      {/* ============================================ */}
      <div className="w-full bg-[#20242D] py-6 ">
        <div className="container mx-auto px-6 lg:px-[2.5rem] ">
          <h4 className="text-center text-white">
            © Copyright 2023 | Created by{" "}
            <span>
              <Link
                href={"#"}
                className="text-[#01eefe] font-semibold hover:underline hover:underline-offset-2"
              >
                Shanto Sarkar 
              </Link>
            </span>
             . All rights are reserved.
          </h4>
        </div>
      </div>
      {/* ============================================ */}
    </section>
  );
}

export default Contact;
