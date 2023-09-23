import React from "react";

function Skills() {
  return (
    <section id="skills">
      <div className="w-full bg-[#323846] pb-10">
        <div className="container mx-auto px-4 xl:px-[4rem]">

              {/* skills section text content start */}
          <div className="text-center">
            <h3 className="text-[#01eefe] font-bold text-[1.5rem]">
              My Skills
            </h3>
            <p className="text-white font-semibold text-[2rem] leading-tight py-4">
              I Work Hard to Improve My Skills Reguarly
            </p>
          </div>
          {/* skills section text content end */}

          {/* skills progress bar start */}

          <div className="py-10 grid grid-cols-1 gap-6 xl:grid-cols-2 xl:space-x-10 ">
            <div className="space-y-6">
            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">HTML & Css</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[12%] ">
                  95%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[95%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>

            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">Javascript</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[32%] ">
                  75%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[75%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>

            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">React</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[22%] ">
                  85%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[85%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>

            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">NextJs</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[27%] ">
                  80%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[80%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>             
            </div>

            <div className="space-y-6">
            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">Tailwind</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[17%] ">
                  90%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[90%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>

            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">Python</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[37%] ">
                  70%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[70%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>

            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">MySQL</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[22%] ">
                  85%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[85%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>

            <div>
              <div className=" py-2 flex justify-between">
                <p className="text-[20px] text-[#01eefe] font-semibold">Photoshop</p>
                <p className="text-[20px] text-[#01eefe] font-semibold w-[12%] ">
                  95%
                </p>
              </div>
              <div className="h-[8px] w-full bg-white rounded-[10px]">
                <div className=" h-full w-[95%] bg-[#01eefe] rounded-l-[10px]"></div>
              </div>
            </div>             
            </div>
          </div>
          {/* skills progress bar end */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
