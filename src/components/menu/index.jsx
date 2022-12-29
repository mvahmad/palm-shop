import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="rounded-b-lg bg-white-linen-100 ml-4 mr-4 h-10 ">
      <ul className="flex gap-4 header pr-4">
        <li>
          <Link
            className="text-copperfield-400 hover:text-copperfield-600"
            to={"/products"}
          >
            لوازم برقی
          </Link>
        </li>
        <li>
          <Link
            className="text-copperfield-400 hover:text-copperfield-600"
            to={"/products"}
          >
            لوازم اشپزخانه
          </Link>
        </li>
        <li>
          <Link
            className="text-copperfield-400 hover:text-copperfield-600"
            to={"/products"}
          >
            کالای سوپرمارکتی
          </Link>
        </li>
        <li>
          <Link
            className="text-copperfield-400 hover:text-copperfield-600"
            to={"/products"}
          >
            موبایل
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
