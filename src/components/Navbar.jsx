import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <div className="absolute flex gap-2 ">
        <div className="h-[20px] w-[1.5px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[25px]"></div>
        <div className="h-[30px] w-[2.5px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[15px]"></div>
        <div className="h-[40px] w-[3px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[5px]"></div>
        <div className="h-[50px] w-[4px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[-5px]"></div>
        <div className="line"></div>
      </div>
      <h1 className="w-[60px] text-3xl font-bold text-[#00df9a] hover:text-white px-12 mt-4">
        Statics.
      </h1>
      <ul className=" hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 " : "fixed left-[-100%]"}>
      <div className="absolute flex gap-2 mt-8 pl-16">
          <div className="h-[20px] w-[1.5px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[25px]"></div>
          <div className="h-[30px] w-[2.5px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[15px]"></div>
          <div className="h-[40px] w-[3px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[5px]"></div>
          <div className="h-[50px] w-[4px] bg-gradient-to-t from-purple-600 via-green-400  to-blue-600 rounded-full mt-[-5px]"></div>
          <div className="line"></div>
        </div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4  hover:text-white mt-11 pr-auto">
          Statics.
        </h1>

        <ul className=" uppercase p-4">
          <li className="p-4 border-b mx-2 border-gray-600">Home</li>
          <li className="p-4 border-b mx-2 border-gray-600">Company</li>
          <li className="p-4 border-b mx-2 border-gray-600">Resources</li>
          <li className="p-4 border-b mx-2 border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
