import { LocateIcon, MailIcon, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-950  text-white flex border-t border-gray-500
    px-3 py-2
    flex-row md:justify-around justify-between items-center'>
      <div className='flex gap-4 items-center justify-center'>
        <LocateIcon className='text-blue-900 font-bold'/>
        <div>
          <h1 className='font-bold'>Find Us</h1>
          <p className='text-gray-500'>Delhi , India</p>
        </div>
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <Phone className='text-blue-900 font-bold'/>
        <div>
          <h1 className='font-bold'>Call Us</h1>
          <p className='text-gray-500'>8077XXXXX</p>
        </div>
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <MailIcon className='text-blue-900 font-bold'/>
        <div>
          <h1 className='font-bold'>Mail Us</h1>
          <p className='text-gray-500'>NehaKathayat@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
