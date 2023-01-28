import { useGetLengthQuery } from "apis/apiSlice";
import { Link } from "react-router-dom";
const PaginationManager = ({ path }) => {
  const { data: dataLength } = useGetLengthQuery();

  let content;
  if (!dataLength) {
    return <span>loading...</span>;
  } else {
    const limit = paginateNumber(dataLength, 7);

    let buttonsArray = [];
    for (let index = 0; index < limit; index += 1) {
      buttonsArray[index] = { number: index + 1 };
    }

    content = buttonsArray.map((item) => {
      return (
        <Link to={`/management-product/${path}/page/${item.number}`}>
          <button
            className="border border-slate-700 text-slate-700 font-bold hover:shadow-lg w-8 h-8 mb-4"
            key={item.number}
          >
            {item.number}
          </button>
        </Link>
      );
    });
  }
  return content ? <span>{content}</span> : <span>loading...</span>;
};
export default PaginationManager;

function paginateNumber(length, limit) {
  const dividedLength = (length / limit).toFixed(2).toString();
  const ExposedDividNum = dividedLength.split(".");
  console.log(+ExposedDividNum[1]);
  const roundtarget =
    Number(ExposedDividNum[1]) > 50
      ? Math.round(dividedLength)
      : Math.round(dividedLength) + 1;
  return roundtarget;
}
