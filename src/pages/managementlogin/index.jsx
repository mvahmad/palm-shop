import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { parseJwt } from "utils/functions.utils";

const ManagementLogin = () => {
  const [error, setErroor] = useState("");
  const navigat = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(8, "نام کاربری حداکثر شامل 8 کاراکتر باشد")
        .min(3, "نام کاربری حداقل شامل 4 کاراکتر باشد")
        .required("نام کاربری نباید خالی باشد"),
      password: Yup.string()
        .min(3, "رمز حداقل شامل 8 کاراکتر باشد")
        .matches(/[0-9]/, "رمز باید شامل عدد باشد")
        .matches(/[a-z]/, "رمز باید شامل حروف لاتین کوچک  باشد")
        .matches(/[A-Z]/, "رمز باید شامل حروف لاتین بزرگ باشد")
        .required("رمز ورود نباید خالی باشد"),
    }),
    onSubmit: (values) => {
      const { username, password } = values;
      axios
        .post("http://localhost:3002/auth/login", { username, password })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "login",
            JSON.stringify({
              userLogin: true,
              token: response.data.accessToken,
            })
          );
          navigat("/management-product");
        })
        .catch((error) => {
          console.log(error);
          setErroor(error.response.data);
        });
    },
  });

  // const storageParse = JSON.parse(localStorage.login);
  // const userInfo = parseJwt(storageParse.token);

  return (
    <div className="bg-orange-white-50 h-screen w-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-3 rounded-lg h-80 w-72 shadow-md bg-white-linen-100 p-2 "
        onSubmit={formik.handleSubmit}
      >
        <div className="text-copperfield-500 font-bold flex justify-center items-center text-lg ">
          ورود به پنل مدیریتی فروشگاه نخل
        </div>
        <div className="flex flex-col ">
          <label className="font-bold ">نام کاربری:</label>
          <input
            name="username"
            type="text"
            className="rounded h-7 hover:drop-shadow-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <span className="text-red-500">{formik.errors.username}</span>
          ) : null}
        </div>
        <div className="flex flex-col ">
          <label className="font-bold ">رمز عبور:</label>
          <input
            name="password"
            type="password"
            className="rounded h-7 hover:drop-shadow-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-red-500">{formik.errors.password}</span>
          ) : null}
        </div>
        <div className="flex items-center flex-col justify-center ">
          <button
            type="submit"
            className="text-white bg-copperfield-400  d-flex justify-center items-center w-44 rounded text-decoration-none
            hover:drop-shadow-lg"
          >
            ورود
          </button>
          {error && <span className="text-red-500">{error}</span>}
        </div>
        <div className="flex items-center justify-end">
          <Link
            to={"/home"}
            className="p-2 text-decoration-none text-copperfield-400 hover:text-copperfield-700"
          >
            بازگشت به سایت{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default ManagementLogin;
