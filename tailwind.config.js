/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        shark: {
          50: "#f6f7f9",
          100: "#ebeef3",
          200: "#d3dae4",
          300: "#adbbcc",
          400: "#8197af",
          500: "#617b96",
          600: "#4c627d",
          700: "#3f5065",
          800: "#374555",
          900: "#313b49",
          DEFAULT: "#252c37",
        },
        supernova: {
          50: "#fefce8",
          100: "#fdf8c4",
          200: "#fded8b",
          300: "#fbdb49",
          500: "#e8ad0a",
          600: "#c88506",
          700: "#a05f08",
          800: "#844b0f",
          900: "#703d13",
          950: "#411f07",
          DEFAULT: "#f8c617",
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
      },
      gridTemplateColumns: {
        shop: "repeat(auto-fill, minmax(320px, auto))",
        relatedProducts: "repeat(auto-fill, minmax(250px, auto))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-right": {
          from: {
            opacity: "0",
            transition: "all 0.5s ease-out",
            transform: "translateX(-100%)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-left": {
          from: {
            opacity: "0",
            transition: "all 0.5s ease-out",
            transform: "translateX(100%)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-left": "slide-left 5s ease-out",
        "slide-right": "slide-right 5s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-clip-path"),
  ],
};
