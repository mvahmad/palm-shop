import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className=" flex flex-col">
      <div
        className=" border rounded overflow-hidden hover:shadow-xl bg-orange-white-50 w-56 h-72 m-2 flex flex-col items-center gap-2"
        key={data.id}
      >
        <img src={data.image} alt="" className="w-full h-44 m-0" />
        <div>
          <div className="p-1 flex gap-1 flex-col items-start">
            <div className="text-slate-800 truncate w-40">{data.name}</div>
            <div className="text-slate-800 text-lg font-bold flex gap-1 ">
              {data.price}
              <span>تومان</span>
            </div>
            <div className="flex">
              <Link
                to={`/product/${data.id}`}
                type="button"
                className="text-white bg-copperfield-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none"
              >
                مشاهده وخرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
