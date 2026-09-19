import { ArrowRight } from 'lucide-react'
import React from 'react'

const CountryCard = ({c}) => {
  return (
    <div className='flex flex-col w-60 h-100 justify-between
    shadow-sm rounded-2xl border-gray-400
    bg-gradient-to-b from-black via-gray-900 to-black
     gap-2 px-3 py-3 border'>
      
      <div  className='max-h-30 w-full '>
        <img src={c.flagimage}
        className='object-contain h-full w-full' alt={c.countryname}/>
      </div>
      <h1 className='text-2xl md:text-3xl font-serif mt-4'>{c.countryname}</h1>
      <p className='text-sm md:text-base text-gray-400'>Population :
        <span className='text-white'>{c.population}</span>
      </p>
      <p className='text-sm md:text-base text-gray-400'>Region :
         <span className='text-white'>{c.region}</span>
      </p>
      <p className='text-sm md:text-base text-gray-400'>Capital :
         <span className='text-white'>{c.capital}</span>
      </p>
      <button className='
      px-3 py-2 border flex rounded-2xl border-gray-500
       justify-center items-center hover:scale-105 transition-all
       hover:bg-gray-900
      '>Read More <ArrowRight/></button>
    </div>
  )
}

export default CountryCard
