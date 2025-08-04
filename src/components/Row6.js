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
  Grid2x2,
  Play,
  Rewind,
  Mic,
} from "lucide-react";
import ArrBut from "@/components/ArrBut";

const Row6 = () => {
  const buttons = [
    {
      icon: null,
      key: "Ctrl",
    },

    {
      icon: null,
      key: "Fn",
    },
    {
      icon: <Grid2x2 size={19} />,
      key: null,
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="flex  items-center justify-items-center space-x-1.5 ">
          {buttons.map((button, index) => (
            <div
              key={index}
              style={{ fontSize: "var(--text-small)" }}
              className="bg-[#0A090D] inline-flex flex-col hover:scale-95 transition-all duration-150 
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
        
             justify-start items-end rounded-[6px] w-12 h-10 text-white p-2 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0px_4px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            style={{
              fontSize: "var(--text-small)",
            }}
          >
            Alt
          </div>

          <div
            className="bg-[#0A090D] inline-flex hover:scale-95 cursor-pointer transition-all duration-150 
         
             justify-start items-end rounded-[6px] w-55 h-10 text-white p-2 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0px_4px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
            style={{
              fontSize: "var(--text-small)",
            }}
          ></div>
          <div
            style={{ fontSize: "var(--text-small)" }}
            className="bg-[#0A090D]  inline-flex flex-col hover:scale-95 transition-all duration-150 
            cursor-pointer 
             justify-center items-center rounded-sm w-12 h-10 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
          >
            Alt
          </div>
          <div
            style={{ fontSize: "var(--text-small)" }}
            className="bg-[#0A090D]  inline-flex flex-col hover:scale-95 transition-all duration-150 
            cursor-pointer 
             justify-center items-center rounded-sm w-10 h-10 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
             hover:shadow-none"
          >
            Ctrl
          </div>
          <ArrBut />
        </div>
      </div>
    </div>
  );
};

export default Row6;
