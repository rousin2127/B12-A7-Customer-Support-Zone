import React from "react";

const Count = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-2 gap-6 my-[50px] w-[1140px] mx-auto">
      <div className="bg-linear-to-tl from-[#9F62F2] to-[#632EE3] h-[200px] rounded-2xl flex flex-col justify-center items-center">
        <h3 className="text-white">In-Progress</h3>
        <span className="font-bold text-3xl text-white">{inProgressCount}</span>
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] h-[200px] rounded-2xl flex flex-col justify-center items-center">
        <h3 className="text-white">Resolve</h3>
        <span className="font-bold text-3xl text-white">{resolvedCount}</span>
      </div>
    </div>
  );
};

export default Count;
