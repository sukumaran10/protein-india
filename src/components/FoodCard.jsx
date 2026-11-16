import React, { useState } from 'react'

export default function FoodCard({ food, onClick , rank  }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`food-card ${hovered ? 'hovered' : ''}`}
      style={{ '--card-color': food.color, '--card-light': food.lightColor }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-top" style={{ background: food.lightColor }}>
        <span className="card-number">#{rank}</span>
        <span className="card-badge">{food.badge}</span>
        <img
            className="food-image"
            src={food.image}
            alt={food.name}
            onError={(e) => {
            e.currentTarget.style.display = 'none'
            }}
        />
        <span className="card-category">{food.category}</span>
      </div>

      <div className="card-body">
        <h3 className="card-name">{food.name}</h3>
        <p className="card-tamil">{food.tamil}</p>

        <div className="card-protein-row">
          <span className="protein-label">Protein</span>
          <span className="protein-value" style={{ color: food.color }}>
            {food.protein}
          </span>
        </div>

        <div className="card-meta">
          <span className="meta-item">🔥 {food.calories}</span>
          <span className="meta-item">📏 {food.per}</span>
        </div>

        <button
          className="card-btn"
          style={{ background: food.color }}
        >
          View Details →
        </button>
      </div>
    </div>
  )
}