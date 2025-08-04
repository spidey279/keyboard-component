import React from "react";
import { ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";

const ArrBut = () => {
  return (
    <div className="-translate-y-0.5 ">
      <div className="flex flex-col gap-1">
        <div className="text-center">
          {" "}
          <div
            style={{ fontSize: "var(--text-small)" }}
            className="bg-[#0A090D] inline-flex flex-col hover:scale-95 transition-all duration-150 
            cursor-pointer 
             justify-center items-center rounded-sm w-11 h-5 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
          hover:shadow-[2px_2px_2px_rgba(0,0,0,0.9),0.5px_5px_10px_rgba(0,0,0,0.85)]"
          >
            <ArrowUp size={15} />
          </div>
        </div>
        <div className="flex gap-1">
          {" "}
          <div
            style={{ fontSize: "var(--text-small)" }}
            className="bg-[#0A090D] inline-flex flex-col hover:scale-95 transition-all duration-150 
             cursor-pointer 
             justify-center items-center rounded-sm w-11 h-5 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
            hover:shadow-[2px_2px_2px_rgba(0,0,0,0.9),0.5px_5px_10px_rgba(0,0,0,0.85)]"
          >
            <ArrowLeft size={15} />
          </div>
          <div
            style={{ fontSize: "var(--text-small)" }}
            className="bg-[#0A090D] inline-flex flex-col hover:scale-95 transition-all duration-150 
              cursor-pointer 
             justify-center items-center rounded-sm w-11 h-5 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
           hover:shadow-[2px_2px_2px_rgba(0,0,0,0.9),0.5px_5px_10px_rgba(0,0,0,0.85)]"
          >
            <ArrowDown size={15} />
          </div>
          <div
            style={{ fontSize: "var(--text-small)" }}
            className="bg-[#0A090D] inline-flex flex-col hover:scale-95 transition-all duration-150 
            cursor-pointer 
             justify-center items-center rounded-sm w-11 h-5 gap-1.5 p-1 
             shadow-[2px_2px_2px_rgba(33,33,36,1),0.5px_5px_10px_rgba(255,255,255,1)] 
         hover:shadow-[2px_2px_2px_rgba(0,0,0,0.9),0.5px_5px_10px_rgba(0,0,0,0.85)]"
          >
            <ArrowRight size={15} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrBut;
