import { TbBrandAbstract } from "react-icons/tb";

function Footer() {
  return (
    <footer className="bg-black py-8 pr-[200px] rounded-tl-lg rounded-tr-lg border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-start space-x-16">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Abstract</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Branches
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Blog
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Help Center
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Status
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Release Notes
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Community</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Twitter
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              LinkedIn
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Facebook
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Dribbble
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Podcast
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Company</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer">
              Legal
            </li>
            <li className="text-gray-400 hover:text-gray-200 cursor-pointer font-semibold">
              Contact Us
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">info@abstract.com</p>
        </div>
      </div>
      <div className="text-white flex flex-col items-end mt-8 space-y-2">
        <div className="flex flex-col items-start">
          <TbBrandAbstract size={30} />
          <p>&copy; Copyright 2022</p>
          <p>Abstract Studio Design Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
