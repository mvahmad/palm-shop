import { useGetUnDeleverOrderQuery } from "apis/apiSlice";
import { Link } from "react-router-dom";
import OrderModal from "components/orderModal";
const UnDeleverOrder = () => {
  const { data: order } = useGetUnDeleverOrderQuery();

  return (
    <div className="flex flex-col mt-3 justify-center items-center">
      <div className="flex justify-between gap-10 m-1">
        <h3>سفارش های در انتظار ارسال</h3>
        <Link
          to={"/management-product/orders/delever"}
          className="p-1 text-decoration-none rounded text-white bg-green-400 "
        >
          سفارش های تحویل شده
        </Link>
      </div>
      <div>
        <table className="table table-hover">
          <thead>
            <tr className="bg-copperfield-400">
              <th className="border-2 border-slate-800">نام کاربر</th>
              <th className="border-2 border-slate-800">مجموع مبلغ</th>
              <th className="border-2 border-slate-800">زمان ثبت سفارش</th>
              <th className="border-2 border-slate-800"></th>
            </tr>
          </thead>
          <tbody>
            {order &&
              order.map((element, id) => {
                return (
                  <tr key={id} className="border-2 border-slate-800 ">
                    <td className="border-2  border-slate-800">
                      {element.userinformation.userName}
                      {element.userinformation.lastName}
                    </td>
                    <td className="border-2  border-slate-800">
                      {element.prices}
                    </td>
                    <td className="border-2  border-slate-800">
                      {element.createdAt}
                    </td>
                    <td className="border-2 border-slate-800">
                      <OrderModal allData={order} elementId={element.id} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UnDeleverOrder;
