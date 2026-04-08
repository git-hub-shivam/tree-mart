import SellerNavbar from "../components/Seller/SellerNavbar";
import SellerFooter from "../components/Seller/SellerFooter";
import "./SellerLayout.css";

export default function SellerLayout({ children }) {
  return (
    <div className="seller-layout">
      <SellerNavbar />
      <main className="seller-layout-main">
        {children}
      </main>
      <SellerFooter />
    </div>
  );
}
