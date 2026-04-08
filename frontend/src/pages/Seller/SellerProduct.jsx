// src/pages/seller/SellerProducts.jsx
import { useState } from "react";
import "./SellerProduct.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Organic Neem Fertilizer 1kg",
    sku: "TM-NEEM-1KG",
    price: 299,
    stock: 120,
    status: "Active",
    category: "Fertilizers",
    updatedAt: "2 hours ago",
  },
  {
    id: 2,
    name: "Indoor Plant Combo (3 pcs)",
    sku: "TM-PLANTS-CB3",
    price: 899,
    stock: 48,
    status: "Low stock",
    category: "Plants",
    updatedAt: "30 mins ago",
  },
  {
    id: 3,
    name: "Terracotta Planter Set of 4",
    sku: "TM-POT-TRC4",
    price: 749,
    stock: 0,
    status: "Out of stock",
    category: "Pots & Planters",
    updatedAt: "1 day ago",
  },
  {
    id: 4,
    name: "Cocopeat Block 5kg",
    sku: "TM-COCO-5KG",
    price: 499,
    stock: 210,
    status: "Active",
    category: "Soil & Mixes",
    updatedAt: "10 mins ago",
  },
];

export default function SellerProducts() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
        ? product.status === "Active"
        : statusFilter === "low"
        ? product.status === "Low stock"
        : statusFilter === "out"
        ? product.status === "Out of stock"
        : true;

    const matchesCategory =
      categoryFilter === "all"
        ? true
        : product.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="seller-products">
      {/* Header */}
      <div className="sp-header">
        <div>
          <h1>Products</h1>
          <p>Manage your TreeMart catalog, pricing and stock levels.</p>
        </div>
        <a href="/seller/addproducts">
          <button className="sp-btn-primary">+ Add Product</button>
        </a>
      </div>

      {/* Filters */}
      <div className="sp-filters">
        <div className="sp-search-wrapper">
          <input
            type="text"
            placeholder="Search by product name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="sp-filter-selects">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All status</option>
            <option value="active">Active</option>
            <option value="low">Low stock</option>
            <option value="out">Out of stock</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All categories</option>
            <option value="Fertilizers">Fertilizers</option>
            <option value="Plants">Plants</option>
            <option value="Pots & Planters">Pots & Planters</option>
            <option value="Soil & Mixes">Soil & Mixes</option>
          </select>
        </div>
      </div>

      {/* Summary bar */}
      <div className="sp-summary">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of{" "}
          {DUMMY_PRODUCTS.length} products
        </span>
        <span className="sp-summary-pill">
          Tip: Keep stock updated to avoid order cancellations.
        </span>
      </div>

      {/* Table */}
      <div className="sp-table-wrapper">
        <table className="sp-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Updated</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="8" className="sp-empty">
                  No products match your filters.
                </td>
              </tr>
            )}

            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="sp-product-cell">
                    <div className="sp-product-avatar">
                      {product.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="sp-product-info">
                      <span className="sp-product-name">{product.name}</span>
                      <span className="sp-product-meta">
                        Listed on TreeMart • {product.updatedAt}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>₹ {product.price}</td>
                <td>
                  <span
                    className={
                      product.stock === 0
                        ? "sp-stock-badge sp-stock-zero"
                        : product.stock < 50
                        ? "sp-stock-badge sp-stock-low"
                        : "sp-stock-badge"
                    }
                  >
                    {product.stock === 0
                      ? "Out"
                      : product.stock < 50
                      ? `${product.stock} • Low`
                      : product.stock}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      product.status === "Active"
                        ? "sp-status sp-status-active"
                        : product.status === "Low stock"
                        ? "sp-status sp-status-warning"
                        : "sp-status sp-status-danger"
                    }
                  >
                    {product.status}
                  </span>
                </td>
                <td>{product.updatedAt}</td>
                <td style={{ textAlign: "right" }}>
                  <button className="sp-action-btn">Edit</button>
                  <button className="sp-action-btn sp-action-secondary">
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
