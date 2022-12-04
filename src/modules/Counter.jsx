import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { timerState } from "../states/recoilTimerState";

const Counter = () => {
  // 타이머
  const [time, setTime] = useRecoilState(timerState);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((value) => value + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{`소요시간 : ${time}초`}</span>;
};

export default Counter;
