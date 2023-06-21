import React, {useEffect, useMemo, useRef, useState} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Header from '../components/Header';
import Intro from '../components/home/Intro';
import Hero from '../components/home/HomeHero';
import NightSky from '../../assets/images/night-sky-bg.jpg'
import p5Types from "p5";

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Home() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [starPosition, setStarPosition] = useState<number>(100)
    const ref = useRef(null);
    const fullPageRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end -300px"]
    });

    //set is visible on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      //setStarPosition(scrollYProgress.get() * 100)

      if (latest > 0.6) return setIsVisible(true)
      setIsVisible(false)
    })


      const drawStars = useMemo(() => {
        const stars: Star[] = [];
      
        let bg: any
        let canvasCounter = 0;
  
        class Star {
          p5: p5Types;
          x: number;
          y: number;
          size: number;
          t: number;
        
          constructor(p5: p5Types) {
            this.p5 = p5
            this.x = p5.random(p5.width);
            this.y = p5.random(p5.height);
            this.size = p5.random(0.25, 3);
            this.t = p5.random(p5.TAU);
          }
          
          draw() {
            this.t += 0.03;
            var scale = this.size + this.p5.sin(this.t) * 1;
            this.p5.noStroke();
            this.p5.ellipse(this.x, this.y, scale, scale);
          }
        }
  
        const setup = (p5: p5Types, canvasParentRef: Element) => {
          canvasCounter = canvasCounter + 1;
          if (canvasCounter > 1) return
          bg = p5.loadImage(NightSky.src);
          p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  
          for (var i = 0; i < 200; i++) {
            stars[i] = new Star(p5);
          }
        }
    
      const draw = (p5: p5Types) => {
        if (!bg) return; // Check if the background image is loaded before drawing
        p5.background(bg);
  
        for (var i = 0; i < stars.length; i++) {
          stars[i].draw();
        }
      };

      return <Sketch setup={setup} draw={draw}/>

      },[])





  return (
    <motion.main className="bg-black" ref={fullPageRef}>
      <Intro />
        <Header isVisible={isVisible} fullPageRef={fullPageRef.current} />
            <motion.div ref={ref} className="relative min-h-[375vh] w-full h-full">
                <div  className={`thing fixed w-full h-full`} style={{transform: `translateY(-${starPosition * 1.5}px)`}}>
                {drawStars}
                </div>
                <div className="text-white absolute bottom-0">
                    <Hero />
                </div>
            </motion.div>
        <div className="py-20 px-5 text-center text-white exo max-w-4xl mx-auto relative">
          <motion.div
              initial={{ opacity: 0, translateY: "25%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <h2 className="text-xs font-bold uppercase mb-6 tracking-widest">Our Mission</h2>
            <p className="text-2xl leading-9">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam Quis Nostrud.</p>
          </motion.div>
        </div>
    </motion.main>
  )
}
