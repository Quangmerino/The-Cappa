import { SelectType } from "@/types/selectType";
import React from "react";

function SelectCustom({ options, icon, value, setValue, className, position }: SelectType) {
  
  return (
    <div className="relative">
      <select
        className={`appearance-none min-h-[64px] font-thin py-3 px-5 outline-0 text-[15px] ${className !== '' ? className : 'bg-white text-black'}`}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      >
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <span className={`absolute top-1/2 -translate-y-1/2 ${position}`}>{icon}</span>
    </div>
  );
}

export default SelectCustom;
