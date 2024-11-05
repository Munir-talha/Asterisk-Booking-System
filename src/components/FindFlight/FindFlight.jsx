'use client'
import React from 'react'
import { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState('departure');
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
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
                <div className="bg-white p-4 rounded-xl shadow-2xl"> 
                    <p className="font-bold">Find your Flight!</p>
                    <div className='flex gap-2'>
                        {/* This is roundtripBadge */}
                        <Badge
                            variant="secondary"
                            onClick={() => handleSelect('roundTrip')}
                            className={`cursor-pointer ${selectedOption === 'roundTrip' ? 'border-blue-500 shadow-lg' : 'border-gray-300'}`}
                        >
                            <FontAwesomeIcon icon={faArrowsTurnToDots} className="mr-2 w-7 h-5" /> Round trip
                        </Badge>
                        {/* This is OneWayBadge */}
                        <Badge
                            variant="success"
                            onClick={() => handleSelect('oneWay')}
                            className={`cursor-pointer ${selectedOption === 'oneWay' ? 'border-green-500 shadow-2xl' : 'border-gray-300'}`}
                        >
                            <FontAwesomeIcon icon={faArrowRight} className="mr-2 w-7 h-5" /> One Way
                        </Badge>
                        <div>
                            <Select>
                                <SelectTrigger className="w-auto flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg">
                                    <FontAwesomeIcon icon={faUser} className='w-5 h-5 mr-2' />
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
                        <div>
                            <Select>
                                <SelectTrigger className="w-auto flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg">
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} className="w-5 h-5 mr-2" />
                                    <SelectValue placeholder="Economy" className="text-white flex-grow" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {FlighClass.map((item) => (
                                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div style={{ background: '#0077b6' }} className='p-8 rounded-2xl flex gap-8'>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="text-white" htmlFor="From">From</Label>
                                <Input className="border-b-white text-white focus-visible:border-none" id="From" placeholder="From Where To Fly?" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="text-white" htmlFor="To">To</Label>
                                <Input className="border-b-white text-white focus-visible:border-none" id="To" placeholder="What is your Destination?" />
                            </div>
                        </div>
                        <div style={{ background: '#0077b6' }} className='rounded-2xl h-auto'>
                            <Button className=' rounded-2xl h-full bg-green-400'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-7 h-7 mr-auto" />
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Calendar Section */}
                <div className="bg-white p-4 rounded-xl shadow-2xl flex justify-around">
                    <div className='flex flex-col gap-8 align-middle'>
                        <Button 
                            className={`px-4 py-2 rounded-3xl ${selectedDate === 'departure' ? 'bg-orange-400 text-white' : 'bg-black text-orange-400'}`} 
                            onClick={() => handleSelectDate('departure')}
                        >
                            <FontAwesomeIcon icon={faCalendarDay} className="mr-2 w-7 h-5" />
                            Departure Date
                        </Button>

                        <Button 
                            className={`px-4 py-2 rounded-3xl ${selectedDate === 'returned' ? 'bg-orange-400 text-white' : 'bg-black text-orange-400'}`} 
                            onClick={() => handleSelectDate('returned')}
                        >
                            <FontAwesomeIcon icon={faCalendarDay} className="mr-2 w-7 h-5" />
                            Returned Date
                        </Button>
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

        </>
    )
}

export default FindFlight
