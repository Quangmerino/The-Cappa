import { abouts, languages } from "@/common/data";
import Link from "next/link";
import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { Navigation } from "@/types/navType";
import SelectCustom from "@/components/common/SelectCustom";

function Footer() {
  const [language, setLanguage] = useState("en");

  const socials: Navigation[] = [
    {
      name: <FaInstagram />,
      path: "",
    },
    {
      name: <FaTwitter />,
      path: "",
    },
    {
      name: <FaYoutube />,
      path: "",
    },
    {
      name: <FaFacebookF />,
      path: "",
    },
    {
      name: <FaPinterestP />,
      path: "",
    },
  ];
  return (
    <div className="z-10">
      <div className="footer-top grid grid-cols-1 gap-5 py-[65px] px-5 bg-[#222] md:grid-cols-3 lg:px-20">
        <div className="about flex flex-col gap-5 lg:px-20">
          <h2 className="footer-title">About Hotel</h2>
          <p className="font-light text-[#adadad]">
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat.
          </p>
          <SelectCustom
            options={languages}
            value={language}
            setValue={setLanguage}
            icon={<BsGlobe />}
            className="bg-[#282828] text-white w-[160px]"
            position="left-32"
          />
        </div>
        <div className="explore md:pl-8 lg:px-20">
          <h2 className="footer-title">Explore</h2>
          <ul>
            {abouts.map((item: any, index: number) => {
              return (
                <li key={index} className="hover:list-disc">
                  <Link
                    className="font-light text-[#adadad] hover:pl-3 hover:transition-all hover:duration-300"
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact lg:px-20">
          <h2 className="footer-title">Contact</h2>
          <span className="font-light text-[#adadad]">
            1616 Broadway NY, New York 10001
          </span>
          <span className="font-light text-[#adadad]">
            United States of America
          </span>
          <Link href="tel: 0877250298" className="flex items-center gap-3 my-3">
            <TbPhoneCall className="w-[30px] h-[30px]" />
            <span className="font-light text-[24px] 2xl:text-[30px]">
              0877250298
            </span>
          </Link>
          <Link
            href="mailto: quangmerino@gmail.com"
            className="border-b border-solid border-[#AA8453] pb-1"
          >
            quangmerino@gmail.com
          </Link>
          <ul className="flex gap-2 my-6">
            {socials.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <span className="hover:text-[#AA8453]">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-bottom bg-[#1e1e1e] flex gap-1 justify-center py-8">
        <span className="font-thin">© Copyright 2023 by</span>
        <Link href="/">Quang Merino</Link>
      </div>
    </div>
  );
}

export default Footer;
