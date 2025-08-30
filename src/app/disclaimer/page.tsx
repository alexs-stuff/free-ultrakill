"use client";


import { useEffect, useState } from "react";
import Footer from "../components/Footer";


export default function Disclaimer() {
  const [device, setDevice] = useState("Unknown")
  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase()
    if (platform.startsWith("win"))  {
      setDevice("Windows")
      return
    }
    else if (platform.startsWith("mac"))  {
      setDevice("MacOS")
      return
    }
    else if (platform.startsWith("linux"))  {
      setDevice("Linux")
      return
    }
    else if (platform == "iphone")  {
      setDevice("iPhone")
      return
    }
      
  })
  return (
    
    <>
    <div className="page text-red-600 text-center flex-col flex ">
        <span className="w-full  text-4xl sm:text-6xl font-bold">Disclaimer</span>
        <span className="text-3xl text-center">THIS IS A JOKE WEBSITE, YOU WILL BE RICK ROLLED IF YOU CLICK THE BUTTON!</span>
    </div>
    <Footer />
    </>
  );
}
