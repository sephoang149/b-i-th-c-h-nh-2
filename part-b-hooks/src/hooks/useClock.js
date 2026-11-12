import { useState, useEffect } from "react";

// Custom hook đồng hồ (yêu cầu nâng cao)
export default function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
