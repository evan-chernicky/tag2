import React, {useEffect, useMemo} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import NightSky from '../../../assets/images/night-sky-bg.jpg'
import p5Types from "p5";

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  })
  
  type HeaderProps = {
    starPosition: number;
  }

function HomeHeroBackground({starPosition}: HeaderProps) {

    const drawStars = useMemo(() => {

        const stars: Star[] = [];
        const bgScale: number = 1.2
        let bg: any
        let canvasCounter: number = 0;

        function preload(p5: p5Types) {
          if (canvasCounter > 1) return  
          bg = p5.loadImage(NightSky.src);         
        }

        function windowResized(p5: p5Types) {
          p5.resizeCanvas(p5.windowWidth * bgScale, p5.windowHeight * bgScale);  
        }
  
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

          p5.createCanvas(p5.windowWidth * bgScale, p5.windowHeight * bgScale).parent(canvasParentRef);
  
          for (var i = 0; i < 200; i++) {
            stars[i] = new Star(p5);
          }

        }
    
      const draw = (p5: p5Types) => {
        if (!bg) return;  // Check if the background image is loaded before drawing      
        p5.clear();
        p5.background('rgba(255,255,255, 0)');      

        for (var i = 0; i < stars.length; i++) {
          stars[i].draw();
        }
      };

      return <Sketch className="absolute bottom-0 z-20" setup={setup} draw={draw} preload={preload} windowResized={windowResized}/>

      },[])

      useEffect(() => {
        const interval = setInterval(() => {
          const repeatCanvas = document.querySelector('#defaultCanvas1') // Replace with the ID of the element you want to check
    
          if (repeatCanvas) {
            repeatCanvas.remove()
            clearInterval(interval); // Stop the interval once the element is found or condition is met
          }
        }, 1000); // Check every 1 second (adjust as needed)
    
        return () => {
          clearInterval(interval); // Clean up the interval when the component unmounts
        };
      }, []);

  return (
    <div  className={`sticky h-screen w-full top-0 overflow-hidden`} style={{transform: `translateY(${((100 - starPosition) * 0.2) - 15}%)`}}>
        <div className="w-screen h-screen " >
        {drawStars}
        <Image className="absolute z-10 h-screen object-cover bottom-0" src={NightSky} alt="" />
        </div>
    </div>
  )
}

export default HomeHeroBackground