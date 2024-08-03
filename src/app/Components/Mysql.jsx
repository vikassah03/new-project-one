"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Mysql'; // Assuming questions are exported from this path

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState(1);

  useEffect(() => {
    // Shuffle questions when the component mounts
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAttemptedQuestions(attemptedQuestions + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShowScoreClick = () => {
    setShowScore(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="quiz-container">
      {showScore ? (
       <div className="score-section mx-10">
       You scored {score} out of {attemptedQuestions} questions.
       <Link href="../" className="block mt-4 lg:inline-block  px-4 py-2 mx-10 text-center bg-slate-400 rounded text-white text-lg hover:underline">
           Home
         </Link>
         <Link href="../AngularQ" className="block mt-4 lg:inline-block  px-4 py-2 mx-10 text-center bg-slate-400 rounded text-white text-lg hover:underline">
           Next Quiz
         </Link>
         <h1 className='pt-10'>Benefits of Learning MySQL</h1>
         <p className='pt-10'>Learning MySQL, a popular relational database management system, can offer numerous benefits. MySQL is widely used in web development and various applications due to its reliability, performance, and ease of use. Understanding MySQL enables you to efficiently design and manage databases, which is crucial for handling data-driven applications. It enhances your ability to create, modify, and query databases, which can improve the functionality and scalability of your applications. Additionally, proficiency in MySQL can boost your career prospects, as many companies seek professionals skilled in database management. Overall, mastering MySQL can lead to better job opportunities, increased productivity in data management tasks, and a stronger foundation in database concepts.</p>
     </div>
      ) : (
        shuffledQuestions.length > 0 && (
          <>
            <div className="question-section px-10">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{shuffledQuestions.length}
              </div>
              <div className="question-text">{shuffledQuestions[currentQuestion].question}</div>
            </div>
            <div className='answer-section px-10'>
              {shuffledQuestions[currentQuestion].options.map((option, index) => (
                <button 
                  onClick={() => handleAnswerOptionClick(index === shuffledQuestions[currentQuestion].answer)} 
                  key={index} 
                  className='bg-gray-800 text-white my-5 p-6 min-w-full flex flex-col items-center rounded-md'
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleShowScoreClick} className='show-score-button bg-gray-700 text-white px-4 py-2 mt-4 mx-10 my-5 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-green-600 '>
              Show Score
            </button>
          </>
        )
      )}
    </div>
  );
};

export default Quiz;
