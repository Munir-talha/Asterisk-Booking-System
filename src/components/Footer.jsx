'use client'
import React, { useState } from 'react';
import { FaSquareInstagram, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(true);
  const [isFlightOpen, setIsFlightOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleFlight = () => setIsFlightOpen(!isFlightOpen);
  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <footer className="flex flex-col md:flex-row justify-around bg-gray-100 p-8">
      <div>
        <div className='flex gap-5 items-center font-bold'>
          <FontAwesomeIcon icon={faPlaneUp} className='w-8' style={{ height:'auto', color: '#0DD496' }} />
          <span className='text-blue-600'>E-Flight</span>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
          <Input className="rounded-xl" type="email" placeholder="Email" />
          <Button type="submit" style={{ background: '#0DD496' }} className="rounded-xl">Subscribe</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mt-5 md:mt-0">
        {/* About Us Accordion */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold cursor-pointer" onClick={toggleAbout}>About Us</h3>
          {isAboutOpen && (
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:underline">How to Book</a>
              <a href="#" className="text-gray-600 hover:underline">Help Center</a>
            </div>
          )}
        </div>

        {/* Flight Accordion */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold cursor-pointer" onClick={toggleFlight}>Flight</h3>
          {isFlightOpen && (
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:underline">Booking Easily</a>
              <a href="#" className="text-gray-600 hover:underline">Promotions</a>
            </div>
          )}
        </div>

        {/* Contact Us Accordion */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold cursor-pointer" onClick={toggleContact}>Contact Us</h3>
          {isContactOpen && (
            <div className="flex space-x-4 mt-2">
              <FaSquareInstagram />
              <FaSquareFacebook />
              <FaTwitter />
              
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
