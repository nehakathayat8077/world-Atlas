import React, { useState } from 'react'
import Countries from '../api/CountriesData.json'
import CountryCard from '../components/CountryCard';
const Country = () => {
  const [state, setstate] = useState(true);
  const [searched, setSearched] = useState("");
  const [region, setRegion] = useState('All');
  
  const options =[...new Set(Countries.map((c)=>c.region))]
 const filteredCountries= Countries
 .filter((c)=>{
  return region ==="All" || c.region===region
 })
 .filter((c)=>{
  return c.countryname.toLowerCase().includes(searched.toLowerCase())
 })
 .sort((a,b)=>{
  if(state){
    return a.countryname.localeCompare(b.countryname)
  }else{
    return b.countryname.localeCompare(a.countryname)
  }
 })
  return (
    <div className='h-full w-full flex-1  px-3 py-2 items-center justify-center bg-gray-950
     flex flex-col'>
      <div className='flex w-full mt-3 md:mt-8 justify-between md:justify-around'>
        <input type="text" placeholder='Search..'
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        className='rounded-2xl outline-none border-gray-400 px-3 py-2 border' />
        <button className='hover:cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-500
        hover:scale-105 transition-all w- border  border-gray-400'
        onClick={()=>setstate(!state)}>Asc</button>
        <button className='hover:cursor-pointer px-5 py-2 rounded-2xl hover:bg-gray-500
               w- border  border-gray-400'
               onClick={()=>setstate(!state)}
               >Dsc</button>
        <select name="" id="" onChange={(e) => setRegion(e.target.value)}
        className='px-5 py-2 rounded-2xl border border-gray-400'>
           <option className='bg-gray-700' 
           
           value="All">Select Region</option>
          {options.map((region) => (
      <option 
        
           value={region}
      className='bg-gray-700' key={region} >
        {region}
      </option>
    ))}
          
        </select>
      </div>
      <div className='flex-wrap items-center justify-center flex gap-10 px-3 py-2 mt-4 md:mt-8 '>
        {
          filteredCountries.map((c)=>{
            return <CountryCard c={c} />
          })
        }
      </div>
    </div>
  )
}

export default Country
