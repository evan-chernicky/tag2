import React, {useState} from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Header from '../components/header';
import Intro from '../components/Intro';
import surfaceBottom from '../../assets/images/surface-bottom.png'
import northStar from '../../assets/images/north-star(overlay).png'

export default function Home() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest <= 0.4) return setIsVisible(false)
      setIsVisible(true)
    })

  return (
    <motion.main className="min-h-[300vh] h-full" >
      <Intro/>
      <div className=" w-full h-full fixed bg-[url('../../assets/images/bg-sky.png')] bg-cover">
        <Header isVisible={isVisible} />
        <AnimatePresence>
            {isVisible && (
              <motion.div 
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, scale: [1, 2, 2, 1, 1] }}
                animate={{ opacity: [0, 0.25, 0.5, 1], scale: [1, 1.25, 1.25, 1, 1], transition: {delay: 0.3} }}
                className="h-full flex justify-center items-center z-20 relative">
                  <h1 className="font-heading text-white text-6xl uppercase text-center mb-32">It&apos;s an Exact Science</h1>
              </motion.div>
            )}
          </AnimatePresence>          
        <div className="absolute z-10 top-24 right-1/4">
          <Image 
            className="object-cover object-center"
            src={northStar}
            alt="North Star"
            priority={true}
          />
        </div>   
        <div className="absolute bottom-0 z-0">
          <Image 
            className="max-h-[650px] min-h-[500px] object-cover object-center"
            src={surfaceBottom}
            alt="Background of beach"
            priority={true}
          />
        </div>
      </div>
    </motion.main>
  )
}
