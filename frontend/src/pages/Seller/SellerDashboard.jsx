// src/pages/seller/SellerDashboard.jsx
import "./SellerDashboard.css";

export default function SellerDashboard() {

  return (
    <div className="seller-dashboard">
      {/* Page header */}
      <div className="seller-dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Overview of your TreeMart store performance. All numbers are sample
            data for now.
          </p>
        </div>
        <a href="/seller/addproducts">
        <button className="sd-btn-primary">+ Add New Product</button>
      </a>
      </div>

      {/* KPI cards */}
      <div className="seller-dashboard-grid">
        <div className="sd-card">
          <div className="sd-card-header">
            <span>Total Revenue</span>
            <span className="sd-tag sd-tag-green">Today</span>
          </div>
          <h2>₹ 24,580</h2>
          <p className="sd-trend sd-trend-up">▲ 18% vs yesterday</p>
        </div>

        <div className="sd-card">
          <div className="sd-card-header">
            <span>Orders</span>
            <span className="sd-tag">Last 24 hours</span>
          </div>
          <h2>132</h2>
          <p className="sd-trend sd-trend-up">▲ 9 new since last hour</p>
        </div>

        <div className="sd-card">
          <div className="sd-card-header">
            <span>Active Products</span>
            <span className="sd-tag">Live</span>
          </div>
          <h2>184</h2>
          <p className="sd-trend sd-trend-neutral">3 drafts pending</p>
        </div>

        <div className="sd-card">
          <div className="sd-card-header">
            <span>Pending Orders</span>
            <span className="sd-tag sd-tag-warning">Action needed</span>
          </div>
          <h2>17</h2>
          <p className="sd-trend sd-trend-down">5 delayed by 1+ day</p>
        </div>
      </div>

      {/* Two-column section */}
      <div className="seller-dashboard-split">
        {/* Left: simple “chart-like” card (no real chart, just layout) */}
        <div className="sd-panel">
          <div className="sd-panel-header">
            <h3>Sales summary</h3>
            <select>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This month</option>
            </select>
          </div>

          <div className="sd-sales-summary">
            <div>
              <span className="sd-label">Total orders</span>
              <span className="sd-value">864</span>
            </div>
            <div>
              <span className="sd-label">Total revenue</span>
              <span className="sd-value">₹ 3,42,100</span>
            </div>
            <div>
              <span className="sd-label">Average order value</span>
              <span className="sd-value">₹ 395</span>
            </div>
            <div>
              <span className="sd-label">Repeat customers</span>
              <span className="sd-value">23%</span>
            </div>
          </div>

          <div className="sd-mini-bars">
            <div className="sd-mini-bar-row">
              <span>Mon</span>
              <div className="sd-mini-bar-track">
                <div className="sd-mini-bar-fill" style={{ width: "45%" }} />
              </div>
              <span className="sd-mini-bar-value">₹ 21k</span>
            </div>
            <div className="sd-mini-bar-row">
              <span>Tue</span>
              <div className="sd-mini-bar-track">
                <div className="sd-mini-bar-fill" style={{ width: "70%" }} />
              </div>
              <span className="sd-mini-bar-value">₹ 34k</span>
            </div>
            <div className="sd-mini-bar-row">
              <span>Wed</span>
              <div className="sd-mini-bar-track">
                <div className="sd-mini-bar-fill" style={{ width: "55%" }} />
              </div>
              <span className="sd-mini-bar-value">₹ 26k</span>
            </div>
            <div className="sd-mini-bar-row">
              <span>Thu</span>
              <div className="sd-mini-bar-track">
                <div className="sd-mini-bar-fill" style={{ width: "80%" }} />
              </div>
              <span className="sd-mini-bar-value">₹ 39k</span>
            </div>
          </div>
        </div>

        {/* Right: recent orders */}
        <div className="sd-panel">
          <div className="sd-panel-header">
            <h3>Recent orders</h3>
            <a href="/seller/orders" className="sd-link">
              View all
            </a>
          </div>

          <div className="sd-table-wrapper">
            <table className="sd-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Placed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#TM-1045</td>
                  <td>Ankit Sharma</td>
                  <td>₹ 1,250</td>
                  <td>
                    <span className="sd-badge sd-badge-success">Paid</span>
                  </td>
                  <td>5 mins ago</td>
                </tr>
                <tr>
                  <td>#TM-1044</td>
                  <td>Neha Verma</td>
                  <td>₹ 2,780</td>
                  <td>
                    <span className="sd-badge sd-badge-warning">
                      Pending
                    </span>
                  </td>
                  <td>18 mins ago</td>
                </tr>
                <tr>
                  <td>#TM-1043</td>
                  <td>Rohit Gupta</td>
                  <td>₹ 890</td>
                  <td>
                    <span className="sd-badge sd-badge-info">Shipped</span>
                  </td>
                  <td>1 hour ago</td>
                </tr>
                <tr>
                  <td>#TM-1042</td>
                  <td>Priya Singh</td>
                  <td>₹ 3,150</td>
                  <td>
                    <span className="sd-badge sd-badge-danger">Delayed</span>
                  </td>
                  <td>3 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="seller-dashboard-bottom">
        <div className="sd-panel">
          <div className="sd-panel-header">
            <h3>Top performing products</h3>
          </div>
          <div className="sd-top-products">
            <div className="sd-top-product">
              <div>
                <p className="sd-top-product-name">Organic Neem Fertilizer</p>
                <p className="sd-top-product-meta">1.2k units • ₹ 2.8L</p>
              </div>
              <span className="sd-badge sd-badge-soft">Best seller</span>
            </div>
            <div className="sd-top-product">
              <div>
                <p className="sd-top-product-name">Indoor Plant Combo Pack</p>
                <p className="sd-top-product-meta">764 units • ₹ 1.9L</p>
              </div>
              <span className="sd-badge sd-badge-soft">Trending</span>
            </div>
            <div className="sd-top-product">
              <div>
                <p className="sd-top-product-name">Terracotta Planters Set</p>
                <p className="sd-top-product-meta">432 units • ₹ 95k</p>
              </div>
              <span className="sd-badge sd-badge-soft">High margin</span>
            </div>
          </div>
        </div>

        <div className="sd-panel">
          <div className="sd-panel-header">
            <h3>Quick actions</h3>
          </div>
          <div className="sd-quick-actions">
            <button className="sd-quick-btn">Create discount coupon</button>
            <button className="sd-quick-btn">Update stock levels</button>
            <button className="sd-quick-btn">Manage shipping rates</button>
            <button className="sd-quick-btn">View payout summary</button>
          </div>
        </div>
      </div>
    </div>
  );
}
