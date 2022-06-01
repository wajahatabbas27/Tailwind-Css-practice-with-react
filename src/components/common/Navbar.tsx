import React from "react";
import NavbarLogo from "../../assets/images/navbarLogo.png";

const Navbar = () => {
  return (
    <nav className=' flex h-[150px] w-full justify-between p-8 border-b-4 border-blue-200'>
      <div className='flex items-center justify-center  '>
        <img src={NavbarLogo} alt='logo image' className='h-full ml-7' />
      </div>
      <div className='flex items-center gap-5 font-medium font-sans  mr-5 w-full justify-end'>
        <ul className='flex gap-5 text-xl'>
          <li>
            WHO WE ARE
            {/* <ul>
              <li>ABOUT US</li>
              <li>MISSIONS & VALUES</li>
              <li>OUR HISTORY</li>
              <li>BOARD & LEADERSHIP</li>
              <li>PARTNERS</li>
            </ul> */}
          </li>
          <li>
            HOW WE HELP
            {/* <ul>
              <li>HOW WE HELP</li>
              <li>OUR LOCATIONS</li>
            </ul> */}
          </li>
          <li>
            OUR IMPACT
            {/* <ul>
              <li>SUCCESS STORIES</li>
              <li>BY THE NUMBERS</li>
            </ul> */}
          </li>
          <li>
            GET INVOLVED
            {/* <ul>
              <li>DONATE</li>
              <li>EVENTS</li>
              <li>VOLUNTEER</li>
              <li>BECOME A FOSTER PARENT</li>
              <li>NEWS & PUBLICTIONS</li>
              <li>FOLLOW OUR JOURNEY</li>
            </ul> */}
          </li>
          <li>CAREERS</li>
          <li>CONTACT US</li>
        </ul>
        <button className='bg-orange-600 py-2 px-5 text-white font-sans rounded-xl'>
          DONATE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
