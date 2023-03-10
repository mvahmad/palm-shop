import Fotter from "layouts/footer";
import Header from "layouts/header";
import vector10 from "assets/images/unsuccess.png";
const Unsuccess = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <h4>نتیجه پرداخت</h4>
        <div className="flex gap-3 items-center mb-8">
          <img src={vector10} />
          <div>پرداخت شما موفقیت امیز نبود.سفارش شما در انتظار پرداخت است</div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Unsuccess;
