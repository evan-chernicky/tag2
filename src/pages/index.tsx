import React, {useRef, useState} from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Header from '../components/header';
import Intro from '../components/home/Intro';
import Hero from '../components/home/HomeHero';
import { number } from 'prop-types';


export default function Home() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [starPosition, setStarPosition] = useState<number>(100)
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });

    //set is visible on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      setStarPosition(scrollYProgress.current * 100)

      if (latest <= 0.4) return setIsVisible(false)
      setIsVisible(true)
    })


    const starStyles = {
      backgroundSize: "120% 150%",
      backgroundPosition: `${starPosition}% 50%`,
      backgroundRepeat: "no-repeat"   
    }

  return (
    <motion.main className="bg-black">
      <Intro />
        <Header isVisible={isVisible} />
        <motion.div ref={ref} style={starStyles} className="min-h-[375vh] w-full h-full bg-[url('../../assets/images/night-sky-bg.jpg')] bg-cover bg-fixed flex items-end">
            <Hero />
        </motion.div>
        <div className="h-screen">test</div>
    </motion.main>
  )
}
