import React from 'react';
import { faLocationDot,faWind, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export default function Explore() {
  return (
    <div className="p-6 font-sans my-24 mx-7">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-purple-600" />
          <span className="text-3xl font-bold">
            Trip From <span className="text-green-600 font-semibold">Houston</span>
          </span>
        </div>
        <button className="bg-black text-xl text-white py-2 px-6 rounded-full font-medium">
          Explore Destination
        </button>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 rounded-lg overflow-hidden mb-6 border-gray-300 border-2">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.934168978222!2d-95.36327168570266!3d29.760426481998917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b56a35c669%3A0x8b0d2b0b515e6e!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1615738126841!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex justify-evenly flex-wrap gap-4 my-16">
        {[1, 2, 3].map((item, index) => (
          <Card key={index} className="flex flex-col w-96 p-4 rounded-lg shadow-md bg-white">
            <div className="flex-none w-full h-32 bg-cover bg-center rounded-md mb-4"
                 style={{ backgroundImage: `url("/city0${item}.jpg")` }}>
            </div>
            <CardContent className="flex flex-col gap-1">
              <CardTitle className="text-lg font-semibold"><FontAwesomeIcon icon={faLocationDot} className="mr-2 text-yellow-500" />New York</CardTitle>
              <CardDescription className="text-gray-500"><FontAwesomeIcon icon={faCalendarDay} className="mr-2 text-yellow-500" /> 9-10 Feb 2023</CardDescription>
              <CardDescription className="text-gray-400"><FontAwesomeIcon icon={faWind} className="mr-2 text-yellow-500" /> 7 hr 15 min</CardDescription>
              
              <div className="flex justify-end mt-2">
                <div className="font-bold text-lg text-purple-400">$ 23.00</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
