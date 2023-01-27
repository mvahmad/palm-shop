import { useParams } from "react-router-dom";
import { useGetListProductQuery } from "apis/apiSlice";
import PaginationManager from "components/pagination";
const ManagementAllProduct = () => {
  const id = useParams(":pageId");
  const { data: allData } = useGetListProductQuery(id.pageNumber);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3>مدیریت کالاها</h3>
      <div>
        <table className="table-fixed">
          <thead>
            <tr className="bg-blue-300">
              <th className="border-2 border-slate-800">تصویر</th>
              <th className="border-2 border-slate-800">کالا</th>
              <th className="border-2 border-slate-800">دسته بندی</th>
              <th className="border-2 border-slate-800">ویرایش و حذف</th>
            </tr>
          </thead>
          <tbody>
            {allData &&
              allData.map((element, id) => {
                return (
                  <tr key={id} className="border-2 ">
                    <td>
                      <img className="w-8 h-8" src={element.image} />
                    </td>
                    <td className="border">{element.name}</td>
                    <td>
                      {element.category}/{element.subcategory}
                    </td>
                    <td className="border-2">
                      <button className="font-bold">ویرایش</button>/
                      <button className="font-bold">حذف</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <PaginationManager path={"all-products"} />
    </div>
  );
};
export default ManagementAllProduct;
