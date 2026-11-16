import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FoodCard from './components/FoodCard'
import FoodDetail from './components/FoodDetail'
import Footer from './components/Footer'

const foodsData = [
  {
    id: 1,
    name: "Moong Dal",
    tamil: "பாசிப்பருப்பு",
    image: "/images/moongdal.jpg",
    emoji: "🫘",
    protein: "24g",
    proteinPer100g: 24,
    calories: "340 kcal",
    per: "per 100g",
    color: "#FF6B35",
    lightColor: "#FFF3EE",
    category: "Legumes",
    benefits: ["High in fiber", "Rich in iron", "Good for heart health", "Aids digestion"],
    recipe: "Dal Tadka, Moong Dal Khichdi, Sambar",
    description: "Lentils are the backbone of Indian cuisine. Varieties like moong, masoor, toor, urad, and chana dal are daily staples packed with protein, iron, and fiber.",
    tip: "Pair with rice or roti for a complete amino acid profile.",
    badge: "🏆 Daily Staple"
  },
  {
    id: 2,
    name: "Chickpeas (Chana)",
    tamil: "கொண்டைக்கடலை",
    image: "/images/chana.jpg",
    emoji: "🥙",
    protein: "20g",
    proteinPer100g: 20,
    calories: "378 kcal",
    per: "per 100g",
    color: "#F4A261",
    lightColor: "#FFF8F0",
    category: "Legumes",
    benefits: ["High in fiber", "Controls blood sugar", "Rich in folate", "Supports weight loss"],
    recipe: "Chole Bhature, Chana Masala, Chaat",
    description: "Be it black chana or kabuli chana, chickpeas are protein-rich superfoods. Boiled or sprouted, they add great nutrition to meals.",
    tip: "Sprouting chickpeas increases nutrient absorption significantly.",
    badge: "⭐ Superfood"
  },
  {
    id: 3,
    name: "Paneer",
    tamil: "பனீர்",
    image: "/images/paneer.jpg",
    emoji: "🧀",
    protein: "18-21g",
    proteinPer100g: 19,
    calories: "280-315 kcal",
    per: "per 100g",
    color: "#E76F51",
    lightColor: "#FFF1EE",
    category: "Dairy",
    benefits: ["Complete protein", "Rich in calcium", "Good for bones", "Muscle building"],
    recipe: "Paneer Tikka, Palak Paneer, Paneer Bhurji",
    description: "Paneer is the most beloved vegetarian protein in India. It contains all 9 essential amino acids and is a slow-digesting casein protein.",
    tip: "Homemade paneer from low-fat milk is healthier and more affordable.",
    badge: "💪 Muscle Booster"
  },
  {
    id: 4,
    name: "Soya Chunks",
    tamil: "சோயா துண்டுகள்",
    emoji: "🟤",
    image: "/images/soya.jpg",
    protein: "52g",
    proteinPer100g: 52,
    calories: "345 kcal",
    per: "per 100g",
    color: "#2A9D8F",
    lightColor: "#EDFAF8",
    category: "Soy",
    benefits: ["Highest plant protein", "Complete protein", "Low fat", "Supports muscle gain"],
    recipe: "Soya Pulao, Soya Curry, Soya Keema",
    description: "Soya chunks (like Nutrela) are extruded from defatted soy flour, making them incredibly protein-dense. A small 25g dry serving gives about 13g of protein.",
    tip: "Soak in warm water before cooking to improve texture and digestion.",
    badge: "🥇 Highest Protein"
  },
  {
    id: 5,
    name: "Kidney Beans (Rajma)",
    tamil: "ராஜமா",
    emoji: "🫘",
    image: "/images/rajma.jpg",
    protein: "22g",
    proteinPer100g: 22,
    calories: "340 kcal",
    per: "per 100g",
    color: "#9B2335",
    lightColor: "#FFF0F2",
    category: "Legumes",
    benefits: ["Rich in folate", "High in iron", "Controls cholesterol", "Good for gut health"],
    recipe: "Rajma Chawal, Rajma Masala, Rajma Soup",
    description: "Rajma (kidney beans) is a beloved North Indian dish. Packed with fiber, folate, and iron alongside protein, it is a wholesome meal in itself.",
    tip: "Always soak overnight and boil well to remove harmful lectins.",
    badge: "❤️ North India Favorite"
  },
  {
    id: 6,
    name: "Tofu",
    tamil: "சோயா பன்னீர்",
    emoji: "🍱",
    image: "/images/tofu.jpg",
    protein: "15-18g",
    proteinPer100g: 16,
    calories: "144 kcal",
    per: "per 100g",
    color: "#457B9D",
    lightColor: "#EEF4F8",
    category: "Soy",
    benefits: ["Complete protein", "Low calorie", "Good for weight loss", "Vegan-friendly"],
    recipe: "Tofu Bhurji, Tofu Curry, Tofu Tikka",
    description: "Tofu (soy paneer) is made from soy milk and is a vegan complete protein. Firm tofu is lowest in calories yet highest in protein — great for weight loss.",
    tip: "Press tofu before cooking to remove water and get a crispier texture.",
    badge: "🌱 Vegan Choice"
  },
  {
    id: 7,
    name: "Green Peas (Matar)",
    tamil: "பட்டாணி",
    emoji: "🟢",
    image: "/images/peas.jpg",
    protein: "7g",
    proteinPer100g: 7,
    calories: "83 kcal",
    per: "per 100g",
    color: "#52B788",
    lightColor: "#EDFAF3",
    category: "Vegetables",
    benefits: ["Good source of vitamins", "Rich in antioxidants", "High fiber", "Supports immunity"],
    recipe: "Matar Paneer, Pulao, Matar Soup, Poha",
    description: "Green peas are one of the most protein-rich vegetables in India. They are versatile and can be added to virtually any dish for a protein boost.",
    tip: "Frozen peas retain almost the same nutrition as fresh peas.",
    badge: "🌿 Hidden Gem"
  },
  {
    id: 8,
    name: "Peanuts",
    tamil: "நிலக்கடலை",
    emoji: "🥜",
    image: "/images/peanuts.jpg",
    protein: "26g",
    proteinPer100g: 26,
    calories: "567 kcal",
    per: "per 100g",
    color: "#C77DFF",
    lightColor: "#F5EEFF",
    category: "Nuts & Seeds",
    benefits: ["Budget-friendly", "High energy", "Rich in healthy fats", "Good for heart"],
    recipe: "Peanut Chutney, Chikki, Peanut Butter Toast",
    description: "Peanuts are one of the most budget-friendly, protein-rich foods in India at under ₹100 per kg. With 26g protein per 100g, they rival many expensive protein sources.",
    tip: "Opt for boiled or roasted peanuts over fried for maximum health benefits.",
    badge: "💰 Budget King"
  },
  {
  id: 9,
  name: "Horse Gram (Kollu)",
  tamil: "கொள்ளு",
  image: "/images/horsegram.jpg",
  emoji: "🌰",
  protein: "22g",
  proteinPer100g: 22,
  calories: "321 kcal",
  per: "per 100g",
  color: "#A66A3F",
  lightColor: "#FFF5EB",
  category: "Legumes",
  benefits: [
    "Rich in plant protein",
    "High in dietary fibre",
    "Contains iron",
    "Traditional South Indian food"
  ],
  recipe: "Kollu Rasam, Kollu Sundal, Kollu Podi",
  description: "Horse gram, known as kollu in Tamil, is a traditional pulse used in Tamil Nadu. It can be prepared as rasam, sundal, soup and podi.",
  tip: "Soak and cook thoroughly before eating.",
  badge: "🌿 Tamil Nadu Favourite"
  },
  {
    id: 10,
    name: "Almonds",
    tamil: "பாதாம்",
    image: "/images/almonds.jpg",
    emoji: "🌰",
    protein: "21",
    proteinPer100g: 21,
    calories: "579 kcal",
    per: "per 100g",
    color: "#8B4513",
    lightColor: "#FFF8F5",
    category: "Nuts & Seeds",
    benefits: ["Rich in Vitamin E", "Heart healthy", "Brain boosting", "Rich in omega-3"],
    recipe: "Almond Milk, Trail Mix, Almond Butter, Chikki",
    description: "Almonds, chia seeds, flax seeds (alsi), pumpkin seeds, and sesame (til) are all excellent protein sources. They also provide healthy fats, omega-3s, and micronutrients.",
    tip: "Soak almonds overnight for better nutrient absorption.",
    badge: "🧠 Brain Food"
  }
]

