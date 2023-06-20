import React, {useEffect, useRef, useState  } from 'react'
import Image from 'next/image'
import { motion, useInView  } from 'framer-motion';
import mtnRange from '../../../assets/images/mtn-range.png'
import soldier from '../../../assets/images/tag-soldier-bg.png'



function HomeHero() {
    const mountainRef = useRef(null)
    const elementRef = useRef<HTMLDivElement>(null);
    const [percentageVisible, setPercentageVisible] = useState(0);
    const isMountainsVisible = useInView(mountainRef, {amount: 0.9, once: true })

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

    if (percentageVisible > 0 && percentageVisible <= 100) {
        x1 = 0.9 + (percentageVisible / 10)
        x2 = 0.9 + -(percentageVisible / 10)

    }

    if (percentageVisible > 100) {
        x1 = 1 + (percentageVisible / 10)
        x2 = 1 + -(percentageVisible / 10)
    }

    const accelerator = (percentageVisible * 3) - 200

    const mountainStyles = {
      WebkitMaskImage: `linear-gradient(to top, rgba(0, 0, 0, 1) ${accelerator}%, transparent 100%)`,
      maskImage: `linear-gradient(to top, rgba(0, 0, 0, 1) ${accelerator}%, transparent 100%)`,
      maskRepeat: "no-repeat",
      maskSize: "cover",
    }

  return (
    <div ref={elementRef} id="hero" className=" text-white h-screen w-full flex items-end relative overflow-hidden	">
        <div className="absolute inset-0 m-auto max-w-auto max-h-auto flex justify-center flex-col	px-20 z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isMountainsVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4, delay: 0.6 }}
          >
            <Image className="absolute inset-0 m-auto z-20" src={soldier} alt="Image of Soldier" />
          </motion.div>
            <motion.h1  
              initial={{ opacity: 0 }}
              animate={isMountainsVisible ? { opacity: 1 } : { opacity: 0}}
              transition={{ ease: "easeIn", duration: 0.4, delay: 1 }}
              style={{translateX: x1 + '%'}} 
              className="font-space text-[162px] mb-26">EXACTNESS</motion.h1>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={isMountainsVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4, delay: 1.4 }}
              style={{translateX: x2 + '%', translateY: "80px"}} 
              className="font-space text-[162px] text-right -translate-y-10">IN ACTION</motion.h1>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{amount:0.9, once:true}}
            transition={{ ease: "easeIn", duration: 0.4, delay: 0.2}}
        >
          <Image ref={mountainRef} style={mountainStyles} className="h-[70vh] object-cover mountains" src={mtnRange} alt="Mountain Range"/>
        </motion.div>
    </div>  
  )
}

export default HomeHero