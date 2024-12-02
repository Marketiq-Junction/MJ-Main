import Image from 'next/image';

const Hero = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#4A9BD3] mt-2 mb-8 text-white p-6 md:p-12">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-7xl text-center -mt-12 font-bold font-syne">Contact Us</h2>
          <p className=" text-center ml-16  md:text-xl font-montserratAlternates">
            We&apos;re here to help you elevate your business! Reach <br /> out to us
            today for personalized support and to learn <br /> more about our digital
            marketing solutions.
          </p>
        </div>
        <div className="w-full mt-4 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/18.jpg"
            alt="Contact Illustration"
            width={300}
            height={400}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </section>
    );
  };
  
  export default Hero;
  