/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '5': '1.5px',
        '6':'2.5px',
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
      mytheme:{
        "primary": "#f9f5f2",
        "secondary": "#c4a1ff",
        "accent": "#00FFFF",
        "neutral": "#000000",
        "base-100": "#ffffff",
        "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
        "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        "--animation-btn": "0.25s", // duration of animation when you click on button
        "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        "--border-btn": "1px", // border width of buttons
        "--tab-border": "1px", // border width of tabs
        "--tab-radius": "0rem", // border radius of tabs
      },
    }, "dark", "cymk"],
  },
}