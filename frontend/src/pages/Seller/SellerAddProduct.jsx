// src/pages/seller/SellerAddProduct.jsx
import { useState } from "react";
import "./SellerAddProduct.css";

export default function SellerAddProduct() {
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    category: "",
    price: "",
    mrp: "",
    stock: "",
    status: "Active",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now just log
    console.log("New Product:", product);

    // Later:
    // axios.post("/api/products", product)
  };

  return (
    <div className="seller-add-product">
      {/* Header */}
      <div className="sap-header">
        <div>
          <h1>Add New Product</h1>
          <p>Create and publish a new product on TreeMart</p>
        </div>
      </div>

      <form className="sap-form" onSubmit={handleSubmit}>
        {/* Basic info */}
        <div className="sap-card">
          <h3>Basic Information</h3>

          <div className="sap-grid">
            <div className="sap-field">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Organic Neem Fertilizer 1kg"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sap-field">
              <label>SKU</label>
              <input
                type="text"
                name="sku"
                placeholder="TM-NEEM-1KG"
                value={product.sku}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sap-field">
              <label>Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Plants">Plants</option>
                <option value="Fertilizers">Fertilizers</option>
                <option value="Soil & Mixes">Soil & Mixes</option>
                <option value="Pots & Planters">Pots & Planters</option>
              </select>
            </div>

            <div className="sap-field">
              <label>Status</label>
              <select
                name="status"
                value={product.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing & inventory */}
        <div className="sap-card">
          <h3>Pricing & Inventory</h3>

          <div className="sap-grid">
            <div className="sap-field">
              <label>Selling Price (₹)</label>
              <input
                type="number"
                name="price"
                placeholder="499"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sap-field">
              <label>MRP (₹)</label>
              <input
                type="number"
                name="mrp"
                placeholder="599"
                value={product.mrp}
                onChange={handleChange}
              />
            </div>

            <div className="sap-field">
              <label>Stock Quantity</label>
              <input
                type="number"
                name="stock"
                placeholder="100"
                value={product.stock}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="sap-card">
          <h3>Description</h3>

          <div className="sap-field">
            <textarea
              name="description"
              placeholder="Describe your product features, usage, benefits..."
              rows="4"
              value={product.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Images */}
        <div className="sap-card">
          <h3>Product Images</h3>
          <div className="sap-image-box">
            <span>Drag & drop images here or click to upload</span>
            <small>(Image upload will be wired later)</small>
          </div>
        </div>

        {/* Actions */}
        <div className="sap-actions">
          <button type="button" className="sap-btn-secondary">
            Cancel
          </button>
          <button type="submit" className="sap-btn-primary">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
