/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Navigation, NavigationMobile } from "../Navigation";
import { MdClose } from "react-icons/md";

type HeaderProps = {
  show?: boolean;
};

function Header({ show }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex px-3 justify-between items-center h-[90px] xl:gap-x-56 xl:py-10 xl:px-40 2xl:h-[120px]">
        <Link href="/">
          <img
            className="h-[40px] w-full 2xl:h-[60px]"
            src={`${show ? "/logo/logo-dark.png" : " /logo/logo.png"}`}
            alt="logo"
          />
        </Link>
        <Navigation show />
        {!open ? (
          <FaBars
            onClick={() => setOpen(true)}
            className={`${show ? 'text-[#aa8453]' : ''} text-[22px] lg:hidden`}
          />
        ) : (
          <MdClose className={`${show ? 'text-[#aa8453]' : ''} text-[22px] lg:hidden`} onClick={() => setOpen(false)} />
        )}
      </div>
      {open && <NavigationMobile open/>}
    </>
  );
}

export default Header;
