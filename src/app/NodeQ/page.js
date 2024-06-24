"use client"
import React from 'react'
import Node from '../Components/Node';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
const html = () => {
  return (
    <div>
      <Navbar/>
      <main className='min-h-96'>
        <h1 className='my-5 text-center text-2xl'>Node Quiz</h1>
        <Node/>
      </main>
      <Footer/>
    </div>
  )
}

export default html