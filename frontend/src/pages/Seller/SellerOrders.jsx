// src/pages/seller/SellerOrders.jsx
import { useState } from "react";
import "./SellerOrders.css";

const DUMMY_ORDERS = [
  {
    id: "TM-1045",
    customer: "Ankit Sharma",
    items: 3,
    amount: 1250,
    status: "Paid",
    paymentStatus: "Paid",
    fulfillmentStatus: "Processing",
    placedAt: "5 mins ago",
    channel: "TreeMart",
  },
  {
    id: "TM-1044",
    customer: "Neha Verma",
    items: 1,
    amount: 2780,
    status: "Pending",
    paymentStatus: "Pending",
    fulfillmentStatus: "Awaiting confirmation",
    placedAt: "18 mins ago",
    channel: "TreeMart",
  },
  {
    id: "TM-1043",
    customer: "Rohit Gupta",
    items: 5,
    amount: 890,
    status: "Shipped",
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
    placedAt: "1 hour ago",
    channel: "TreeMart",
  },
  {
    id: "TM-1042",
    customer: "Priya Singh",
    items: 2,
    amount: 3150,
    status: "Delayed",
    paymentStatus: "Paid",
    fulfillmentStatus: "Delayed",
    placedAt: "3 hours ago",
    channel: "TreeMart",
  },
];

export default function SellerOrders() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("today");

  const filteredOrders = DUMMY_ORDERS.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : order.status === statusFilter;

    // period filter is dummy for now (no real dates),
    // but you can wire it to real dates later.
    const matchesPeriod = period ? true : true;

    return matchesSearch && matchesStatus && matchesPeriod;
  });

  return (
    <div className="seller-orders">
      {/* Header */}
      <div className="so-header">
        <div>
          <h1>Orders</h1>
          <p>Track and manage TreeMart orders, payments and fulfillment.</p>
        </div>
        <div className="so-header-actions">
          <button className="so-btn-secondary">Export</button>
          <button className="so-btn-primary">Create manual order</button>
        </div>
      </div>

      {/* Filters */}
      <div className="so-filters">
        <div className="so-search-wrapper">
          <input
            type="text"
            placeholder="Search by order ID or customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="so-filter-selects">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delayed">Delayed</option>
          </select>

          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="today">Today</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>

      {/* Summary */}
      <div className="so-summary">
        <span>
          Showing <strong>{filteredOrders.length}</strong> of{" "}
          {DUMMY_ORDERS.length} orders
        </span>
        <div className="so-summary-right">
          <span className="so-summary-chip">
            New orders: <strong>3</strong>
          </span>
          <span className="so-summary-chip so-summary-chip-warning">
            Action needed: <strong>2</strong>
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="so-table-wrapper">
        <table className="so-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Fulfillment</th>
              <th>Placed</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="8" className="so-empty">
                  No orders match your filters.
                </td>
              </tr>
            )}

            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <div className="so-order-cell">
                    <div className="so-order-badge">#{order.id}</div>
                    <div className="so-order-info">
                      <span className="so-order-id">{order.id}</span>
                      <span className="so-order-meta">
                        Channel: {order.channel}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="so-customer-cell">
                    <div className="so-customer-avatar">
                      {order.customer.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="so-customer-info">
                      <span className="so-customer-name">
                        {order.customer}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{order.items}</td>
                <td>₹ {order.amount}</td>
                <td>
                  <span
                    className={
                      order.paymentStatus === "Paid"
                        ? "so-badge so-badge-success"
                        : order.paymentStatus === "Pending"
                        ? "so-badge so-badge-warning"
                        : "so-badge"
                    }
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      order.fulfillmentStatus === "Shipped"
                        ? "so-badge so-badge-info"
                        : order.fulfillmentStatus === "Delayed"
                        ? "so-badge so-badge-danger"
                        : "so-badge so-badge-muted"
                    }
                  >
                    {order.fulfillmentStatus}
                  </span>
                </td>
                <td>{order.placedAt}</td>
                <td style={{ textAlign: "right" }}>
                  <button className="so-action-btn">View</button>
                  <button className="so-action-btn so-action-secondary">
                    Update
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
