import { Link } from "react-router-dom";

const ManagementHeader = () => {
  return (
    <header className="flex items-center justify-between p-2 bg-copperfield-500">
      <h4>پنل مدیریت فروشگاه </h4>
      <Link
        to="/home"
        className="text-decoration-none text-slate-800  hover:text-copperfield-300"
      >
        بازگشت به سایت
      </Link>
    </header>
  );
};
export default ManagementHeader;
