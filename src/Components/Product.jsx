import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

import logo from '../assets/Isms.png'

const descriptions = [
  {
    rightTitle:"Organized Data In Few Clicks", 
    rightDescription:
      "Our system utilizes state of the art data visualization techinques to present the information with beautifull charts and graphs with ease ",
    rightColor: "bg-green-200",
  },
  {
    rightTitle:"Avoid The Tiring Paperworks",
    rightDescription: "Our system can be accessed from your smart phone or any computer devices. Making it easy to forward any information to everyone. ",
    rightColor: "bg-blue-200",
  },
  {
    rightTitle:"Send Notification To Any Group",
    rightDescription: "Sending notifications has never been easier. You can now send out a brodcast about new annoucments to everyone, specfic group or indiviuals with ease.",
    rightColor: "bg-red-100",
  },
  // Add more descriptions as needed
];

export default function Products() {
  const [index, setIndex] = useState(0);

  // Auto-increment the index every 2.6 seconds to switch descriptions
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(descriptions[index], {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: config.slow,
  });

  return (
    <div className=" px-4 md:mx-5 md:px-32 md:flex  items-center justify-center">
      {transitions(({ opacity }, item) => (
        <>
          <div
            className={`w-full md:w-3/5 h-64 md:h-52 p-4 rounded-lg shadow-lg bg-slate-400 md:rounded-r-none`}
          >
            <div className=" flex align-middle items-center">
            <img src={logo} alt="Logo" className="h-14 " />
            <h2 className="font-bold text-xl items-center text-center flex-1 text-white">Our latest product</h2>
            </div>
            <p className="text- "><span className="font-bold">ISMS.et</span> provides a modern way to learning. We provide a Educational managment system that is easy to use and minimizes work overheads for schools and parents alike. </p>
            <button className="mt-2 text-white justify-start bg-indigo-600 py-2 px-4 rounded-md "><a href="https://www.isms.et/" target="_blank">Learn more</a></button>
          </div>
          <animated.div
            style={{ opacity }}
            className={`w-full mt-4 md:mt-0 md:w-3/4 h-52 p-6 text-center md:px-14 border border-gray-200 rounded-lg shadow-lg md:rounded-l-none ${item.rightColor}`}
          >
            <h1 className="font-bold text-xl items-center text-center flex-1 text-white">{item.rightTitle}</h1>
            <h1 className="mt-5">{item.rightDescription}</h1>
          </animated.div>
        </>
      ))}
    </div>
  );
}
