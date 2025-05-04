"use client"

import { useState } from "react"

interface CubeLogoProps {
  size?: number
  className?: string
}

export default function CubeLogo({ size = 80, className = "" }: CubeLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isHovered ? "rotate3d(1, 1, 0, 15deg)" : "rotate3d(0, 0, 0, 0deg)",
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Exact paths matching the original logo */}
        <path
          d="M120 40L40 80V160L120 200L200 160V80L120 40Z"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M120 40V120L200 80" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M120 120V200L40 160" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
