import Fotter from "layouts/footer";
import Header from "layouts/header";
import vector9 from "assets/images/success.png";

const SuccessPage = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <h4>نتیجه پرداخت</h4>
        <div className="flex gap-3 items-center mb-8">
          <img src={vector9} />
          <div>
            با تشکر از خرید شما. سفارش شما ثبت و اماده ارسال است. برای هماهنگی
            با شما تماس گرفته میشود
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};
export default SuccessPage;
