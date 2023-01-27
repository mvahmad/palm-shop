import ManagemetNavbar from "components/managementNavbar";
import ManagementHeader from "layouts/managementHeader";
import { Outlet } from "react-router-dom";

const ManagementProduct = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <ManagementHeader />
        <ManagemetNavbar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default ManagementProduct;
