"use client"
import React from 'react'
import Monogodb from '../Components/Monogodb';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
const html = () => {
  return (
    <div>
      <Navbar/> 
      <main className='min-h-96'>
        <h1 className='my-5 text-center text-2xl'>HTML Quiz</h1>
        <Monogodb/>
      </main>
      <Footer/>
    </div>
  )
}

export default html