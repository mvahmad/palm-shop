import { Link } from "react-router-dom";

function ManagemetNavbar() {
  return (
    <div className="flex justify-center items-center mt-3 ">
      <div className="flex items-center justify-around p-2 bg-white-linen-100 rounded-lg w-96 ">
        <Link
          to={"/management-product/all-products/page/1"}
          id="1"
          className="text-slate-800 hover:text-copperfield-600 text-decoration-none"
        >
          کالا ها
        </Link>
        <Link
          to={"/management-product/price-inventory/page/1"}
          id="2"
          className="text-slate-800 hover:text-copperfield-600 text-decoration-none"
        >
          موجودی و قیمت ها
        </Link>
        <Link
          to={"/management-product/orders/page/1"}
          id="3"
          className="text-slate-800 hover:text-copperfield-600 text-decoration-none"
        >
          سفارش ها
        </Link>
      </div>
    </div>
  );
}

export default ManagemetNavbar;
