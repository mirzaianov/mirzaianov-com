'use client';

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // next-themes injects an inline script to avoid theme flashing on load.
  // React/Next dev mode warns about that script, but production behavior is expected.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
