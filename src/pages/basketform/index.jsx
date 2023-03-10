import Header from "layouts/header";
import Fotter from "layouts/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const BasketForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      lastName: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("نام نباید خالی باشد"),
      lastName: Yup.string().required("نام خانوادگی نباید خالی باشد"),
      address: Yup.string().required("ادرس نباید خالی باشد"),
      phone: Yup.number()
        .positive()
        .integer()
        .required("شماره تلفن نباید خالی باشد"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("userinfo", JSON.stringify(values));
      toast.success("اطلاعات شما ثبت شد");
    },
  });

  return (
    <>
      <Header />
      <div className="pr-6 pl-6 pt-3 pb-3">
        <h4>نهایی کردن خرید</h4>
        <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
          <div className="flex gap-3">
            <div className="w-full">
              <label>نام:</label>
              <div className="w-full">
                <input
                  name="userName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                />
              </div>
              {formik.touched.userName && formik.errors.userName ? (
                <span className="text-red-500">{formik.errors.userName}</span>
              ) : null}
            </div>
            <div className="w-full">
              <label>نام خانوادگی:</label>
              <div className="w-full">
                <input
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (
                <span className="text-red-500">{formik.errors.lastName}</span>
              ) : null}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <label>تلفن:</label>
              <div className="w-full">
                <input
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <span className="text-red-500">{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>ادرس:</label>
            <div className="w-full flex gap-3">
              <textarea
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
              />
            </div>
            {formik.touched.address && formik.errors.address ? (
              <span className="text-red-500">{formik.errors.address}</span>
            ) : null}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={formik.handleSubmit}
              className="text-white bg-copperfield-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none p-1 mt-4 hover:shadow-md"
            >
              ثبت
            </button>
            <Toaster position="top-right" reverseOrder={false} />
            <Link
              to={"/payment"}
              className="text-white bg-green-400 d-flex justify-content-center align-items-center w-44 rounded text-decoration-none p-1 mt-4 hover:shadow-md"
            >
              ادامه خرید
            </Link>
          </div>
        </form>
      </div>
      <Fotter />
    </>
  );
};
export default BasketForm;
