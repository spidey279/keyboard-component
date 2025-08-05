import Image from "next/image";
import { Github } from "lucide-react";
import Row1 from "@/components/Row1";
import Row2 from "@/components/Row2";
import Row3 from "@/components/Row3";
import Row4 from "@/components/Row4";
import Row5 from "@/components/Row5";
import Row6 from "@/components/Row6";

export default function Home() {
  return (
    <div className="h-screen w-screen  select-none  flex flex-col items-center justify-center ">
      <a href="https://github.com/spidey279/keyboard-component" target="_blank" className="p-2  -translate-y-15 hover:bg-[#363636] duration-150 cursor-pointer rounded-full">
        <Github className="text-black hover:text-white duration-150  w-6 h-6" />
      </a>{" "}
      <div className="rotate-90 md:rotate-0 origin-center transition-transform duration-300">
        <div className="h-75 w-[42.8rem] max-w-[700px] rounded-xl text-white p-2 bg-zinc-800">
          <div className=" h-full flex flex-col items-center justify-center gap-1.5">
            {" "}
            <Row1 />
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />
            <Row6 />
          </div>
        </div>
      </div>
    </div>
  );
}
