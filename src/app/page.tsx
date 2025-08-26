"use client";

import { redirect} from "next/navigation";
export default function Home() {


  return (
    
    <>
    <div className="page text-red-600 ">
      <div className="text-center flex flex-col justify-center items-center text-black bg-red-600 w-full h-[256px]">
        <h1 className="text-8xl font-bold">Free ULTRAKILL</h1>
        <h1 className="text-4xl font-bold">very real not fake!!</h1>
      </div>

      <section id="downloads" className="flex flex-col justify-start items-center text-red-600 pl-2  mt-8 gap-3">
        <span className="text-5xl font-bold">Downloads</span>
        <button onClick={function () {window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}  className="border-2 borer-red-600 py-3 px-3 w-72 text-2xl hover:bg-red-600 hover:text-black">Download for Windows</button>

      </section>
      <section className="flex flex-col justify-start items-center text-red-600 pl-2  mt-8 gap-4 text-center">
        <span className="text-5xl font-bold">What is <span className="underline">ULTRAKILL</span>?</span>
        <span className="text-2xl max-w-196">Ultrakill is a fast-paced first-person shooter with an emphasis on movement and stylish techniques. The player must make their way through an interpretation of Dante's layers of Hell, with three acts each made up of three layers being divided into multiple levels. As of February 2025, only Act I and Act II have been fully released, with only the first layer of Act III being available.</span>
        <span className="text-2xl max-w-196">The player battles enemies using an arsenal of weapons, having a primary and alternate attack, and various robotic arms. These have unique interactions with each other, evoking the combination attacks of games like Devil May Cry. Many of the advanced techniques in the game are a result of combining various elements of the player's arsenal. To encourage aggressive gameplay, the player can heal by absorbing the blood of enemies through close-range combat or parrying enemy attacks. The player's performance is judged by a "style meter", similar to games such as Devil May Cry. The style meter rewards the player for performing advanced and flashy moves, as well as encouraging aerial maneuvering and quickly swapping between weapons.</span>
        <span className="text-2xl max-w-196">At the end of each level, the player's style ranking is combined with time taken and number of kills to determine a letter grade for that run. Achieving an S rank in all three categories without dying throughout that run will earn the player a P (Perfect) rank, the highest possible rank for a level.</span>
        <span className="text-2xl max-w-196">In addition to the main campaign, Ultrakill provides various secret levels parodying other video game genres. The game has an endless survival mode called "The Cyber Grind" where players can compete against other players' high scores, and a sandbox mode in which the player can spawn enemies and various objects. Achieving a P rank in all levels of an act allows the player to access the act's "prime sanctum", each containing a secret boss fight.</span>
      
      </section>
    </div>
    <footer className="bg-red-600 h-20 text-center pt-4">
      I am not affiliated with New Blood Interactive!
    </footer>
    <audio src="/resources/thefireisgone.mp3" loop autoPlay></audio>
    </>
  );
}
