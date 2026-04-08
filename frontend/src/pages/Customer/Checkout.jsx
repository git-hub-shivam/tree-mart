// src/pages/customer/Checkout.jsx
import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cartSummary = {
    subtotal: 1497,
    shipping: 0,
    total: 1497,
  };

  const placeOrder = () => {
    alert("Order placed successfully! 🎉");
    // Later:
    // POST /api/orders
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        {/* LEFT */}
        <div className="checkout-left">
          {/* Address */}
          <div className="checkout-card">
            <h2>Delivery Address</h2>

            <div className="checkout-form">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Mobile Number" />
              <input type="text" placeholder="Address Line" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Pincode" />
            </div>
          </div>

          {/* Payment */}
          <div className="checkout-card">
            <h2>Payment Method</h2>

            <label className="checkout-radio">
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>

            <label className="checkout-radio">
              <input
                type="radio"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              UPI / Card / Net Banking
            </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>

          <div className="checkout-row">
            <span>Subtotal</span>
            <span>₹ {cartSummary.subtotal}</span>
          </div>

          <div className="checkout-row">
            <span>Shipping</span>
            <span>
              {cartSummary.shipping === 0 ? "Free" : `₹ ${cartSummary.shipping}`}
            </span>
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <span>₹ {cartSummary.total}</span>
          </div>

          <button className="checkout-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
