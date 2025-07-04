"use client";

const Counter = ({ value, setValue, max }) => {
  const increment = () => {
    if (!max || value < max) {
      setValue(value + 1);
    }
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="bg-white border text-xl shadow-custom shadow-gray-300/50 hover:shadow-lg transition duration-300 ease-in-out px-3 py-1 rounded"
      >
        -
      </button>
      <span className="text-xl">{value}</span>
      <button
        onClick={increment}
        className="bg-white border text-xl shadow-custom shadow-gray-300/50 hover:shadow-lg transition duration-300 ease-in-out px-3 py-1 rounded"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
