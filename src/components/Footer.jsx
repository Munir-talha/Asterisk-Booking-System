import React from 'react';
import { FaSquareInstagram, FaSquareFacebook, FaTwitter  } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
function Footer() {
  return (
    <>
      <footer className="flex justify-around bg-gray-100 p-8">
        <div>
          <div className='flex gap-5 items-center font-bold'>
            <FontAwesomeIcon icon={faPlaneUp} className='w-8' style={{ color: '#0DD496' }}/>
            <span className='text-blue-600'>E-Flight</span>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
            <Input className="rounded-xl" type="email" placeholder="Email" />
            <Button type="submit" style={{background : '#0DD496'}} className="rounded-xl">Subscribe</Button>
          </div>
        </div>
        

        <div className="flex space-x-10">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">About Us</h3>
          <a href="#" className="text-gray-600 hover:underline">How to Book</a>
          <a href="#" className="text-gray-600 hover:underline">Help Center</a>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold">Flight</h3>
          <a href="#" className="text-gray-600 hover:underline">Booking Easily</a>
          <a href="#" className="text-gray-600 hover:underline">Promotions</a>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold">Contact Us</h3>
          <div className="flex space-x-4 mt-2">
            <FaSquareInstagram />
            <FaSquareFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
