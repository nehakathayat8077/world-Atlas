import React, { useEffect, useState } from 'react'
import CountriesData from '../api/CountriesData.json'
const About = () => {
 

  CountriesData.map((country) => {
    console.log(country.name)
  })
  return (
    <div className='bg-gray-950 text-white min-h-screen flex flex-col items-center px-3 py-2'>
      
      <h1 className="text-3xl mt-10 font-serif text-center 
               md:text-4xl lg:text-5xl lg:whitespace-nowrap">
  Here are the interesting facts we are proud of
</h1>
      {
      <div className='flex  gap-20 flex-wrap justify-center items-center mt-20'>
        {CountriesData.map((country) => (
  <div key={country.id} 
  className="bg-gradient-to-br border-gray-200 border from-slate-950 via-blue-950 to-slate-900
  transition-all duration-300 ease-in-out
  hover:-translate-y-2
  hover:scale-[1.02]
  
  hover:shadow-2xl
  p-5 h-60 w-80 gap-4 flex-col flex rounded-xl">

   

    <h2 className="text-xl font-bold">
      {country.countryname}
    </h2>

    <p className='text-sm md:text-base text-gray-400'>Capital: <span className='text-white '>{country.capital}
      </span></p>

    <p className='text-sm md:text-base text-gray-400'>Population: <span className='text-white '>{country.population}
      </span></p>

    <p className='text-sm md:text-base text-gray-400'>Interesting Fact: <span className='text-white '>{country.interestingFact}
      </span></p>


  </div>
))}
      </div>
      }

    </div>
  )
}

export default About