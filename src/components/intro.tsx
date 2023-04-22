import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import logoTransparent from '../../assets/svgs/tag-logo-transparent.svg'

function intro() {


/* eslint-disable */
    useEffect(() => { 
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        let progress: number = 0

        if (!canvas) return

        const ctx = canvas.getContext('2d');

        const logo = {
            d: 'M120.666672,1.000000 C127.187920,14.028166 133.277771,27.104065 139.589951,40.071754 C146.619980,54.514221 153.852325,68.858223 160.998291,83.622543 C159.933334,84.000000 158.866653,84.000000 157.690140,83.692009 C156.684433,82.731941 155.862473,81.927681 154.881348,81.451164 C144.189835,76.258423 133.532761,70.985909 122.707756,66.085320 C120.813362,65.227707 117.857216,65.265953 115.949860,66.127182 C105.412025,70.885330 95.027061,75.985748 84.652847,81.097015 C83.557655,81.636604 82.874382,83.012238 82.000000,84.000000 C81.250000,84.000000 80.500000,84.000000 79.375000,84.000000 C79.525467,82.296150 79.827888,80.481712 80.609680,78.904961 C93.369461,53.170502 106.189857,27.466099 118.998291,1.377461 C119.444443,1.000000 119.888893,1.000000 120.666672,1.000000 M243.000000,67.531342 C237.129013,70.058746 231.393997,72.740845 225.360977,74.056641 C208.797806,77.669098 190.843750,73.024178 184.062012,54.659077 C177.284958,36.306622 184.740509,15.184085 206.315399,10.051741 C216.540527,7.619336 226.629303,8.267049 236.016129,13.551352 C238.234360,14.800113 240.196899,16.503130 242.638535,17.998592 C243.000000,19.388889 243.000000,20.777779 242.708405,22.294662 C240.255692,24.146317 238.236115,26.112572 235.873505,27.490759 C234.701675,28.174316 232.717300,28.262682 231.416733,27.775770 C227.752121,26.403822 224.403427,23.892431 220.659134,23.081049 C205.823608,19.866198 196.951843,31.223530 197.244583,42.119720 C197.657379,57.484653 211.587082,65.069328 224.779297,60.494049 C226.209763,59.997936 227.716644,57.556561 227.854385,55.906170 C228.261581,51.027325 227.999954,46.092655 227.999954,41.000000 C233.396317,41.000000 238.198151,41.000000 243.000000,41.000000 C243.000000,49.687565 243.000000,58.375126 243.000000,67.531342 z M1.000000,10.463183 C19.482193,10.000000 37.964386,10.000000 56.722797,10.000000 C56.722797,14.298350 56.722797,18.368723 56.722797,22.836811 C50.373138,22.836811 43.965458,22.836811 37.182728,22.836811 C37.182728,39.949509 37.182728,56.678391 37.182728,73.702164 C32.074326,73.702164 27.338350,73.702164 22.217270,73.702164 C22.217270,57.086494 22.217270,40.357189 22.217270,23.380892 C15.164736,23.028713 8.475528,22.694677 1.393160,22.680321 C1.000000,18.975456 1.000000,14.950912 1.000000,10.463183 z',
            width: 242,
            height: 83,
            shift: 1,
            eDashHeight: 6,
            get ratio() {
                return this.height / this.width
            },
            progress: 0,
            }

            const render = () => {
            if (!ctx) return
        
            canvas.width = window.innerWidth * window.devicePixelRatio
            canvas.height = window.innerHeight * window.devicePixelRatio
        
            ctx.fillStyle = '#fff'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            const logoPath = new Path2D(logo.d)
            const marginX = 50 * window.devicePixelRatio
            let scale = Math.min((canvas.width - 2 * marginX) / logo.width, 5)
            const currentEDashHeight = logo.eDashHeight * scale
            console.log(progress)
            scale += progress * scale * (canvas.height / currentEDashHeight)
            
        
            const top = canvas.height / 2 - (logo.height / 2) * scale
            const left = canvas.width / 2 - (logo.width / 2) * scale
            ctx.transform(scale, 0, 0, scale, left * logo.shift, top)
            ctx.clip(logoPath)
        
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            }
        
            window.addEventListener('resize', render())

            window.addEventListener('scroll', () => {
                progress = window.scrollY / (document.documentElement.scrollHeight + window.innerHeight)
                render()
            })


        },[])


  return (
    <div className="fixed min-h-screen w-full z-50 mask-image">
        <canvas className="w-full h-full fixed"></canvas>
    </div>
  )
}

export default intro