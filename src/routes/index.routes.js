import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Product from "pages/product";
import AllProducts from "pages/allproducts";
import Basket from "pages/basket";
import BasketForm from "pages/basketform";
import Payment from "pages/payment";
import ManagementLogin from "pages/managementlogin";
import ManagementProduct from "pages/managementproduct";
import About from "pages/aboutus";
import ContactUs from "pages/contact";
import WhyUs from "pages/whyus";
import PrivetRout from "./privetRouts.routes";
import ManagementAllProduct from "pages/managementAllProduct";
import PriceTable from "pages/priceTable";
import Orders from "pages/orders";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/allproduct" element={<AllProducts />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/basketform" element={<BasketForm />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/management-login" element={<ManagementLogin />} />

      <Route
        path="/management-product"
        element={
          <PrivetRout>
            <ManagementProduct />
          </PrivetRout>
        }
      >
        <Route path="all-products">
          <Route path="page/:pageNumber" element={<ManagementAllProduct />} />
        </Route>

        <Route
          path="price-inventory/page/:pageNumber"
          element={<PriceTable />}
        />
        <Route path="orders/page/:pageNumber" element={<Orders />} />
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
export default AppRoutes;
