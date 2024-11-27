export const spacing = {
  px: (value) => `${value}px`,
  rem: (value) => `${value}rem`,
  em: (value) => `${value}em`,
  
  getSpacing: (key) => {
    const spacings = {
      xs: '4px',
      sm: '8px',
      md: '16px', 
      lg: '24px',
      xl: '32px',
      xxl: '40px'
    };
    return spacings[key] || key;
  }
};