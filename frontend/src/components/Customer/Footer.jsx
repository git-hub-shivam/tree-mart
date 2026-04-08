import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column footer-brand">
          <h2 className="footer-logo">
            Tree<span>Mart</span>
          </h2>
          <p className="footer-text">
            Your one-stop destination for fashion, electronics and lifestyle
            essentials. Trusted by thousands of customers across India.
          </p>
          <div className="footer-badges">
            <span>✔ Secure Payments</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Easy Returns</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <a href="/collections/men">Men</a>
          <a href="/collections/women">Women</a>
          <a href="/collections/electronics">Electronics</a>
          <a href="/collections/home">Home & Living</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQs</a>
        </div>

        <div className="footer-column">
          <h3>Stay Updated</h3>
          <p className="footer-text">
            Get updates on new launches, exclusive offers and more.
          </p>
          <form
            className="footer-newsletter"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social">
            <a href="#!">𝕏</a>
            <a href="#!">𝙵</a>
            <a href="#!">📸</a>
            <a href="#!">▶</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Tree-Mart. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/refunds">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
