/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../Layouts/Header";
import AboutComponent from "./About";
import Rooms from "./Rooms";
import Pricing from "./Pricing";
import Promotional from "./Promotional";
import Facilties from "./Facilties";
import Testimonials from "./Testimonials";
import Services from "./Services";
import News from "./News";
import FormBooking from "./FormBooking";
import SliderHomePage from "./Slider";
import CheckIn from "./CheckIn";
import Clients from "./Clients";

function HomePage() {
  return (
    <div className="relative min-h-screen z-[5]">
      <SliderHomePage />
      <div className="md:hidden">
        <CheckIn buttonName="Check Now" />
      </div>
      <AboutComponent />
      <Rooms />
      <Pricing />
      <Promotional />
      <Facilties />
      <Testimonials />
      <Services />
      <News />
      <FormBooking />
      <div className="lg:hidden">
        <Clients />
      </div>
    </div>
  );
}

export default HomePage;
