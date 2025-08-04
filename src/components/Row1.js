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

const Row1 = () => {
  const buttons = [
    {
      icon: <Sun size={7} />,
      key: "F1",
    },

    {
      icon: <Sun size={9} />,
      key: "F2",
    },
    {
      icon: <Book size={9} />,
      key: "F3",
    },
    {
      icon: <Search size={9} />,
      key: "F4",
    },
    {
      icon: <Mic size={9} />,
      key: "F5",
    },
    {
      icon: <Moon size={9} />,
      key: "F6",
    },

    {
      icon: <Rewind size={9} />,
      key: "F7",
    },
    {
      icon: <Play size={9} />,
      key: "F8",
    },
    {
      icon: <FastForward size={9} />,
      key: "F9",
    },
    {
      icon: <VolumeX size={9} />,
      key: "F10",
    },
    {
      icon: <Volume1 size={9} />,
      key: "F11",
    },
    {
      icon: <Volume2 size={9} />,
      key: "F12",
    },
    {
      icon: null,
      key: " ",
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
            esc
          </div>

          {buttons.map((button, index) => (
            <div
              key={index}
              style={{ fontSize: "var(--text-small)" }}
              className="bg-[#0A090D] inline-flex flex-col hover:scale-95  transition-all duration-150 
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

export default Row1;
