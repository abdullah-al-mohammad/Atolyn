'use client';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

export const Comments = () => {
  const [reviews, setReviews] = useState([]);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            y: isDesktop ? -200 : isTablet ? -150 : -50, // move up while scrolling
            ease: 'none', // no easing for scroll-linked effect
            duration: 2,
            scrollTrigger: {
              trigger: '.c',
              start: 'top bottom', // when top of `.c` hits bottom of viewport
              end: 'bottom center', // when bottom of `.c` hits top of viewport
              scrub: true, // ✅ smoothly link animation to scroll position
              // markers: true,
            },
          });
        }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    fetch('comment.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div ref={containerRef}>
      {/* <h1 className="text-3xl font-bold capitalize mb-20 text-center">
        Beautiful blending of card and cardless designs
      </h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 c">
        {reviews.map((review, i) => (
          <div key={i} className="card bg-base-100 w-96 shadow-sm p-2">
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
  );
};
