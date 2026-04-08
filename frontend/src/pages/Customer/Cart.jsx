
// src/pages/customer/Cart.jsx
import { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";



const INITIAL_CART = [
  {
    id: 1,
    name: "Indoor Plant Combo (3 pcs)",
    price: 899,
    quantity: 1,
  },
  {
    id: 2,
    name: "Organic Neem Fertilizer 1kg",
    price: 299,
    quantity: 2,
  },
];

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-layout">
          {/* LEFT: Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-img">🌿</div>

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="cart-price">₹ {item.price}</p>

                  <div className="cart-qty">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-actions">
                  <p className="cart-item-total">
                    ₹ {item.price * item.quantity}
                  </p>
                  <button
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Summary */}
          <div className="cart-summary">
            <h2>Price Details</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>

            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹ ${shipping}`}</span>
            </div>

            <div className="cart-summary-total">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>

            <button className="cart-checkout-btn" onClick={()=> navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