export default function App() {
  const [selectedFood, setSelectedFood] = useState(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Legumes', 'Dairy', 'Soy', 'Vegetables', 'Nuts & Seeds', 'Grains']

  const rankedFoods = [...foodsData].sort(
    (a, b) => b.proteinPer100g - a.proteinPer100g
  )

  const filtered = rankedFoods.filter(f => {
    const matchSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.tamil.includes(search) ||
      f.category.toLowerCase().includes(search.toLowerCase())

    const matchCat =
      activeCategory === 'All' || f.category === activeCategory

    return matchSearch && matchCat
  })

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="intro-section">
          <h2 className="intro-title">💪 Fuel Your Body The Indian Way</h2>
          <p className="intro-text">
            Discover the top 10 protein-rich vegetarian foods available across India —
            affordable, delicious, and incredibly nutritious. Click any card to explore details!
          </p>
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-num">10</span>
              <span className="stat-label">Power Foods</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">52g</span>
              <span className="stat-label">Max Protein</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">100%</span>
              <span className="stat-label">Vegetarian</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">₹</span>
              <span className="stat-label">Budget Friendly</span>
            </div>
          </div>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="results-count">
          Showing <strong>{filtered.length}</strong> of {foodsData.length} foods
        </div>


        <div className="food-grid">
          {filtered.length > 0 ? filtered.map(food => (
            <FoodCard
              key={food.id}
              food={food}
              rank={rankedFoods.findIndex(f => f.id === food.id) + 1}
              onClick={() => setSelectedFood(food)}
            />
          )) : (
            <div className="no-results">
              <span>🔍</span>
              <p>No foods found. Try a different search!</p>
            </div>
          )}
        </div>

      </main>

      {selectedFood && (
        <FoodDetail food={selectedFood} onClose={() => setSelectedFood(null)} />
      )}

      <Footer />
    </div>
  )
}