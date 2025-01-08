import React from "react";
import Link from "next/link";
import { FaShippingFast, FaHandsHelping, FaDollarSign, FaRecycle } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center text-center md:text-left">
        <p className="text-2xl font-semibold text-gray-800 mb-6 md:mb-0 md:mr-6">
          A brand built on the love of craftsmanship, quality, and outstanding customer service.
        </p>
        <Link href="/products" legacyBehavior>
          <a className="mt-6 md:mt-0 px-6 py-3 text-lg font-semibold text-white bg-[#2A254B] -600 rounded-md hover:bg-[#1b193d] -700 inline-block">
            View our products
          </a>
        </Link>
      </div>
      {/* New Section */}
      <div className="w-full py-16 bg-gray-100 flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="w-[634px] h-[478px] p-6 bg-[#2A254B] -800 text-white rounded-md flex flex-col justify-between">
            <div className="mb-40 mt-auto">
              <p className="text-2xl font-bold mb-4 mt-4">
                It started with a small idea
              </p>
              <p className="text-xl">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
            </div>
            <Link href="/collection" legacyBehavior>
              <a className="px-6 py-3 text-lg font-semibold text-white bg-[#F9F9F926] -600 rounded-md hover:bg-[#B0B0B026] -700 inline-block">
                View collection
              </a>
            </Link>
          </div>
          <div className="w-[634px] h-[525px] p-6">
            <img
              src="/yellow chair.png"
              alt="Yellow Chair"
              className="w-full h-full rounded-md shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* Next Section */}
      <div className="w-full py-16 bg-white flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="w-full md:w-1/2 p-6">
            <img
              src="/sofa tree.png"
              alt="Sofa Tree"
              className="w-full h-auto rounded-md shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/2 p-6 bg-gray-100 text-gray-800 rounded-md flex flex-col justify-center">
            <p className="text-2xl font-bold mb-4">
              Our service isn't just personal, it's actually hyper personally exquisite
            </p>
            <p className="text-xl mb-6">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="text-xl mb-6">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="px-6 py-3 text-lg font-semibold-600 rounded-md text-white bg-[#2A254B] hover:bg-[#1b193d] -700 inline-block">
                Get in touch
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* Next Section */}
      <div className="w-full bg-gray-100 py-16">
        <section className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaShippingFast className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-xl font-bold text-[#2A254B]">
              Next day as standard
            </h3>
            <p className="text-[#2A254B] mt-2">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaHandsHelping className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-xl font-bold text-[#2A254B]">
              Made by true artisans
            </h3>
            <p className="text-[#2A254B] mt-2">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaDollarSign className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-xl font-bold text-[#2A254B]">
              Unbeatable prices
            </h3>
            <p className="text-[#2A254B] mt-2">
              For our materials and quality you won't find better prices anywhere.
            </p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <FaRecycle className="text-[#2A254B] mx-auto mb-2" size={32} />
            <h3 className="text-xl font-bold text-[#2A254B]">
              Recycled packaging
            </h3>
            <p className="text-[#2A254B] mt-2">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </section>
      </div><div>
        <div className="w-full bg-[#ffffff] py-16">
          <section className="max-w-[1280px] mx-auto px-8 text-[#2A254B] text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the club and get the benefits
            </h2>
            <p className="mb-8 text-lg">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                className="px-4 py-2 rounded-lg text-black w-full sm:w-auto"
                placeholder="Enter your email address"
              />
              <button className="bg-[#2A254B] text-[#ffffff] px-6 py-2 rounded-lg hover:bg-[#1b193d] -300">
                Sign Up
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
