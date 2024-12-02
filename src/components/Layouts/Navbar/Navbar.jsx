"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsArrowRight, BsHouse, BsBriefcase, BsInfoCircle, BsTelephone, BsChevronDown } from "react-icons/bs"; // Icons

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdowns = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen) {
        // Close the dropdown if user clicks outside
        closeDropdowns();
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="w-full h-[15vh]">
      {/* Desktop Navbar */}
      <nav className="w-full h-full flex items-center justify-between px-4 md:px-20 relative">
        {/* Desktop Logo */}
        <div className="logo relative">
          <Image
            src="/images/navbar/logonav.webp"
            width={150} // Adjust this for desktop
            height={75}
            alt="Logo"
            className="w-[150px] h-[75px] md:w-[200px] md:h-[100px]"
          />
          {/* 2011 - 2025 Text */}
          <span className="absolute bottom-[16%] -right-[30%] text-gray-600 text-md font-bold">
           Since : 2011
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="navlinks flex items-center gap-[2em]">
          <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
            Home
          </h5>
          <div className="relative flex items-center gap-1 cursor-pointer" onClick={(e) => e.stopPropagation()}>
            <h5
              onClick={toggleDropdown}
              className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3]"
            >
              Our Services
            </h5>
            <BsChevronDown className="text-[1.1vw] font-bold" />
            {dropdownOpen && (
              <div className="absolute top-[100%] left-[70%] border-2 border-black transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Service 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Service 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Service 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/aboutus">
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Who We Are
            </h5>
          </Link>
          <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
            Contact
          </h5>
        </div>

        {/* Let's Talk button (only for desktop) */}
        <div className="contactus">
          <div className="flex items-center justify-center gap-3 cursor-pointer px-10 py-3 bg-black text-white rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#4A9BD3] hover:text-white">
            <span className="text-[1.2vw] font-syne-bold font-bold">Let's Talk</span>
            <BsArrowRight />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
