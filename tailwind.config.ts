import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'checked-top': 'url(/top-checked-bg.svg)',
      },
    },
  },
  plugins: [],
};

// eslint-disable-next-line import/no-default-export -- required by tailwind
export default config;
