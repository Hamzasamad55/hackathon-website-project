import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2A254B] text-white py-16">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                New arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Best sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recently viewed
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Popular this week
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                All products
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Crockery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Homeware
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Plant pots
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Crockery
              </a>
            </li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Vacancies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns policy
              </a>
            </li>
          </ul>
        </div>

        {/* Join Our Mailing List Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Join Our Mailing List</h3>
          <input
            type="email"
            className="px-4 py-2 rounded-lg text-black w-full mb-4"
            placeholder="your@email.com"
          />
          <button className="bg-white text-[#2A254B] px-6 py-2 rounded-lg hover:bg-gray-300">
            Sign up
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 px-8">
        <div className="w-full flex justify-between items-center">
          {/* Copyright Section */}
          <div className="text-left">
            <p>Copyright© 2022 Avion LTD.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaSkype size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
