import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { WindowControls } from "./windowContorls";

export function Terminal({ title, children, setExpand, expanded }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-700">
      <div className="px-4 py-2 bg-[#2D2D2D] flex justify-between items-center">
        <span className="text-gray-400 text-sm">{title}</span>
        <div className="flex items-center gap-4">
            {expanded ?
            <FaChevronUp className=" text-2xl text-white cursor-pointer transition-transform duration-500" onClick={()=> setExpand((prev)=> !prev)}/>    
            :
            <FaChevronDown className=" text-2xl text-white cursor-pointer transition-transform duration-500" onClick={()=> setExpand((prev)=> !prev)}/>    
            }
        <WindowControls />
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}