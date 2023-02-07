import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "store/features/counter";
const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="w-28 flex justify-between">
      <button
        className="bg-copperfield-500  rounded-r-lg text-white w-7"
        onClick={() => dispatch(decrementAction())}
      >
        -
      </button>
      <div className="bg-orange-white-100 w-20 flex justify-center items-center">
        {value}
      </div>
      <button
        className="bg-copperfield-500  rounded-l-lg text-white w-7"
        onClick={() => dispatch(incrementAction())}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
