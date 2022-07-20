// tailwind.config.js

const colors = require('tailwindcss/colors')

/*
  Manrope google font - 300, 500, 700
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&display=swap" rel="stylesheet"></link>
*/

const getColor = (colorVar, { opacityVariable, opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${colorVar + '-rgb'}), ${opacityValue})`
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(${colorVar + '-rgb'}), var(${opacityVariable}, 1))`
  }

  return `rgb(var(${colorVar}))`
}

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    outline: false,
  },
  theme: {
    boxShadow: {
      default: '0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1)',
      md: '0px 0px 4px rgba(0, 0, 0, 0.06), 0px 0px 6px rgba(0, 0, 0, 0.1)',
      lg: '0px 0px 15px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.05)',
      xl: '0px 0px 25px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.04)',
      '2xl': '0px 0px 50px rgba(0, 0, 0, 0.25)',
      '4xl': '0px 0px 50px rgba(0, 0, 0, 0.5)',
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    fontSize: {
      xs: ['11px', '13px'],
      sm: ['13px', '16px'],
      base: ['15px', '26px'],
      lg: ['18px', '28px'],
      xl: ['22px', '32px'],
      '2xl': ['26px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
    },
    colors: {
      primary: {
        light: '#3B5FE0',
        // DEFAULT: (params) => getColor('--color-primary', params),
        DEFAULT: '#4589EF',
        hover: '#4574EF',
        active: '#4668E0',
        disabled: '#A0B2F0',
        dark: '#3B5FE0',
      },
      negative: {
        // DEFAULT: (params) => getColor('--color-negative', params),
        DEFAULT: '#F35B5B',
      },
      black: '#2B3139',
      secondary: '#439CEF',
      // gray: '#D4D4D8',
      white: '#ffffff',
      warn: '#F9B249',
      success: '#41C950',
      // gray: {
      //   light: colors.gray[300],
      //   DEFAULT: colors.gray[400],
      //   dark: colors.gray[500],
      // },
      gray: {
        // ...colors.gray,
        // changed to coolgray from Design guide
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        850: '#1B2431',
        900: '#1B2431',
        // 50: (params) => getColor('--color-gray-50', params),
        // 100: (params) => getColor('--color-gray-100', params),
        // 200: (params) => getColor('--color-gray-200', params),
        // 300: (params) => getColor('--color-gray-300', params),
        // 400: (params) => getColor('--color-gray-400', params),
        // 500: (params) => getColor('--color-gray-500', params),
        // 600: (params) => getColor('--color-gray-600', params),
        // 700: (params) => getColor('--color-gray-700', params),
        // 800: (params) => getColor('--color-gray-800', params),
        // 900: (params) => getColor('--color-gray-900', params),
      },
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      accent: {
        dark: '#2a2b2f',
        extreme: '#232529',
      },
      dim: {
        light: colors.gray[100],
        border: colors.gray[200],
        sub: colors.gray[400],
        DEFAULT: colors.gray[500],
      },
      complimentary: '#eeeeff',
    },
    extend: {
      space: {
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
      },
      padding: {
        sm: 'var(--padding-sm)',
        md: 'var(--padding-md)',
        lg: 'var(--padding-lg)',
      },
      rounded: {
        DEFAULT: 'var(--rounded-base)',
        sm: 'var(--rounded-sm)',
        md: 'var(--rounded-md)',
        lg: 'var(--rounded-lg)',
        xl: 'var(--rounded-xl)',
      },
      borderRadius: {
        widget: 'var(--radius-widget)',
      },
    },
  },
  plugins: [
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      ringWidth: ['hover'],
      ringColor: ['hover', 'active'],
      zIndex: ['hover'],
    },
  },
}
