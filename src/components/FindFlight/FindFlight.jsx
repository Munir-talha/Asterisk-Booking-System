import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnToDots, faArrowRight, faUser , faAngleDown , faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function FindFlight() {
  return (
    <>
    <div style={{width : '35rem'}} className='m-2'>
        <p className='font-bold'>Find your Flight</p>
        <div className='flex gap-2 '>
            <Badge variant="secondary">
                <FontAwesomeIcon icon={faArrowsTurnToDots} className="mr-2 w-7 h-5" /> Round trip
            </Badge>
            <Badge variant="success">
                <FontAwesomeIcon icon={faArrowRight} className='mr-2 w-7 h-5'/>  One Way
            </Badge>
            <div>
                <Select>
                    <SelectTrigger className="w-[120px] flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg">
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
                    <SelectTrigger className="w-[180px] flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-lg">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} className="w-5 h-5 mr-2" />
                    <SelectValue placeholder="Economy" className="text-white flex-grow" />
                    </SelectTrigger>
                    
                    <SelectContent>
                    <SelectGroup>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First Class</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div className='bg-blue-800 p-8 rounded-2xl flex gap-8'>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-white" htmlFor="From">From</Label>
            <Input className="border-b-white text-white focus-visible:border-none" id="From" placeholder="Select the Final Destination" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-white" htmlFor="From">To</Label>
            <Input className="border-b-white text-white focus-visible:border-none" id="From" placeholder="Select the Final Destination" />
        </div>
        </div>
    </div>
    </>
  )
}

export default FindFlight
