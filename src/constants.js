export const COLORS = {
  white: 'var(--white)',
  gray: {
    100: 'var(--gray-100)',
    300: 'var(--gray-300)',
    500: 'var(--gray-500)',
    700: 'var(--gray-700)',
    900: 'var(--gray-900)',
  },
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
}
export const QUERIES = {
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}
