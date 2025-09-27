import React from 'react';

const Count = () => {
    return (
        <div>
            <div className="">
                <div className="grid grid-cols-2 gap-6 my-[50px] w-[1140px] mx-auto">
                    <div className="bg-purple-500 h-[200px] rounded-2xl flex flex-col justify-center items-center ">
                        <h3 className="text-white">In-Progress</h3>
                        <span className="font-bold text-3xl text-white">0</span>
                    </div>
                    <div className="bg-green-500 h-[200px] rounded-2xl flex flex-col justify-center items-center">
                        <h3 className="text-white">Resolve</h3>
                        <span className="font-bold text-3xl text-white">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;