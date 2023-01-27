import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  if (localStorage.login) {
    return children;
  } else {
    return <Navigate to={"/management-login"} />;
  }
};

export default PrivetRout;
