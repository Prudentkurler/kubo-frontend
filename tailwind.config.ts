import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens from AGENT.md
        bg: {
          1: '#FFFFFF',
          2: '#FAFBFC',
          3: '#F4F6F8',
        },
        surface: {
          border: 'rgba(11,18,32,0.08)',
          card: 'rgba(255,255,255,0.95)',
          glass: 'rgba(255,255,255,0.7)',
        },
        text: {
          primary: '#0B1220',
          secondary: '#586273',
          tertiary: '#8B96A5',
        },
        accent: {
          400: '#2E9DFF',
          500: '#007EFF',
          600: '#0066CC',
        },
        clinical: {
          green: '#00C896',
          amber: '#FFB020',
          red: '#FF3B3B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'display-md': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
        body: ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        meta: ['14px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(11,18,32,0.06)',
        'soft-lg': '0 16px 48px rgba(11,18,32,0.08)',
        glow: '0 0 0 4px rgba(0,126,255,0.06)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
