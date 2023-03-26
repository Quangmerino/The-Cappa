import React, { useState } from "react";
import { FaChevronDown, FaRegCalendar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import PageTitle from "@/components/common/PageTitle";
import SelectCustom from "@/components/common/SelectCustom";
import { adults, childs } from "@/common/data";

function BookingForm() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adult, setAdult] = useState("1 Adult");
  const [child, setChild] = useState("Children");
  return (
    <div className="lg:absolute lg:w-[500px] lg:right-80 lg:bottom-28 px-10 py-14 bg-[#F8F5F0] flex flex-col gap-4">
      <PageTitle
        subTitle="Rooms & Suites"
        title="Hotel Booking Form"
        cssSubTitle="text-[#666]"
        cssTitle="text-[#222] !text-[36px]"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between bg-white p-5 w-full text-black">
          <DatePicker
            className="w-full bg-white outline-0"
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
        <div className="flex items-center justify-between bg-white text-black p-5">
          <DatePicker
            className="w-full bg-white outline-0"
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <SelectCustom
            options={adults}
            value={adult}
            setValue={setAdult}
            className="w-full bg-white text-black"
            position="right-4"
            icon={<FaChevronDown className="text-gray-500" />}
          />
          <SelectCustom
            options={childs}
            value={child}
            setValue={setChild}
            className="w-full bg-white text-black"
            position="right-4"
            icon={<FaChevronDown className="text-gray-500" />}
          />
        </div>
        <button className="btn bg-[#e4a853] rounded-none border-0 text-white px-12 min-h-[64px] font-light md:px-8">Check Availability</button>
      </div>
    </div>
  );
}

export default BookingForm;
