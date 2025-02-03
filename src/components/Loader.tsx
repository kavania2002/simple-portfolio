import { useEffect, useState } from "react";

const size = 60;
const centerX = 150;
const centerY = 150;
const points = Array.from({ length: 6 }, (_, i) => {
  const angle = ((i * 60 - 90) * Math.PI) / 180;
  return {
    x: centerX + size * Math.cos(angle),
    y: centerY + size * Math.sin(angle),
  };
});

const pathData =
  points
    .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x},${point.y}`)
    .join(" ") + " Z";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 50) {
      const fadeOutTimer = setTimeout(() => {}, 500);

      return () => clearTimeout(fadeOutTimer);
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 50) {
          clearInterval(timer);
          return 50;
        }
        return prev + 0.5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center">
      <svg width="300" height="300" className="">
        <path d={pathData} fill="none" stroke="#fdf0e2" strokeWidth="2" />

        <path
          d={pathData}
          fill="none"
          stroke="#c08521"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1000"
          strokeDashoffset={1000 - progress * 10}
        />

        <text
          x={centerX}
          y={centerY + 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-5xl font-bold fill-secondary"
          style={{
            opacity: progress === 50 ? 1 : 0,
            transition: "opacity 0.5s ease-in",
          }}>
          KG
        </text>
      </svg>
    </div>
  );
};

export default Loader;
