import useClock from "../hooks/useClock.js";

function Clock() {
  const time = useClock();
  return <span className="clock">{time.toLocaleTimeString()}</span>;
}

export default Clock;
