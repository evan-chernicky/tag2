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
      <motion.nav 
        className="flex justify-left p-10 fixed w-full z-50"
        initial={{ opacity: 0 }}
        exit={{ opacity: 0}}
        animate={{transition: {delay: 0.3}, opacity: 1 }}
        > 
          <Image 
              className="object-cover object-center"
              src={logo}
              alt="TAG"
              priority={true}
          />
      </motion.nav>
      ) : null }
    </AnimatePresence>
  )
}

export default header