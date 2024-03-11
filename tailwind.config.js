/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AbrilDisplayBlack: ['AbrilDisplayBlack', 'serif'],
        AbrilDisplaySemibold: ['AbrilDisplaySemibold', 'serif'],
        bakilda: ['bakilda', 'sans-serif'],
        ValueSansRegular:[' ValueSansRegular', 'sans-serif'],
        ValueSansMedium:['ValueSansMedium', 'sans-serif'],
        Lemonada:['Lemonada', 'cursive'],

      },
    },
  },
  daisyui: {
    themes: ["light"]
  },
  plugins: [require('daisyui')],
};
