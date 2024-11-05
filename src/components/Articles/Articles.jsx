import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

function Articles() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-5xl font-bold text-center mb-6">What's New?</h1>

      <div className="flex justify-around flex-wrap gap-4">
        {[1, 2, 3].map((item, index) => (
          <Card 
            key={index} 
            className="flex flex-col p-4 rounded-lg shadow-md bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <div 
              className="flex-none w-full h-56 bg-cover bg-center rounded-md mb-4"
              style={{ backgroundImage: `url("/plane0${item}.jpg")` }}
            ></div>

            <CardContent className="flex flex-col gap-2">
              <div className="text-green-600 text-sm font-semibold">Do consectetur</div>

              <CardTitle className="text-lg font-bold">
                US Flights Delayed Due to FAA System Outage
              </CardTitle>

              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>Feb 10, 2023</span>
                <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                  5 min read
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button 
          style={{ backgroundColor: '#0DD496' }} 
          className="text-white py-2 px-6 rounded-full text-xl font-medium"
        >
          Read More Articles
        </button>
      </div>
    </div>
  );
}

export default Articles;
