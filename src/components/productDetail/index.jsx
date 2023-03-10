import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetFilterProductQuery,
  useAddCardDataMutation,
  useGetCardlengthQuery,
} from "apis/apiSlice";
import toast, { Toaster } from "react-hot-toast";
import "../../assets/styles/image.css";
import { useState } from "react";

const ProductDetail = () => {
  const { pageId } = useParams();
  const { data: products } = useGetFilterProductQuery(pageId);
  const { data: cardLength, isSuccess } = useGetCardlengthQuery();
  let isExist;
  let final;
  if (isSuccess) {
    isExist =
      Boolean(cardLength.length) == false
        ? false
        : cardLength.filter((item) => item.id === Number(pageId));
    final = isExist == false ? Number(pageId) : Number(isExist[0].id);
  }

  const [dataCard] = useAddCardDataMutation();
  const [value, setValue] = useState(1);
  return (
    <div>
      {products &&
        products.map((element) => {
          return (
            <div className="mx-4 p-3 flex gap-5" key={element.id}>
              <img className="image border-2 rounded" src={element.image} />
              <div className="flex flex-col">
                <h3>{element.name}</h3>
                <p>{element.description}</p>
                <div className="flex gap-5 justify-center items-center">
                  <span className="font-bold">قیمت:{element.price}</span>
                  <div className="w-28 flex justify-between">
                    <button
                      className="bg-copperfield-500  rounded-r-lg text-white w-7"
                      onClick={() =>
                        value <= 1 ? setValue(value) : setValue(value - 1)
                      }
                    >
                      -
                    </button>
                    <div className="bg-orange-white-100 w-20 flex justify-center items-center">
                      {value}
                    </div>
                    <button
                      className="bg-copperfield-500  rounded-l-lg text-white w-7"
                      onClick={() => setValue(value + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-white bg-copperfield-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none"
                    onClick={() => {
                      toast.success("محصول به سبد خرید اضافه شد");
                      dataCard({
                        products: {
                          id: Number(final),
                          name: element.name,
                          price: element.price,
                          image: element.image,
                          quantity: value,
                        },
                        isExist:
                          Boolean(isExist.length) == false ? false : true,
                        length: cardLength.length,
                      });
                    }}
                  >
                    اضافه به سبد خرید
                  </button>
                  <Toaster position="top-right" reverseOrder={false} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetail;
