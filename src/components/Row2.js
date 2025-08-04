import React from "react";
import {
  Sun,
  Book,
  Search,
  Moon,
  Volume2,
  Volume1,
  VolumeX,
  FastForward,
  Play,
  Rewind,
  Mic,
} from "lucide-react";

const Row2 = () => {
  const buttons = [
    {
      icon: "~",
      key: "`",
    },

    {
      icon: "!",
      key: "1",
    },
    {
      icon: "@",
      key: "2",
    },
    {
      icon: "#",
      key: "3",
    },
    {
      icon: "$",
      key: "4",
    },
    {
      icon: "%",
      key: "5",
    },

    {
      icon: "^",
      key: "6",
    },
    {
      icon: "&",
      key: "7",
    },
    {
      icon: "*",
      key: "8",
    },
    {
      icon: "(",
      key: "9",
    },
    {
      icon: ")",
      key: "0",
    },
    {
      icon: "_",
      key: "-",
    },
    {
      icon: "+",
      key: "=",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-items-center space-x-1.5 ">
          {buttons.map((button, index) => (
            <div
              key={index}
              style={{ fontSize: "var(--text-small)" }}
              className="bg-[#0A090D] flex items-center justify-center flex-col  hover:scale-95 transition-all duration-150 
            cursor-pointer 
             rounded-sm w-10 h-10 p-2
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            >
              <span>{button.icon}</span>
              <span> {button.key}</span>
            </div>
          ))}{" "}
          <div
            className="bg-[#0A090D] inline-flex hover:scale-95 cursor-pointer transition-all duration-150 
           
             justify-end items-end rounded-[6px] w-16 h-10 text-white p-2 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0px_4px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            style={{
              fontSize: "var(--text-small)",
            }}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row2;
