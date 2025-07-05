'use client'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import React, { useEffect } from 'react'

const Destination  = () => {
    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const container = document.querySelector('.container')
    const trigger = document.querySelector('.trigger')
        if(container && trigger){
         ScrollTrigger.create({
            trigger,
            scroller: container, // if no scroller is defined, the viewport (window) is used.
            start: "top center",
            end: "+=500",
            scrub: true,
            markers: true,
            pin: true
            });
            container.scrollTo({top: 100, behavior:"smooth"})
        }
        

        // // get
        // let position = st.scroll();

        // // set
        // st.scroll(100);
    }, [])
  return (
    <div className='container'>
        <h1>we worked on</h1>
        <div className='trigger'>
            <div className='text-5xl font-bold'>
                <h1>brand consultancy</h1>
                <h1>brand consultancy</h1>
                <h1>brand consultancy</h1>
                <h1>brand consultancy</h1>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Destination