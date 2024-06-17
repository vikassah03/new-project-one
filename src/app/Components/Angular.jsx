"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Angular'; // Assuming questions are exported from this path

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);

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
    }
  };

  const handleShowScoreClick = () => {
    setShowScore(true);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {attemptedQuestions} questions.
          <Link href="../Home" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">
              Home
            </Link>
        </div>
      ) : (
        shuffledQuestions.length > 0 && (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{shuffledQuestions.length}
              </div>
              <div className="question-text">{shuffledQuestions[currentQuestion].question}</div>
            </div>
            <div className='answer-section'>
              {shuffledQuestions[currentQuestion].options.map((option, index) => (
                <button 
                  onClick={() => handleAnswerOptionClick(index === shuffledQuestions[currentQuestion].answer)} 
                  key={index} 
                  className='bg-gray-800 text-white hover:bg-green-500 mx-5 py-2 px-2'
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleShowScoreClick} className='show-score-button bg-blue-500 text-white px-4 py-2 mt-4'>
              Show Score
            </button>
          </>
        )
      )}
    </div>
  );
};

export default Quiz;
