import React, {useEffect, useState} from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Header from '../components/header';
import Intro from '../components/home/Intro';
import Hero from '../components/home/HomeHero';


export default function Home() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const { scrollYProgress } = useScroll();

    //set is visible on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest <= 0.4) return setIsVisible(false)
      setIsVisible(true)
    })

  return (
    <motion.main className="bg-black">
      <Intro />
        <Header isVisible={isVisible} />
        <div className="min-h-[375vh] w-full h-full bg-[url('../../assets/images/night-sky-bg.jpg')] bg-cover bg-fixed flex items-end">
            <Hero />
        </div>
        <div className="h-screen">test</div>
    </motion.main>
  )
}
