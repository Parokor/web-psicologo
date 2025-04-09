/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main brand colors (turquoise/sea-blue palette)
        primary: {
          50: "#f0fafa",
          100: "#d0f1f6",
          200: "#a0e4ed",
          300: "#60d1e0",
          400: "#38bfd1",
          500: "#0ca4b8", // Main primary color (similar to Perplexity)
          600: "#0a8599",
          700: "#0b6b7c",
          800: "#0d5561",
          900: "#0e464f",
          950: "#072a31",
        },
        // Secondary pastel colors
        secondary: {
          50: "#f5f9ff",
          100: "#ebf3fe",
          200: "#d6e7fd",
          300: "#b5d5fb",
          400: "#8cbcf8",
          500: "#5a9cf2", // Main secondary color
          600: "#3a7fe6",
          700: "#2f68d6",
          800: "#2c54af",
          900: "#294a8c",
          950: "#1c2e56",
        },
        // Accent colors
        accent: {
          mint: "#d4f5e9", // Light mint pastel
          lavender: "#e4e1f5", // Light lavender pastel
          peach: "#fde8e4", // Light peach pastel
          sand: "#f7f3e7", // Light sand pastel
        },
        // Neutral colors
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 0 20px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 6px -1px rgba(10, 133, 153, 0.1), 0 2px 4px -1px rgba(10, 133, 153, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#0ca4b8',
              '&:hover': {
                color: '#0b6b7c',
              },
            },
            h1: {
              color: '#0d5561',
            },
            h2: {
              color: '#0d5561',
            },
            h3: {
              color: '#0d5561',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}