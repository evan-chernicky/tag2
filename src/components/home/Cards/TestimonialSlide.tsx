import React, {useEffect} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


interface TestimonialSlide {
  logo: any;
  quote: string;
  quotee: string
}

interface props {
  slideData: TestimonialSlide
  currentSlide: number
  slideNumber: number
}


function TesimonialSlide({slideData, currentSlide, slideNumber}: props) {

  return (
    <>
      {currentSlide === slideNumber && (
        <div key={currentSlide}>
          <motion.div   
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.3}}
              className="flex justify-center mb-8 testimonial-stagger">
              {slideData?.logo ? <Image src={slideData.logo} alt="army logo"/> : null}
          </motion.div>
          <motion.h3 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.3}}
            className="text-2xl mb-6 leading-9 testimonial-stagger"
          >“{slideData?.quote}&quot;</motion.h3>
          <motion.h4 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.3}}
            className="text-lg tracking-tight testimonial-stagger"
          >{slideData?.quotee}</motion.h4>
      </div>
      )}
    </>
  )
}

export default TesimonialSlide