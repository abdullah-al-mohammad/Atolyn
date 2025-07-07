'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SimpleScrollText() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100vh',
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      // Scroll out text1 + desc1
      tl.to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, 0);
      tl.to(desc1Ref.current, { opacity: 0, y: -30, duration: 1 }, 0);

      // Scroll in text2 + desc2 (with color change)
      tl.fromTo(
        text2Ref.current,
        { opacity: 0, y: 50, color: '#e63946' },
        { opacity: 1, y: 0, color: '#2a9d8f', duration: 1 },
        0.5
      );
      tl.fromTo(
        desc2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-white text-black relative overflow-hidden"
    >
      {/* Side Descriptions */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-sm w-64">
        <div ref={desc1Ref} className="absolute opacity-100">
          Description for Brand Consultancy
        </div>
        <div ref={desc2Ref} className="absolute opacity-0">
          Description for Brand Marketing
        </div>
      </div>

      {/* Main Texts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center w-full">
        <div
          ref={text1Ref}
          className="absolute opacity-100"
          style={{ color: '#e63946' }}
        >
          Brand Consultancy
        </div>
        <div
          ref={text2Ref}
          className="absolute opacity-0"
          style={{ color: '#2a9d8f' }}
        >
          Brand Marketing
        </div>
      </div>

      {/* Scroll space */}
      <div style={{ height: '100vh' }} />
    </div>
  );
}
