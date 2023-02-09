import { useState } from "react";
const Counter = ({ value }) => {
  const [quantity, setQuantity] = useState(value);

  const increment = () => {
    setQuantity((count) => count + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity((count) => count - 1);
    }
  };

  return (
    <div className="w-28 flex justify-between">
      <button
        className="bg-copperfield-500  rounded-r-lg text-white w-7"
        onClick={() => decrement()}
      >
        -
      </button>
      <div className="bg-orange-white-100 w-20 flex justify-center items-center">
        {quantity}
      </div>
      <button
        className="bg-copperfield-500  rounded-l-lg text-white w-7"
        onClick={() => increment()}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
