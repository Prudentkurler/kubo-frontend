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
        // Dashboard Colors - Pure Black Theme
        dashboard: {
          bg: {
            main: '#000000',
          },
          surface: {
            DEFAULT: '#0a0a0a',
            elevated: '#141414',
          },
          border: {
            DEFAULT: '#1f1f1f',
            hover: '#2a2a2a',
          },
          text: {
            high: '#ffffff',
            medium: '#a3a3a3',
            disabled: '#525252',
          },
          primary: {
            DEFAULT: '#3b82f6',
            hover: '#60a5fa',
          },
          secondary: {
            DEFAULT: '#8b5cf6',
            hover: '#a78bfa',
          },
          success: {
            DEFAULT: '#10b981',
            hover: '#34d399',
            bg: 'rgba(16, 185, 129, 0.12)',
            border: 'rgba(16, 185, 129, 0.24)',
          },
          warning: {
            DEFAULT: '#f59e0b',
            hover: '#fbbf24',
            bg: 'rgba(245, 158, 11, 0.12)',
            border: 'rgba(245, 158, 11, 0.24)',
          },
          danger: {
            DEFAULT: '#ef4444',
            hover: '#f87171',
            bg: 'rgba(239, 68, 68, 0.12)',
            border: 'rgba(239, 68, 68, 0.24)',
          },
          info: {
            DEFAULT: '#06b6d4',
            hover: '#22d3ee',
            bg: 'rgba(6, 182, 212, 0.12)',
            border: 'rgba(6, 182, 212, 0.24)',
          },
          chart: {
            1: '#3b82f6',  // Blue
            2: '#8b5cf6',  // Purple
            3: '#ec4899',  // Pink
            4: '#f59e0b',  // Amber
            5: '#10b981',  // Emerald
            6: '#06b6d4',  // Cyan
          },
          accent: {
            cyan: '#06b6d4',
            purple: '#8b5cf6',
            pink: '#ec4899',
            green: '#10b981',
            orange: '#f97316',
          },
        },
        // Light Mode Dashboard Colors
        'dashboard-light': {
          bg: {
            main: '#F8F9FA',
            surface: '#FFFFFF',
          },
          border: '#E5E7EB',
          text: {
            high: '#111827',
            medium: '#4B5563',
            disabled: '#9CA3AF',
          },
          primary: '#2563EB',
          secondary: '#7C3AED',
          success: '#16A34A',
          warning: '#D97706',
          danger: '#DC2626',
          chart: {
            1: '#2563EB',
            2: '#0D9488',
            3: '#DB2777',
            4: '#CA8A04',
            5: '#EA580C',
            6: '#7C3AED',
          },
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
