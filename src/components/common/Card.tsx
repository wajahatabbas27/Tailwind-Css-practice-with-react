import React from "react";
import bitcoin from "../../assets/images/bitcoin-brands.svg";
import codePen from "../../assets/images/codepen-brands.svg";

const Card = () => {
  return (
    <main className='w-full px-32'>
      <section className='flex flex-col md:flex-row justify-center align-middle w-full gap-6 p-10 '>
        <div className=' bg-white drop-shadow-lg rounded-lg flex flex-1 flex-col items-center text-justify justify-between p-8 '>
          <div className='flex items-center justify-center'>
            <img className='w-20' src={bitcoin} alt='bitcoin' />
          </div>
          <br />
          <br />
          <p className='text-4xl'>
            Bitcoin is a crypto currency which came in 2008
          </p>
        </div>
        <div className='bg-white rounded-lg drop-shadow-lg flex flex-1 flex-col items-center text-justify justify-between p-8'>
          <div className='flex items-center justify-center'>
            <img className='w-20' src={codePen} alt='codepen' />
          </div>
          <br />
          <br />
          <p className='text-4xl'>
            Code Pen is the developer Hub, which helps you with the code
          </p>
        </div>
      </section>
    </main>
  );
};

export default Card;
