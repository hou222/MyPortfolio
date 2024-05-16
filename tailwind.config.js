/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/data/intro-bg.jpg')",
        project: "url('/src/data/project-bg.jpg')",
      },
    },
  },
  plugins: [],
};
