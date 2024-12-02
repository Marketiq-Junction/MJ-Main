"use client";
import React, { useState } from "react";

const MissionSection = () => {
  const missionData = [
    {
      title: "Mission Of Our Company",
      content1:
        "is to empower businesses of all sizes by providing affordable and effective digital marketing solutions. We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.",
      content2:
        "We are committed to helping businesses adapt to the ever-evolving digital landscape by leveraging cutting-edge strategies that are results-focused, scalable, and customer-centric.",
      cardImage: "/images/aboutus/1.jpg",
      infoImage: "/images/aboutus/1.jpg",
    },
    {
      title: "Vision Of Our Company",
      content1:
        "Our vision is to be a global leader in digital transformation, helping businesses achieve their goals through cutting-edge technology.",
      content2:
        "We aim to inspire innovation and creativity while maintaining a customer-centric approach to ensure long-term success.",
      cardImage: "/images/aboutus/1.jpg",
      infoImage: "/images/aboutus/1.jpg",
    },
    {
      title: "Goals of Marketiq Junction",
      content1:
        "Our goal is to provide exclusive access to tools and expertise designed to solve business challenges effectively.",
      content2:
        "We aim to build a community of successful entrepreneurs by focusing on growth, innovation, and collaboration.",
      cardImage: "/images/aboutus/1.jpg",
      infoImage: "/images/aboutus/1.jpg",
    },
  ];

  const [selectedMission, setSelectedMission] = useState(missionData[0]);

  return (
    <section className="w-full h-[80%]">
      {/* Mission Header */}
      <div className="w-full h-[55%] flex items-center justify-center flex-col">
        <h1 className="text-[3.2vw] font-bold text-center leading-none">
          Exclusive Digital Agency To <br /> Provide Solution
        </h1>
        <p className="text-center leading-none text-[1.3vw] mt-3 font-medium">
          Our specialized team focuses on providing personalized strategies that
          align with your <br /> business goals, ensuring that your digital
          marketing efforts deliver the best outcomes. <br /> Partner with us
          for exclusive access to cutting-edge digital tools and expertise{" "}
          <br />
          designed to solve your business challenges!
        </p>
      </div>

      {/* Mission Cards */}
      <div className="w-full h-[35%] flex items-center justify-center gap-5">
        {missionData.map((mission, index) => (
          <div
            key={index}
            className="w-[20%] h-[50%] bg-gradient-to-r from-[#50C3C6] to-[#4A9BD3] flex cursor-pointer"
            onClick={() => setSelectedMission(mission)}
          >
            {/* Left Section: Image */}
            <div className="w-[30%] h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                <img
                  src={mission.cardImage}
                  alt="Mission Icon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right Section: Text */}
            <div className="w-[70%] h-full flex items-center justify-center">
              <span className="text-[1.5vw] leading-none font-bold text-white">
                {mission.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mission Info */}
      <section className="w-full h-[100%] p-5 flex items-center justify-center">
        <div className="missioninfo w-[80%] h-full border-2 border-[#000000]">
          <div className="w-full h-[20%] px-10 flex items-center">
            <h1 className="text-[2.5vw] font-bold">{selectedMission.title}</h1>
          </div>
          <div className="w-full h-[80%] flex">
            <div className="w-[60vw] h-full px-10">
              <p className="text-[1.5vw]">{selectedMission.content1}</p>
              <p className="text-[1.5vw] mt-5">{selectedMission.content2}</p>
            </div>
            <div className="w-[40vw] h-full flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-xl overflow-hidden">
                <img
                  src={selectedMission.infoImage}
                  alt={selectedMission.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MissionSection;
