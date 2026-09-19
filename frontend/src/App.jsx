import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='   text-white flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex-1 flex flex-col  bg-gray-800'>
        <Routes>
         <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/country' element={<Country />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
