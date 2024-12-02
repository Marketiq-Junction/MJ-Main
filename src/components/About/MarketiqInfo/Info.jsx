import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <section className="information w-full h-[100vh] flex">
      {/* Left Section */}
      <div className="w-1/2 h-full px-10 flex justify-center flex-col">
        {/* Heading */}
        <div className="w-full h-[20%] flex items-center leading-none">
          <h1 className="text-[2.5vw] font-bold">
            DRIVING A BETTER WAY OF <br /> DOING MARKETING
          </h1>
        </div>
        {/* Description */}
        <div className="w-full h-[60%]">
          <span className="text-[1.2vw]">
            <strong className="text-black">Marketiq Junction</strong> is your
            trusted digital marketing <br /> partner. Specialize in creating
            tailored solutions that <br /> help brands grow in the fast-paced
            digital world. Our <br /> affordable services enable businesses of
            all sizes to access <br />
            professional digital marketing without stretching their <br />
            budgets.
          </span>

          {/* Subheading */}
          <p className="text-[1.2vw] text-black font-bold mt-5">
            What Sets Us Apart?
          </p>
          {/* List */}
          <ul className="list-disc pl-5 ml-5 mt-5">
            <li>
              <strong>Affordability:</strong> Quality services at a fraction of
              the cost
            </li>
            <li>
              <strong>Customization:</strong> We understand every business is
              unique, and we create strategies to match your specific needs.
            </li>
            <li>
              <strong>Full-Spectrum Services:</strong> We provide a wide range
              of solutions, including web design, SEO, and analytics, to elevate
              your online presence.
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className="w-full h-[7%] flex gap-5">
          <Link href="/learn-more">
            <button className="px-10 py-2 bg-black text-white text-[1.2vw] font-medium">
              Learn More
            </button>
          </Link>
          <Link href="/get-in-touch">
            <button className="px-10 py-2 bg-black text-white text-[1.2vw] font-medium">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 h-full p-20">
        <img
          src="/images/aboutus/1.jpg"
          alt="Marketing Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Info;
