import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ManagementLogin = () => {
  // const navaigate = useNavigate();

  // const [login, { isLoading }] = useLoginMutation();
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(8, "نام کاربری حداکثر شامل 8 کاراکتر باشد")
        .min(4, "نام کاربری حداقل شامل 4 کاراکتر باشد")
        .required("نام کاربری نباید خالی باشد"),
      password: Yup.string()
        .min(8, "رمز حداقل شامل 8 کاراکتر باشد")
        .matches(/[0-9]/, "رمز باید شامل عدد باشد")
        .matches(/[a-z]/, "رمز باید شامل حروف لاتین کوچک  باشد")
        .matches(/[A-Z]/, "رمز باید شامل حروف لاتین بزرگ باشد")
        .required("رمز ورود نباید خالی باشد"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // console.log(values.userName);
      // // try {
      // const userData = await login({
      //   username: values.userName,
      //   password: values.password,
      // }).unwrap();
      // dispatch(setCredentials({ ...userData, username: values.userName }));
      // values.userName = "";
      // values.password = "";
      // navaigate("/home");
      // } catch (err) {
      //   // if (!err?.response) {
      //   //   setErrMsg("No server Response");
      //   // }
      // }
    },
  });
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
            name="userName"
            type="text"
            className="rounded h-7 hover:drop-shadow-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <span className="text-red-500">{formik.errors.userName}</span>
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
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="text-white bg-copperfield-400  d-flex justify-center items-center w-44 rounded text-decoration-none
            hover:drop-shadow-lg"
          >
            ورود
          </button>
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
