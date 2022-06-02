import React from "react";
import BLACKBERRY from "../../assets/images/blackberry-brands.svg";
import BITCOIN from "../../assets/images/bitcoin-brands.svg";
import CANADIANMAPLELEAF from "../../assets/images/canadian-maple-leaf-brands.svg";
import AMAZON from "../../assets/images/amazon-brands.svg";

const Cards1 = () => {
  return (
    <main className=''>
      <section className='pt-12'>
        <h1 className='text-xl text-bold font-bold text-center md:text-3xl mb-4'>
          MY <span className='text-red-500'> CARDS </span>SHOWD
          <span className='text-red-500 text-5xl'>o</span>WN
        </h1>

        {/** Cards */}
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-col bg-white rounded-lg shadow-md m-6 w-full overflow-hidden sm:w-52 justify-between '>
            <img src={BLACKBERRY} alt='blackberry icon' className='h-32 m-6' />
            <h2 className='text-xl font-sans font-bold text-center px-2 pb-10'>
              BlackBerry
            </h2>
            <a
              href='#'
              className='text-center bg-blue-500 p-4 font-medium text-white hover:bg-blue-800 transition-all duration-500'
            >
              Know More
            </a>
          </div>

          <div className='flex flex-col bg-white rounded-lg shadow-md m-6 w-full overflow-hidden sm:w-52 justify-between'>
            <img src={BITCOIN} alt='blackberry icon' className='h-32 m-6' />
            <h2 className='text-xl font-sans font-bold text-center px-2 pb-10'>
              Bitcoin
            </h2>
            <a
              href='#'
              className='text-center bg-blue-500 p-4 font-medium text-white hover:bg-blue-800 transition-all duration-500'
            >
              Know More
            </a>
          </div>

          <div className='flex flex-col bg-white rounded-lg shadow-md m-6 w-full overflow-hidden sm:w-52 justify-between'>
            <img
              src={CANADIANMAPLELEAF}
              alt='blackberry icon'
              className='h-32 m-6'
            />
            <h2 className='text-xl font-sans font-bold text-center px-2 pb-10'>
              Canadian Maple Leaf
            </h2>
            <a
              href='#'
              className='text-center bg-blue-500 p-4 font-medium text-white hover:bg-blue-800 transition-all duration-500'
            >
              Know More
            </a>
          </div>

          <div className='flex flex-col bg-white rounded-lg shadow-md m-6 w-full overflow-hidden sm:w-52 justify-between'>
            <img src={AMAZON} alt='blackberry icon' className='h-32 m-6' />
            <h2 className='text-xl font-sans font-bold text-center px-2 pb-10'>
              Amazon
            </h2>
            <a
              href='#'
              className='text-center bg-blue-500 p-4 font-medium text-white hover:bg-blue-800 transition-all duration-500'
            >
              Know More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cards1;
