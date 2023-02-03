import { Link } from "react-router-dom";
import { useGetCateguryQuery } from "apis/apiSlice";
import { BsSearch } from "react-icons/bs";
const Menu = () => {
  const { data: category } = useGetCateguryQuery();
  const iconStyles = { fontSize: "1.5rem" };
  return (
    <div className="rounded-b-lg bg-white-linen-100 mx-4 h-10 ">
      <ul className="flex justify-between items-center">
        <div className="flex gap-4  pr-4">
          {category &&
            category.map((el) => {
              return (
                <li key={el.id}>
                  <Link
                    className="text-copperfield-400 hover:text-copperfield-600 text-decoration-none"
                    to={`/products/${el.name}`}
                  >
                    {el.name}
                  </Link>
                </li>
              );
            })}
        </div>
        <div className="flex justify-center items-center w-7 h-7  pt-3 ">
          <Link to={"/serch"}>
            <div className="text-copperfield-400 hover:text-copperfield-600 bg-white-linen-100  text-decoration-none  flex">
              <BsSearch style={iconStyles} />
            </div>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
