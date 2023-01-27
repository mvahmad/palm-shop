import { useParams } from "react-router-dom";
import { useGetOrdersQuery } from "apis/apiSlice";
import PaginationManager from "components/pagination";

const Orders = () => {
  const id = useParams(":pageId");
  const { data: allData } = useGetOrdersQuery(id.pageNumber);
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3>مدیریت سفارش ها</h3>
      <div>
        <table className="table-fixed">
          <thead>
            <tr className="bg-blue-300">
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
                  <tr key={id} className="border-2 ">
                    <td className="border">
                      {element.username}
                      {element.lastname}
                    </td>
                    <td className="border">{element.prices}</td>
                    <td className="border">{element.createdAt}</td>
                    <td>
                      <button className="font-bold">بررسی سفارش</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <PaginationManager path={"orders"} />
    </div>
  );
};
export default Orders;
