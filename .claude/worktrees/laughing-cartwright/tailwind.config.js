export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#0F172A',
          900: '#1E293B',
          500: '#3B82F6',
        },
        secondary: {
          500: '#10B981',
        },
        light: {
          50: '#F1F5F9',
          100: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
