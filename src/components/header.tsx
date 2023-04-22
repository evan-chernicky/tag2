import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import logo from '../../assets/images/tag-logo.png'

type HeaderProps = {
  isVisible: boolean;
}

function header({isVisible}: HeaderProps) {

  return (
    <AnimatePresence>
      {isVisible ? (
      <motion.div 
        initial={{ opacity: 0, y: "-100%" }}
        exit={{ opacity: 0, scale: [1, 2, 2, 1, 1] }}
        animate={{ opacity: [0, 0.25, 0.5, 1], scale: [0.5, 1, 1], y: "0"}}
        className="flex justify-center p-10 fixed w-full">
          <Image 
              className="object-cover object-center"
              src={logo}
              alt="TAG"
              priority={true}
          />
      </motion.div>
      ) : null }
    </AnimatePresence>
  )
}

export default header