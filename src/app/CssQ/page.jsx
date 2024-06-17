"use client"
import React from 'react'
import CssQuiz from '../Components/CssQuiz';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
const page = () => {
  return (
    <div>
      <Navbar/>
      <CssQuiz/>
      <Footer/>
    </div>
  )
}

export default page