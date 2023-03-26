import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendar } from "react-icons/fa";

function DateTimePicker() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="flex flex-col gap-4 w-full md:flex-row md:gap-0">
      <div className="flex items-center justify-between bg-white p-5 w-full text-black md:border-r md:border-[#e4a853]">
        <DatePicker
          className="w-full bg-white outline-0 text-[15px] font-light"
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          selectsStart
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          placeholderText="Check in"
        />
        <FaRegCalendar className="text-[#e4a853] text-[20px]" />
      </div>
      <div className="flex items-center justify-between bg-white text-black lg:border-r lg:border-[#e4a853] p-5 w-full">
        <DatePicker
          className="w-full bg-white outline-0 text-[15px] font-light"
          selected={endDate}
          onChange={(date: any) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Check out"
        />
        <FaRegCalendar className="text-[#e4a853] text-[20px]" />
      </div>
    </div>
  );
}

export default DateTimePicker;
