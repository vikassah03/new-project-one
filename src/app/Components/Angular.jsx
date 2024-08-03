"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Angular'; // Assuming questions are exported from this path

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
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when the score is shown
    }
  };

  const handleShowScoreClick = () => {
    setShowScore(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when the score is shown
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section mx-10">
          You scored {score} out of {attemptedQuestions} questions.
          <Link href="../" className="block mt-4 lg:inline-block px-4 py-2 mx-10 text-center bg-slate-400 rounded text-white text-lg hover:underline">
            Home
          </Link>
          <Link href="../JavaQ" className="block mt-4 lg:inline-block px-4 py-2 mx-10 text-center bg-slate-400 rounded text-white text-lg hover:underline">
            Next Quiz
          </Link>
          <h1 className='pt-10'>Benefits of Learning Angular</h1>
          <p className='pt-10'>Learning Angular, a popular framework for building dynamic web applications, offers several significant advantages. Firstly, Angular provides a structured and organized approach to application development, which can enhance productivity and maintainability. It incorporates powerful features like two-way data binding, dependency injection, and a modular architecture, making it easier to manage complex applications. Additionally, Angular’s robust ecosystem, including a vast library of tools and extensions, allows developers to streamline their workflow and integrate various functionalities seamlessly. By mastering Angular, developers can create scalable and high-performance applications while staying competitive in the job market. Moreover, Angular's strong community support and regular updates ensure that developers have access to the latest best practices and improvements, further enhancing their skills and project outcomes. Overall, learning Angular can significantly boost one’s career prospects and technical expertise in web development.</p>
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
            <button onClick={handleShowScoreClick} className='show-score-button bg-gray-700 text-white px-4 py-2 mt-4 mx-10 my-5 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-green-600'>
              Show Score
            </button>
            
          </>
        )
      )}
    </div>
  );
};

export default Quiz;
