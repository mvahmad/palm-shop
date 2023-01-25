import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "store/features/counterSlice";
import { Button } from "react-bootstrap";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(incrementAction())}>increment</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrementAction())}>decrement</Button>
    </>
  );
};
export default Counter;
