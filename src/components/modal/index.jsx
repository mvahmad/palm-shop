import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const AddProductModal = () => {
  const [show, setShow] = useState(false);

  const handeleClose = () => setShow(false);
  const handeleShow = () => {
    console.log("handeleShow");
    setShow(true);
    console.log("show", show);
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
          <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label>تصویر کالا:</label>
              <div className="w-full flex gap-3">
                <input
                  type="file"
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                />
                <button className="bg-copperfield-400 rounded hover:shadow-md w-24 ">
                  جست و جو
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>نام کالا:</label>
              <div className="w-full ">
                <input
                  type="text"
                  className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-full">
                <label>دسته بندی:</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                  />
                </div>
              </div>
              <div className="w-full">
                <label>زیرگروه:</label>
                <div className="w-full">
                  <input
                    type="text"
                    className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label>توضیحات:</label>
              <div className="w-full flex gap-3">
                <textarea className="bg-slate-300 p-1 w-full focus:outline-none focus:border-none" />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-green-400 rounded hover:shadow-md w-24"
            onClick={handeleClose}
          >
            ذخیره
          </button>
          <button
            className="bg-copperfield-400 rounded hover:shadow-md w-24"
            onClick={handeleClose}
          >
            لغو
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddProductModal;
