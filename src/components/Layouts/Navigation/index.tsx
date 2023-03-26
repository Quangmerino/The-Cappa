import { menu } from "@/common/data";
import Link from "next/link";
import React from "react";
import { TfiAngleDown } from "react-icons/tfi";

type Props = {
  show: boolean;
};

type MobileProps = {
    open: boolean,
}

function Navigation({ show }: Props) {
  return (
    <ul className="hidden items-center justify-between gap-2 lg:flex">
    {menu.map((item, index) => {
      return (
        <li key={index}>
          <Link
            className={`flex items-center font-extralight gap-1 py-1.5 px-2.5 2xl:text-[24px] ${
              show === true ? "text-black" : ""
            }`}
            href={item.path}
          >
            {item.name}
            {item?.subMenu?.length > 0 && (
              <span>
                <TfiAngleDown className="w-[10px] 2xl:w-[14px]" />
              </span>
            )}
          </Link>
        </li>
      );
    })}
  </ul>
  );
}

function NavigationMobile({open}:MobileProps) {
    return(
        <ul className={`bg-white flex flex-col items-center justify-between gap-2 z-20`}>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`flex items-center font-extralight gap-1 py-1.5 px-2.5 2xl:text-[24px] ${
                  open ? "text-black" : ""
                }`}
                href={item.path}
              >
                {item.name}
                {item?.subMenu?.length > 0 && (
                  <span>
                    <TfiAngleDown className="w-[10px] 2xl:w-[14px]" />
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    )
}

export { Navigation, NavigationMobile };
