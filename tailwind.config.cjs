/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'root': '#05050a',
        'resend-gray': '#eff7ff9d',
        'resend-white': '#fdfeffec',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
      dropShadow: {
        'glow': [
          '-8px 0px 20px rgba(5, 162, 194, 0.3)',
          '0px 0px 20px rgba(112, 225, 200, 0.3)',
          '8px 0px 20px rgba(255, 178, 36, 0.3)'
        ]
      },
      animation: {
        'header-slide-down-fade': 'header-slide-down-fade 1s ease-in-out',
        'footer-slide-up-fade': 'footer-slide-up-fade 1s ease-in-out',
        'hero-slide-up-fade': 'hero-slide-up-fade 1s ease-in-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "webgl-scale-in-fade": "webgl-scale-in-fade 1.5s ease-in-out"
      },
      keyframes: {
        'header-slide-down-fade': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-16px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        },
        'footer-slide-up-fade': {
          '0%': {
            opacity: 0,
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        },
        'hero-slide-up-fade': {
          '0%': {
            opacity: 0,
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        },
        'webgl-scale-in-fade': {
          '0%': {
            opacity: 0,
            transform: 'scale(.5)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
