// src/pages/customer/ProductList.jsx
import { useState } from "react";
import "./ProductList.css";
import {useNavigate} from "react-router-dom";


const PRODUCTS = [
  {
    id: 1,
    name: "Indoor Plant Combo (3 pcs)",
    price: 899,
    category: "Plants",
  },
  {
    id: 2,
    name: "Organic Neem Fertilizer 1kg",
    price: 299,
    category: "Fertilizers",
  },
  {
    id: 3,
    name: "Terracotta Planter Set",
    price: 749,
    category: "Pots",
  },
  {
    id: 4,
    name: "Cocopeat Block 5kg",
    price: 499,
    category: "Soil",
  },
  {
    id: 5,
    name: "Gardening Tool Kit",
    price: 1199,
    category: "Tools",
  },
];

export default function ProductList() {
const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredProducts = PRODUCTS
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="plp">
      {/* Header */}
      <div className="plp-header">
        <div>
          <h1>Products</h1>
          <p>{filteredProducts.length} items found</p>
        </div>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="plp-layout">
        {/* Filters */}
        <aside className="plp-filters">
          <h3>Categories</h3>

          {["All", "Plants", "Fertilizers", "Pots", "Soil", "Tools"].map(
            (cat) => (
              <label key={cat} className="plp-filter-item">
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                />
                {cat}
              </label>
            )
          )}
        </aside>

        {/* Products */}
        <section className="plp-products">
          {filteredProducts.map((product) => (
            <div className="plp-card" key={product.id}>
              <div className="plp-img">🌿</div>
              <h3>{product.name}</h3>
              <p className="plp-price">₹ {product.price}</p>
              <button onClick={()=> navigate(`/products/${product.id}`)} className="plp-btn">View Product</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
