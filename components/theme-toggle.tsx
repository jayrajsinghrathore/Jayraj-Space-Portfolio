"use client"

import { useState } from "react"
import { Palette } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { name: "dark", color: "#1a1a1a", textColor: "#ffffff" },
    { name: "red", color: "#7f1d1d", textColor: "#ffffff" },
    { name: "blue", color: "#1e3a8a", textColor: "#ffffff" },
    { name: "pink", color: "#831843", textColor: "#ffffff" },
    { name: "orange", color: "#7c2d12", textColor: "#ffffff" },
  ]

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white transition-colors duration-300 relative z-10"
        aria-label="Change theme"
      >
        <Palette size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 p-2 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50"
            style={{ width: "180px" }}
          >
            <div className="grid grid-cols-1 gap-2">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name as any)
                    setIsOpen(false)
                  }}
                  className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                    theme === t.name ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: t.color, border: "2px solid rgba(255,255,255,0.2)" }}
                  ></div>
                  <span className="capitalize" style={{ color: t.textColor }}>
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
