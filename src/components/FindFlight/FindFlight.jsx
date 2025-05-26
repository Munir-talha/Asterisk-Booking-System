'use client'
import React, { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlightCard from '../FlightCard/FlightCard'
import { faArrowsTurnToDots, faArrowRight, faUser, faAngleDown, faMoneyCheckDollar, faMagnifyingGlass, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import './FindFlight.css'

function FindFlight() {
    const [selectedOption, setSelectedOption] = useState('roundTrip');
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [adults, setAdults] = useState('1');
    const [travelClass, setTravelClass] = useState('1'); // default Economy
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);

    const flightClasses = {
        1: 'ECONOMY',
        2: 'BUSINESS',
        3: 'FIRST'
    };

    const handleSelectDate = (type) => {
        setSelectedDate(type);
    }

    const handleCalendarSelect = (date) => {
        if (selectedDate === 'departure') {
            setDepartureDate(date);
        } else {
            setReturnDate(date);  
        }
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSearch = async () => {
        if (!from || !to || !departureDate) {
            alert('Please fill in From, To and Departure Date');
            return;
        }
        setLoading(true);

        const payload = {
            originLocationCode: from.toUpperCase(),
            destinationLocationCode: to.toUpperCase(),
            departureDate: departureDate.toISOString().split('T')[0],
            adults: parseInt(adults),
            travelClass: flightClasses[travelClass],
            tripType: selectedOption,
            returnDate: returnDate ? returnDate.toISOString().split('T')[0] : null
        };

        try {
            const res = await fetch('/api/search-flights', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching flights:', error);
        } finally {
            setLoading(false);
        }
    };

    // State for calendar selection
    const [selectedDate, setSelectedDate] = useState('departure');

    const FlighClass = [
        {
            id: 1,
            name: 'Economy'
        },
        {
            id: 2,
            name: 'Business'
        },
        {
            id: 3,
            name: 'First Class'
        }
    ]

    return (
        <>
        <div className="container mx-auto px-4 mt-5 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-screen-lg ">
                    <p className="font-bold text-center text-4xl md:text-left mb-8">Find your Flightss!</p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        {/* Round Trip / One Way badges */}
                        <Badge
                            variant="secondary"
                            onClick={() => handleSelect('roundTrip')}
                            className={`cursor-pointer ${selectedOption === 'roundTrip' ? 'border-blue-500 shadow-lg' : 'border-gray-300'}`}
                        >
                            <FontAwesomeIcon icon={faArrowsTurnToDots} className="mr-2 w-5 h-4 md:w-7 md:h-5" /> Round trip
                        </Badge>
                        <Badge
                            variant="success"
                            onClick={() => handleSelect('oneWay')}
                            className={`cursor-pointer ${selectedOption === 'oneWay' ? 'border-green-500 shadow-2xl' : 'border-gray-300'}`}
                        >
                            <FontAwesomeIcon icon={faArrowRight} className="mr-2 w-5 h-4 md:w-7 md:h-5" /> One Way
                        </Badge>
                        <div className="flex-1">
                            <Select value={adults} onValueChange={setAdults}>
                                <SelectTrigger className="w-full flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg">
                                    <FontAwesomeIcon icon={faUser} className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    <SelectValue placeholder="1" className="text-white flex-grow" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex-1">
                            <Select value={travelClass} onValueChange={setTravelClass}>
                                <SelectTrigger className="w-full flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg">
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    <SelectValue placeholder="Economy" className="text-white flex-grow" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {FlighClass.map((item) => (
                                            <SelectItem key={item.id} value={item.id.toString()}>{item.name}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:flex-row gap-3 mt-4 md:mt-5">
                        <div className="p-4 md:p-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-8 bg-blue-600 w-full md:w-auto">
                            <div className="grid w-full md:max-w-sm items-center gap-1.5">
                                <Label className="text-white" htmlFor="From">From</Label>
                                <Input 
                                  value={from} 
                                  onChange={(e) => setFrom(e.target.value)} 
                                  className="border-b-white text-white focus-visible:border-none" 
                                  id="From" 
                                  placeholder="From Where To Fly?" 
                                />
                            </div>
                            <div className="grid w-full md:max-w-sm items-center gap-1.5">
                                <Label className="text-white" htmlFor="To">To</Label>
                                <Input 
                                  value={to} 
                                  onChange={(e) => setTo(e.target.value)} 
                                  className="border-b-white text-white focus-visible:border-none" 
                                  id="To" 
                                  placeholder="What is your Destination?" 
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <Button 
                              className="w-full md:h-full md:rounded-2xl bg-green-400"
                              onClick={handleSearch}
                              disabled={loading}
                            >
                                {loading ? 'Searching...' : <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 md:w-7 md:h-7 mr-auto" />}
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Calendar Section */}
                <div className="bg-white p-4 rounded-xl shadow-2xl flex justify-around">
                    <div className='flex flex-col gap-8 align-middle'>
                        <Button 
                            className={`px-4 py-2 rounded-3xl ${selectedDate === 'departure' ? 'bg-orange-400 text-white' : 'bg-black text-orange-400'}`} 
                            onClick={() => setSelectedDate('departure')}
                        >
                            <FontAwesomeIcon icon={faCalendarDay} className="mr-2 w-7 h-5" />
                            Departure Date
                        </Button>
                        {selectedOption === 'roundTrip' ?                                        
                        <Button 
                            className={`px-4 py-2 rounded-3xl ${selectedDate === 'returned' ? 'bg-orange-400 text-white' : 'bg-black text-orange-400'}`} 
                            onClick={() => setSelectedDate('returned')}
                        >
                            <FontAwesomeIcon icon={faCalendarDay} className="mr-2 w-7 h-5" />
                            Returned Date
                        </Button> : ''}
                    </div>
                        <Calendar
                            mode="single"
                            selected={selectedDate === 'departure' ? departureDate : returnDate}
                            onSelect={handleCalendarSelect}
                            className="rounded-md border"
                        />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-6 bg-gradient-to-r p-6 rounded-xl flex items-center justify-center shadow-md">
                    <div style={{padding:'5rem'}} className="flex flex-col items-center text-center border-solid border-2 border-gray-200 rounded-full">
                        Today
                        <div className='font-bold text-7xl'>
                            Houston
                        </div>
                        <Avatar>
                            <AvatarImage src="/sunnyWeather.svg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>29 degree</div>
                    </div>
                </div>

            </div>
                {results && results.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {results.map((offer, index) => (
                        <FlightCard key={index} offer={offer} />
                        ))}
                    </div>
                    )}
        </>
        );
}

export default FindFlight;
