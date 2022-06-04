import React from "react";

const ScrollCards = () => {
  //array for the cards
  const Cards = [
    { name: "HOME" },
    { name: "SERVICE" },
    { name: "ABOUT" },
    { name: "BLOG'S" },
    { name: "CONTACT" },
    { name: "REVIEW" },
  ];

  return (
    <main>
      <section className='flex items-center justify-center w-full  bg-gray-100 h-80 px-32'>
        <div className=' w-full rounded-md overflow-hidden gap-4 flex  overflow-x-scroll px-2'>
          {Cards.map((item) => (
            <div
              key={item.name}
              className='flex justify-center h-56 min-w-[340px]  bg-blue-500 rounded-lg shadow-md'
            >
              <h1 className=''>{item.name}</h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ScrollCards;
