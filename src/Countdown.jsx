import { useEffect, useState } from "react";

export default function Countdown({ onMidnight }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const target = new Date("2025-12-25T00:00:00");

    const interval = setInterval(() => {
      const diff = target - new Date();

      if (diff <= 0) {
        onMidnight();
        clearInterval(interval);
      } else {
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setTime(`${h}h ${m}m ${s}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onMidnight]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="text-gray-500 mb-2">Something special is coming…</p>
      <div className="text-3xl">{time}</div>
    </div>
  );
}
