import React, { useState } from "react";
import LEFTARROW from "../../assets/images/chevron-left-solid.svg";
import RIGHTARROW from "../../assets/images/chevron-right-solid.svg";

const ScrollCards = () => {
  //hooks values must be true for the first time to show both the numbers on the screen
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);

  //array for the cards
  const Cards = [
    { name: "HOME" },
    { name: "SERVICE" },
    { name: "ABOUT" },
    { name: "BLOG'S" },
    { name: "CONTACT" },
    { name: "REVIEW" },
  ];

  //slider left moving 500px.
  const SLIDELEFT = () => {
    const slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  //slider right moving 500px.
  const SLIDERIGHT = () => {
    const slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //remove Button
  const removeButton = (e: any) => {
    console.log(e.target.ScrollLeft, e.target.scrollWidth);
    if (e.target.scrollLeft == 0) {
      console.log("Hide Left Button");

      //setting the left to true as the condition passes
      setLeft(true);
      setRight(false); //right must be false when the left is true
    } else if (
      e.target.scrollLeft + e.target.clientWidth ===
      e.target.scrollWidth
    ) {
      console.log("Hide Right Button");

      //setting the right to true as the condition passes
      setRight(true);
      setLeft(false); // one value must be false so we can see only one button on the screen
    }
  };

  return (
    <main>
      <section className='flex  items-center justify-center w-full  bg-gray-100 h-80 px-28'>
        {/* {setting the logic to hide the left button using the hooks and the ampersent operator &&} */}
        {left && (
          <button
            className=' w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center absolute left-11'
            onClick={SLIDELEFT}
          >
            <img
              src={LEFTARROW}
              alt='Left Scroller'
              className='w-[25px]  opacity-100 cursor-pointer hover:opacity-80'
            />
          </button>
        )}
        <div
          id='slider'
          className='w-full rounded-md overflow-hidden gap-5 flex  overflow-x-scroll whitespace-nowrap scroll scroll-smooth scrollHide'
          onScroll={removeButton}
        >
          {Cards.map((item) => (
            <div
              key={item.name}
              className='flex justify-center h-56 min-w-[170px] sm:min-w-[340px]  bg-blue-500 rounded-lg shadow-lg cursor-pointer hover:scale-105 ease-in-out duration-300'
            >
              <h1 className=''>{item.name}</h1>
            </div>
          ))}
        </div>

        {/* {setting the logic to hide the right button using the hooks and the ampersent operator &&} */}
        {right && (
          <button
            className=' flex w-[60px] h-[60px] bg-black rounded-full items-center justify-center absolute right-11'
            onClick={SLIDERIGHT}
          >
            <img
              src={RIGHTARROW}
              alt='Right Scroller'
              className='w-[25px]  opacity-100 cursor-pointer hover:opacity-80'
            />
          </button>
        )}
      </section>
    </main>
  );
};

export default ScrollCards;
