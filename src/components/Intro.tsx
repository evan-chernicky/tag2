import React, {useEffect} from 'react'

function Intro() {

    useEffect(() => { 
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        let progress: number = 0

        if (!canvas) return

        const ctx = canvas.getContext('2d');

        const logo = {
            d1: 'M47.39,49.63c7.92-3.56,15.58-7.27,23.2-11.07a3.228,3.228,0,0,1,3.25.02c7.12,3.54,14.28,7.01,21.43,10.5.51.25,1.04.47,1.9.85C88.78,33.15,80.57,16.74,72.2,0,63.8,16.8,55.6,33.21,47.39,49.63Z',
            d2: 'M138.84,35.36a14.207,14.207,0,0,1-6.95,1.65c-7.39,0-12.51-5.13-12.51-12.35S124.51,12.31,132,12.31a13.085,13.085,0,0,1,9.98,4.35l5.73-5.29c-3.75-4.35-9.37-6.67-16.15-6.67-12.29,0-21.22,8.32-21.22,19.95S119.27,44.6,131.4,44.6A26.628,26.628,0,0,0,147,39.69V24.04h-8.16v11.3Z',
            d3: 'M0,12.8H12.35V44.1h8.93V15.64L18.8,12.8H33.62V5.52H0Z',
            width: 147.71,
            height: 50,
            shift: 1,
            eDashHeight: 2,
            get ratio() {
                return this.height / this.width
            },
            progress: 0,
            }

            function render() {
            if (!ctx) return
        
            canvas.width = window.innerWidth * window.devicePixelRatio
            canvas.height = window.innerHeight * window.devicePixelRatio
        
            ctx.fillStyle = '#fff'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            const logoPath = new Path2D(logo.d1)
            const path2 = new Path2D(logo.d2)
            const path3 = new Path2D(logo.d3)
            logoPath.addPath(path2)
            logoPath.addPath(path3)
            const marginX = 50 * window.devicePixelRatio
            let scale = Math.min((canvas.width - 2 * marginX) / logo.width, 8)
            const currentEDashHeight = logo.eDashHeight * scale
            scale += progress * scale * (canvas.height / currentEDashHeight)
            
        
            const top = canvas.height / 2 - (logo.height / 2) * scale
            const left = canvas.width / 2 - (logo.width / 2) * scale
            ctx.transform(scale, 0, 0, scale, left * logo.shift, top)
            ctx.clip(logoPath)
        
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            requestAnimationFrame(render);
            }

            requestAnimationFrame(render);
            
            window.addEventListener('resize', () => render())

            window.addEventListener('scroll', () => {
                progress = window.scrollY / (document.documentElement.scrollHeight + window.innerHeight)
                render()
            })

            setTimeout(() => {
                if (progress < 0.3) {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth' 
                      });                
                    }
              }, 2000);


        },[])


  return (
    <div className="fixed min-h-screen w-full z-50 mask-image">
        <canvas className="w-full h-full fixed"></canvas>
    </div>
  )
}

export default Intro