'use client';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

export const Comments = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('comment.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    if (reviews.length === 0) return;
    const ctx = gsap.context(() => {
      // const smoother = ScrollSmoother.create({
      //   smooth: 1, // seconds to catch up
      //   effects: true, // enable data-speed, data-lag, etc
      // });
      const responsive = gsap.matchMedia();

      responsive.add(
        {
          // Desktop
          isDesktop: '(min-width: 1024px)',
          // Tablet
          isTablet: '(min-width: 640px) and (max-width: 1023px)',
          // Mobile
          isMobile: '(max-width: 639px)',
        },
        context => {
          const { isDesktop, isTablet, isMobile } = context.conditions!;
          gsap.to('.c', {
            y: isDesktop ? -150 : isTablet ? -100 : -50, // move up while scrolling
            ease: 'none', // no easing for scroll-linked effect
            duration: 2,
            scrollTrigger: {
              trigger: '.c',
              start: 'clamp(top bottom-=40)', // when top of `.c` hits bottom of viewport
              endTrigger: '.heading',
              end: 'clamp(top top+=40)', // when bottom of `.c` hits top of viewport
              scrub: 0.5, // ✅ smoothly link animation to scroll position
              // markers: true,
            },
          });
        }
      );
      const cards = gsap.utils.toArray('.card');

      cards.forEach((card: any, index) => {
        const directionY = index % 2 === 0 ? 40 : -40;

        gsap.fromTo(
          card,
          { y: 0 },
          {
            y: directionY,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, [reviews]);

  return (
    <div>
      <div className="text-center mb-32 heading relative z-10">
        <p>In the spolight</p>
        <h1 className="text-4xl">People love talking about us</h1>
      </div>
      <div className="h-24" />
      <div className="c">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="card bg-[#FBFDFF] w-full max-w-sm mx-auto shadow-sm p-0.25 relative"
            >
              <div className="card-body">
                <h5>
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                  ))}
                </h5>
                <p className="card-title">{review.text}</p>
                <div className="flex items-center gap-5">
                  <div className="badge badge-outline w-10">
                    <img src={review.image} alt="" />
                  </div>
                  <div>
                    <p>{review.name}</p>
                    <p>{review.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom space to allow scrolling */}
      {/* <div className="h-[200vh]" /> */}
    </div>
  );
};
