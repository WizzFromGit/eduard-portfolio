import { createContext, useContext } from 'react'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: 'light', toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
