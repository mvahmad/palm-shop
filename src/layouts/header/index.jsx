import { Link } from "react-router-dom";
import { getAppTitle } from "utils";
import Vector from "assets/images/Vector.png";
import basket from "assets/images/basket.png";
import person from "assets/images/person.png";
import Menu from "components/menu";
import "../../assets/styles/Header.css";

const Header = () => {
  const title = getAppTitle();
  return (
    <>
      <header className="bg-copperfield-400 flex h-12 header w-full justify-between pr-4 items-center">
        <Link
          className="text-orange-white-50 text-2xl hover:text-copperfield-600 justify-start items-center flex text-decoration-none"
          to={"/home"}
        >
          {title}
          <img src={Vector} width="20" height="20" />
        </Link>
        <div className="flex pl-4 gap-3">
          <Link
            to="/management-login"
            className="text-orange-white-50  hover:text-copperfield-600 text-decoration-none"
          >
            مدیریت
          </Link>
          <Link className="text-orange-white-50 " to={"/basket"}>
            <img src={basket} width="19" height="19" />
          </Link>
          <Link className="text-orange-white-50  hover:text-copperfield-600 text-decoration-none">
            <img src={person} width="19" height="19" />
          </Link>
        </div>
      </header>
      <Menu />
    </>
  );
};

export default Header;
