import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const RowContainer = ({ flag }) => {
  return (
    <div className={`w-full  my-12 flex items-center gap-3 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
      <div class="flex rounded-md bg-blue-100 border-solid border-1 w-[14rem] h-auto flex-col justify-center items-start">
        <div className="w-full h-[9rem] justify-center items-center flex">
          <img
            class="w-auto h-[80%]"
            src="https://firebasestorage.googleapis.com/v0/b/warung-tiyo.appspot.com/o/Images%2F1690447227118-SeekPng.com_gas-png_2649753.png?alt=media&token=a7541026-b2a9-403d-943b-9a10ecb48f3c"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="p-4 flex flex-col py-4 w-[14rem] ">
          <p className="text-xs text-gray-400">Vegetable</p>
          <p class="text-black text-lg font-semibold mb-4">Gas Lpg 3kg</p>
          <div className="flex justify-between items-center">
            <p className="text-green-600 text-base font-semibold">Rp. 22.000</p>
            <button className="bg-green-200 rounded-sm px-2 py-1 flex gap-2 items-center justify-center text-xs text-green-600">
              <LuShoppingCart />
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="flex rounded-md bg-blue-100 border-solid border-1 w-[14rem] h-auto flex-col justify-center items-start">
        <div className="w-full h-[9rem] justify-center items-center flex">
          <img
            class="w-auto h-[80%]"
            src="https://firebasestorage.googleapis.com/v0/b/warung-tiyo.appspot.com/o/Images%2F1690447227118-SeekPng.com_gas-png_2649753.png?alt=media&token=a7541026-b2a9-403d-943b-9a10ecb48f3c"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="p-4 flex flex-col py-4 w-[14rem] ">
          <p className="text-xs text-gray-400">Vegetable</p>
          <p class="text-black text-lg font-semibold mb-4">Gas Lpg 3kg</p>
          <div className="flex justify-between items-center">
            <p className="text-green-600 text-base font-semibold">Rp. 22.000</p>
            <button className="bg-green-200 rounded-sm px-2 py-1 flex gap-2 items-center justify-center text-xs text-green-600">
              <LuShoppingCart />
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="flex rounded-md bg-blue-100 border-solid border-1 w-[14rem] h-auto flex-col justify-center items-start">
        <div className="w-full h-[9rem] justify-center items-center flex">
          <img
            class="w-auto h-[80%]"
            src="https://firebasestorage.googleapis.com/v0/b/warung-tiyo.appspot.com/o/Images%2F1690447227118-SeekPng.com_gas-png_2649753.png?alt=media&token=a7541026-b2a9-403d-943b-9a10ecb48f3c"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="p-4 flex flex-col py-4 w-[14rem] ">
          <p className="text-xs text-gray-400">Vegetable</p>
          <p class="text-black text-lg font-semibold mb-4">Gas Lpg 3kg</p>
          <div className="flex justify-between items-center">
            <p className="text-green-600 text-base font-semibold">Rp. 22.000</p>
            <button className="bg-green-200 rounded-sm px-2 py-1 flex gap-2 items-center justify-center text-xs text-green-600">
              <LuShoppingCart />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
