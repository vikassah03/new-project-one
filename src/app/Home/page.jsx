"use client";
import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-center py-5 text-3xl text-gray-700">Welcome to Coding Quiz HUB</h1>
      </div>
      <div className="px-4 sm:px-6 lg:px-40">
        <p className="text-justify mb-4">
          Welcome to Coding Quiz Hub, your ultimate destination for enhancing your programming skills through interactive and challenging quizzes. Whether you're a beginner just starting your coding journey or an experienced developer looking to test your knowledge, our platform offers a wide range of quizzes tailored to different skill levels and programming languages. Dive into our comprehensive collection of questions designed to help you learn, practice, and master coding concepts in a fun and engaging way. Track your progress, compete with friends, and climb the leaderboard as you improve your coding abilities. Start your adventure today and turn learning into an exciting experience with Coding Quiz Hub!
        </p>
        
        <h1 className="text-center py-5 text-2xl">Key Features</h1>
        <p className="text-justify mb-4">
          <b className="text-blue-400">1. Diverse Quiz Categories:</b> Explore quizzes across a wide range of programming languages and technologies, including HTML, CSS, JavaScript, React.JS, Node.js, Python, PHP, and more. Each quiz is designed to challenge and enhance your understanding of coding concepts.
          <br />
          <b className="text-blue-400">2. Track Your Progress:</b> Monitor your progress with detailed statistics and performance metrics. Identify your strengths and areas for improvement to focus your learning efforts effectively.
          <br />
          <b className="text-blue-400">3. Leaderboards and Competitions:</b> Compete with friends and other coders from around the world. Climb the leaderboards by scoring high on quizzes and showcase your coding prowess.
          <br />
          <b className="text-blue-400">4. Regular Updates:</b> Stay updated with new quizzes and coding challenges regularly added to the platform. Keep your skills sharp and up-to-date with the latest programming trends and technologies.
          <br />
          <b className="text-blue-400">5. Community Support:</b> Join our vibrant community of coders. Share your experiences, seek help, and collaborate with fellow learners. Participate in discussions and contribute to our growing knowledge base.
        </p>
        <h1 className="text-center py-5 text-2xl">FAQ Section</h1>
        <b>Frequently Asked Questions (FAQ)</b>
        <p className="text-justify mb-4">
          <span className="text-red-500">Q1: How can I start taking quizzes on Coding Quiz Hub?</span><br />
          <span>A1: Simply sign up for a free account, choose your preferred programming language or topic, and start taking quizzes right away!</span>
          <br />
          <span className="text-red-500">Q2: Are the quizzes suitable for beginners?</span><br />
          <span>A2: Yes, we offer quizzes for all skill levels, from beginners to advanced coders. Each quiz is designed to match your proficiency and help you learn at your own pace.</span>
          <br />
          <span className="text-red-500">Q3: Can I track my progress on the platform?</span><br />
          <span>A3: Absolutely! Our platform provides detailed statistics and performance metrics to help you track your progress and identify areas for improvement.</span>
          <br />
          <span className="text-red-500">Q4: How often are new quizzes added?</span><br />
          <span>A4: We regularly update our platform with new quizzes and coding challenges to keep you engaged and up-to-date with the latest programming trends.</span>
          <br />
          <span className="text-red-500">Q5: Can I compete with other users?</span><br />
          <span>A5: Yes, you can compete with friends and other users globally. Climb the leaderboards by scoring high on quizzes and showcase your coding skills.</span>
        </p>
      </div>
      <Head>
        <title>HTML Quiz</title>
        <meta name="description" content="A simple JavaScript quiz game created with Next.js" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Footer />
    </div>
  );
}
