import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-07-05T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        menit: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        detik: Math.floor(
          (distance % (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: timeLeft.hari,
      label: "Hari",
    },
    {
      value: timeLeft.jam,
      label: "Jam",
    },
    {
      value: timeLeft.menit,
      label: "Menit",
    },
    {
      value: timeLeft.detik,
      label: "Detik",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            bg-[#37558D]
            text-white
            rounded-xl
            py-3
            shadow-lg
          "
        >
          <h3 className="text-xl font-bold">
            {String(item.value).padStart(2, "0")}
          </h3>

          <p className="text-xs italic">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}