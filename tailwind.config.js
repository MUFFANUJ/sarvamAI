/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 
          25: '#FCFCFC',
          50: '#F9F3EB',
          100: '#F6EFE4',
          200: '#EDE1D1',
          300: '#E5D5C0',
          400: '#DEC9B0',
          500: '#C9B597',
          600: '#8d6d42',
          700: '#0D3C26',
          800: '#F3EADD',
        },
        neutral: { 
          50: '#FAF3EA',
          100: '#F2E9DB',
          200: '#EAE0D1',
          300: '#E2D6C7',
          400: '#D9CCBD',
          500: '#6B6255',
          600: '#4D473E',
          700: '#2F2B26',
          800: '#1A1815',
          900: '#0D0C0A',
        },
        success: { 
          50: '#ECFDF3',
          400:"#1C3B28",
          500: '#038247',
          600: '#026435',
          700: '#01421F',
        },
        selected:{
          50:"#DCB7F5"
        }
      },
      fontSize: {
        'h-s': ['1rem', '1.5rem'],
        'h-m': ['1.25rem', '1.75rem'],
        'h-l': ['1.5rem', '2rem'],
        'h-xl': ['2rem', '2.5rem'],
        'body-s': ['0.875rem', '1.25rem'],
        'body-m': ['1rem', '1.5rem'],
        'body-l': ['1.125rem', '1.75rem'],
        'action-s': ['0.875rem', '1rem'],
        'action-m': ['1rem', '1.25rem'],
        'action-l': ['1.125rem', '1.5rem'],
      },
      borderRadius: {
        '10': '10px',
        '20': '20px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '150': '150ms',
      },
    },
  },
  plugins: [],
}