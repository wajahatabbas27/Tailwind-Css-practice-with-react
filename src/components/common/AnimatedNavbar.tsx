import React from "react";
import BITCOIN from "../../assets/images/bitcoin-brands.svg";
import AMAZON from "../../assets/images/amazon-brands.svg";
import BLACKBERRY from "../../assets/images/blackberry-brands.svg";
import CODEPEN from "../../assets/images/codepen-brands.svg";
import CML from "../../assets/images/canadian-maple-leaf-brands.svg";

const AnimatedNavbar = () => {
  //cards information
  const pages = [
    { name: "HOME", image: BITCOIN, subject: "BITCOIN" },
    { name: "SERVICE", image: AMAZON, subject: "AMAZON" },
    { name: "ABOUT", image: BLACKBERRY, subject: "BLACKBERRY" },
    { name: "BLOG'S", image: CODEPEN, subject: "CODEPEN" },
    { name: "CONTACT", image: CML, subject: "MAPLE LEAF" },
  ];

  return (
    <section>
      <div className='text-xl md:text-4xl font-bold font-sans bg-red-500 m-10 p-10 flex align-middle justify-center hover:bg-yellow-400 transition-all duration-500 '>
        <h1 className=' hover:bg-yellow-400 transition-all duration-500 tracking-wide text-white  text-center'>
          Animated Navbar
        </h1>
      </div>

      {/**Cards*/}
      <div className='flex items-center justify-center align-middle flex-wrap'>
        {pages.map((item) => (
          <div
            key={item.name}
            className='bg-white w-48 h-64 m-10 rounded-md shadow-lg flex flex-col items-center justify-between overflow-hidden card'
          >
            <img src={item.image} alt={item.name} className='w-1/2 pt-6' />
            <div className=' w-full flex flex-col justify-center items-center '>
              <p className='font-sans text-xl font-bold px-3 pb-4'>
                {item.subject}
              </p>
              <a
                className='text-lg text-white font-sans font-bold bg-blue-500 hover:bg-blue-800 w-full p-3 flex justify-center transition-all duration-700 '
                href='/'
              >
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedNavbar;
