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
        banner:
          'url(/banner.svg), linear-gradient(180deg, #2F5478 0%, #22405C 100%)',
        'banner-mobile':
          'url(/banner-mobile.svg), linear-gradient(180deg, #2F5478 0%, #22405C 100%)',
        'logo-full': 'url(/logo-full.svg)',
        'dark-blue-gradient':
          'linear-gradient(180deg, #2F5478 0%, #22405C 100%)',
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
