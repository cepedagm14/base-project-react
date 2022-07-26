import { useState } from "react";

export const useProducts = (value = 0) => {
  const [count, setCount] = useState(value);
  const increaseBy = (value) => {
    setCount((prev) => Math.max(prev + value, 0));
  };
  return {
    increaseBy,
    count
  };
};
