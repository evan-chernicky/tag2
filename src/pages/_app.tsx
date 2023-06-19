import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Exo_2, Space_Grotesk } from '@next/font/google'
import { gsap } from 'gsap'


const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--exo'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--spaceGrotesk'
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main id="smooth-wrapper" className={`${spaceGrotesk.variable} ${exo.variable} font-sans`}>
      <div id="smooth-content">
        <Component {...pageProps} />
      </div>
    </main>
  )
}
