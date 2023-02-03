import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useState } from "react";
import { useAddDataMutation } from "apis/apiSlice";
import { useFormik } from "formik";
import axios from "axios";

let fileSrc = null;

const AddProductModal = () => {
  const [show, setShow] = useState(false);
  const [addProduct] = useAddDataMutation();

  const handeleClose = (e) => {
    setShow(false);
  };
  const handeleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
      category: "",
      brand: "",
      price: "",
      description: "",
      subCategory: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("نام  نباید خالی باشد"),

      brand: Yup.string().required("برند نباید خالی باشد"),
      price: Yup.number().required("قیمت نباید خالی باشد"),
      category: Yup.string().required("دسته بندی نباید خالی باشد"),
      subcategory: Yup.string().required("زیرمجموعه نباید خالی باشد"),
      description: Yup.string().required("توضیحات نباید خالی"),
    }),
  });

  const imageHandeler = async (e) => {
    const filesSelected = e.target.files;

    const formData = new FormData();
    formData.append("image", filesSelected[0]);

    await axios.post("http://localhost:3000/upload", formData).then((res) => {
      console.log(res.data.filename);
      fileSrc = res.data.filename;
    });
  };

  const handleSubmit = async () => {
    addProduct({
      name: formik.values.name,
      image: `http://localhost:3000/files/${fileSrc}`,
      brand: formik.values.brand,
      category: formik.values.category,
      subCategory: formik.values.subCategory,
      price: formik.values.price,
      description: formik.values.description,
    });
  };

  return (
    <>
      <button
        className="bg-copperfield-400 rounded hover:shadow-md w-24 "
        onClick={handeleShow}
      >
        افزودن کالا
      </button>
      <Modal show={show} onHide={handeleClose} backdrop="static">
        <Modal.Header>
          <Modal.Title>افزودن / ویرایش کالا</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label>تصویر کالا:</label>
              <div className="w-full flex gap-3">
                <input
                  type="text"
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                  onChange={imageHandeler}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>نام کالا:</label>
              <div className="w-full ">
                <input
                  name="name"
                  type="text"
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-full">
                <label>دسته بندی:</label>
                <div className="w-full">
                  <input
                    name="category"
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                  />
                </div>
              </div>
              <div className="w-full">
                <label>زیرگروه:</label>
                <div className="w-full">
                  <input
                    name="subCategory"
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subCategory}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-full">
                <label>برند:</label>
                <div className="w-full">
                  <input
                    name="brand"
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brand}
                  />
                </div>
              </div>
              <div className="w-full">
                <label>قیمت:</label>
                <div className="w-full">
                  <input
                    name="price"
                    type="number"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>توضیحات:</label>
              <div className="w-full flex gap-3">
                <textarea
                  name="description"
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
              </div>
            </div>
            <div className="flex gap-1">
              <button
                type="submit"
                className="bg-green-400 rounded hover:shadow-md w-24"
              >
                ذخیره
              </button>
              <button
                type="button"
                className="bg-copperfield-400 rounded hover:shadow-md w-24"
                onClick={handeleClose}
              >
                لغو
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddProductModal;
