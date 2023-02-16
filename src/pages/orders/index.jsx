import { Link, useParams } from "react-router-dom";
import { useGetOrdersQuery } from "apis/apiSlice";

import PaginationManager from "components/pagination";
import OrderModal from "components/orderModal";

const Orders = () => {
  const id = useParams(":pageId");
  const { data: allData } = useGetOrdersQuery(id.pageNumber);

  return (
    <div className="flex flex-col">
      <div className="flex justify-around p-2 m-1">
        <h4>مدیریت سفارش ها</h4>
        <div className="flex gap-2 ">
          <Link
            to={"/management-product/orders/delever"}
            className="p-1 text-decoration-none rounded text-white bg-green-400 "
          >
            سفارش های تحویل شده
          </Link>
          <Link
            to={"/management-product/orders/undelever"}
            className="p-1 text-decoration-none rounded text-white bg-orange-400 "
          >
            سفارش های در انتظار ارسال
          </Link>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center">
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
              {allData &&
                allData.map((element, id) => {
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
                        <OrderModal allData={allData} elementId={element.id} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <PaginationManager path={"orders"} />
      </div>
    </div>
  );
};
export default Orders;
