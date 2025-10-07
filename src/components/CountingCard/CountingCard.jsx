import React from 'react';
import vectorImg from "../../assets/vector1.png";

const card = () => {
    return (
        <div className="bg-[#F5F5F5]">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center md:gap-6 gap-5 md:py-20 py-12 px-4 md:max-w-[1280px] mx-auto w-full font-inter">
          <div className="relative flex flex-col items-center justify-center w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-20 shadow-lg overflow-hidden">
            <img src={vectorImg} alt="Left Background Pattern" className="absolute top-0 left-0 h-full object-contain -translate-x-8 select-none pointer-events-none"/>

            <img src={vectorImg} alt="Right Background Pattern" className="absolute top-0 right-0 h-full object-contain translate-x-8 scale-x-[-1] select-none pointer-events-none"/>

            <div className="relative z-10 text-center">
              <h2 className="md:text-2xl text-xl font-semibold md:mb-4 mb-2">In Progress</h2>
              <p className="md:text-5xl text-4xl font-bold">0</p>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center justify-center w-full bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-xl p-20 shadow-lg overflow-hidden">
            <img src={vectorImg} alt="Left Background Pattern" className="absolute top-0 left-0 h-full object-contain -translate-x-8 select-none pointer-events-none"/>

            <img src={vectorImg} alt="Right Background Pattern" className="absolute top-0 right-0 h-full object-contain translate-x-8 scale-x-[-1] select-none pointer-events-none"/>

            <div className="relative z-10 text-center">
              <h2 className="md:text-2xl text-xl font-semibold md:mb-4 mb-2">Resolved</h2>
              <p className="md:text-5xl text-4xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default card;