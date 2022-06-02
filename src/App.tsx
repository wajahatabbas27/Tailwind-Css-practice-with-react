import React from "react";
import "./App.css";
import Card from "./components/common/Card";
import Cards1 from "./components/common/Cards1";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <main className='w-full min-h-screen bg-blue-300 py-2 px-4'>
      {/* <Navbar /> */}
      {/* <Card /> */}
      <Cards1 />
    </main>
  );
}

export default App;
