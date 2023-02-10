import Category from "components/category";
import Fotter from "layouts/footer";
import Header from "layouts/header";
import { useParams } from "react-router-dom";
import { useGetFilterCategoryQuery } from "apis/apiSlice";
import Card from "components/card";
import AccordionProduct from "components/accordion";
const ProductsPage = () => {
  const { id } = useParams();
  const { data: allData } = useGetFilterCategoryQuery(id);

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <h3 className="pr-6 pt-2">{id}</h3>
        <div className="flex p-4">
          <div className="w-64 p-2 ">
            <AccordionProduct />
          </div>
          <div className="grid grid-cols-4 overflow-y-auto ">
            {allData &&
              allData.map((filter, id) => {
                return (
                  <div className="" key={id}>
                    <Card data={filter} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};
export default ProductsPage;
