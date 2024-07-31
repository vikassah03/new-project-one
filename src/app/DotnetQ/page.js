"use client"
import React from 'react'
import Dotnet from '../Components/Dotnet';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
const html = () => {
  return (
    <div>
      <Navbar/>
      <main className='min-h-96 py-28'>
        <h1 className='my-5 text-center text-2xl'>Dotnet Quiz</h1>
        <hr/>
        <Dotnet/>
      </main>
      <Footer/>
    </div>
  )
}

export default html