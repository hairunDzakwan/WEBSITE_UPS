"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1); // Default angka adalah 1

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Mencegah angka menjadi negatif
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        // Tambahkan padding agar terlihat lebih baik
         // Opsional, untuk sudut yang membulat
      }}
    >
      <button onClick={decrement} style={{ padding: "2px 10px",border: "1px solid black" }}>-</button>
      <span>{count}</span>
      <button onClick={increment} style={{ padding: "2px 10px" ,border: "1px solid black"}}>+</button>
    </div>
  );
};

export default Counter;
