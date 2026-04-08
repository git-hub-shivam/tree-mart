import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);

  return (
    <header className="nav">
      <div className="nav-top-bar">
        <span>Free shipping on orders over ₹999</span>
        <span className="nav-top-link">Help & Support</span>
      </div>

      <div className="nav-main">
        <div className="nav-logo-section">
          <a href="/" className="nav-logo">
            <span className="nav-logo-mark">Tree</span>
            {/* <span className="nav-logo-mark">-</span> */}
            <span className="nav-logo-accent">Mart</span>
          </a>
        </div>

        <div className="nav-search">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
          />
          <button type="button">Search</button>
        </div>

        <div className="nav-actions">
          <a href="/login" className="nav-link">
            <span className="nav-icon">👤</span>
            <span>Sign In</span>
          </a>
          <a href="/orders" className="nav-link nav-hide-sm">
            <span className="nav-icon">📦</span>
            <span>Orders</span>
          </a>
          <a href="/cart" className="nav-cart">
            <span className="nav-icon">🛒</span>
            <span>Cart</span>
            <span className="nav-cart-count">2</span>
          </a>

          <button
            className="nav-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="nav-mobile-line" />
            <span className="nav-mobile-line" />
            <span className="nav-mobile-line" />
          </button>
        </div>
      </div>

      <nav className={`nav-links ${isMobileOpen ? "nav-links-open" : ""}`}>
        <a href="/collections/new" className="nav-link-item">
          New Arrivals
        </a>
        <a href="/collections/men" className="nav-link-item">
          Men
        </a>
        <a href="/collections/women" className="nav-link-item">
          Women
        </a>
        <a href="/collections/electronics" className="nav-link-item">
          Electronics
        </a>
        <a href="/collections/home" className="nav-link-item">
          Home & Living
        </a>
        <a href="/offers" className="nav-link-item nav-link-highlight">
          Offers
        </a>
      </nav>
    </header>
  );
}
