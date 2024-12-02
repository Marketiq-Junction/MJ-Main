import React from "react";

const MissionCard = ({ src, text, onClick }) => {
  return (
    <div
      className="w-[20%] h-[50%] bg-gradient-to-r from-[#50C3C6] to-[#4A9BD3] flex cursor-pointer"
      onClick={onClick} // Attach click handler
    >
      {/* Left Section: Image */}
      <div className="w-[30%] h-full flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
          <img
            src={src}
            alt="Mission Icon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Right Section: Text */}
      <div className="w-[70%] h-full flex items-center justify-center">
        <span className="text-[1.5vw] leading-none font-bold text-white">
          {text}
        </span>
      </div>
    </div>
  );
};

export default MissionCard;
