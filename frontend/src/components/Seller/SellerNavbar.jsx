// src/components/Seller/SellerNavbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";   // ⬅️ add this
import "./SellerNavbar.css";

export default function SellerNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen((prev) => !prev);

  return (
    <header className="seller-nav">
      <div className="seller-nav-inner">
        {/* Left */}
        <div className="seller-nav-left">
          <a href="/seller" className="seller-logo">
            <span className="seller-logo-main">Tree</span>
            <span className="seller-logo-accent">Mart</span>
          </a>
          <span className="seller-logo-sub">Seller Center</span>
        </div>

        {/* Middle */}
        <div className="seller-nav-search">
          <input
            type="text"
            placeholder="Search products, orders, customers..."
          />
        </div>

        {/* Right */}
        <div className="seller-nav-right">
          <a href="/seller/addproducts">
            <button className="seller-nav-btn seller-nav-hide-sm">
              + Add Product
            </button>
          </a>

          <button className="seller-icon-btn">
            🔔
            <span className="seller-badge">4</span>
          </button>

          <div className="seller-profile">
            <div className="seller-profile-avatar">TM</div>
            <div className="seller-profile-info seller-nav-hide-sm">
              <span className="seller-profile-name">Shivam</span>
              <span className="seller-profile-role">Seller</span>
            </div>
          </div>

          <button
            className="seller-nav-mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Bottom nav links */}
      <nav
        className={`seller-nav-links ${
          isMobileOpen ? "seller-nav-links-open" : ""
        }`}
      >
        <NavLink
          to="/seller"
          end
          className={({ isActive }) =>
            "seller-nav-link" +
            (isActive ? " seller-nav-link-active" : "")
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/seller/products"
          className={({ isActive }) =>
            "seller-nav-link" +
            (isActive ? " seller-nav-link-active" : "")
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/seller/orders"
          className={({ isActive }) =>
            "seller-nav-link" +
            (isActive ? " seller-nav-link-active" : "")
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/seller/inventory"
          className={({ isActive }) =>
            "seller-nav-link" +
            (isActive ? " seller-nav-link-active" : "")
          }
        >
          Inventory
        </NavLink>

        <NavLink
          to="/seller/payments"
          className={({ isActive }) =>
            "seller-nav-link" +
            (isActive ? " seller-nav-link-active" : "")
          }
        >
          Payments
        </NavLink>

        <NavLink
          to="/seller/analytics"
          className={({ isActive }) =>
            "seller-nav-link seller-nav-link-highlight" +
            (isActive ? " seller-nav-link-active" : "")
          }
        >
          Analytics
        </NavLink>
      </nav>
    </header>
  );
}
