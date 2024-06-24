"use client"
import React from 'react'
import CssQuiz from '../Components/CssQuiz';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
const page = () => {
  return (
    <div>
      <div>
      <Navbar/>
      <main className='min-h-96'>
        <h1 className='my-5 text-center text-2xl'>Css Quiz</h1>
        <CssQuiz/>
      </main>
      <Footer/>
    </div>
    </div>
  )
}

export default page