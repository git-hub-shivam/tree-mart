// src/pages/customer/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ProductDetail.css";

/* Dummy data (later comes from API) */
const PRODUCTS = [
  {
    id: "1",
    name: "Indoor Plant Combo (3 pcs)",
    price: 899,
    description:
      "A perfect indoor plant combo to freshen your home and improve air quality.",
    highlights: [
      "Low maintenance plants",
      "Improves indoor air quality",
      "Ideal for living rooms",
      "Eco-friendly packaging",
    ],
  },
  {
    id: "2",
    name: "Organic Neem Fertilizer 1kg",
    price: 299,
    description:
      "100% organic neem-based fertilizer for healthy plant growth.",
    highlights: [
      "Chemical free",
      "Boosts soil fertility",
      "Safe for all plants",
      "Improves root strength",
    ],
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="pdp">
      {/* Left: Images */}
      <div className="pdp-images">
        <div className="pdp-main-img">🌿</div>
        <div className="pdp-thumb-row">
          <span className="pdp-thumb">🌿</span>
          <span className="pdp-thumb">🪴</span>
          <span className="pdp-thumb">🌱</span>
        </div>
      </div>

      {/* Right: Info */}
      <div className="pdp-info">
        <h1>{product.name}</h1>
        <p className="pdp-price">₹ {product.price}</p>

        <p className="pdp-description">{product.description}</p>

        {/* Quantity */}
        <div className="pdp-quantity">
          <span>Quantity:</span>
          <div className="pdp-qty-controls">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
        </div>

        {/* Actions */}
        <div className="pdp-actions">
          <button className="pdp-btn-primary">Add to Cart</button>
          <button className="pdp-btn-secondary">Buy Now</button>
        </div>

        {/* Highlights */}
        <div className="pdp-highlights">
          <h3>Product Highlights</h3>
          <ul>
            {product.highlights.map((h, index) => (
              <li key={index}>✔ {h}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
