import { useGetCardlengthQuery } from "apis/apiSlice";

import Fotter from "layouts/footer";
import Header from "layouts/header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Basket = () => {
  const { data: basketData } = useGetCardlengthQuery();
  const [allPrice, setPrice] = useState();
  let price = [];
  let sum = 0;
  useEffect(() => {
    const basket =
      basketData && basketData.map((el) => price.push(el.price * el.quantity));
    for (const i in price) {
      sum += price[i];
    }

    setPrice(sum);
  }, [basketData]);

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className=" pr-6">
          <h3>سبد خرید</h3>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center pl-10 pr-10">
          <table className="table table-hover ">
            <thead>
              <tr className="bg-copperfield-400">
                <th className="border-2 border-slate-800">تصویر</th>
                <th className="border-2 border-slate-800">کالا</th>
                <th className="border-2 border-slate-800">قیمت</th>
                <th className="border-2 border-slate-800">تعداد</th>
              </tr>
            </thead>
            <tbody>
              {basketData &&
                basketData.map((element, id) => {
                  return (
                    <tr key={id} className="border-2 border-slate-800">
                      <td className="border-2 border-slate-800">
                        <img className="w-10 h-10" src={element.image} />
                      </td>
                      <td className="border-2 border-slate-800">
                        {element.name}
                      </td>
                      <td className="border-2 border-slate-800">
                        {element.price * element.quantity}
                      </td>
                      <td className="border-2 border-slate-800">
                        {element.quantity}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between pr-6 pl-6 pb-4">
          <h5 className="font-bold">قیمت نهایی:{allPrice}تومان</h5>
          <Link
            to={"/basket-form"}
            onClick={() => {
              localStorage.setItem("basket", JSON.stringify(basketData));
              localStorage.setItem("allPriace", allPrice);
            }}
            type="button"
            className="text-white bg-copperfield-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none"
          >
            نهایی کردن خرید
          </Link>
        </div>
      </div>
      <Fotter />
    </>
  );
};
export default Basket;
