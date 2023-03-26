import React, { ReactNode, useState } from "react";
import DateTimePicker from "./DateTimePicker";
import FormSelect from "./FormSelect";

type Props = {
  children?: ReactNode;
  buttonName: string;
};

function CheckIn({ children, buttonName }: Props) {
  return (
    <div className="flex flex-col gap-4 px-4 bg-[#f8f5f0] md:bg-transparent py-8 md:p-0 lg:gap-0 lg:grid lg:grid-cols-2">
      {children}
      <DateTimePicker />
      <FormSelect buttonName={buttonName}/>
    </div>
  );
}

export default CheckIn;
