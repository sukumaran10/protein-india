import React, { useEffect } from 'react'
import NutritionBar from './NutritionBar'

export default function FoodDetail({ food, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={e => e.stopPropagation()}
        style={{ '--card-color': food.color, '--card-light': food.lightColor }}
      >
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header" style={{ background: food.lightColor }}>
          <img
              className="detail-food-image"
              src={food.image}
              alt={food.name}
          />
          <div>
            <span className="modal-badge">{food.badge}</span>
            <h2 className="modal-name">{food.name}</h2>
            <p className="modal-tamil">{food.tamil} • {food.category}</p>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{food.description}</p>

          <div className="modal-stats">
            <div className="modal-stat" style={{ background: food.lightColor }}>
              <span className="mstat-icon">💪</span>
              <span className="mstat-val" style={{ color: food.color }}>{food.protein}</span>
              <span className="mstat-label">Protein</span>
            </div>
            <div className="modal-stat" style={{ background: food.lightColor }}>
              <span className="mstat-icon">🔥</span>
              <span className="mstat-val" style={{ color: food.color }}>{food.calories}</span>
              <span className="mstat-label">Calories</span>
            </div>
            <div className="modal-stat" style={{ background: food.lightColor }}>
              <span className="mstat-icon">📏</span>
              <span className="mstat-val" style={{ color: food.color, fontSize:'13px' }}>{food.per}</span>
              <span className="mstat-label">Serving</span>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">📊 Protein Score</h4>
            <NutritionBar value={food.proteinValue} color={food.color} />
            <p className="bar-label">{food.proteinValue}/100</p>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">✅ Key Benefits</h4>
            <div className="benefits-grid">
              {food.benefits.map((b, i) => (
                <span key={i} className="benefit-tag" style={{ borderColor: food.color, color: food.color }}>
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">🍽️ Popular Indian Recipes</h4>
            <p className="recipe-text">{food.recipe}</p>
          </div>

          <div className="modal-tip" style={{ background: food.lightColor, borderLeft: `4px solid ${food.color}` }}>
            <span className="tip-icon">💡</span>
            <div>
              <strong>Pro Tip:</strong> {food.tip}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}