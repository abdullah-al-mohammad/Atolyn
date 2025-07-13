'use client'
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export const Destination = () => {
  const textRef = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)
  console.log(textRef);
  
  

  const textData = [
    {
      title: "brand consultancy",
      description: "This is the description of the first text item.Details about the second item go here.",
    },
    {
      title: "brand marketing",
      description: "Details about the second item go here.Details about the second item go here.",
    },
    {
      title: "software development",
      description: "Explanation for the third content is shown here.Details about the second item go here.",
    },
    {
      title: "visual design",
      description: "More info about the fourth text element.Details about the second item go here.",
    },
    {
      title: "visual editing",
      description: "More info about the fourth text element.Details about the second item go here.",
    },
  ];
  
  useEffect(()=>{

    // ScrollSmoother.create({
    //   wrapper: containerRef.current,
    //   content: contentRef.current,
    //   // smooth: 2,
    //   smoothTouch: 0.1,
    //   effects: true
    // })

    ScrollTrigger.create({

      // ✅ Pin entire section
      trigger: containerRef.current,
      start: "clamp(top +=200)",
      end:() => `+=${textData.length * 100}`,
      pin: true,
      scrub: 1,
      // markers: true
    })

      // ScrollTrigger for each text
   textRef.current.forEach((el, i)=>{
    if(!el) return 

    ScrollTrigger.create({
      trigger: el,
      start: "clamp(top 20%)",
      end: 'clamp(bottom bottom)',
      onEnter: ()=> {setActive(i)},
      onEnterBack: ()=> setActive(i),
      // markers: true,
    })

   })
   return () => ScrollTrigger.getAll().forEach((t) => t.kill()); // clean uptop
  },[])


  return (
    <div className="container">
      <div className="overflow-hidden" ref={containerRef}>
      <h5 className="mb-5 font-bold text-rose-400 text-2xl">✔ we worked on</h5>
      <div className="flex gap-20">
        <div className="w-1/2 sticky top-20 self-start">
          <p className="text-lg">{textData[active].description}</p>
        </div>
        <div
        ref={contentRef} className="w-1/2 flex flex-col gap-5">
          {
            textData.map((text, i)=>(
              <h2 key={i} ref={(el) => {textRef.current[i] = el}} className={`text-4xl uppercase font-bold transition-all duration-300 ${active === i ? "text-rose-600 scale-110" : "text-gray-400 scale-100"}`}>{text.title}</h2>
            ))
          }
        </div>
      </div>
    </div>
      {/* <div className="h-[150px]"></div> */}
    </div>
  )
};
