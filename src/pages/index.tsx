import React, {useState} from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import Header from '../components/header';
import Intro from '../components/Intro';
import mtnRange from '../../assets/images/mtn-range.png'
import nightSky from '../../assets/images/night-sky-bg.jpg'


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
      <Intro/>
        <Header isVisible={isVisible} />
        <div className="min-h-[375vh] w-full h-full bg-[url('../../assets/images/night-sky-bg.jpg')] bg-cover bg-fixed flex items-end">
          <div className=" text-white h-screen w-full flex items-end">
            <Image className="height-[75vh] object-cover" src={mtnRange} alt="Mountain Range"/>
          </div>
        </div>
        <div className="h-screen">test</div>
    </motion.main>
  )
}
