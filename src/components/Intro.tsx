import React, {useEffect} from 'react'

function Intro() {

    useEffect(() => { 
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        let progress: number = 0

        if (!canvas) return

        const ctx = canvas.getContext('2d');

        const logo = {
            d1: 'm112.61,34.88l11.54-17.17,2.09,15.21c4.72-.62,9.3-1.16,13.75-1.63l-4.79-30.4h-13.75l-25.58,36.89c5.7-1.08,11.29-2.04,16.74-2.89Z',
            d2: 'm188.41,30.72c-6.56.26-13.78.6-21.57,1.11.25-.95.54-1.88.89-2.79h0c1.32-3.35,3.28-6.37,5.69-8.78,4.37-4.37,10.41-7.15,17.1-7.15,8.18,0,13.29,3.35,17.1,7.53l10.59-9.38c-4.55-5.95-12.82-11.24-26.58-11.24-11.71,0-21.84,4.65-29.08,11.89-5.79,5.79-9.67,13.18-11,21.08-24.81,2.14-54.14,6.05-85.97,13.52l3.6-13.37h0l4.99-18.58h19.79l3.53-13.19h-53.89l-3.53,13.19h19.79l-5.63,20.93h0l-3.99,14.85C33.97,54.64,17.15,59.91.04,66.38c.84-.31,17.43-6.34,49.25-12.51l-3.37,12.52h14.31l4.09-15.23c7.61-1.27,15.88-2.52,24.81-3.68l-13.12,18.91h15.42l14.01-20.85c-5.66.61-11.1,1.26-16.31,1.94,10.01-1.3,20.83-2.5,32.49-3.52,2-.18,4.02-.34,6.06-.5l3.15,22.93h14.68l-3.76-23.89c-2.24.13-4.46.27-6.66.42,5.26-.36,10.63-.66,16.07-.91.3,3.44,1.13,6.5,2.36,9.21,0,.01.01.03.02.04.19.42.39.82.6,1.22,0,.02.02.03.03.05.21.4.43.79.66,1.17,0,.01.01.02.02.04,5.56,9.22,16.35,13.53,26.74,13.53,9.76,0,17.19-2.51,23.6-6.13l5.48-19.92s.01,0,.02,0c0,0,2.55-8.76,2.93-10.72,0-.34-18.43-.05-25.22.22Zm-60.72,12.74c2.16-.17,4.35-.33,6.55-.48-2.2.15-4.39.31-6.55.48Zm66.45,8.21c-2.83,1.28-6.47,2.46-11.35,2.5h0c-.09,0-.18,0-.27,0-.52,0-1.03-.02-1.54-.06-.16-.01-.31-.03-.47-.04-.35-.03-.71-.07-1.05-.12-.17-.02-.34-.05-.5-.08-.37-.06-.74-.14-1.1-.22-.12-.03-.24-.05-.35-.08-.44-.11-.88-.24-1.3-.38-.19-.06-.37-.13-.55-.2-.25-.09-.5-.19-.74-.29-.2-.09-.41-.17-.61-.27-.21-.1-.41-.2-.62-.31-.21-.11-.42-.21-.62-.33,0,0,0,0,0,0-.57-.33-1.12-.71-1.63-1.11-.12-.09-.24-.19-.36-.29-.22-.18-.43-.37-.64-.57-.09-.09-.18-.18-.28-.27-.72-.72-1.37-1.51-1.92-2.39-.04-.06-.08-.11-.11-.17-.17-.28-.33-.57-.49-.87-.05-.09-.09-.18-.13-.27-.15-.31-.3-.62-.43-.95h0c-.44-1.07-.75-2.24-.95-3.5,7.46-.22,15.03-.34,22.65-.38h8.39s.02,0,.03,0l-3.07,10.59Z',
            d3: 'm.04,66.38s-.04.01-.04.01c.01,0,.02,0,.04-.01Z',
            width: 218,
            height: 67,
            shiftX: 1.1,
            shiftY: 1.23,
            eDashHeight: 2.5,
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

            const top = (canvas.height / 2 - (logo.height / 2) * scale) 
            const left = (canvas.width / 2 - (logo.width / 2) * scale) 
            ctx.transform(scale, 0, 0, scale, left, top * Math.min(1 + (progress * 5), 1.275))
            ctx.clip(logoPath)
        
            ctx.clearRect(0, 0, canvas.width, canvas.height )
            }
            
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