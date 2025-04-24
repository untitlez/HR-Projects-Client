const randomValue = (min, max) => Math.random() * (max - min) + min;
const colors = ["#3b60f9", "#34d2eb", "#ff6b6b", "#1a1c2c", "#2235e5"];

export const Background = ({ count = 3 }) => {
  const circles = Array.from({ length: count }).map((_, i) => {
    const size = randomValue(200, 400);
    const style = {
      position: "absolute",
      top: `${randomValue(0, 100)}%`,
      left: `${randomValue(0, 100)}%`,
      width: size,
      height: size,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: "50%",
      filter: "blur(100px)",
      opacity: 0.3,
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    };
    return <div key={i} style={style} />;
  });

  return <div className="fixed inset-0 overflow-hidden">{circles}</div>;
};

