import React, {useEffect} from 'react'

function Intro() {

    useEffect(() => { 
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        let progress: number = 0

        if (!canvas) return

        const ctx = canvas.getContext('2d');

        const logo = {
            d1: 'm188.03,31.44h12.41v23.82c-6.46,4.87-15.35,7.47-23.74,7.47-18.45,0-32.04-12.67-32.04-30.37s13.59-30.37,32.29-30.37c10.32,0,18.87,3.52,24.58,10.15l-8.72,8.05c-4.28-4.53-9.23-6.63-15.18-6.63-11.41,0-19.21,7.63-19.21,18.79s7.8,18.79,19.04,18.79c3.69,0,7.13-.67,10.57-2.52v-17.2Z',
            d2: 'm18.79,14.3H0V3.23h51.17v11.07h-22.57l3.78,4.33v43.31h-13.59V14.3Z',
            d3: 'm129.14,62.92c-10.19-20.39-20.4-40.81-30.8-61.62-.44-.88-1.15-1.3-2.23-1.3s-1.79.41-2.23,1.3c-10.4,20.81-20.61,41.23-30.8,61.62-.79,1.59.85,3.3,2.47,2.56,9.42-4.32,18.62-8.79,27.76-13.36,1.03-.52,2.25-.86,2.8-.86s1.77.35,2.8.86c9.15,4.57,18.34,9.04,27.76,13.36,1.61.74,3.26-.97,2.47-2.56Z',
            width: 202,
            height: 66,
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