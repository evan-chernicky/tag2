import React, {useEffect, useRef, useState  } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import mtnRange from '../../../assets/images/mtn-range.png'


function HomeHero() {
    
    const elementRef = useRef<HTMLDivElement>(null);
    const [percentageVisible, setPercentageVisible] = useState(0);
    let x1 = 0 
    let x2 = 0
  
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const percentageVisible = Math.floor(entry.intersectionRatio * 100);
        setPercentageVisible(percentageVisible);
      });
    };
  
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const percentageVisible = Math.floor((windowHeight - rect.top) / rect.height * 100);
        setPercentageVisible(percentageVisible);
      }
    };
  
    useEffect(() => {
      const options = {
        threshold: 0,
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      window.addEventListener('scroll', handleScroll); // Add scroll event listener
  
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll); // Cleanup the scroll event listener
      };
    }, []);

    //set percentages
    if (percentageVisible > 0 && percentageVisible <= 100) {
        x1 = 0.9 + (percentageVisible / 10)
        x2 = 0.9 + -(percentageVisible / 10)

    }

    if (percentageVisible > 100) {
        x1 = 1 + (percentageVisible / 10)
        x2 = 1 + -(percentageVisible / 10)
    }

  return (
    <div ref={elementRef} id="hero" className=" text-white h-screen w-full flex items-end relative overflow-hidden	">
        <div className="absolute inset-0 m-auto max-w-auto max-h-auto flex justify-center flex-col	px-20">
            <motion.h1 style={{translateX: x1 + '%'}} className="font-space text-[162px] mb-14">EXACTNESS</motion.h1>
            <motion.h1 style={{translateX: x2 + '%'}} className="font-space text-[162px] text-right">IN ACTION</motion.h1>
        </div>
        <Image className="h-[70vh] object-cover" src={mtnRange} alt="Mountain Range"/>
    </div>  
  )
}

export default HomeHero