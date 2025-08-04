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

const Row4 = () => {
  const buttons = [
    {
      icon: null,
      key: "A",
    },

    {
      icon: null,
      key: "S",
    },
    {
      icon: null,
      key: "D",
    },
    {
      icon: null,
      key: "F",
    },
    {
      icon: null,
      key: "G",
    },
    {
      icon: null,
      key: "H",
    },

    {
      icon: null,
      key: "J",
    },
    {
      icon: null,
      key: "K",
    },
    {
      icon: null,
      key: "L",
    },
    {
      icon: ":",
      key: ";",
    },
    {
      icon: '"',
      key: "'",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-items-center space-x-1.5 ">
          <div
            className="bg-[#0A090D] inline-flex hover:scale-95 cursor-pointer transition-all duration-150 
             
             justify-start items-end rounded-[6px] w-18.5 h-10 text-white p-2 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0px_4px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            style={{
              fontSize: "var(--text-small)",
            }}
          >
            Caps lock
          </div>

          {buttons.map((button, index) => (
            <div
              key={index}
              className="bg-[#0A090D] inline-flex flex-col text-xs   hover:scale-95 transition-all duration-150 
             cursor-pointer  
             justify-center items-center rounded-sm w-10 h-10 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            >
              <span>{button.icon}</span>
              <span> {button.key}</span>
            </div>
          ))}

          <div
            className="bg-[#0A090D] inline-flex hover:scale-95 cursor-pointer transition-all duration-150 
           
             justify-end items-end rounded-[6px] w-18.5 h-10 text-white p-2 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0px_4px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            style={{
              fontSize: "var(--text-small)",
            }}
          >
            Enter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row4;
