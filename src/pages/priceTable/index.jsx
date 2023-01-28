import { useParams } from "react-router-dom";
import { useGetListProductQuery } from "apis/apiSlice";
import PaginationManager from "components/pagination";

const PriceTable = () => {
  const id = useParams(":pageId");
  const { data: allData } = useGetListProductQuery(id.pageNumber);
  return (
    <div className="flex flex-col">
      <div className="flex justify-around p-2">
        <h4>مدیریت موجودی وقیمت ها</h4>
        <button className="bg-copperfield-400 rounded w-14 hover:shadow-md">
          ذخیره
        </button>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center pl-10 pr-10">
        <table className="table table-hover">
          <thead>
            <tr className="bg-copperfield-400">
              <th className="border-2 border-slate-800">تصویر</th>
              <th className="border-2 border-slate-800">کالا</th>
              <th className="border-2 border-slate-800">قیمت</th>
              <th className="border-2 border-slate-800">موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allData &&
              allData.map((element, id) => {
                return (
                  <tr key={id} className="border-2 border-slate-800">
                    <td className="border-2 border-slate-800">
                      <img className="w-8 h-8" src={element.image} />
                    </td>
                    <td className="border-2 border-slate-800">
                      {element.name}
                    </td>
                    <td className="border-2 border-slate-800">
                      {element.price}
                    </td>
                    <td className="border-2 border-slate-800">
                      {element.quantity}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <PaginationManager path={"price-inventory"} />
      </div>
    </div>
  );
};
export default PriceTable;
