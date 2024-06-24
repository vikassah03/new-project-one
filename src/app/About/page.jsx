"use client"
import React from 'react'
import Navbar from '../Navbar/page';
import Footer from '../Footer/page'
const html = () => {
  return (
    <div>
      <Navbar/>
      <main className='px-4 sm:px-6 lg:px-40 text-justify '>
        <h1 className='my-5 text-center text-2xl'>About us</h1>
        <hr />
        <p className="text-justify mb-4">
        Welcome to Coding Quiz Hub, your ultimate destination for engaging and interactive learning experiences tailored for coders of all levels. Our mission is to transform the way you learn to code by making it fun, accessible, and effective. Whether you're a beginner taking your first steps into the world of programming or a seasoned developer looking to brush up on your skills, we've got something for you.
        </p>
        <p className="text-justify mb-4">At Coding Quiz Hub, we offer a diverse range of quizzes and challenges that cover various programming languages and concepts. Our quizzes are designed not only to test your knowledge but also to deepen your understanding and improve your problem-solving abilities. From HTML and CSS to advanced topics in JavaScript, Python, and beyond, our platform is here to support your learning journey.</p>
        <p className="text-justify mb-4"> We believe in the power of community and learning together. That's why we encourage you to join our community of passionate learners and developers. Share your progress, exchange tips and tricks, and help each other grow. Together, we can make coding more approachable and enjoyable for everyone.</p>
        <p className="text-justify mb-4">Join Coding Quiz Hub today and take the next step in your coding journey. Whether you're preparing for a job interview, working on personal projects, or simply looking to challenge yourself, we're here to help you succeed. Let's code, learn, and grow together!</p>
      </main>
      <Footer/> 
    </div>
  )
}

export default html