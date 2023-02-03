import { useGetSearchProductQuery } from "apis/apiSlice";
import Fotter from "layouts/footer";
import Header from "layouts/header";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "components/card";

const SerchBar = () => {
  const [query, setQuery] = useState(null);
  const { data: allData } = useGetSearchProductQuery(query);
  console.log(allData);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-start  items-start">
        <div className="pt-2 pr-6">
          <input
            type="text"
            className=" border-slate-800 bg-white-linen-100 w-80 h-8 p-1 rounded  focus:outline-none focus:border-none  text-copperfield-600  overflow-hidden hover:shadow-lg"
            placeholder="جست و جو"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-5 overflow-y-auto  m-2 h-screen pr-4">
          {allData &&
            allData.map((data) => {
              return <Card data={data} />;
            })}
        </div>
      </div>
      <div className="inset-x-0 bottom-0">
        <Fotter />
      </div>
    </>
  );
};
export default SerchBar;
