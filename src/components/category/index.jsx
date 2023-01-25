import Card from "components/card";
import { useGetFilterCategoryQuery } from "apis/apiSlice";

const Category = ({ id }) => {
  const { data: allData } = useGetFilterCategoryQuery(id);
  return (
    <div className="category flex">
      {allData &&
        allData.map((filter, id) => {
          return (
            <div className="product" key={id}>
              <Card data={filter} />
            </div>
          );
        })}
    </div>
  );
};
export default Category;
