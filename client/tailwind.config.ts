import type { Config } from 'tailwindcss';

import tokens from './app/_shared/styles/tokens';

const { colors, boxShadow } = tokens;

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors,
    extend: {
      boxShadow,
      fontFamily: {
        montserrat: ['var(--montserrat)'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
