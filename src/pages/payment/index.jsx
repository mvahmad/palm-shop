import page from "assets/images/fishing.png";
import { Link } from "react-router-dom";
import { useAddOrderMutation } from "apis/apiSlice";

const Payment = () => {
  const orders = localStorage.getItem("basket");
  const userinfo = localStorage.getItem("userinfo");
  const allPriace = localStorage.getItem("allPriace");
  const [addOrder] = useAddOrderMutation();

  return (
    <div
      className="flex flex-col
     justify-center items-center gap-5"
    >
      <img src={page} />
      <div className="flex gap-2">
        <Link
          to={"/success-order"}
          onClick={() => {
            addOrder({
              userinformation: JSON.parse(userinfo),
              products: JSON.parse(orders),
              prices: JSON.parse(allPriace),
              deleverd: false,
            });
            localStorage.removeItem("userinfo");
            localStorage.removeItem("orders");
            localStorage.removeItem("allPriace");
          }}
          className="text-white bg-green-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none p-2 mt-4 hover:shadow-md"
        >
          پرداخت
        </Link>
        <Link
          to={"/unsuccess-order"}
          className="text-white bg-red-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none p-2 mt-4 hover:shadow-md"
        >
          انصراف
        </Link>
      </div>
    </div>
  );
};
export default Payment;
