import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useUpdateOrderMutation } from "apis/apiSlice";
const OrderModal = ({ allData, elementId }) => {
  const [show, setShow] = useState(false);
  const [orderData, setOrderData] = useState();
  const [updateOrderData] = useUpdateOrderMutation();

  const handeleClose = () => setShow(false);
  const handeleShow = (id) => {
    setShow(true);
    const filteredOrder = allData.filter((data) => {
      return data.id == id;
    });
    setOrderData(filteredOrder[0]);
  };

  return (
    <>
      <button
        className="bg-blue-400 rounded hover:shadow-md w-24 text-white"
        onClick={() => handeleShow(elementId)}
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
                <span>{orderData && orderData.userinformation.userName}</span>
                <span>{orderData && orderData.userinformation.lastName}</span>
              </div>
              <div className="flex gap-1">
                <span>ادرس:</span>
                {orderData && orderData.userinformation.address}
              </div>
              <div className="flex gap-1">
                <span>تلفن:</span>
                {orderData && orderData.userinformation.phone}
              </div>
              <div className="flex gap-1">
                <span>زمان سفارش:</span>
                {orderData && orderData.createdAt}
              </div>
            </div>

            <div className="m-2">
              <table>
                <thead>
                  <tr className="bg-blue-400">
                    <th className="border-2 border-slate-800">کالا</th>
                    <th className="border-2 border-slate-800">قیمت</th>
                    <th className="border-2 border-slate-800">تعداد</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData &&
                    orderData.products.map((product, id) => {
                      return (
                        <tr key={id} className="border-2 border-slate-800">
                          <td className="border-2 border-slate-800">
                            {product.name}
                          </td>
                          <td className="border-2 border-slate-800">
                            {product.price * product.quantity}
                          </td>
                          <td className="border-2 border-slate-800">
                            {product.quantity}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="flex gap-1 m-2">
              <button
                type="submit"
                className="bg-green-400 rounded hover:shadow-md w-24"
                onClick={() => {
                  const date = new Date();
                  const options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                  const deleverDate = date.toLocaleDateString("fa-IR", options);

                  updateOrderData({
                    ...orderData,
                    deleverd: true,
                    deleverDate: deleverDate,
                  });
                }}
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
