import React, { useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import  heroVideo from '/assets/hero.mp4'
import smallHero from '/assets/smallHero.mp4'
const Hero = () => {
  const [videoSrc,setVideoSrc]=useState(null)
  const setVideo =()=>{
    if(window.innerWidth < 760){
      setVideoSrc(smallHero)
    }
    else{
      setVideoSrc(heroVideo)
    }

  }
  useEffect(()=>{
    setVideo()
  },[])
  
  useGSAP(()=>{
    gsap.to(".hero",{
      opacity:1,
      transitionDuration:1,
      delay:2,

    })
    gsap.to(".Box",{
      delay:2.5,
      opacity:1,
      y:-50,
    })
  },[])
  return (
    <section className="relative w-full bg-black h-[calc(100vh-60px)]">
      <div className="w-full h-5/6 flex items-center justify-center  flex-col">
         <p className="hero text-center font-semibold text-xl text-gray-500 opacity-0 transition-all duration-300 hover:text-gray-200 "> iPhone 15 Pro</p>
         <div className="video md:w-5/6 w-3/4">
           <video  key={videoSrc} muted autoPlay playsInline={true} loop>
            <source src={videoSrc} type="video/mp4" />
           </video>
         </div>
      </div>
      <div className=" Box flex items-center flex-col gap-2 opacity-0 ">
        <button className="bg-blue-700 px-3 py-1 rounded-2xl font-semibold cursor-pointer  text-white hover:bg-zinc-900  transition-all duration-300">
          Buy
        </button>
        <p className="font-semibold text-gray-200 font-sans">
          From $199/month or $999
        </p>
      </div>
    </section>
  )
}

export default Hero
