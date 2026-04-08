// src/pages/seller/SellerAnalytics.jsx
import "./SellerAnalytics.css";

const DUMMY_DAILY = [
  { day: "Mon", orders: 32, revenue: 12500, visitors: 420 },
  { day: "Tue", orders: 44, revenue: 17800, visitors: 510 },
  { day: "Wed", orders: 28, revenue: 9400, visitors: 380 },
  { day: "Thu", orders: 53, revenue: 21500, visitors: 610 },
  { day: "Fri", orders: 62, revenue: 24600, visitors: 690 },
  { day: "Sat", orders: 71, revenue: 28500, visitors: 820 },
  { day: "Sun", orders: 40, revenue: 15200, visitors: 510 },
];

export default function SellerAnalytics() {
  const totalVisitors = 3350;
  const totalOrders = 330;
  const totalRevenue = 1_29500; // 1,29,500
  const conversionRate = ((totalOrders / totalVisitors) * 100).toFixed(1);
  const avgOrderValue = Math.round(totalRevenue / totalOrders);

  return (
    <div className="seller-analytics">
      {/* Header */}
      <div className="sa-header">
        <div>
          <h1>Analytics</h1>
          <p>
            Understand how customers interact with your TreeMart store over
            time.
          </p>
        </div>
        <div className="sa-header-actions">
          <select defaultValue="7d">
            <option value="today">Today</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="sa-btn-secondary">Download report</button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="sa-kpi-grid">
        <div className="sa-card">
          <div className="sa-card-header">
            <span>Total visitors</span>
            <span className="sa-tag sa-tag-subtle">Last 7 days</span>
          </div>
          <h2>{totalVisitors.toLocaleString()}</h2>
          <p className="sa-trend sa-trend-up">▲ 12% vs previous week</p>
        </div>

        <div className="sa-card">
          <div className="sa-card-header">
            <span>Total orders</span>
            <span className="sa-tag sa-tag-subtle">All channels</span>
          </div>
          <h2>{totalOrders}</h2>
          <p className="sa-trend sa-trend-up">▲ 8% vs previous week</p>
        </div>

        <div className="sa-card">
          <div className="sa-card-header">
            <span>Conversion rate</span>
            <span className="sa-tag">Store</span>
          </div>
          <h2>{conversionRate}%</h2>
          <p className="sa-trend sa-trend-neutral">
            Average for category: 2.4%
          </p>
        </div>

        <div className="sa-card">
          <div className="sa-card-header">
            <span>Avg. order value</span>
            <span className="sa-tag">INR</span>
          </div>
          <h2>₹ {avgOrderValue}</h2>
          <p className="sa-trend sa-trend-up">▲ 5% vs previous week</p>
        </div>
      </div>

      {/* Main split: chart + breakdown */}
      <div className="sa-split">
        {/* Chart-like area */}
        <div className="sa-panel">
          <div className="sa-panel-header">
            <h3>Revenue & orders by day</h3>
            <span className="sa-panel-subtitle">
              Visual overview (dummy data)
            </span>
          </div>

          <div className="sa-chart-legend">
            <div className="sa-legend-item">
              <span className="sa-legend-dot sa-legend-dot-primary" />
              Revenue
            </div>
            <div className="sa-legend-item">
              <span className="sa-legend-dot sa-legend-dot-accent" />
              Orders
            </div>
          </div>

          <div className="sa-chart">
            {DUMMY_DAILY.map((d) => {
              const revPercent = (d.revenue / 28500) * 100; // max is 28.5k
              const ordersPercent = (d.orders / 71) * 100; // max is 71
              return (
                <div className="sa-chart-column" key={d.day}>
                  <div className="sa-chart-bars">
                    <div
                      className="sa-chart-bar sa-chart-bar-revenue"
                      style={{ height: `${revPercent}%` }}
                    />
                    <div
                      className="sa-chart-bar sa-chart-bar-orders"
                      style={{ height: `${ordersPercent}%` }}
                    />
                  </div>
                  <span className="sa-chart-label">{d.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right-side breakdown */}
        <div className="sa-panel sa-panel-side">
          <div className="sa-panel-header">
            <h3>Traffic & device breakdown</h3>
          </div>

          <div className="sa-breakdown">
            <div className="sa-breakdown-section">
              <h4>Traffic sources</h4>
              <div className="sa-breakdown-row">
                <span>Direct</span>
                <span>38%</span>
              </div>
              <div className="sa-breakdown-row">
                <span>Search (Google etc.)</span>
                <span>32%</span>
              </div>
              <div className="sa-breakdown-row">
                <span>Social (Instagram, etc.)</span>
                <span>19%</span>
              </div>
              <div className="sa-breakdown-row">
                <span>Other referrals</span>
                <span>11%</span>
              </div>

              <div className="sa-progress-track">
                <div
                  className="sa-progress-fill sa-progress-direct"
                  style={{ width: "38%" }}
                />
                <div
                  className="sa-progress-fill sa-progress-search"
                  style={{ width: "32%" }}
                />
                <div
                  className="sa-progress-fill sa-progress-social"
                  style={{ width: "19%" }}
                />
                <div
                  className="sa-progress-fill sa-progress-other"
                  style={{ width: "11%" }}
                />
              </div>
            </div>

            <div className="sa-breakdown-section">
              <h4>Device type</h4>
              <div className="sa-device-row">
                <span>Mobile</span>
                <span>68%</span>
              </div>
              <div className="sa-device-row">
                <span>Desktop</span>
                <span>24%</span>
              </div>
              <div className="sa-device-row">
                <span>Tablet</span>
                <span>8%</span>
              </div>

              <div className="sa-device-chart">
                <div className="sa-device-segment sa-device-mobile" />
                <div className="sa-device-segment sa-device-desktop" />
                <div className="sa-device-segment sa-device-tablet" />
              </div>

              <p className="sa-note">
                Most TreeMart customers browse and purchase from{" "}
                <strong>mobile devices</strong>. Ensure your product images and
                descriptions look great on smaller screens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom metrics table */}
      <div className="sa-panel">
        <div className="sa-panel-header">
          <h3>Key funnel metrics</h3>
        </div>

        <div className="sa-table-wrapper">
          <table className="sa-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product page views</td>
                <td>8,420</td>
                <td>7,980</td>
                <td className="sa-trend-up">▲ +5.5%</td>
                <td>Boosted by weekend campaign.</td>
              </tr>
              <tr>
                <td>Add-to-cart rate</td>
                <td>7.4%</td>
                <td>6.8%</td>
                <td className="sa-trend-up">▲ +0.6 pts</td>
                <td>Improved images and descriptions.</td>
              </tr>
              <tr>
                <td>Checkout completion</td>
                <td>78%</td>
                <td>79%</td>
                <td className="sa-trend-down">▼ -1 pt</td>
                <td>Monitor payment failures.</td>
              </tr>
              <tr>
                <td>Repeat customers</td>
                <td>23%</td>
                <td>21%</td>
                <td className="sa-trend-up">▲ +2 pts</td>
                <td>Returning buyers increasing.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
