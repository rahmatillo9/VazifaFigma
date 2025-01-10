'use client';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="relative">

      <div className="w-full h-[108px] bg-[#f5f5f5] flex items-center justify-between gap-6 px-6">
        <div>
          <p className="text-red-500">Categories</p>
          <h1 className="text-[#000000] font-semibold pt-3">Browse By Category</h1>
        </div>
        

        <div className="flex gap-4">
          <button className="p-2 bg-gray-200 rounded-full">
            <ArrowBackIcon className="text-[#000000]" />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <ArrowForwardIcon className="text-[#000000]" />
          </button>
        </div>
      </div>


      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[145px] border-black border-2 hover:bg-red-500">
          <Image src="/Category-CellPhone.svg" width={50} height={50} alt="image" />
          <p className="text-black">Phones</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[145px] border-black border-2 hover:bg-red-500">
          <Image src="/Category-Computer.svg" width={50} height={50} alt="image" />
          <p className="text-black">Computers</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[145px] border-black border-2 hover:bg-red-500">
          <Image src="/Category-SmartWatch.svg" width={50} height={50} alt="image" />
          <p className="text-black">SmartWatch</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[145px] border-black border-2 hover:bg-red-500">
          <Image src="/Category-Camera.svg" width={50} height={50} alt="image" />
          <p className="text-black">Camera</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[145px] border-black border-2 hover:bg-red-500">
          <Image src="/Category-Headphone.svg" width={50} height={50} alt="image" />
          <p className="text-black">HeadPhones</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[145px] border-black border-2 hover:bg-red-500">
          <Image src="/Category-Gamepad.svg" width={50} height={50} alt="image" />
          <p className="text-black">Gaming</p>
        </div>
      </section>
    </div>
  );
};

export default Category;
