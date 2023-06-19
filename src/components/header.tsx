import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import logo from '../../assets/images/TAG_logo2.svg'

type HeaderProps = {
  isVisible: boolean;
}

function header({isVisible}: HeaderProps) {

  return (
    <AnimatePresence>
      {isVisible ? (
      <nav 
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
      </nav>
      ) : null }
    </AnimatePresence>
  )
}

export default header