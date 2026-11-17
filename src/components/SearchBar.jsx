import React from 'react'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search vegetarian protein foods (e.g. dal, paneer, chana)"
          aria-label="Search vegetarian protein foods by name or category"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        {search && (
          <button className="clear-btn" onClick={() => setSearch('')}>✕</button>
        )}
      </div>
    </div>
  )
}
