import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#f7f8f6',
        text: '#151515',
        muted: '#6f7474',
        soft: '#ecf0ef',
        line: '#d9ddda',
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
      },
      borderRadius: {
        block: '1.75rem',
      },
      boxShadow: {
        soft: '0 18px 40px -30px rgba(0, 0, 0, 0.35)',
      },
      maxWidth: {
        layout: '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
