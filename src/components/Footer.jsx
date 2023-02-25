import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Statics.</h1>
        <p className="py-2 ">
          Even before the era of big data, companies generated a wealth of
          information that could be leveraged to fuel growth and create more
          value. The potential of integrating this information is high.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 md:mx-auto">
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
      </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
        <ul>
         <h6 className="font-medium text-gray-400">Solutions</h6>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
         </ul>

         <ul>
         <h6 className="font-medium text-gray-400">Support</h6>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
         </ul>

         <ul>
         <h6 className="font-medium text-gray-400">Company</h6>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
         </ul>

         <ul>
         <h6 className="font-medium text-gray-400">Legal</h6>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
         </ul>
      </div>
    </div>
  );
};

export default Footer;
