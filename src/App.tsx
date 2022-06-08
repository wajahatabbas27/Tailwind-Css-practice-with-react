import React from "react";
import "./App.css";
import GradientColorHeader from "./components/common/GradientColorHeader";
import AnimatedNavbar from "./components/common/AnimatedNavbar";
import ScrollCards from "./components/common/ScrollCards";
import Card from "./components/common/Card";
import Cards1 from "./components/common/Cards1";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <main className='w-full min-h-screen bg-gradient-to-b from-zinc-300 to-orange-500 via-red-500 px-36 py-10'>
      {/* <Navbar /> */}
      <GradientColorHeader />
      <Cards1 />
      <Card />
      <AnimatedNavbar />
      <ScrollCards />
    </main>
  );
}

export default App;
