// components/HeroSection.js
import Image from "next/image";
import {
  FaShippingFast,
  FaHandsHelping,
  FaDollarSign,
  FaRecycle,
} from "react-icons/fa"; // Importing icons from react-icons

const HeroSection = () => {
  return (
    <>
      <main className="w-full h-auto bg-white overflow-x-hidden">
        <section
          className="relative bg-[#2A254B] text-white flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 mx-auto"
          style={{ maxWidth: "1280px", height: "auto", gap: "20px", paddingTop: "60px" }}
        >
          <div className="flex flex-col items-start gap-6 py-8 px-4 lg:px-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight w-full sm:w-[513px]">
              The furniture brand for the future, with timeless designs.
            </h1>
            <button className="bg-white text-blue-900 px-6 py-2 rounded hover:bg-gray-300">
              View collection
            </button>
            <p className="text-sm sm:text-lg font-satoshi leading-6 text-left">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/right image.png"
              alt="Modern black chair"
              width={520}
              height={584}
              className="mx-auto"
            />
          </div>
        </section>
      </main>

      {/* Icons Section */}
      <div className="w-full bg-gray-100 py-16">
        <section className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8">
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaShippingFast className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">
              Next day as standard
            </h3>
            <p className="text-sm sm:text-base text-[#2A254B] mt-2">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaHandsHelping className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">
              Made by true artisans
            </h3>
            <p className="text-sm sm:text-base text-[#2A254B] mt-2">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaDollarSign className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">
              Unbeatable prices
            </h3>
            <p className="text-sm sm:text-base text-[#2A254B] mt-2">
              For our materials and quality you won't find better prices anywhere.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaRecycle className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">
              Recycled packaging
            </h3>
            <p className="text-sm sm:text-base text-[#2A254B] mt-2">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </section>
      </div>

      {/* New Ceramics Section */}
      <div className="w-full bg-white py-16">
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A254B] mb-8">New ceramics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 bg-gray-100 shadow-lg rounded-lg text-center">
              <Image
                src="/header.png"
                alt="The Dandy chair"
                width={305}
                height={375}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">The Dandy chair</h3>
              <p className="text-base text-[#2A254B]">£250</p>
            </div>
            <div className="p-4 bg-gray-100 shadow-lg rounded-lg text-center">
              <Image
                src="/parent.png"
                alt="Rustic Vase Set"
                width={305}
                height={375}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">Rustic Vase Set</h3>
              <p className="text-base text-[#2A254B]">£155</p>
            </div>
            <div className="p-4 bg-gray-100 shadow-lg rounded-lg text-center">
              <Image
                src="/bottle.png"
                alt="The Silky Vase"
                width={305}
                height={375}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">The Silky Vase</h3>
              <p className="text-base text-[#2A254B]">£125</p>
            </div>
            <div className="p-4 bg-gray-100 shadow-lg rounded-lg text-center">
              <Image
                src="/lamp.png"
                alt="The Lucy Lamp"
                width={305}
                height={375}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#2A254B]">The Lucy Lamp</h3>
              <p className="text-base text-[#2A254B]">£399</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#2A254B] text-white px-6 py-2 rounded hover:bg-[#1b193d]">
              View collection
            </button>
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-[#2A254B] py-16">
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join the club and get the benefits
          </h2>
          <p className="mb-8 text-sm sm:text-lg">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              className="px-4 py-2 rounded-lg text-black w-full sm:w-auto"
              placeholder="Enter your email address"
            />
            <button className="bg-white text-[#2A254B] px-6 py-2 rounded-lg hover:bg-gray-300">
              Sign Up
            </button>
          </form>
        </section>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-white py-16">
        <section className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2A254B] mb-4">
            Experience timeless designs
          </h2>
          <p className="text-sm sm:text-lg text-[#2A254B] mb-8">
            Discover a world of modern and eco-friendly furniture that complements your style and space.
          </p>
          <button className="bg-[#2A254B] text-white px-6 py-2 rounded hover:bg-[#1b193d]">
            Shop Now
          </button>
        </section>
      </div>
    </>
  );
};

export default HeroSection;

