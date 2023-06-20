import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, RefObject } from "framer-motion"
import Image from 'next/image'
import logo from '../../assets/images/TAG_logo2.svg'

type HeaderProps = {
  isVisible: boolean;
  fullPageRef: RefObject<HTMLElement> | null;
}

function Header({isVisible, fullPageRef}: HeaderProps) {

  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0)

  
  const { scrollYProgress } = useScroll({
    target: fullPageRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const current = scrollYProgress.get()
    if (current >  prevScrollPosition) {
      setIsScrollingDown(true)
    } else {
      setIsScrollingDown(false)
    }
    setPrevScrollPosition(current)
  })


  return (
    <AnimatePresence>
      {isVisible ? (
      <motion.nav 
        initial={{translateY: "-100%"}}
        animate={isScrollingDown ? {translateY: "-100%"} : {translateY: "0%"}}
        transition={{ duration: 0.3 }}
        className="p-5 flex justify-left fixed w-full z-50 bg-white/10 h-[84px] items-center"
        style={{backdropFilter: "blur(8px)"}}
        > 
          <Image 
              className="object-cover object-center"
              src={logo}
              alt="TAG"
              priority={true}
              width={123}
          />
      </motion.nav>
      ) : null }
    </AnimatePresence>
  )
}

export default Header