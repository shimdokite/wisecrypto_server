import type { Config } from 'tailwindcss';

import tokens from './src/styles/tokens';

const { colors, boxShadow } = tokens;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      boxShadow,
      fontFamily: {
        montserrat: ['var(--montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
