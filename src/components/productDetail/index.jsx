import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetFilterProductQuery,
  useAddCardDataMutation,
} from "apis/apiSlice";

import "../../assets/styles/image.css";
import Counter from "components/counter";
const ProductDetail = () => {
  const { id } = useParams();
  const { data: products } = useGetFilterProductQuery(id);
  const [dataCard] = useAddCardDataMutation();
  const value = useSelector((state) => state.counter.value);

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
                  <Counter />

                  <button
                    className="text-white bg-copperfield-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none"
                    onClick={() =>
                      dataCard({
                        name: element.name,
                        id: element.id,
                        price: element.price,
                        image: element.image,
                        quantity: value,
                      })
                    }
                  >
                    اضافه به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetail;
