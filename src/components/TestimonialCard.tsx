// import React from "react";
import { quotes, people01, people02, people03 } from "../assets";
const TestimonialCard = () => {
  return (
    <div className="w-full px-[10%] flex flex-col mt-4 mb-10 relative">
      <div className="flex flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-semibold leading-[170%] w-[470px] h-[164px] text-[#FFFFFF]">
            What people are saying about us
          </h1>
        </div>
        <div>
          <p className="text-lg font-normal leading-[180%] w-[450px] h-[64px]  text-[#FFFFFFB2]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="absolute w-96 h-[400px] bg-red-400 blur-[200px] -right-96 bg-gradient-to-r to-[#26D0CE] from-[#1A2980] "/>
      <div className="flex">
        <div className="grid grid-cols-3  ">
          <div className="flex flex-col justify-center  py-4  h-[395px] w-[370px]  items-start px-10 space-x-4 rounded-4xl gap-4">
            <div>
              <img src={quotes} alt="" className="w-[43px] h-[28px]" />
            </div>
            <div className="text-lg font-normal leading-[180%] w-[290px] h-[128px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={people01} alt="" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-xl leading-[32px] text-[##FFFFFF] font-normal ">
                  Herman Jensen
                </h1>
                <p className="text-base font-normal opacity-50 text-[#FFFFFF]">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3  ">
          <div className="flex flex-col justify-center  py-4  h-[395px] w-[370px]  items-start px-10 space-x-4 rounded-4xl gap-4">
            <div>
              <img src={quotes} alt="" className="w-[43px] h-[28px]" />
            </div>
            <div className="text-lg font-normal leading-[180%] w-[290px] h-[128px]">
              Money makes your life easier. If you're lucky to have it, you're lucky.
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={people02} alt="" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-xl leading-[32px] text-[##FFFFFF] font-normal ">
                  Steve Mark
                </h1>
                <p className="text-base font-normal opacity-50 text-[#FFFFFF]">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3  ">
          <div className="flex flex-col justify-center  py-4  h-[395px] w-[370px]  items-start px-10 space-x-4 rounded-4xl gap-4">
            <div>
              <img src={quotes} alt="" className="w-[43px] h-[28px]" />
            </div>
            <div className="text-lg font-normal leading-[180%] w-[290px] h-[128px]">
              It is usually people in the money business, finance, and international trade that are really rich.
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={people03} alt="" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-xl leading-[32px] text-[##FFFFFF] font-normal ">
                  Kenn Gallagher
                </h1>
                <p className="text-base font-normal opacity-50 text-[#FFFFFF]">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
