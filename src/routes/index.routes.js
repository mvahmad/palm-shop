import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Product from "pages/products";
import Products from "pages/products";
import Basket from "pages/basket";
import BasketForm from "pages/basketform";
import Payment from "pages/payment";
import ManagementLogin from "pages/managementlogin";
import ManagementProduct from "pages/managementproduct";
import About from "pages/aboutus";
import ContactUs from "pages/contact";
import WhyUs from "pages/whyus";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/basketform" element={<BasketForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/managementlogin" element={<ManagementLogin />} />
        <Route path="/managementproduct" element={<ManagementProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
