// src/pages/seller/SellerPayments.jsx
import { useState } from "react";
import "./SellerPayments.css";

const DUMMY_PAYOUTS = [
  {
    id: "P-2025-04",
    date: "Today, 4:30 PM",
    amount: 18500,
    orders: 42,
    status: "Processed",
    method: "Bank transfer",
  },
  {
    id: "P-2025-03",
    date: "2 days ago",
    amount: 22140,
    orders: 55,
    status: "Processed",
    method: "Bank transfer",
  },
  {
    id: "P-2025-02",
    date: "Last week",
    amount: 17200,
    orders: 38,
    status: "On hold",
    method: "Bank transfer",
  },
];

const DUMMY_TRANSACTIONS = [
  {
    id: "TXN-78423",
    type: "Order",
    ref: "TM-1045",
    amount: 1250,
    fee: 30,
    net: 1220,
    status: "Included",
    date: "5 mins ago",
  },
  {
    id: "TXN-78422",
    type: "Order",
    ref: "TM-1044",
    amount: 2780,
    fee: 70,
    net: 2710,
    status: "Pending",
    date: "18 mins ago",
  },
  {
    id: "TXN-78421",
    type: "Refund",
    ref: "TM-1030",
    amount: -890,
    fee: 0,
    net: -890,
    status: "Processed",
    date: "1 hour ago",
  },
  {
    id: "TXN-78420",
    type: "Order",
    ref: "TM-1043",
    amount: 890,
    fee: 20,
    net: 870,
    status: "Included",
    date: "2 hours ago",
  },
];

export default function SellerPayments() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [txnStatusFilter, setTxnStatusFilter] = useState("all");

  const totalPending = 7200; // dummy
  const nextPayoutDate = "In 2 days";
  const lifetimeEarnings = 342100;

  const filteredPayouts = DUMMY_PAYOUTS.filter((p) =>
    statusFilter === "all" ? true : p.status === statusFilter
  );

  const filteredTxns = DUMMY_TRANSACTIONS.filter((t) =>
    txnStatusFilter === "all" ? true : t.status === txnStatusFilter
  );

  return (
    <div className="seller-payments">
      {/* Header */}
      <div className="spay-header">
        <div>
          <h1>Payments</h1>
          <p>View TreeMart payouts, settlement details and transaction history.</p>
        </div>
        <div className="spay-header-actions">
          <button className="spay-btn-secondary">Download statement</button>
          <button className="spay-btn-primary">Update bank details</button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="spay-summary-cards">
        <div className="spay-card">
          <span className="spay-card-label">Next payout (estimated)</span>
          <span className="spay-card-value">₹ {totalPending.toLocaleString()}</span>
          <span className="spay-card-meta">Scheduled: {nextPayoutDate}</span>
        </div>
        <div className="spay-card">
          <span className="spay-card-label">Lifetime earnings</span>
          <span className="spay-card-value">
            ₹ {lifetimeEarnings.toLocaleString()}
          </span>
          <span className="spay-card-meta">
            Completed payouts to your bank account
          </span>
        </div>
        <div className="spay-card">
          <span className="spay-card-label">Last payout</span>
          <span className="spay-card-value">
            ₹ {DUMMY_PAYOUTS[0].amount.toLocaleString()}
          </span>
          <span className="spay-card-meta">{DUMMY_PAYOUTS[0].date}</span>
        </div>
      </div>

      {/* Payouts + filters */}
      <div className="spay-top-row">
        <div className="spay-panel">
          <div className="spay-panel-header">
            <h3>Payout history</h3>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All status</option>
              <option value="Processed">Processed</option>
              <option value="On hold">On hold</option>
            </select>
          </div>

          <div className="spay-table-wrapper">
            <table className="spay-table">
              <thead>
                <tr>
                  <th>Payout ID</th>
                  <th>Date</th>
                  <th>Orders</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Method</th>
                  <th style={{ textAlign: "right" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayouts.length === 0 && (
                  <tr>
                    <td colSpan="7" className="spay-empty">
                      No payouts match your filters.
                    </td>
                  </tr>
                )}

                {filteredPayouts.map((payout) => (
                  <tr key={payout.id}>
                    <td>
                      <span className="spay-pill">#{payout.id}</span>
                    </td>
                    <td>{payout.date}</td>
                    <td>{payout.orders}</td>
                    <td>₹ {payout.amount.toLocaleString()}</td>
                    <td>
                      <span
                        className={
                          payout.status === "Processed"
                            ? "spay-badge spay-badge-success"
                            : "spay-badge spay-badge-warning"
                        }
                      >
                        {payout.status}
                      </span>
                    </td>
                    <td>{payout.method}</td>
                    <td style={{ textAlign: "right" }}>
                      <button className="spay-action-btn">View breakdown</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small right summary panel */}
        <div className="spay-panel spay-panel-side">
          <div className="spay-panel-header">
            <h3>Settlement overview</h3>
          </div>
          <div className="spay-overview">
            <div className="spay-overview-row">
              <span>Current cycle gross</span>
              <span>₹ 28,560</span>
            </div>
            <div className="spay-overview-row">
              <span>Platform fees</span>
              <span>- ₹ 1,920</span>
            </div>
            <div className="spay-overview-row">
              <span>Refunds / adjustments</span>
              <span>- ₹ 640</span>
            </div>
            <div className="spay-overview-row spay-overview-row-total">
              <span>Expected payout</span>
              <span>₹ 26,000</span>
            </div>
          </div>

          <div className="spay-note">
            Payouts are processed to your registered bank account within{" "}
            <strong>2–3 business days</strong> of settlement.
          </div>
        </div>
      </div>

      {/* Transactions table */}
      <div className="spay-panel">
        <div className="spay-panel-header">
          <h3>Transaction ledger</h3>
          <select
            value={txnStatusFilter}
            onChange={(e) => setTxnStatusFilter(e.target.value)}
          >
            <option value="all">All status</option>
            <option value="Included">Included</option>
            <option value="Pending">Pending</option>
            <option value="Processed">Processed</option>
          </select>
        </div>

        <div className="spay-table-wrapper">
          <table className="spay-table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>Type</th>
                <th>Reference</th>
                <th>Gross</th>
                <th>Fees</th>
                <th>Net</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTxns.length === 0 && (
                <tr>
                  <td colSpan="8" className="spay-empty">
                    No transactions match your filters.
                  </td>
                </tr>
              )}

              {filteredTxns.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.type}</td>
                  <td>{txn.ref}</td>
                  <td>₹ {txn.amount.toLocaleString()}</td>
                  <td>₹ {txn.fee.toLocaleString()}</td>
                  <td>₹ {txn.net.toLocaleString()}</td>
                  <td>
                    <span
                      className={
                        txn.status === "Included"
                          ? "spay-badge spay-badge-success"
                          : txn.status === "Pending"
                          ? "spay-badge spay-badge-warning"
                          : "spay-badge spay-badge-info"
                      }
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td>{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
