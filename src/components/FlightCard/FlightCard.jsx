'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FlightCard({ offer }) {
  const itinerary = offer.itineraries[0];
  const segments = itinerary.segments;
  const price = offer.price;

  return (
    <Card className="rounded-2xl shadow-md transition hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {segments[0].departure.iataCode} → {segments[segments.length - 1].arrival.iataCode}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{itinerary.duration.replace("PT", "").toLowerCase()}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {segments.map((segment, idx) => (
          <div key={idx} className="border p-2 rounded-md bg-muted/50">
            <p className="font-medium">
              {segment.departure.iataCode} → {segment.arrival.iataCode}
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date(segment.departure.at).toLocaleString()} →{" "}
              {new Date(segment.arrival.at).toLocaleString()}
            </p>
            <p className="text-sm">Flight: {segment.carrierCode} {segment.number}</p>
            <p className="text-sm">Duration: {segment.duration.replace("PT", "").toLowerCase()}</p>
          </div>
        ))}

        <div className="mt-2 font-semibold text-right">
          Total: {price.currency} {price.total}
        </div>
      </CardContent>
    </Card>
  );
}
