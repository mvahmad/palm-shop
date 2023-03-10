import { useUpdateDataMutation, useGetFilterProductQuery } from "apis/apiSlice";
import { useFormik } from "formik";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetCateguryQuery, useGetSubCategoryQuery } from "apis/apiSlice";
import toast, { Toaster } from "react-hot-toast";

let fileSrc = null;

const UpdateDataModal = ({ id }) => {
  const [show, setShow] = useState(false);
  const [updateProduct] = useUpdateDataMutation();
  const { data: category } = useGetCateguryQuery();
  const { data: subCategory } = useGetSubCategoryQuery();
  const { data: filterProduct, isSuccess } = useGetFilterProductQuery(id);
  let product = filterProduct && filterProduct[0];
  if (isSuccess) {
    const splitImage = filterProduct[0].image.split("/");
    fileSrc = splitImage[4];
  }

  const handeleClose = () => {
    setShow(false);
  };

  const handeleShow = () => {
    setShow(true);
  };

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
      subCategory: Yup.string().required("زیرمجموعه نباید خالی باشد"),
      description: Yup.string().required("توضیحات نباید خالی"),
    }),
  });

  const imageHandeler = async (e) => {
    let filesSelected;

    filesSelected = e.target.files;

    const formData = new FormData();
    formData.append("image", filesSelected[0]);

    await axios.post("http://localhost:3000/upload", formData).then((res) => {
      fileSrc = res.data.filename;
    });
  };

  useEffect(() => {
    if (filterProduct && isSuccess == true) {
      formik.initialValues.image = product.image && product.image;
      formik.initialValues.name = product.name && product.name;
      formik.initialValues.category = product.category && product.category;
      formik.initialValues.subCategory =
        product.subCategory && product.subCategory;
      formik.initialValues.brand = product.brand && product.brand;
      formik.initialValues.price = product.price && product.price;
      formik.initialValues.description =
        product.description && product.description;
    }
  }, [filterProduct, id]);

  const handleSubmit = () => {
    updateProduct({
      id,
      name: formik.values.name,
      image: `http://localhost:3000/files/${fileSrc}`,
      brand: formik.values.brand,
      category: formik.values.category,
      subCategory: formik.values.subCategory,
      price: formik.values.price,
      description: formik.values.description,
    });

    toast.promise(updateProduct, {
      loading: "شکیبا باشید",
      success: "عملیات موفقیت آمیز بود",
      error: "عملیات موفقیت آمیزنبود",
    });
  };

  return (
    <>
      <button
        className="bg-blue-400 rounded text-white ml-1 hover:shadow-md w-24 "
        onClick={handeleShow}
      >
        ویرایش
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
                <img src={formik.values.image} className="w-10 h-10" />
                <input
                  name="image"
                  accept="image/*"
                  type="file"
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
                  placeholder={formik.values.name}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-full">
                <label>دسته بندی:</label>
                <div className="w-full">
                  <select
                    name="category"
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                  >
                    {category &&
                      category.map((element) => {
                        return (
                          <option value={element.name} key={element.id}>
                            {element.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label>زیرگروه:</label>
                <div className="w-full">
                  <select
                    name="subCategory"
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subCategory}
                  >
                    {subCategory &&
                      subCategory.map((element) => {
                        return (
                          <option value={element.name} key={element.id}>
                            {element.name}
                          </option>
                        );
                      })}
                  </select>
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
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-400 rounded hover:shadow-md w-24"
              >
                ذخیره
              </button>
              <Toaster position="top-right" reverseOrder={false} />
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
export default UpdateDataModal;
