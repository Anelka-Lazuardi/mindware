import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'first-background': "url('/image/bg-first.jpg')",
        'second-background': "url('/image/bg-second.jpg')",
        'third-background': "url('/image/bg-third.png')",
        'main-background': "url('/image/bg-main.jpg')",
      },
      colors: {
        primary: '#222e79',
        primarySide: '#151d51',
        primaryDark: '#081037',
        white: '#FFFFFF',
        secondary: '#25afd3',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        carouselContent: {
          '0%': {
            opacity: '0',
          },
          ' 100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        carouselContent: 'carouselContent 2s ease 0s 1 normal forwards;',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
