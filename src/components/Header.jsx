import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGlobe, faPlaneUp } from '@fortawesome/free-solid-svg-icons'



function Header() {
  return (
    <>
      <div className='flex justify-between px-7 py-7 bg-gray-100 h-full'>
        <div className='flex gap-5 items-center font-bold text-c'>
          <FontAwesomeIcon icon={faPlaneUp} className='w-8' style={{ height:'auto' ,  color: '#0DD496' }} />
          <span className='text-blue-600'>E-Flight</span>
        </div>
        <div className='flex gap-5'>

          <Avatar>
            <AvatarImage src="/bell-solid.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/globe-solid.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  )
}

export default Header
