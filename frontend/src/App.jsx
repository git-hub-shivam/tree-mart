// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Customer/Home";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import SellerLayout from "./layouts/sellerLayout";
import SellerProducts from "./pages/Seller/SellerProduct";
import Navbar from "./components/Customer/Navbar";
import Footer from "./components/Customer/Footer";
import SellerOrders from "./pages/Seller/SellerOrders";
import SellerInventory from "./pages/Seller/SellerInventory";
import SellerPayments from "./pages/Seller/SellerPayments";
import SellerAnalytics from "./pages/Seller/SellerAnalytics";
import SellerAddProduct from "./pages/Seller/SellerAddProduct"; 
import ProductList from "./pages/Customer/ProductList";
import ProductDetail from "./pages/Customer/ProductDetail";
import Cart from "./pages/Customer/Cart";
import Checkout from "./pages/Customer/Checkout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer route at "/" */}
       
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <Login />
              </main>
              <Footer />
            </>
          }
        />

         <Route
          path="/register"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <Register />
              </main>
              <Footer />
            </>
          }
        />
       
       
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <Home />
              </main>
              <Footer />
            </>
          }
        />

          <Route
          path="/products"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <ProductList />
              </main>
              <Footer />
            </>
          }
        />

         
          <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <ProductDetail />
              </main>
              <Footer />
            </>
          }
        />

          <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <Cart />
              </main>
              <Footer />
            </>
          }
        />

         <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh", padding: "1.25rem" }}>
                <Checkout />
              </main>
              <Footer />
            </>
          }
        />



        {/* Seller dashboard at "/seller" */}
        <Route
          path="/seller"
          element={
            <SellerLayout>
              <SellerDashboard />
            </SellerLayout>
          }
        />

        {/* You can add more seller routes like this */}
        <Route
          path="/seller/products"
          element={
            <SellerLayout>
              <SellerProducts />
            </SellerLayout>
          }
        />

        <Route
          path="/seller/orders"
          element={
            <SellerLayout>
              <SellerOrders />
            </SellerLayout>
          }
        />
        <Route
          path="/seller/inventory"
          element={
            <SellerLayout>
              <SellerInventory />
            </SellerLayout>
          }
        />
          <Route
          path="/seller/payments"
          element={
            <SellerLayout>
              <SellerPayments />
            </SellerLayout>
          }
        />

         <Route
          path="/seller/analytics"
          element={
            <SellerLayout>
              <SellerAnalytics />
            </SellerLayout>
          }
        />

        
         <Route
          path="/seller/addproducts"
          element={
            <SellerLayout>
              <SellerAddProduct />
            </SellerLayout>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
