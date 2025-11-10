import type { Config } from "tailwindcss";
import animation from "tailwindcss-animate"
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        cynerza: {
          blue: {
            DEFAULT: '#1f6bb3',     // Mid blue - primary brand color
            light: '#34d3e6',       // Cyan - accent/highlight
            dark: '#0b2239',        // Deep blue - dark shade
            50: '#e8f4f8',          // Very light blue for backgrounds
            100: '#b8dff0',         // Light blue for hover states
            200: '#88cae8',         // Soft blue
            300: '#58b5e0',         // Medium blue
            400: '#2896d0',         // Bright blue
            500: '#1f6bb3',         // Primary (DEFAULT)
            600: '#1a5a97',         // Darker blue
            700: '#15497b',         // Deep blue
            800: '#10385f',         // Very deep blue
            900: '#0b2239',         // Darkest (dark)
          },
          cyan: {
            DEFAULT: '#34d3e6',     // Primary cyan
            light: '#6fe3f7',       // Light cyan
            dark: '#2ab8cc',        // Dark cyan
          },
          white: '#FFFFFF',
          black: '#080B1A',
          gray: {
            light: '#F5F5F7',
            DEFAULT: '#EAEAEA',
            dark: '#787878'
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(90deg, #b8dff0 0%, #1f6bb3 100%)',
        'cyan-gradient': 'linear-gradient(90deg, #34d3e6 0%, #1f6bb3 100%)',
        'blue-white-gradient': 'linear-gradient(135deg, #1f6bb3 0%, #ffffff 100%)',
        'brand-gradient': 'linear-gradient(90deg, #0b2239 0%, #1f6bb3 55%, #34d3e6 100%)',
        'dark-gradient': 'linear-gradient(to bottom, rgba(11,34,57,0.7) 0%, rgba(11,34,57,0.9) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        moveHand: {
          '0%, 100%': { transform: 'translateX(0)' },            // Start fully visible
          '50%': { transform: 'translateX(40%)' },               // Move right: hand partly outside right edge
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        // 'float': {
        //   '0%, 100%': { transform: 'translateY(0)' },
        //   '50%': { transform: 'translateY(-10px)' }
        // },
        'pulse-light': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' }
        },
        'typing': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        "draw-lines": {
          "0%": { strokeDashoffset: "80" },
          "100%": { strokeDashoffset: "0" }
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        moveHand: 'moveHand 8s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // 'float': 'float 6s ease-in-out infinite',
        'pulse-light': 'pulse-light 4s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end) infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'spin-slow': 'spin-slow 6s linear infinite',
        "draw-lines": "draw-lines 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },

  },
  plugins: [
    animation,
  ],
} satisfies Config;

