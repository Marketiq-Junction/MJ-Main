"use client";
import React, { useState } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Hero from "./AboutHero/Hero";
import Info from "./MarketiqInfo/Info";
import ContactInfo from "./ContactInfo/ContactInfo";

import ValueCulture from "./Values&Culture/ValueCulture";
import MissionSection from "./MissionSection/MissionSection";

const About = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Info />
      <ContactInfo />
      <MissionSection />
      <div className="mt-[30em]">
        <ValueCulture />
      </div>
      
    </div>
  );
};

export default About;
