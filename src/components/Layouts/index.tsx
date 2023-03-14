import React, { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

function Layouts({ children }: LayoutProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
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

  return (
    <div className="min-h-screen flex flex-col content-between">
      {show && (
        <div 
        className={`bg-white fixed top-0 left-0 right-0 z-10 opacity-0
        ${show ? 'transition-all duration-500 opacity-100' : ''}`
        }>
          <Header show/>
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
