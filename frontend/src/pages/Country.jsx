import React, { useState } from 'react'
import Countries from '../api/CountriesData.json'
import CountryCard from '../components/CountryCard'

const Country = () => {
  const [state, setState] = useState(true)
  const [searched, setSearched] = useState('')
  const [region, setRegion] = useState('All')

  const options = [...new Set(Countries.map((c) => c.region))]

  const filteredCountries = Countries
    .filter((c) => {
      return region === 'All' || c.region === region
    })
    .filter((c) => {
      return c.countryname
        .toLowerCase()
        .includes(searched.toLowerCase())
    })
    .sort((a, b) => {
      if (state) {
        return a.countryname.localeCompare(b.countryname)
      } else {
        return b.countryname.localeCompare(a.countryname)
      }
    })

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white px-4 py-4">

      {/* Search and Filters */}
      <div className="w-full flex flex-col gap-4 mt-4 md:flex-row md:items-center md:justify-between md:mt-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search.."
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
          className="w-full md:w-60 px-4 py-3 rounded-2xl outline-none border border-gray-400 bg-gray-950"
        />

        {/* Sort Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setState(true)}
            className="px-5 py-3 rounded-2xl border border-gray-400 hover:bg-gray-700 hover:scale-105 transition-all cursor-pointer"
          >
            Asc
          </button>

          <button
            onClick={() => setState(false)}
            className="px-5 py-3 rounded-2xl border border-gray-400 hover:bg-gray-700 hover:scale-105 transition-all cursor-pointer"
          >
            Dsc
          </button>
        </div>

        {/* Region */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full md:w-60 px-4 py-3 rounded-2xl border border-gray-400 bg-gray-950 outline-none"
        >
          <option value="All">Select Region</option>

          {options.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>

      </div>

      {/* Country Cards */}
      <div className="w-full flex flex-wrap justify-center  gap-6 px-4 py-6 md:py-8">

        {filteredCountries.map((c) => (
          <CountryCard
            key={c.id}
            c={c}
          />
        ))}

      </div>

    </div>
  )
}

export default Country