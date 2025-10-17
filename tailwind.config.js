/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#FFFFFF',
        'bg-2': '#FAFBFC',
        'bg-3': '#F4F6F8',
        'text-primary': '#0B1220',
        'text-secondary': '#4A5568',
        'text-tertiary': '#718096',
        'accent-100': '#DBEAFE',
        'accent-500': '#3B82F6',
        'accent-600': '#2563EB',
        'surface-border': '#E2E8F0',
        'surface-divider': '#CBD5E0',
        'surface-card': 'rgba(255, 255, 255, 0.95)',
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(11, 18, 32, 0.06)',
        'strong': '0 20px 60px rgba(11, 18, 32, 0.12)',
      },
    },
  },
  plugins: [],
}

