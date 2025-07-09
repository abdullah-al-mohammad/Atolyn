'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger)

export const Destination = () => {
  const textRef = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef()
  const [active, setActive] = useState(0)
  console.log(textRef);
  
  

  const textData = [
    {
      title: "First Text",
      description: "This is the description of the first text item.",
    },
    {
      title: "Second Text",
      description: "Details about the second item go here.",
    },
    {
      title: "Third Text",
      description: "Explanation for the third content is shown here.",
    },
    {
      title: "Fourth Text",
      description: "More info about the fourth text element.",
    },
  ];
  
  useEffect(()=>{

    ScrollTrigger.create({

    })

      // ScrollTrigger for each text
   textRef.current.forEach((el, i)=>{
    if(!el) return 

    ScrollTrigger.create({
      trigger: el,
      start: "top 30%",
      end: 'bottom, 30%',
      onEnter: ()=> {setActive(i)},
      onEnterBack: ()=> setActive(i),
      markers: true,
      pin: true,
      scrub: true
    })
   })
  },[])


  return (
    <div className="" ref={containerRef}>
      <div className="flex relative">
        <div className="relative top-16">
          <p className="sticky">{textData[active].description}</p>
        </div>
        <div>
          {
            textData.map((text, i)=>(
              <h2 key={i} ref={(el) => {textRef.current[i] = el}} className={`text-3xl font-bold transition-all duration-300 ${active === i ? "text-rose-600 scale-110" : "text-gray-400 scale-100"}`}>{text.title}</h2>
            ))
          }
        </div>
  </div>
    </div>
  )
};
