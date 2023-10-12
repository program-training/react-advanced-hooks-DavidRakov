import { useState } from "react";

const useCount = (): [number, () => void] => {
  const [num, setNum] = useState(0);

  const setClicks = () => {
    setNum((num) => num + 1);
  };
  return [num, setClicks];
};

export default useCount;
