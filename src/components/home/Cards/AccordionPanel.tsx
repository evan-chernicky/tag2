import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import SlidePicture from '../../../../assets/images/slide-picture.png'

interface props {
    isActive: boolean
}

function AccordionPanel({isActive}: props) {

    const activeClass = (isActive) ? 'active' : ''

  return (
    <div className={`accordion-panel ${activeClass}`}>
        <div className="accordion-title">
            <h2>01 Design Service</h2>
        </div>
        <div className="h-full relative">
            <div className="flex items-center accordion-content h-full absolute left-0 top-0">  
                <div className="mr-12 w-[43%]">
                    <motion.h3 
                        className="text-3xl	mb-5 leading-9"
                        animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 50
                        }}
                        transition={{duration: 0.3, delay: 0.2, ease: 'easeOut'}}
                    >Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</motion.h3>
                    <motion.p 
                        className="mb-5"
                        animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 50,
                        }}
                        transition={{duration: 0.3, delay: 0.4, ease: 'easeOut'}}
                    >Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.</motion.p>
                    <motion.a 
                        className="skew-btn-purple tracking-widest uppercase text-xs" 
                        href="#"
                        animate={{
                            opacity: isActive ? 1 : 0,
                            transform: `skew(-21deg) translateY(${isActive ? 0 : 50}px)`,
                        }}
                        transition={{duration: 0.3, delay: 0.6, ease: 'easeOut'}}
                    ><span>Work With Us</span></motion.a>
                </div>
                <motion.div 
                    className="w-[57%] mr-auto h-full flex"
                    animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : 200,
                    }}
                    transition={{duration: 0.5, delay: 0.8, ease: 'easeOut'}}
                >
                    <Image
                        src={SlidePicture}
                        alt="Phone and laptop"
                        loading="lazy"
                        className="max-h-full m-auto mr-0 object-cover"
                    />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AccordionPanel