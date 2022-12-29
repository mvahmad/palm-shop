import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <>
      {card.map((item, index) => {
        return (
          <div className="grid grid-cols-2 gap-4 mt-4 mb-4" key={index}>
            <Link to={`/product/${item.id}`}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={item.url}
                  alt="Sunset in the mountains"
                ></img>
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div className="mt-2 mb-2 flex gap-2 justify-center">
                  <span>${item.price}</span>
                  <button className="btn bg-yellow-600 felx justify-center items-center w-28 rounded">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
