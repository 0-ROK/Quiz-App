import { useEffect, useState } from "react";

const Counter = () => {
  // 타이머
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((value) => value + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
};

export default Counter;
