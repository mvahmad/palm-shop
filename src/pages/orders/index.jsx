import { useParams } from "react-router-dom";
import { useGetOrdersQuery } from "apis/apiSlice";
import Form from "react-bootstrap/Form";
import PaginationManager from "components/pagination";

const Orders = () => {
  const id = useParams(":pageId");
  const { data: allData } = useGetOrdersQuery(id.pageNumber);
  return (
    <div className="flex flex-col">
      <div className="flex justify-around p-2">
        <h4>مدیریت سفارش ها</h4>
        <div className="flex gap-2">
          <Form.Check
            inline
            label="سفارش های تحویل شده"
            type="radio"
            name="group1"
          />
          <Form.Check
            inline
            label="سفارش های در انتظار ارسال"
            type="radio"
            name="group1"
          />
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
                        {element.userinformation.fristName}
                        {element.userinformation.lastName}
                      </td>
                      <td className="border-2  border-slate-800">
                        {element.prices}
                      </td>
                      <td className="border-2  border-slate-800">
                        {element.createdAt}
                      </td>
                      <td className="border-2 border-slate-800">
                        <button className="bg-blue-400 rounded text-white hover:shadow-md w-24">
                          بررسی سفارش
                        </button>
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
