import Link from "next/link";
import React, { useState, useEffect } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      {show && (
        <button className="fixed right-8 bottom-8 z-40 cursor-pointer" onClick={topFunction}>
          <TfiArrowCircleUp className="w-12 h-12 text-[#aa8453]" />
        </button>
      )}
    </>
  );
}

export default BackToTop;
