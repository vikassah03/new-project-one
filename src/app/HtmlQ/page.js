"use client"
import React from 'react'
import Quiz from '../Components/Quiz';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
import Image from "next/image";
const html = () => {
  return (
    <div>
     
      <Navbar/>
      <main className='min-h-96 py-28'>
        <h1 className='my-5 text-center text-2xl'>HTML Quiz</h1>
        <hr/>
        <Quiz/>
        <a href='https://luglawhaulsano.net/4/8420433' target="_blank"> Click here to visit the link</a>
      </main>
      <Footer/>
    </div>
  )
}

export default html