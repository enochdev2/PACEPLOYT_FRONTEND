/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        colorBlue: "rgb(0, 51, 153)"
      },
      keyframes: {
        bounceSmall: {
          "0%": {
            transform: "translateY(0px)"
          },
          "100%": {
            transform: "translateY(-20px)"
          }
        }
      },

      animation: {
        bounceSmall: "bounceSmall 2.3s ease-in-out infinite alternate"
      }
    },
  },
  plugins: [require("daisyui")],
  diasyui: {
    themes: ["light", "dark", "cupcake"]
  }
}
