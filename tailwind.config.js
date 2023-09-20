/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components-v2/**/*.{js,ts,jsx,tsx}',
    './@/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      body: [
        'Helvetica Neue',
        'Helvetica, Arial',
        'lucida grande',
        'tahoma',
        'verdana',
        'arial',
        'sans-serif',
      ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color: {
        primary: '#3b5998',
        lightBlue: '#3578e5',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
