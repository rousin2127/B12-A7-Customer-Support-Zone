import React from "react";
import bgImg from "./../assets/vector1.png"

const Count = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-2  gap-6 my-[50px] sm:w-[1140px] sm:mx-auto mx-5">
      <div className="bg-linear-to-tl from-[#9F62F2] to-[#632EE3] sm:h-[200px] rounded-2xl flex justify-between items-center ">
        <div>
          <img src={bgImg} alt="" />
        </div>
        <div className=" w-[170px] sm:w-[100px] flex flex-col justify-center items-center">
        <h3 className="text-white text-sm ">In-Progress</h3>
        <span className="font-bold text-3xl text-white">{inProgressCount}</span>
        </div>
        <div>
          <img className="transform scale-x-[-1]" src={bgImg} alt="" />
        </div>
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] sm:h-[200px] rounded-2xl flex justify-center items-center">
                <div>
          <img src={bgImg} alt="" />
        </div>
        <div className=" w-[170px] sm:w-[100px] flex flex-col justify-center items-center">
        <h3 className="text-white text-sm">Resolve</h3>
        <span className="font-bold text-3xl text-white">{resolvedCount}</span>
        </div>
                <div>
          <img className="transform scale-x-[-1]" src={bgImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Count;
