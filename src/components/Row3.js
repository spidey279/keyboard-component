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

const Row3 = () => {
  const buttons = [
    {
      icon: null,
      key: "Q",
    },

    {
      icon: null,
      key: "W",
    },
    {
      icon: null,
      key: "E",
    },
    {
      icon: null,
      key: "R",
    },
    {
      icon: null,
      key: "T",
    },
    {
      icon: null,
      key: "Y",
    },

    {
      icon: null,
      key: "U",
    },
    {
      icon: null,
      key: "I",
    },
    {
      icon: null,
      key: "O",
    },
    {
      icon: null,
      key: "P",
    },
    {
      icon: "{",
      key: "[",
    },
    {
      icon: "}",
      key: "]",
    },
    {
      icon: "|",
      key: "\\",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-items-center space-x-1.5 ">
          <div
            className="bg-[#0A090D] inline-flex hover:scale-95 cursor-pointer transition-all duration-150 
            
             justify-start items-end rounded-[6px] w-16 h-10 text-white p-2 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0px_4px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            style={{
              fontSize: "var(--text-small)",
            }}
          >
            Tab
          </div>

          {buttons.map((button, index) => (
            <div
              key={index}
              className="bg-[#0A090D] text-xs inline-flex flex-col hover:scale-95 transition-all duration-150 
            cursor-pointer 
             justify-center items-center rounded-sm w-10 h-10 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            >
              <span>{button.icon}</span>
              <span> {button.key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row3;
