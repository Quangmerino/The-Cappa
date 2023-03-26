import React, {useState} from "react";
import SelectCustom from "@/components/common/SelectCustom";
import { FaChevronDown } from "react-icons/fa";
import { adults, childs, roomSelect } from "@/common/data";

type Props = {
    buttonName: string,
}

function FormSelect({buttonName}:Props) {
  const [adult, setAdult] = useState("1 Adult");
  const [child, setChild] = useState("Children");
  const [room, setRoom] = useState("1 Room");
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-0">
      <SelectCustom
        options={adults}
        value={adult}
        setValue={setAdult}
        className="w-full bg-white text-black md:border-r md:border-[#e4a853]"
        position="right-4"
        icon={<FaChevronDown className="text-gray-500" />}
      />
      <SelectCustom
        options={childs}
        value={child}
        setValue={setChild}
        className="w-full bg-white text-black md:border-r md:border-[#e4a853]"
        position="right-4"
        icon={<FaChevronDown className="text-gray-500" />}
      />
      <SelectCustom
        options={roomSelect}
        value={room}
        setValue={setRoom}
        className="w-full bg-white text-black md:border-r md:border-[#e4a853]"
        position="right-4"
        icon={<FaChevronDown className="text-gray-500" />}
      />
      <button className="btn bg-[#e4a853] rounded-none border-0 text-white px-12 min-h-[64px] font-light md:px-8">
        {buttonName}
      </button>
    </div>
  );
}

export default FormSelect;
