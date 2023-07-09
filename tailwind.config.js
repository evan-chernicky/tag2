/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/svgs/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gray-gradient': 'linear-gradient(352deg, #070707 0%, #191919 100%)'
      },
      colors: {
        'gray': '#656565',
      },
    },
    fontFamily: {
      'sans': ['var(--spaceGrotesk)'],
      'space': ['var(--spaceGrotesk)'],
      'exo': ['var(--exo)']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '2.4px',   
    }
  },
  plugins: [],
}
