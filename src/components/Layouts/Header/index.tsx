/* eslint-disable @next/next/no-img-element */
import { menu } from "@/common/data";
import Link from "next/link";
import React from "react";
import { TfiAngleDown } from "react-icons/tfi";

type HeaderProps = {
  show?: boolean;
};

function Header({ show }: HeaderProps) {
  return (
    <div className="flex justify-between items-center xl:gap-x-56 xl:py-10 xl:px-40 h-[90px]">
      <Link href="/">
        <img
          className='h-[40px] w-full'
          src={`${show ? "/logo/logo-dark.png" : " /logo/logo.png"}`}
          alt="logo"
        />
      </Link>
      <ul className="flex items-center justify-between gap-2">
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`flex items-center font-extralight gap-1 py-1.5 px-2.5 ${show ? 'text-black' : ''}`}
                href={item.path}
              >
                {item.name}
                {item.subMenu.length > 0 && (
                  <span>
                    <TfiAngleDown className="w-[10px]"/>
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
