"use client";
import React from 'react';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';
import home1 from '../../../img/home1.jpg';
import home2 from '../../../img/home2.jpg';
import home3 from '../../../img/home3.jpg';
import home4 from '../../../img/home4.jpg';
import home5 from '../../../img/home5.png';
import home6 from '../../../img/home6.jpg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';  // Navigation module CSS
import 'swiper/css/pagination';  // Pagination module CSS
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="relative w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="relative h-64 md:h-96">
                <Image
                  src={home1}
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                  priority // Prioritize loading the first image
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-white text-2xl md:text-4xl sm:text-2xl font-bold">
                    Welcome to CodingQuizHub
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-64 md:h-96">
                <Image
                  src={home2}
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-white text-2xl md:text-4xl font-bold">
                    Explore Coding Challenges
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-64 md:h-96">
                <Image
                  src={home3}
                  alt="Slide 3"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-white text-2xl md:text-4xl font-bold">
                    Sharpen Your Skills
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <h2 className='text-center py-5 pt-10 text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-blue-700 bg-clip-text text-transparent'>
        Master Your Coding Skills with Interactive Quizzes on Coding Quiz Hub
      </h2>
      <div className='text-center'>
        <a
          href='https://luglawhaulsano.net/4/8420433'
          target="_blank"
          rel="noopener noreferrer"
          className='py-5 pt-10 text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-blue-700 bg-clip-text text-transparent'
        >
          Click here to visit the link
        </a>
      </div>

      <div className="px-4 sm:px-6 lg:px-40 pt-10">
        {/* First Section: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center mb-4">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <Image src={home4} alt="Learning Path" className="w-full h-auto" />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <p className="text-justify">
              Welcome to Coding Quiz Hub, your ultimate destination for enhancing your programming skills through interactive and challenging quizzes. Whether you're a beginner just starting your coding journey or an experienced developer looking to test your knowledge, our platform offers a wide range of quizzes tailored to different skill levels and programming languages. Dive into our comprehensive collection of questions designed to help you learn, practice, and master coding concepts in a fun and engaging way. Track your progress, compete with friends, and climb the leaderboard as you improve your coding abilities. Start your adventure today and turn learning into an exciting experience with Coding Quiz Hub!
            </p>
          </div>
        </div>

        <h2 className="text-center py-5 text-2xl">Why Choose Coding Quiz Hub?</h2>

        {/* Second Section: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-4">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <Image src={home5} alt="Coding Challenges" className="w-full h-auto" />
          </div>
          <div className="lg:w-1/2 lg:pr-6">
            <p className="text-justify">
              At Coding Quiz Hub, we believe that learning to code should be an engaging and rewarding experience. Here’s why our platform stands out:
              <ul className="list-disc list-inside mb-4">
                <li><b className="text-blue-400">Interactive Learning:</b> Our quizzes are designed to be interactive, offering instant feedback and explanations for each question. This helps reinforce your learning and ensures that you understand the concepts thoroughly.</li>
                <li><b className="text-blue-400">Tailored Learning Paths:</b> We provide personalized learning paths based on your skill level and interests, helping you focus on the areas that matter most to you.</li>
                <li><b className="text-blue-400">Comprehensive Coverage:</b> From basic syntax to advanced algorithms, our quizzes cover a wide spectrum of topics across various programming languages.</li>
                <li><b className="text-blue-400">Real-World Scenarios:</b> Many of our quizzes are based on real-world coding challenges, preparing you for actual coding tasks you might encounter in your career.</li>
                <li><b className="text-blue-400">User-Friendly Interface:</b> Our platform is easy to navigate, allowing you to find quizzes quickly and track your progress effortlessly.</li>
              </ul>
            </p>
          </div>
        </div>

        <h2 className="text-center py-5 text-2xl">Our Mission</h2>

        {/* Third Section: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center mb-4">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <Image src={home6} alt="Community Engagement" className="w-full h-auto" />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <p className="text-justify">
              Our mission at Coding Quiz Hub is to empower individuals to achieve their coding potential through a fun and supportive learning environment. We aim to:
              <ul className="list-disc list-inside mb-4">
                <li><b className="text-blue-400">Foster Creativity:</b> Encourage learners to think outside the box and solve coding problems creatively.</li>
                <li><b className="text-blue-400">Promote Lifelong Learning:</b> Provide resources that help you continue growing your coding skills throughout your career.</li>
                <li><b className="text-blue-400">Build a Global Community:</b> Connect coders from all over the world, fostering collaboration and shared knowledge.</li>
              </ul>
            </p>
          </div>
        </div>

        <h2 className="text-center py-5 text-2xl">Get Started Now</h2>
        <p className="text-justify mb-4">
          Ready to take your coding skills to the next level? Sign up today and join thousands of learners who are mastering coding through fun and interactive quizzes. Whether you're aiming to learn a new programming language or sharpen your existing skills, Coding Quiz Hub is the perfect place to start. Let's begin your journey to becoming a coding expert!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;