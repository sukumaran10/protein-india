import React, { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🥗</span>
          <div>
            <span className="logo-title">ProteinIndia</span>
            <span className="logo-sub">Health & Wellness</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#top" className="nav-link">Home</a>
          <a href="#nutrition" className="nav-link">Nutrition guide</a>
          <a href="#recipes" className="nav-link">Meal ideas</a>
        </nav>
      </div>
      <div className="hero-banner">
        <div className="hero-content">
          <div className="hero-badge">🇮🇳 Made for India</div>
          <h1 className="hero-title" id="top">
            10 High-Protein<br />
            <span className="hero-highlight">Vegetarian Foods</span>
            <br />in India
          </h1>
          <p className="hero-subtitle">
            Compare protein in familiar Indian foods, find meal inspiration and explore practical nutrition tips.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">🫘 Dal</span>
            <span className="hero-tag">🧀 Paneer</span>
            <span className="hero-tag">🥜 Peanuts</span>
            <span className="hero-tag">🌱 Tofu</span>
          </div>
        </div>
        <div className="hero-emoji-cloud">
          <span className="float-emoji" style={{animationDelay:'0s'}}>🫘</span>
          <span className="float-emoji" style={{animationDelay:'0.5s'}}>🧀</span>
          <span className="float-emoji" style={{animationDelay:'1s'}}>🥜</span>
          <span className="float-emoji" style={{animationDelay:'1.5s'}}>🌾</span>
          <span className="float-emoji" style={{animationDelay:'2s'}}>🥙</span>
        </div>
      </div>
    </header>
  )
}
