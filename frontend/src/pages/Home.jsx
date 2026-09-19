import React, { useState } from 'react'
import Country from './Country';
import { ArrowBigRight } from 'lucide-react';
import About from './About';

const Home = () => {
  const [countryData, setCountryData] = useState(null);
  return (
    <div className='bg-gray-950 text-white min-h-screen items-center  flex flex-col px-3 py-2 justify-center gap-10 md:gap-20 '>
     <div className='md:flex-row md:items-end flex-col-reverse flex justify-center'>

      <div className='flex flex-col w-100 md:w-150 mt-10 gap-4 md:gap-6 '>
      <h1 className='
      text-3xl md:4xl lg:5xl font-bold'>Explore the World , One Coutry at a Time.</h1>
      <p className='text-sm text-gray-400 md:text-base'>Discover the history , culture , and beauty of every nation. Sort , search and filter through the countries to find the details you need</p>
     <button className='bg-gray-700 px-3  md:w-50 flex
     hover:scale-105 transition-all hover:bg-gray-600
      justify-center gap-2 items-center  py-2 border white rounded-xl '>Start Exploring <ArrowBigRight/> </button>
     </div>
    <div className=' h-60 md:h-80 w-100 mt-10'>
      <img src="https://tse1.mm.bing.net/th/id/OIP.wlKoIvNFio6BDfBYqvo2tQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
       alt="globe"
       className='w-full h-full object-contain'
       />
    </div>
     </div>
     <About/>
    </div>
  )
}

export default Home
