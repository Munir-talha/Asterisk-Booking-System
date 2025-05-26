'use server';
import { NextResponse } from 'next/server';
import Amadeus from 'amadeus';

// Initialize Amadeus client (replace with your actual credentials)
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});
// console.log('Amadeus client initialized:', amadeus);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults,
      travelClass,
      tripType,
      returnDate,
    } = body;

    // Construct params for Amadeus API
    const params = {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults,
      travelClass,
      nonStop: false,
    };

    // If roundTrip, add returnDate param
    if (tripType === 'roundTrip' && returnDate) {
      params.returnDate = returnDate;
    }

    // Call Amadeus Flight Offers Search API
    const response = await amadeus.shopping.flightOffersSearch.get(params);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Amadeus API error:', error);

    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
