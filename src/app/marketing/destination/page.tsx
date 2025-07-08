'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSections() {
  const containerRef = useRef(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const descsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true
          },
        });

        // Title animation
        tl.fromTo(
          textsRef.current[i],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          0
        );

        // Description animation
        tl.fromTo(
          descsRef.current[i],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          0.2
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titles = ['Brand Consultancy', 'Brand Marketing', 'Product Design'];
  const descriptions = [
    'Helps define your brand clearly',
    'Spreads your message effectively',
    'Creates beautiful usable products',
  ];

  return (
    <div ref={containerRef} className="bg-white text-black">
      {titles.map((title, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="h-screen flex flex-col items-center justify-center space-y-4"
        >
          <h1
            ref={(el) => (textsRef.current[i] = el)}
            className="text-5xl font-bold opacity-0"
          >
            {title}
          </h1>
          <div
            ref={(el) => (descsRef.current[i] = el)}
            className="text-lg text-gray-600 opacity-0"
          >
            {descriptions[i]}
          </div>
        </div>
      ))}
    </div>
  );
}


// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollSections() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const sections = gsap.utils.toArray('.section') as HTMLElement[];

//     sections.forEach((section, index) => {
//       const title = section.querySelector('.title');
//       const desc = section.querySelector('.desc');

//       // Animate title and description
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: 'top center',
//           end: 'bottom center',
//           scrub: true,
//         },
//       })
//         .fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
//         .fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 0.2);

//       // Background color change
//       ScrollTrigger.create({
//         trigger: section,
//         start: 'top center',
//         end: 'bottom center',
//         onEnter: () => {
//           document.body.style.backgroundColor = section.dataset.bg || '#ffffff';
//         },
//         onEnterBack: () => {
//           document.body.style.backgroundColor = section.dataset.bg || '#ffffff';
//         },
//       });
//     });

//     // Scroll snapping
//     ScrollTrigger.defaults({ snap: 1 / (sections.length - 1) });
//   }, []);

//   return (
//     <div ref={containerRef} className="text-black transition-colors duration-500">
//       {/* Section 1 */}
//       <div
//         className="section h-screen flex flex-col items-center justify-center space-y-4"
//         data-bg="#fefae0"
//       >
//         <h1 className="title text-5xl font-bold opacity-0">Brand Consultancy</h1>
//         <p className="desc text-lg text-gray-600 opacity-0">Helps define your brand</p>
//       </div>

//       {/* Section 2 */}
//       <div
//         className="section h-screen flex flex-col items-center justify-center space-y-4"
//         data-bg="#d8f3dc"
//       >
//         <h1 className="title text-5xl font-bold opacity-0">Brand Marketing</h1>
//         <p className="desc text-lg text-gray-600 opacity-0">Spreads your message</p>
//       </div>

//       {/* Section 3 */}
//       <div
//         className="section h-screen flex flex-col items-center justify-center space-y-4"
//         data-bg="#ffe5ec"
//       >
//         <h1 className="title text-5xl font-bold opacity-0">Product Design</h1>
//         <p className="desc text-lg text-gray-600 opacity-0">Creates beautiful products</p>
//       </div>
//     </div>
//   );
// }
