import { useParams } from "react-router-dom";
import { useGetListProductQuery, useDeleteDataMutation } from "apis/apiSlice";
import PaginationManager from "components/pagination";
import { useState } from "react";
import AddProductModal from "components/modal";
import UpdateDataModal from "components/updateModal";

const ManagementAllProduct = () => {
  const id = useParams(":pageId");
  const { data: allData } = useGetListProductQuery(id.pageNumber);
  const [removeProduct] = useDeleteDataMutation();

  return (
    <div className="flex flex-col">
      <div className="flex justify-around p-2">
        <h3>مدیریت کالاها</h3>
        <AddProductModal />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center pl-10 pr-10">
        <table className="table table-hover ">
          <thead>
            <tr className="bg-copperfield-400">
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
                  <tr key={id} className="border-2 border-slate-800">
                    <td className="border-2 border-slate-800">
                      <img className="w-10 h-10" src={element.image} />
                    </td>
                    <td className="border-2 border-slate-800">
                      {element.name}
                    </td>
                    <td className="border-slate-800">
                      {element.category}/{element.subcategory}
                    </td>
                    <td className="border-2 border-slate-800 gap-1">
                      <UpdateDataModal id={element.id} />

                      <button
                        type="button"
                        className="bg-copperfield-500 text-white rounded hover:shadow-md w-24"
                        onClick={() => removeProduct({ id: element.id })}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <PaginationManager path={"all-products"} />
      </div>
    </div>
  );
};
export default ManagementAllProduct;
