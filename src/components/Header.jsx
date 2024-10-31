import React from 'react'
import { Avatar , AvatarImage , AvatarFallback } from './ui/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell , faGlobe , faPlaneUp } from '@fortawesome/free-solid-svg-icons'



function Header() {
  return (
    <>
    <div className='flex justify-between mx-7 mt-5'>
      <div className='flex gap-5 items-center font-bold text-c'>
        <FontAwesomeIcon icon={faPlaneUp} className='w-8' style={{ color: '#0DD496' }}/>
        <span className='text-blue-600'>E-Flight</span>
      </div>
      <div className='flex gap-5'>
        <FontAwesomeIcon icon={faGlobe} className='w-8 text-blue-400'/>
        <FontAwesomeIcon icon={faBell} className="w-8" />
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
