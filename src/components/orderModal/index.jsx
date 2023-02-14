import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useGetOrdersQuery } from "apis/apiSlice";
const OrderModal = ({
  name,
  lname,
  phone,
  createdAt,
  address,
  allData,
  elementId,
}) => {
  const [show, setShow] = useState(false);
  const handeleClose = () => setShow(false);
  const handeleShow = () => setShow(true);

  console.log(
    "data",
    allData.map((item) => console.log(item))
  );

  return (
    <>
      <button
        className="bg-blue-400 rounded hover:shadow-md w-24 text-white"
        onClick={handeleShow}
      >
        بررسی سفارش
      </button>
      <Modal
        show={show}
        onHide={handeleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>نمایش سفارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="flex flex-col gap-3">
              <div className="flex gap-1">
                <span>نام مشتری:</span>
                <span>{name}</span>
                <span>{lname}</span>
              </div>
              <div className="flex gap-1">
                <span>ادرس:</span>
                {address}
              </div>
              <div className="flex gap-1">
                <span>تلفن:</span>
                {phone}
              </div>
              <div className="flex gap-1">
                <span>زمان سفارش:</span>
                {createdAt}
              </div>
            </div>

            <div className="m-2">
              {allData.map((data, id) => {
                return (
                  <table key={id}>
                    <thead>
                      <tr className="bg-blue-400">
                        <th className="border-2 border-slate-800">کالا</th>
                        <th className="border-2 border-slate-800">قیمت</th>
                        <th className="border-2 border-slate-800">تعداد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data
                        .filter((el) => el.id === elementId)
                        .map((element) => {
                          return (
                            <tr key={id} className="border-2 border-slate-800">
                              <td>{element.name}</td>
                              {/* <td className="border-2 border-slate-800">
                              {element.name}
                            </td>
                            <td className="border-2 border-slate-800">
                              {element.price * element.quantity}
                            </td>
                            <td className="border-2 border-slate-800">
                              {element.quantity}
                            </td> */}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                );
              })}
            </div>

            <div className="flex gap-1 m-2">
              <button
                type="submit"
                className="bg-green-400 rounded hover:shadow-md w-24"
              >
                تحویل شد
              </button>
              <button
                type="button"
                className="bg-copperfield-400 rounded hover:shadow-md w-24"
                onClick={handeleClose}
              >
                بستن
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default OrderModal;
