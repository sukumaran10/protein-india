import React from 'react'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search foods... (e.g. Dal, Paneer, Chana)"
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