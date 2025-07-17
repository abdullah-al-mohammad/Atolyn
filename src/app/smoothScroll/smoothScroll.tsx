// useSmoothScroll.ts
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

export default function smoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);
  return <>{children}</>;
}
