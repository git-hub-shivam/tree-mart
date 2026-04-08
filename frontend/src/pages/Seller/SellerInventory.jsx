// src/pages/seller/SellerInventory.jsx
import { useState } from "react";
import "./SellerInventory.css";

const DUMMY_INVENTORY = [
  {
    id: 1,
    name: "Organic Neem Fertilizer 1kg",
    sku: "TM-NEEM-1KG",
    location: "Main warehouse",
    stockOnHand: 120,
    reserved: 15,
    available: 105,
    status: "Healthy",
    updatedAt: "2 hours ago",
  },
  {
    id: 2,
    name: "Indoor Plant Combo (3 pcs)",
    sku: "TM-PLANTS-CB3",
    location: "Delhi hub",
    stockOnHand: 35,
    reserved: 5,
    available: 30,
    status: "Low",
    updatedAt: "30 mins ago",
  },
  {
    id: 3,
    name: "Terracotta Planter Set of 4",
    sku: "TM-POT-TRC4",
    location: "Main warehouse",
    stockOnHand: 0,
    reserved: 0,
    available: 0,
    status: "Out of stock",
    updatedAt: "1 day ago",
  },
  {
    id: 4,
    name: "Cocopeat Block 5kg",
    sku: "TM-COCO-5KG",
    location: "Gurgaon hub",
    stockOnHand: 210,
    reserved: 40,
    available: 170,
    status: "Healthy",
    updatedAt: "10 mins ago",
  },
];

export default function SellerInventory() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const filtered = DUMMY_INVENTORY.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.sku.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "healthy"
        ? item.status === "Healthy"
        : statusFilter === "low"
        ? item.status === "Low"
        : statusFilter === "out"
        ? item.status === "Out of stock"
        : true;

    const matchesLocation =
      locationFilter === "all" ? true : item.location === locationFilter;

    return matchesSearch && matchesStatus && matchesLocation;
  });

  const totalOnHand = filtered.reduce((sum, i) => sum + i.stockOnHand, 0);
  const totalAvailable = filtered.reduce((sum, i) => sum + i.available, 0);

  return (
    <div className="seller-inventory">
      {/* Header */}
      <div className="si-header">
        <div>
          <h1>Inventory</h1>
          <p>Monitor stock levels across TreeMart warehouses and hubs.</p>
        </div>
        <div className="si-header-actions">
          <button className="si-btn-secondary">Import</button>
          <button className="si-btn-secondary">Export</button>
          <button className="si-btn-primary">Adjust stock</button>
        </div>
      </div>

      {/* Top summary cards */}
      <div className="si-summary-cards">
        <div className="si-card">
          <span className="si-card-label">Total stock on hand</span>
          <span className="si-card-value">{totalOnHand}</span>
          <span className="si-card-meta">All locations combined</span>
        </div>
        <div className="si-card">
          <span className="si-card-label">Total available to sell</span>
          <span className="si-card-value">{totalAvailable}</span>
          <span className="si-card-meta">
            After reservations & pending orders
          </span>
        </div>
        <div className="si-card">
          <span className="si-card-label">Low / out of stock</span>
          <span className="si-card-value">
            {
              filtered.filter(
                (i) => i.status === "Low" || i.status === "Out of stock"
              ).length
            }
          </span>
          <span className="si-card-meta">Consider restocking</span>
        </div>
      </div>

      {/* Filters */}
      <div className="si-filters">
        <div className="si-search-wrapper">
          <input
            type="text"
            placeholder="Search by product name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="si-filter-selects">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All status</option>
            <option value="healthy">Healthy</option>
            <option value="low">Low stock</option>
            <option value="out">Out of stock</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="all">All locations</option>
            <option value="Main warehouse">Main warehouse</option>
            <option value="Delhi hub">Delhi hub</option>
            <option value="Gurgaon hub">Gurgaon hub</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="si-table-wrapper">
        <table className="si-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Location</th>
              <th>On hand</th>
              <th>Reserved</th>
              <th>Available</th>
              <th>Status</th>
              <th>Updated</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan="9" className="si-empty">
                  No inventory records match your filters.
                </td>
              </tr>
            )}

            {filtered.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="si-product-cell">
                    <div className="si-product-avatar">
                      {item.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="si-product-info">
                      <span className="si-product-name">{item.name}</span>
                      <span className="si-product-meta">{item.location}</span>
                    </div>
                  </div>
                </td>
                <td>{item.sku}</td>
                <td>{item.location}</td>
                <td>{item.stockOnHand}</td>
                <td>{item.reserved}</td>
                <td>
                  <span
                    className={
                      item.available === 0
                        ? "si-available si-available-zero"
                        : item.available < 50
                        ? "si-available si-available-low"
                        : "si-available"
                    }
                  >
                    {item.available}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      item.status === "Healthy"
                        ? "si-status si-status-healthy"
                        : item.status === "Low"
                        ? "si-status si-status-low"
                        : "si-status si-status-out"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.updatedAt}</td>
                <td style={{ textAlign: "right" }}>
                  <button className="si-action-btn">Adjust</button>
                  <button className="si-action-btn si-action-secondary">
                    History
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
