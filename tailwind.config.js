/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": 'var(--background)',
        "foreground": 'var(--foreground)',
        "card": 'var(--card)',
        "popover": "var(--popover)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "accent": "var(--accent)",
        "destructive": "var(--destructive)",
        "border": "var(--border)",
        "input": "var(--input)",
        "ring": "var(--ring)",
        "card-foreground": "var(--card-foreground)",
        "popover-foreground": "var(--popover- foreground)",
        "secondary-foreground": "var(--secondary- foreground)",
        "primary-foreground": "var(--primary- foreground)",
        "accent-foreground": "var(--accent-foreground)",
        "destructive-foreground": "var(--destructive-foreground)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-primary": "var(--sidebar-primary)",
        "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}