import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Country from '../pages/Country'
import Contact from '../pages/Contact'
import { Globe, HomeIcon, Mail, MapIcon, Menu, Search, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-gray-900 px-3 h-15 md:h-20 items-center  py-2 text-white flex justify-between md:justify-around border border-b border-gray-500'>
      <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl '>WORLD ATLAS</h1>
      <div className='hidden  md:flex gap-4 md:gap-8 lg:gap-10 justify-between text-gray-400 '>
        <Link className='hover:underline text-sm md:text-base' to="/">Home</Link>
       <Link className='hover:underline text-sm  md:text-base' to="/about">About</Link>
       <Link className='hover:underline text-sm  md:text-base' to="/country">Country</Link>
       <Link className='hover:underline text-sm  md:text-base' to="/contact">Contact</Link>
      </div>
      
      <button 
      onClick={()=>setIsOpen(!isOpen)}
      className='text-2xl md:hidden hover:cursor-pointer z-60'>
        {isOpen?<X/> :<Menu className='size-10'/>}
      </button>

      {isOpen && (
  <div className="fixed inset-0 bg-blue-950/30 z-40"></div>
)}

      <div className={`md:hidden fixed  transform transition-transform z-50 duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}
         right-0 h-screen top-15 px-3 py-2 bg-gray-900`}>

        <div className='flex-col  gap-5 flex h-80  px-3 py-2 w-72 border-b-white '>
          <Link to="/"className='flex hover:bg-gray-600 rounded px-3 py-2'><HomeIcon></HomeIcon> Home</Link>
          <Link to="/about" className='flex hover:bg-gray-600 rounded px-3 py-2'><Globe/> About</Link>
          <Link to="/country" className='flex hover:bg-gray-600 rounded px-3 py-2'><MapIcon></MapIcon>Country</Link>
          <Link to="/contact" className='flex hover:bg-gray-600 rounded px-3 py-2'><Mail/>Contact</Link>
          </div>
          <div className='flex justify-between px-3 py-2 rounded-2xl bg-gray-800 round-2xl'>
            <Search/>
            <input type="text" 
            className='outline-none'
            placeholder='Search Countries...' />
          </div>
      </div>

    </div>
  )
}

export default Navbar
