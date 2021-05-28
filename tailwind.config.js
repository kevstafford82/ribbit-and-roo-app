module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-green": "#8fd1cf",
        "light-blue": "#FAFAFA",
        "med-blue": "#71C1E2",
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('https://source.unsplash.com/random/1920x1080')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
