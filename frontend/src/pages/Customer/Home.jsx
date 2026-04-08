// src/pages/customer/Home.jsx
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>Grow Green with TreeMart 🌱</h1>
          <p>
            Shop plants, gardening tools, soil, fertilizers and everything your
            garden needs.
          </p>
          <button className="home-btn-primary">Shop Now</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="home-section">
        <h2 className="home-section-title">Shop by Category</h2>

        <div className="home-categories">
          <div className="home-category-card">🌿 Plants</div>
          <div className="home-category-card">🪴 Pots & Planters</div>
          <div className="home-category-card">🌱 Seeds</div>
          <div className="home-category-card">🧪 Fertilizers</div>
          <div className="home-category-card">🪨 Soil & Mixes</div>
          <div className="home-category-card">🛠️ Tools</div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-section">
        <h2 className="home-section-title">Featured Products</h2>

        <div className="home-products">
          {[
            {
              name: "Indoor Plant Combo (3 pcs)",
              price: 899,
            },
            {
              name: "Organic Neem Fertilizer 1kg",
              price: 299,
            },
            {
              name: "Terracotta Planter Set",
              price: 749,
            },
            {
              name: "Cocopeat Block 5kg",
              price: 499,
            },
          ].map((p, index) => (
            <div className="home-product-card" key={index}>
              <div className="home-product-img">🌿</div>
              <h3>{p.name}</h3>
              <p className="home-price">₹ {p.price}</p>
              <button className="home-btn-secondary">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="home-offer">
        <h2>🌟 Flat 20% OFF on Gardening Essentials</h2>
        <p>Limited time offer. Grow more, spend less!</p>
        <button className="home-btn-primary">Explore Offers</button>
      </section>

      {/* WHY TREEMART */}
      <section className="home-section">
        <h2 className="home-section-title">Why Choose TreeMart?</h2>

        <div className="home-features">
          <div className="home-feature">🚚 Fast Delivery</div>
          <div className="home-feature">🌱 Eco Friendly Products</div>
          <div className="home-feature">💰 Best Prices</div>
          <div className="home-feature">⭐ Trusted Sellers</div>
        </div>
      </section>
    </div>
  );
}
