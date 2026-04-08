import "./SellerFooter.css";

export default function SellerFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="seller-footer">
      <div className="seller-footer-inner">
        <div className="seller-footer-left">
          <span className="seller-footer-brand">
            TreeMart <span>Seller Center</span>
          </span>
          <span className="seller-footer-text">
            Manage products, orders and performance for your TreeMart store.
          </span>
        </div>

        <div className="seller-footer-right">
          <span className="seller-footer-pill">Support: support@treemart.in</span>
          <span className="seller-footer-pill">Status: All systems normal</span>
        </div>
      </div>

      <div className="seller-footer-bottom">
        <span>© {year} TreeMart. All rights reserved.</span>
        <div className="seller-footer-links">
          <a href="/seller/terms">Seller Terms</a>
          <a href="/seller/payout-policy">Payout Policy</a>
          <a href="/seller/help">Help Center</a>
        </div>
      </div>
    </footer>
  );
}
