'use client';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Destination = () => {
  const textRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const textData = [
    {
      title: 'brand consultancy',
      description:
        'This is the description of the first text item.Details about the second item go here.',
    },
    {
      title: 'brand marketing',
      description: 'Details about the second item go here.Details about the second item go here.',
    },
    {
      title: 'software development',
      description:
        'Explanation for the third content is shown here.Details about the second item go here.',
    },
    {
      title: 'visual design',
      description: 'More info about the fourth text element.Details about the second item go here.',
    },
    {
      title: 'visual editing',
      description: 'More info about the fourth text element.Details about the second item go here.',
    },
  ];

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      // ✅ Pin entire section
      trigger: containerRef.current,
      start: 'clamp(top +=150',
      end: () => `+=${textData.length * 60}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      markers: false,
    });

    // ScrollTrigger for each text
    textRef.current.forEach((el, i) => {
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 20%',
        end: 'bottom bottom',
        onEnter: () => {
          setActive(i);
        },
        onEnterBack: () => setActive(i),
        markers: false,
      });
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill()); // clean uptop
  }, []);

  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto max-w-5xl" ref={containerRef}>
        <h5 className="mb-5 flex items-center text-[#0B3131] text-2xl">
          <p className="border rounded-full w-3 h-3 m-2 bg-black"></p>
          we worked on
        </h5>
        <div className="flex gap-10 items-center">
          <div className="min-w-1/3 md:w-1/2 transition-all duration-300">
            <p className="text-lg text-[#0B3131]">{textData[active].description}</p>
          </div>
          <div ref={contentRef} className="min-w-1/3 md:w-1/2 flex flex-col gap-5">
            {textData.map((text, i) => (
              <h2
                key={i}
                ref={el => {
                  textRef.current[i] = el;
                }}
                className={`text-4xl uppercase font-bold transition-all duration-300 ${
                  active === i ? 'text-black' : 'text-[#0B313199]'
                }`}
              >
                {text.title}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
