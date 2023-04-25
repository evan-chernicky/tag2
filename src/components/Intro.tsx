import React, {useEffect} from 'react'

function Intro() {

    useEffect(() => { 
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        let progress: number = 0

        if (!canvas) return

        const ctx = canvas.getContext('2d');

        const logo = {
            d1: 'm48.06,0c-5.59,11.18-11.05,22.11-16.51,33.03,5.27-2.37,10.37-4.84,15.44-7.37.8-.4,1.39-.37,2.16.02,4.74,2.36,9.51,4.67,14.26,6.99.34.17.7.31,1.26.57-5.59-11.17-11.05-22.09-16.62-33.24Z',
            d2: 'm92.41,16.01h5.43v10.42c-2.83,2.13-6.71,3.27-10.38,3.27-8.07,0-14.02-5.54-14.02-13.28s5.94-13.28,14.13-13.28c4.51,0,8.26,1.54,10.75,4.44l-3.82,3.52c-1.87-1.98-4.04-2.9-6.64-2.9-4.99,0-8.4,3.34-8.4,8.22s3.41,8.22,8.33,8.22c1.61,0,3.12-.29,4.62-1.1v-7.52Z',
            d3: 'M8.22,8.52H0V3.67H22.38V8.51H14.13l.03,1.89V29.35H8.22V8.52Z',
            width: 98,
            height: 33,
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
            let scale = Math.min((canvas.width - 2 * marginX) / logo.width, 12)
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
              }, 5000);


        },[])


  return (
    <div className="fixed min-h-screen w-full z-50 mask-image">
        <canvas className="w-full h-full fixed"></canvas>
    </div>
  )
}

export default Intro