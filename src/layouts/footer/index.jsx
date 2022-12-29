import { Link } from "react-router-dom";
import "../../assets/styles/Header.css";
import "../../assets/styles/ul.css";
import vector from "assets/images/location.png";
import vector2 from "assets/images/telphone.png";
import vector3 from "assets/images/mail.png";
import vector4 from "assets/images/namad.png";
import vector5 from "assets/images/samandehi.png";
const Fotter = () => {
  return (
    <footer className="bg-titan-white-50 h-44 header flex justify-between items-center">
      <div>
        <ul className="pr-10 ul">
          <li>
            <Link to={"/"} className="hover:text-copperfield-600">
              خانه
            </Link>
          </li>
          <li>
            <Link className="hover:text-copperfield-600" to={"/about"}>
              درباره ما
            </Link>
          </li>
          <li>
            <Link className="hover:text-copperfield-600" to={"/contact-us"}>
              تماس با ما
            </Link>
          </li>
          <li>
            <Link className="hover:text-copperfield-600" to={"/why-us"}>
              چرا فروشگاه نخل
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3">
            <img src={vector} width="20" height="20" />
            <span>هرمزگان.رودان.بلوار شهید چمران.فروشگاه نخل</span>
          </li>
          <li className="flex gap-3">
            <img src={vector2} width="20" height="20" />
            <span>09399564232</span>
          </li>
          <li className="flex gap-3">
            <img src={vector3} width="27" height="20" />
            <span>test@test.com</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-5 ml-3">
        <img src={vector4} />
        <img src={vector5} />
      </div>
    </footer>
  );
};

export default Fotter;
