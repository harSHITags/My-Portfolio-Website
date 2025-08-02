/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
  ],

 
       theme: {
    extend: {
      animation: {
        'ultra-scroll': 'ultra-scroll 20s linear infinite',
      },
      keyframes: {
        'ultra-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
    
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        black: "#000000",
        dark: {
          900: "#000000",
          800: "#0a0a0a",
          700: "#111111",
          600: "#1a1a1a",
          500: "#2a2a2a",
        },
      },

      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        mono: ["'Roboto Mono'", "monospace"],
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
