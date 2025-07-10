'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger)

export const Destination = () => {
  const textRef = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)
  console.log(textRef);
  
  

  const textData = [
    {
      title: "brand consultancy",
      description: "This is the description of the first text item.",
    },
    {
      title: "brand marketing",
      description: "Details about the second item go here.",
    },
    {
      title: "software development",
      description: "Explanation for the third content is shown here.",
    },
    {
      title: "visual design",
      description: "More info about the fourth text element.",
    },
    {
      title: "visual editing",
      description: "More info about the fourth text element.",
    },
  ];
  
  useEffect(()=>{

    ScrollTrigger.create({

      // ✅ Pin entire section
      trigger: containerRef.current,
      start: "top top",
      end: " bottom bottom",
      pin: true,
      scrub: true,
      markers: true
    })

      // ScrollTrigger for each text
   textRef.current.forEach((el, i)=>{
    if(!el) return 

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: 'bottom 30%',
      onEnter: ()=> {setActive(i)},
      onEnterBack: ()=> setActive(i),
      // markers: true,
    })
   })
   return () => ScrollTrigger.getAll().forEach((t) => t.kill()); // clean up
  },[])


  return (
    <div className="" ref={containerRef}>
      <h5></h5>
      <div className="flex gap-12">
        <div className="w-1/2 sticky top-20 self-start">
          <p className="text-lg">{textData[active].description}</p>
        </div>
        <div className="w-1/2 flex flex-col gap-10">
          {
            textData.map((text, i)=>(
              <h2 key={i} ref={(el) => {textRef.current[i] = el}} className={`text-4xl uppercase font-bold transition-all duration-300 ${active === i ? "text-rose-600 scale-110" : "text-gray-400 scale-100"}`}>{text.title}</h2>
            ))
          }
        </div>
  </div>
    </div>
  )
};
