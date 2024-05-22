'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import React from 'react'

const NextThemeProvider   = ({children, ...props} : ThemeProviderProps) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default NextThemeProvider;

  