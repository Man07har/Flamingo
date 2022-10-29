import React from "react";
import AyushComponent from "./components/AyushComponent";
import DeepeshComponent from "./components/DeepeshComponent";
import ManoharComponent from "./components/ManoharComponent";
import Footer from "./components/Footer";
export default function App() {
    return (
    <div className="bg-gray-300 ">
    <h1 className="text-[50px] mx-[300px]"> Meet our UFSG H4CK3R5</h1>
    <div className="flex mx-4 px-4">
        <AyushComponent className="px-4 mx-4"  />
        <div className="w-2"></div>
        <DeepeshComponent className="px-4 mx-4" />
        <div className="w-2"></div>
        <ManoharComponent className="px-4 mx-4" />
    </div>
    <div className="h-4"></div>
    <Footer />
        
    </div>
    )
  }