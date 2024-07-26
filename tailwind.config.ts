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
        banner: 'url(/banner.svg)',
        'banner-mobile': 'url(/banner-mobile.svg)',
        'logo-full': 'url(/logo-full.svg)',
      },
      backgroundPosition: {
        'logo-footer': 'center bottom -2rem',
      },
    },
  },
  plugins: [],
};

// eslint-disable-next-line import/no-default-export -- required by tailwind
export default config;
