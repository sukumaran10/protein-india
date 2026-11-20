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
    per: "per 100 g dry",
    color: "#FF6B35",
    lightColor: "#FFF3EE",
    category: "Legumes",
    benefits: ["Provides plant protein", "Contains dietary fiber", "Used in everyday Indian meals", "Works in soups and dals"],
    recipe: "Dal Tadka, Moong Dal Khichdi, Sambar",
    description: "Lentils are the backbone of Indian cuisine. Varieties like moong, masoor, toor, urad, and chana dal are daily staples packed with protein, iron, and fiber.",
    tip: "Serve with rice or roti as part of a varied meal.",
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
    per: "per 100 g dry",
    color: "#F4A261",
    lightColor: "#FFF8F0",
    category: "Legumes",
    benefits: ["Provides plant protein", "Contains dietary fiber", "A source of folate", "Versatile in Indian recipes"],
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
    per: "per 100 g as sold",
    color: "#E76F51",
    lightColor: "#FFF1EE",
    category: "Dairy",
    benefits: ["Dairy-based protein", "Contains calcium", "Can be grilled or added to curries", "Vegetarian option"],
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
    per: "per 100 g dry",
    color: "#2A9D8F",
    lightColor: "#EDFAF8",
    category: "Soy",
    benefits: ["Highest listed by dry weight", "Plant-based protein", "Used in curries and pulao", "Soak before cooking"],
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
    per: "per 100 g dry",
    color: "#9B2335",
    lightColor: "#FFF0F2",
    category: "Legumes",
    benefits: ["Provides plant protein", "Contains dietary fiber", "A source of folate", "Popular in North Indian meals"],
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
    per: "per 100 g as sold",
    color: "#457B9D",
    lightColor: "#EEF4F8",
    category: "Soy",
    benefits: ["Plant-based protein", "Vegan-friendly", "Available in different textures", "Useful in savory dishes"],
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
    per: "per 100 g fresh",
    color: "#52B788",
    lightColor: "#EDFAF3",
    category: "Vegetables",
    benefits: ["Provides plant protein", "Contains dietary fiber", "A source of vitamins", "Easy to add to meals"],
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
    per: "per 100 g raw",
    color: "#C77DFF",
    lightColor: "#F5EEFF",
    category: "Nuts & Seeds",
    benefits: ["Provides plant protein", "Energy-dense", "Contains unsaturated fats", "Common in Indian snacks"],
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
  per: "per 100 g dry",
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
    protein: "21g",
    proteinPer100g: 21,
    calories: "579 kcal",
    per: "per 100 g raw",
    color: "#8B4513",
    lightColor: "#FFF8F5",
    category: "Nuts & Seeds",
    benefits: ["Provides plant protein", "Contains vitamin E", "Contains unsaturated fats", "Useful in snacks and recipes"],
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
        <div className="intro-section" id="nutrition">
          <h2 className="intro-title">High-protein vegetarian foods in India: a practical guide</h2>
          <p className="intro-text">
            Find high-protein vegetarian foods commonly available across India. Compare the
            estimated protein and calories per 100 g, browse familiar Indian recipes, and
            get simple preparation tips for dals, beans, dairy, soy, vegetables and nuts.
          </p>
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-num">10</span>
              <span className="stat-label">Protein-rich foods</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">52g</span>
              <span className="stat-label">Soya chunks, per 100 g dry</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">100%</span>
              <span className="stat-label">Vegetarian</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">₹</span>
              <span className="stat-label">Everyday ingredients</span>
            </div>
          </div>
          <p className="intro-text">
            In this list, dry soya chunks have the highest displayed estimate at about 52 g
            protein per 100 g dry. The cards show the food and measurement basis so you can
            compare dry staples with foods measured as sold or fresh.
          </p>
        </div>

        <section aria-label="Search and filter protein-rich vegetarian foods" id="foods">
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
        </section>

        <section className="intro-section" aria-labelledby="protein-guide-title" id="recipes">
          <h2 className="intro-title" id="protein-guide-title">Indian vegetarian protein sources and meal ideas</h2>
          <p className="intro-text">
            Build meals around dal, chana, rajma, peas, tofu or soya chunks, and add paneer,
            curd, peanuts or nuts where they suit your diet. Pair pulses with rice or roti for
            a varied meal, and rotate protein sources through the week. Soak and cook dried
            beans thoroughly, and choose portions that fit your energy needs and preferences.
          </p>
          <p className="intro-text">
            Nutrition values shown here are approximate estimates per 100 g and can vary by
            variety, brand and preparation. Dry and cooked foods have very different water
            content, so compare like with like and check the product label when available.
            This guide is for general education and is not a substitute for personalized
            advice from a qualified health professional. For an Indian food-composition
            reference, see the <a href="https://www.nin.res.in/ebooks/IFCT2017_16122024.pdf" target="_blank" rel="noreferrer">ICMR-NIN Indian Food Composition Tables</a>.
          </p>
        </section>

        <section className="intro-section" aria-labelledby="protein-faq-title" id="questions">
          <h2 className="intro-title" id="protein-faq-title">Common questions about vegetarian protein foods</h2>
          <h3>Which vegetarian food has the most protein in this list?</h3>
          <p className="intro-text">
            Dry soya chunks have the highest displayed estimate here: about 52 g per 100 g
            dry. A 25 g dry portion works out to about 13 g using that estimate; check the
            nutrition label on your packet because brands can differ.
          </p>
          <h3>Are the protein values for cooked foods?</h3>
          <p className="intro-text">
            The basis is shown on each food card. Dry pulses and soya chunks are listed by
            dry weight, while other foods are measured as sold or fresh. Cooking adds water
            to pulses, so their protein per 100 g cooked is lower than the dry-weight figure.
          </p>
          <h3>Which options in this guide are vegan?</h3>
          <p className="intro-text">
            Soya chunks, tofu, dals, chickpeas, kidney beans, horse gram, peas, peanuts and
            almonds are plant-based choices. Paneer is vegetarian but is made from dairy.
          </p>
        </section>

      </main>

      {selectedFood && (
        <FoodDetail food={selectedFood} onClose={() => setSelectedFood(null)} />
      )}

      <Footer />
    </div>
  )
}
