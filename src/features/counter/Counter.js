import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  // Add state and define
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // Setup state for incrementByAmount
  const [incrementAmount, setIncrementAmount] = useState(0);

  //   Verify the number value
  const addValue = Number(incrementAmount) || 0;

  // Define func
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  // UI that renders the counter
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        {/* Calling actions */}
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
