import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
            <h1 className="text-white text-lg font-semibold mb-4">About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat neque maxime laboriosam enim obcaecati asperiores amet error, sint quae et aperiam facere cum sunt. Maxime voluptatum corrupti ullam voluptates.</p>
        </div>
        <div>
             <h1 className="text-white text-lg font-semibold mb-4">Quick Links</h1>
             <ul>
                <li className="hover:text-white transition-colors duration-300">Home</li>
                <li className="hover:text-white transition-colors duration-300">About</li>
                <li className="hover:text-white transition-colors duration-300">Courses</li>
                <li className="hover:text-white transition-colors duration-300">Contact</li>
             </ul>
        </div>
        <div>
             <h1 className="text-white text-lg font-semibold mb-4">Follow Us</h1>
             <div className="flex space-x-4">
                <Link href={"/"} className="hover:text-white transition-colors duration-300">Facebook</Link>
                <Link href={"/"} className="hover:text-white transition-colors duration-300">Twitter</Link>
                <Link href={"/"} className="hover:text-white transition-colors duration-300">Instagram</Link>
             </div>
        </div>
        <div>
            <h1 className="text-white text-lg font-semibold mb-4">Contact Us</h1>
            <div className="">
                <p>New Delhi, India</p>
                <p>Delhi, 100001</p>
                <p>Email: information.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
      </div>

      <p className="text-center mt-4 text-xs">2025 Music School. All rights reserved.</p>
    </div>
  );
}

export default Footer;
