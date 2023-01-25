import { Link } from "react-router-dom";
import { useGetCateguryQuery } from "apis/apiSlice";
const Menu = () => {
  const { data: category } = useGetCateguryQuery();
  return (
    <div className="rounded-b-lg bg-white-linen-100 mx-4 h-10 ">
      <ul className="flex gap-4 header pr-4">
        {category &&
          category.map((el) => {
            return (
              <li key={el.id}>
                <Link
                  className="text-copperfield-400 hover:text-copperfield-600 text-decoration-none"
                  to={"/products"}
                >
                  {el.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Menu;
