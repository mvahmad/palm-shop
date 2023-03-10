import { useParams } from "react-router-dom";
import { useGetListProductQuery, useUpdateDataMutation } from "apis/apiSlice";
import PaginationManager from "components/pagination";

import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

const PriceTable = () => {
  const id = useParams(":pageId");
  const {
    data: allData,
    isSuccess,
    isLoading,
  } = useGetListProductQuery(id.pageNumber);
  const [updateData] = useUpdateDataMutation();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      setEditData(allData);
    }
  }, [updateData, allData, isSuccess]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-around p-2">
        <h4>مدیریت موجودی وقیمت ها</h4>
        <button
          className="bg-copperfield-400 rounded w-14 hover:shadow-md"
          onClick={() => {
            window.location.reload();
            toast.promise(updateData, {
              loading: "شکیبا باشید",
              success: "عملیات موفقیت آمیز بود",
              error: "عملیات موفقیت آمیزنبود",
            });
          }}
        >
          ذخیره
        </button>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center pl-10 pr-10">
        <table className="table ">
          <thead>
            <tr className="bg-copperfield-400">
              <th className="border-2 border-slate-800">تصویر</th>
              <th className="border-2 border-slate-800">کالا</th>
              <th className="border-2 border-slate-800">قیمت</th>
              <th className="border-2 border-slate-800">موجودی</th>
            </tr>
          </thead>
          <tbody>
            {editData === null ? (
              <span>loading...</span>
            ) : (
              editData.map((element, id) => {
                return (
                  <tr key={id} className="border-2 border-slate-800">
                    <td className="border-2 border-slate-800">
                      <img className="w-8 h-8" src={element.image} />
                    </td>
                    <td className="border-2 border-slate-800">
                      {element.name}
                    </td>

                    <td className="border-2 border-slate-800">
                      <input
                        type="number"
                        placeholder={element.price}
                        className="placeholder-slate-900"
                        onChange={(e) => {
                          updateData({
                            ...element,
                            price: e.target.value,
                          });
                        }}
                      />
                    </td>
                    <td className="border-2 border-slate-800">
                      <input
                        type="number"
                        defaultValue={element.quantity}
                        onChange={(e) =>
                          updateData({ ...element, quantity: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <PaginationManager path={"price-inventory"} />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};
export default PriceTable;
