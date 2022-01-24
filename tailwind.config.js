module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        catalogBg: "url('/assets/images/catalog_bg.png')",
        servicesBg: "url('/assets/images/services_bg.png')",
        contactBg: "url('/assets/images/contact_bg.png')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
