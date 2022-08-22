/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s infinite",
        glitch: "glitch 0.5s infinite alternate ease-in",
        wave: "wave 1s infinite calc(.20s * var(--index))",
        wave2: "wave2 4s ease-in-out infinite",
      },

      keyframes: {
        shake: {
          "0%": { transform: "translate(1px, -2px) rotate(-1deg)" },
          "10%": { transform: "translate(1px, 2px) rotate(-1deg)" },
          "20%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "60%": { transform: "translate(1px, -2px) rotate(-1deg)" },
          "70%": { transform: "translate(-3px, 2px) rotate(0deg)" },
          "80%": { transform: "translate(-1px, 2px) rotate(1deg)" },
          "90%": { transform: "translate(-3px, 1px) rotate(1deg)" },
          "100%": { transform: "translate(1px, 1px) rotate(0deg)" },
        },
        glitch: {
          "0%": {
            textShadow: "0px 0px 1px #eee, 1px 1px 1px teal, -1px -1px 1px red",
          },
          "50%": {
            textShadow: "0px 0px 3px #eee, 3px 3px 1px teal, -3px -2px 2px red",
          },
          "100%": {
            textShadow: "0px 2px 3px #eee, 2px 2px 1px teal, -1px -1px 2px red",
          },
        },
        wave: {
          "0%,40%,100%": {
            transform: "translateY(0)",
          },
          "20%": {
            transform: "translateY(-10px)",
          },
        },
        wave2: {
          "0%,100%": {
            "clip-path":
              "polygon(0% 45%, 16% 24%, 33% 50%, 54% 60%, 70% 61%, 84% 39%, 100% 52%, 100% 100%, 0% 100%)",
          },

          "50%": {
            "clip-path":
              "polygon(0% 80%, 15% 85%, 34% 66%, 51% 72%, 57% 50%, 94% 45%, 100% 46%, 100% 100%, 0% 100%)",
          },
        },
      },
      transitionTimingFunction: {
        "scale-timing": "cubic-bezier(0.47, 2.02, 0.31, -0.36)",
      },
    },
  },
  plugins: [],
};
