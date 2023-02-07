import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetFilterProductQuery } from "apis/apiSlice";
import "../../assets/styles/image.css";
const ProductDetail = () => {
  const { id } = useParams();
  const { data: products } = useGetFilterProductQuery(id);
  return (
    <div>
      {products &&
        products.map((element) => {
          console.log(element.description);
          return (
            <div className="mx-4 p-3 flex gap-5" key={element.id}>
              <img className="image border-2 rounded" src={element.image} />
              <div className="flex flex-col">
                <h3>{element.name}</h3>
                <p>{element.description}</p>
                <div className="flex gap-5 justify-center items-center">
                  <span className="font-bold">قیمت:{element.price}</span>

                  <Link
                    to={"/basket"}
                    className="text-white bg-copperfield-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none"
                  >
                    اضافه به سبد خرید
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetail;
