import React, {useEffect, useRef} from 'react'
import { useAnimate, stagger, motion, useInView  } from "framer-motion"
import Bullseye from "../../../assets/svgs/Bullseye"
import Compass from "../../../assets/svgs/Compass"
import Clock from "../../../assets/svgs/Clock"

const staggerMenuItems = stagger(0.3, { startDelay: 0.5 });

function useExpertiseStagger(isInView: boolean) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
  
      animate(
        "li",
        isInView
          ? { opacity: 1, y: "0%" }
          : { opacity: 0, y: "25%" },
        {
          duration: 0.2,
          delay: isInView ? staggerMenuItems : 0
        }
      );
    }, [isInView, animate]);
  
    return scope;
  }

function OurExpertise() {
    const expertiseList = useRef(null)
    const isInView = useInView(expertiseList) 
    const scope = useExpertiseStagger(isInView)

  return (
    <div ref={scope} className="py-20 px-5 text-white exo max-w-screen-xl mx-auto relative">
        <motion.h2 className="text-xs text-center font-bold uppercase mb-8 tracking-widest" 
            initial={{letterSpacing: "20px"}}
            whileInView={{letterSpacing: "2px"}}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >Our Expertise</motion.h2>
        <motion.ul ref={expertiseList} className="flex gap-4">
            <li className="flex flex-col justify-start w-1/3 px-3 py-6 gray-gradient">
                <div className=" w-full flex justify-end space">
                    <Bullseye />
                </div>
                <h3 className="text-5xl mt-5">Position</h3>
                <p className="text-gray mt-3 text-lg font-exo">Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia.</p>
            </li>
            <li className="flex flex-col justify-start w-1/3 px-3 py-6 gray-gradient">
                <div className=" w-full flex justify-end space">
                    <Compass />
                </div>
                <h3 className="text-5xl mt-5">Navigation</h3>
                <p className="text-gray mt-3 text-lg font-exo">Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia.</p>
            </li>
            <li className="flex flex-col justify-start w-1/3 px-3 py-6 gray-gradient">
                <div className=" w-full flex justify-end space">
                    <Clock />
                </div>
                <h3 className="text-5xl mt-5">Timing</h3>
                <p className="text-gray mt-3 text-lg font-exo">Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia.</p>
            </li>
        </motion.ul>
    </div>
    )
}

export default OurExpertise