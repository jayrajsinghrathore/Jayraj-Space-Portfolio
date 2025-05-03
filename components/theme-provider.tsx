"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeType = "dark" | "red" | "blue" | "pink" | "orange"

type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("dark")

  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem("theme") as ThemeType
    if (savedTheme && ["dark", "red", "blue", "pink", "orange"].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage and apply theme class to document
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
