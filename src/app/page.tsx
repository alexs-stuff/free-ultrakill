"use client";


import { useEffect, useState } from "react";
import Footer from "./components/Footer";


export default function Home() {
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
    <div className="page text-red-600 ">
      <div className="text-center flex flex-col justify-center items-center text-black bg-red-600 w-full h-[256px]">
        <h1 className="w-full text-center text-6xl sm:text-7xl md:text-8xl font-bold">Free ULTRAKILL</h1>
        <h1 className="w-full text-center text-4xl font-bold">very real not fake!!</h1>
      </div>

      <section id="downloads" className="w-full flex flex-col justify-start items-center text-red-600 pl-2  mt-8 gap-3">
        <span className="w-full text-center text-4xl sm:text-6xl font-bold">Downloads</span>
        <button onClick={function () {window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}  className="border-2 borer-red-600 py-3 px-3 w-72 text-2xl hover:bg-red-600 hover:text-black">Download for {device}</button>

      </section>
      <section className="w-full flex flex-col justify-start items-center text-red-600 pl-2  mt-8 gap-4 text-center">
        <span className="w-full text-center text-4xl sm:text-6xl font-bold">What is <span className="underline">ULTRAKILL</span>?</span>
        <span className="text-2xl max-w-196">Ultrakill is a fast-paced first-person shooter with an emphasis on movement and stylish techniques. The player must make their way through an interpretation of Dante&apos;s layers of Hell, with three acts each made up of three layers being divided into multiple levels. As of February 2025, only Act I and Act II have been fully released, with only the first layer of Act III being available.</span>
        <span className="text-2xl max-w-196">The player battles enemies using an arsenal of weapons, having a primary and alternate attack, and various robotic arms. These have unique interactions with each other, evoking the combination attacks of games like Devil May Cry. Many of the advanced techniques in the game are a result of combining various elements of the player&apos;s arsenal. To encourage aggressive gameplay, the player can heal by absorbing the blood of enemies through close-range combat or parrying enemy attacks. The player&apos;s performance is judged by a &quot;style meter&quot;, similar to games such as Devil May Cry. The style meter rewards the player for performing advanced and flashy moves, as well as encouraging aerial maneuvering and quickly swapping between weapons.</span>
        <span className="text-2xl max-w-196">At the end of each level, the player&apos;s style ranking is combined with time taken and number of kills to determine a letter grade for that run. Achieving an S rank in all three categories without dying throughout that run will earn the player a P (Perfect) rank, the highest possible rank for a level.</span>
        <span className="text-2xl max-w-196">In addition to the main campaign, Ultrakill provides various secret levels parodying other video game genres. The game has an endless survival mode called &quot;The Cyber Grind&quot; where players can compete against other players&apos; high scores, and a sandbox mode in which the player can spawn enemies and various objects. Achieving a P rank in all levels of an act allows the player to access the act&apos;s &quot;prime sanctum&quot;, each containing a secret boss fight.</span>
      
      </section>
    </div>
    <Footer/>
    <audio hidden  src="/resources/thefireisgone.mp3" loop autoPlay></audio>
    </>
  );
}
