import React from "react";

const GradientColorHeader = () => {
  return (
    <div className='flex w-full h-full justify-center items-center bg-gradient-to-t from-blue-800 to-yellow-400 via-red-700 '>
      <h1 className='m-5 text-4xl font-medium font-sans p-6 text-white'>
        MY STYLED CARDS
      </h1>
    </div>
  );
};

export default GradientColorHeader;
