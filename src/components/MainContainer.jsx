import React from "react";
import blueberryHero from "../assets/blueberry-g703eeb50b_1280.png";

const MainContainer = () => {
  return (
    <div className=" w-full p-4 bg-blue-200 h-[90vh] flex flex-col justify-between ">
      <div className="container-p grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:items-start w-full items-center md:text-start text-center mt-12 md:mt-10 ">
          <h1 class="md:text-5xl text-3xl font-bold text-black">
            Indulge in Nature's <br /> Sweet Jewels
          </h1>
          <p class="text-base text-black font-light my-4">Up 30% off to your first order</p>
          <div className="flex">
            <input type="text" placeholder="Enter your email " className="py-2 px-4 md:px-10" />
            <button className="bg-green-600 px-2 md:px-4 py-2 font-bold text-white text-base">Subscribe</button>
          </div>
        </div>
        <div className="mt-9">
          <img src={blueberryHero} alt="blueberry" className="w-full h-auto drop-shadow-md " />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
