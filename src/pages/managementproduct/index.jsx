import ManagementHeader from "layouts/managementHeader";
import { Outlet } from "react-router-dom";

const ManagementProduct = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col">
        <ManagementHeader />
      </div>
      <Outlet />
    </div>
  );
};

export default ManagementProduct;
