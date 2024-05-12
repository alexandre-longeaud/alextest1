/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      maxWidth: {
        '8xl':'60rem',
      },
      margin: {
        '30':'8rem'
      },
    backgroundColor: {
      skin: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    },
    colors: {
      skin: {
        muted: 'var(--muted)',
        muted_foreground: 'var(--muted-foreground)',
        popover: 'var(--popover)',
        popover_foreground: 'var(--popover-foreground)',
        card: 'var(--card)',
        card_foreground: 'var(--card-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        primary: 'var(--primary)',
        primary_foreground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondary_foreground: 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        accent_foreground: 'var(--accent-foreground)',
        destrutive_foreground: 'var(--destrutive-foreground)'
      }
    },
    },
  },
  plugins: [],
}

