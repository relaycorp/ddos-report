import starlightPlugin from '@astrojs/starlight-tailwind';
import daisyui from 'daisyui';

const accent = { 200: '#83d6f2', 600: '#007893', 900: '#003947', 950: '#002934' };
const gray = {
  100: '#f4f7f8',
  200: '#e9eff2',
  300: '#bcc3c7',
  400: '#818e94',
  500: '#4e5a60',
  700: '#2e3a40',
  800: '#1d292e',
  900: '#14191b',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin(), daisyui],
  daisyui: {
    prefix: 'daisy-',
  },
};
