import React, {useRef, useState} from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Header from '../components/Header';
import Intro from '../components/home/Intro';
import Hero from '../components/home/HomeHero';
import HomeHeroBackground from '../components/home/HomeHeroBackground';

export default function Home() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [starPosition, setStarPosition] = useState<number>(100)
    const ref = useRef(null);
    const fullPageRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end -300px"]
    });

    //set is visible on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      setStarPosition(scrollYProgress.get() * 100)

      if (latest > 0.6) return setIsVisible(true)
      setIsVisible(false)
    })
  

  return (
    <motion.main className="bg-black" ref={fullPageRef}>
      <Intro />
        <Header isVisible={isVisible} fullPageRef={fullPageRef.current} />
            <motion.div ref={ref} className="relative min-h-[375vh] w-full h-full">
                <HomeHeroBackground starPosition={starPosition} />
                <div className="text-white absolute bottom-0">
                    <Hero />
                </div>
            </motion.div>
        <div className="py-20 px-5 text-center text-white exo max-w-4xl mx-auto relative">
          <motion.div
              initial={{ opacity: 0, translateY: "25%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <h2 className="text-xs font-bold uppercase mb-6 tracking-widest">Our Mission</h2>
            <p className="text-2xl leading-9">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam Quis Nostrud.</p>
          </motion.div>
        </div>
    </motion.main>
  )
}
