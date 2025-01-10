import Image from 'next/image';
import React from 'react';

export const Featured = () => {
  return (
    <div className="relative text-white">

      <div className="w-full h-[108px] bg-[#f5f5f5] flex items-center justify-between px-6">
        <div>
          <p className="text-red-500">Featured</p>
          <h1 className="text-[#000000] font-semibold pt-3">New Arrival</h1>
        </div>
      </div>


      <section className="flex flex-wrap lg:flex-nowrap gap-6 px-6 py-6">

        <div className="w-full lg:w-[570px] h-auto bg-black flex flex-col items-center p-4">
          <Image src="/ps5.png" width={511} height={511} alt="PS5" />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">PlayStation 5</h2>
            <p className="text-sm mt-2">Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className="text-red-500 font-semibold mt-4 inline-block">
              Shop Now
            </a>
          </div>
        </div>


        <div className="flex-1 flex flex-col gap-6">
 
          <div className="w-full h-[284px] bg-[#0D0D0D] flex items-center p-4 gap-6">
            <Image src="/Woman.png" width={432} height={286} alt="Woman" />
            <div className="text-left">
              <h2 className="text-xl font-bold">Women’s Collections</h2>
              <p className="text-sm mt-2">
                Featured woman collections that give you another vibe.
              </p>
              <a href="#" className="text-red-500 font-semibold mt-4 inline-block">
                Shop Now
              </a>
            </div>
          </div>

 
          <div className="flex flex-wrap gap-4">

            <div className="h-[284px] w-full sm:w-[270px] bg-black flex flex-col items-center p-4">
              <Image src="/Frame.png" width={210} height={222} alt="Speakers" />
              <h1 className="text-xl font-bold mt-2">Speakers</h1>
              <p className="text-sm mt-2">Amazon wireless speakers</p>
              <a href="#" className="text-red-500 font-semibold mt-4 inline-block">
                Shop Now
              </a>
            </div>


            <div className="h-[284px] w-full sm:w-[270px] bg-black flex flex-col items-center p-4">
              <Image src="/Frame706.png" width={210} height={222} alt="Perfume" />
              <h1 className="text-xl font-bold mt-2">Perfume</h1>
              <p className="text-sm mt-2">GUCCI INTENSE OUD EDP</p>
              <a href="#" className="text-red-500 font-semibold mt-4 inline-block">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
