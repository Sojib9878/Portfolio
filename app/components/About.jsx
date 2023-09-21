import React from "react";
import Image from "next/image";
import img_2 from "../img/hero_img.png";

function About() {
  return (
    <section id="about">
      <div className="w-full bg-[#323846] py-20">
        <div className="container px-4 xl:px-[5rem]">
          <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-10 md:items-center">
            <div className=" py-5 text-center text-white leading-tight md:text-start ">
              <h2 className="text-[1.9rem] font-bold">About <span className="text-[#01eefe]">Me</span>
              </h2>
              <h3 className="text-[1.3rem] font-bold">Fullstack Developer!</h3>
              <p className="text-[0.8rem] py-4">Loeh eliroiu asnd eoiuad sdiasdoiu iou a eroidu boiys seoi boyb apdjh eoeiudoyasduha.eoriiuyy sd eryhsouidy fasd eir beoiyuf ba ierfoey asoeiyey aoiyidyhoey.Loeh eliroiu asnd eoiuad sdiasdoiu iou a eroidu boiys seoi boyb apdjh eoeiudoyasduha.eoriiuyy sd eryhsouidy fasd eir beoiyuf ba ierfoey asoeiyey aoiyidyhoey.Loeh eliroiu asnd eoiuad sdiasdoiu iou a eroidu boiys seoi boyb apdjh eoeiudoyasduha.eoriiuyy sd eryhsouidy fasd eir beoiyuf ba ierfoey asoeiyey aoiyidyhoey.</p>
              <div className=" flex justify-center md:justify-start xl:mt-8">
                <button
                  type="button"
                  className="text-black font-semibold bg-[#01eefe] py-2 px-6 shadow-md shadow-[#01eefe] rounded-full"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <Image
                src={img_2}
                alt="about_image"
                height={400}
                width={400}
                className="md:w-[120rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
