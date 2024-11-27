export const tokens = {
  colors: {
    primary: {
      blue: 'var(--primary-blue)',
      purple: 'var(--primary-purple)'
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      light: 'var(--text-light)',
      dark: 'var(--text-dark)'
    },
    background: {
      white: 'var(--bg-white)',
      gray: 'var(--bg-gray)',
      hover: 'var(--bg-hover)'
    },
    gradients: {
      icon: {
        1: 'var(--gradient-icon-1)',
        2: 'var(--gradient-icon-2)',
        3: 'var(--gradient-icon-3)',
        4: 'var(--gradient-icon-4)',
        5: 'var(--gradient-icon-5)',
        6: 'var(--gradient-icon-6)'
      },
      banner: 'var(--gradient-banner)',
      bgGray: 'var(--gradient-bg-gray)'
    }
  },
  spacing: {
    xs: 'var(--spacing-xs)',   // 4px
    sm: 'var(--spacing-sm)',   // 8px
    md: 'var(--spacing-md)',   // 16px
    lg: 'var(--spacing-lg)',   // 24px
    xl: 'var(--spacing-xl)',   // 32px
    xxl: 'var(--spacing-xxl)'  // 40px
  },
  typography: {
    fontFamily: {
      base: 'Inter, sans-serif'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem' // 30px
    }
  },
  shadows: {
    light: 'var(--shadow-light)',
    medium: 'var(--shadow-medium)'
  }
};