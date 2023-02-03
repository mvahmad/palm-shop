import { useGetCateguryQuery } from "apis/apiSlice";
import { Link } from "react-router-dom";
import Category from "components/category";
import Slider from "components/slider";

const Main = () => {
  const { data: category } = useGetCateguryQuery();
  return (
    <div className="flex flex-col p-6 rounded-lg  gap-2">
      <Slider />
      {category &&
        category.map((el) => {
          return (
            <div className=" border border-slate-100 rounded overflow-x-auto flex flex-col p-1">
              <Link
                to={"/products"}
                className="text-2xl text-copperfield-400 hover:text-copperfield-600 text-decoration-none"
              >
                {el.name}
              </Link>
              <Category id={el.name} />
            </div>
          );
        })}
    </div>
  );
};

export default Main;
