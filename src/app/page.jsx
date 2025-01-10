import BestSelling from "@/components/Products/BestSelling";
import Category from "@/components/Products/Category.s";
import FlashSales from "@/components/Products/products.list";
import Explores from "@/components/Products/Explore";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Featured } from "@/components/Products/Featured";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Pages = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 px-4">
        <div className="w-full md:w-1/4 bg-gray-100 rounded-lg shadow-md p-4">
          <nav className="space-y-4">
            <a
              href="/womanF"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Woman's Fashion <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/MenF"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Men's Fashion <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/elcetronic"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Electronics <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/HM"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Home & Lifestyle <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/medicine"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Medicine <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/sports"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Sports & Outdoor <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/toys"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Baby's & Toys <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/groceries"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Groceries & Pets <span className="text-lg">&rsaquo;</span>
            </a>
            <a
              href="/health"
              className="flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium transition duration-200"
            >
              Health & Beauty <span className="text-lg">&rsaquo;</span>
            </a>
          </nav>
        </div>

        <div className="bg-black h-[344px] w-[892px] text-white flex items-center justify-between px-6">

  <div className="flex flex-col gap-4">

    <div className="flex items-center gap-4">
      <Image src="/apple.png" width={40} height={40} alt="image" />
      <p>iPhone 14 Series</p>
    </div>

    <div>
      <h2 className="w-[294px] h-[120px] text-xl font-bold leading-tight">Up to 10% off Voucher</h2>
      <a href="#" className="text-red-500">
       Shoping now <ArrowForwardIcon />
      </a>
    </div>
  </div>


  <div>
    <Image src="/ayfon.png" width={496} height={352} alt="image" />
  </div>
</div>

      </div>

      <div className="container mx-auto py-8 px-4">
        <FlashSales />
      </div>

      <div className="container mx-auto py-8 px-4">
        <Category />
      </div>
      <div className="container mx-auto py-8 px-4">
        <BestSelling />
      </div>

      <div className="container mx-auto py-8 px-4 w-full max-w-[1170px] h-[500px] bg-black relative flex">
  <div className="flex flex-col gap-6 text-center md:text-left w-full md:w-1/2">
    <p className="text-[#00FF66]">Category</p>
    <h1 className="text-[#FAFAFA] text-2xl md:text-4xl font-semibold max-w-[443px] mx-auto md:mx-0">
      Enhance Your Music Experience
    </h1>

    <div className="flex gap-6 justify-center md:justify-start items-center mb-4">
      <div className="w-[62px] h-[62px] border-2 border-black rounded-full bg-white text-black flex justify-center items-center flex-col">
        <p>23</p>
        <p>Hours</p>
      </div>
      <div className="w-[62px] h-[62px] border-2 border-black rounded-full bg-white text-black flex justify-center items-center flex-col">
        <p>05</p>
        <p>Days</p>
      </div>
      <div className="w-[62px] h-[62px] border-2 border-black rounded-full bg-white text-black flex justify-center items-center flex-col">
        <p>59</p>
        <p>Minutes</p>
      </div>
      <div className="w-[62px] h-[62px] border-2 border-black rounded-full bg-white text-black flex justify-center items-center flex-col">
        <p>35</p>
        <p>Seconds</p>
      
      </div>


    </div>
    <Button variant="contained" className="bg-green-500 text-white w-[171px]">
        Buy Now
      </Button>
  </div>

  <div className="absolute bottom-0 right-0 w-[50%]">
    <Image
      src="/kalonga.png"
      alt="hero"
      width={568}
      height={330}
      className="object-cover w-full h-auto"
      priority
    />
  </div>
</div>
<div className="container mx-auto py-8 px-4">
<Explores/>
</div>
   
    <div className="container mx-auto py-8 px-4"><Featured/></div>
 
    </div>
  );
};

export default Pages;
