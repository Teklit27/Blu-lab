import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const descriptions = [
  {
    leftDescription: "Avoid The Tiring Paperworks",
    rightDescription:
      "Effortless Paperwork Handling Effortless Paperwork Handling Effortless Paperwork Handling",
    leftColor: "bg-red-200",
  },
  {
    leftDescription: "Quality Customer Service",
    rightDescription: "Exceptional Customer Support",
    leftColor: "bg-blue-200",
  },
  // Add more descriptions as needed
];

export default function Products() {
  const [index, setIndex] = useState(0);

  // Auto-increment the index every 2 seconds to switch descriptions
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(descriptions[index], {
    key: index,
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    // leave: { opacity: 0, transform: "translateX(100%)" },
    config: config.default,
  });

  return (
    <div className="products h-40 px-32 flex items-center justify-center">
      {transitions(({ opacity, transform }, item) => (
        <>
          <div
            className="w-2/5 h-48 p-6 rounded-lg shadow-lg rounded-r-none bg-indigo-500 "
          >
            {descriptions[0].leftDescription}
          </div>
          <animated.div
            style={{ opacity, transform }}
            className={`w-2/5 h-48 p-6  border border-gray-200 rounded-lg rounded-l-none shadow-lg ${item.leftColor}`}
          >
            {item.rightDescription}
          </animated.div>
        </>
      ))}
    </div>
  );
}
