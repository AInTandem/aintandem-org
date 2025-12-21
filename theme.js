// Theme configuration for AInTandem
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#0ea5e9', // cyan-500
      50: '#effffb',
      100: '#d0f6fb',
      200: '#aaedf9',
      300: '#76e1f6',
      400: '#34c3ef',
      500: '#0ea5e9',
      600: '#0a89c9',
      700: '#0a71a6',
      800: '#0d5f88',
      900: '#0f4d6e',
      950: '#0c2d42',
    },
    secondary: {
      DEFAULT: '#3b82f6', // blue-500
      500: '#3b82f6',
      600: '#2563eb',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#0f172a',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#0f172a',
    },
    accent: {
      green: '#10b981',
      red: '#ef4444',
    },
    text: {
      primary: '#ffffff',      // white
      secondary: '#e2e8f0',    // slate-200
      tertiary: '#94a3b8',     // slate-400
      muted: '#64748b',        // slate-500
    },
    background: {
      primary: '#0f172a',      // slate-950
      secondary: '#1e293b',    // slate-900
      tertiary: '#334155',     // slate-800
      card: '#1e293b',         // slate-900/50 (with transparency)
      overlay: 'rgba(15, 23, 42, 0.8)', // slate-950/80 (with transparency)
    },
  },
  
  typography: {
    fontFamily: {
      sans: "'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    fontSize: {
      xs: '0.75rem',       // text-xs
      sm: '0.875rem',      // text-sm
      base: '1rem',        // text-base
      lg: '1.125rem',      // text-lg
      xl: '1.25rem',       // text-xl
      '2xl': '1.5rem',     // text-2xl
      '3xl': '1.875rem',   // text-3xl
      '4xl': '2.25rem',    // text-4xl
      '5xl': '3rem',       // text-5xl
      '6xl': '3.75rem',    // text-6xl
      '7xl': '4.5rem',     // text-7xl
      '8xl': '6rem',       // text-8xl
      '9xl': '8rem',       // text-9xl
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  spacing: {
    // Padding/Margin scales
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    'cyan-sm': '0 1px 2px 0 rgba(14, 165, 233, 0.2)',
    'cyan': '0 4px 6px -1px rgba(14, 165, 233, 0.2), 0 2px 4px -2px rgba(14, 165, 233, 0.2)',
    'cyan-lg': '0 10px 15px -3px rgba(14, 165, 233, 0.2), 0 4px 6px -4px rgba(14, 165, 233, 0.2)',
    'cyan-xl': '0 20px 25px -5px rgba(14, 165, 233, 0.2), 0 8px 10px -6px rgba(14, 165, 233, 0.2)',
  },

  transitions: {
    duration: {
      shortest: '150ms',
      shorter: '250ms',
      short: '300ms',
      standard: '375ms',
      long: '500ms',
      longer: '750ms',
      longest: '1000ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  layout: {
    maxWidth: {
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    section: {
      paddingTop: '6rem',      // pt-24
      paddingBottom: '6rem',    // pb-24
      paddingX: '1.5rem',      // px-6
      maxWidth: '80rem',        // max-w-7xl
    },
  },
};