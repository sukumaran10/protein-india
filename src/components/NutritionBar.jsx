import React, { useEffect, useState } from 'react'

export default function NutritionBar({ value, color }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="nutrition-bar-bg">
      <div
        className="nutrition-bar-fill"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          transition: 'width 1s ease'
        }}
      />
    </div>
  )
}