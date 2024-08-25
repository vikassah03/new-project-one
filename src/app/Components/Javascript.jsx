"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Javascript'; // Assuming questions are exported from this path
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    // Shuffle questions when the component mounts
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerOptionClick = (isCorrect, question) => {
    setAttemptedQuestions([...attemptedQuestions, { question, isCorrect }]);

    if (isCorrect) {
      setScore(score + 1);
    }

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

  const handleTryAgainClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAttemptedQuestions([]);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when the quiz is reset
  };

  const handleCopy = (index) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 9000); // Reset copy state after 2 seconds
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section mx-10">
          <h2>You scored {score} out of {attemptedQuestions.length} questions.</h2>
          <table className="table-auto w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Question</th>
                <th className="border px-4 py-2">Your Answer</th>
                <th className="border px-4 py-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {attemptedQuestions.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border  py-2">{item.question.question}</td>
                  <td className="border  py-2">
                    {item.isCorrect ? 'Correct' : 'Incorrect'}
                  </td>
                  <td className="border px-4 py-2">
                    {item.isCorrect ? '✅' : '❌'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-group mt-6 flex flex-col lg:flex-row lg:justify-center">
  <button onClick={handleTryAgainClick} className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline">
    Try Again
  </button>

  <Link href="../ReactQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
    Next Quiz
  </Link>
</div>
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
                  onClick={() => handleAnswerOptionClick(index === shuffledQuestions[currentQuestion].answer, shuffledQuestions[currentQuestion])}
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

<div className="container mx-auto p-4 lg:px-32">
  <div className="flex items-center justify-center flex-col space-y-4 px-4 md:px-0">
    <h1 className="text-3xl font-bold">Mastering JavaScript: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into JavaScript, Its Concepts, Versions, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is JavaScript?</h2>
        <p>
          JavaScript is a versatile, high-level programming language that enables developers to create dynamic and interactive web content. Initially developed to add interactivity to web pages, it has grown into a powerful tool that runs on both client and server sides, making it essential for modern web development.
        </p>
        <p className="mt-4">
          JavaScript is often used alongside HTML and CSS to create a complete web experience. While HTML provides the structure and CSS handles the presentation, JavaScript adds the logic that powers interactive features like forms, animations, and real-time content updates.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is JavaScript?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">JavaScript Concepts</h2>
      <p>JavaScript is built around several core concepts that are essential to understand in order to use the language effectively:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Variables:</strong> Containers for storing data values, declared using keywords like <code>var</code>, <code>let</code>, or <code>const</code>.</li>
        <li><strong>Functions:</strong> Blocks of code designed to perform particular tasks. Functions can be declared traditionally or as arrow functions.</li>
        <li><strong>Objects:</strong> Collections of properties and methods, used to model real-world entities and their behaviors.</li>
        <li><strong>Arrays:</strong> Special types of objects used to store multiple values in a single variable.</li>
        <li><strong>Control Flow:</strong> Structures like loops and conditionals that control the execution of code.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">All JavaScript Topics and Their Details</h2>
      <p>JavaScript covers a broad range of topics that are crucial for both beginner and advanced developers:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>JS Iterables:</strong> Objects that can be iterated over, such as arrays and strings.</li>
        <li><strong>JS Sets:</strong> Collections of unique values.</li>
        <li><strong>JS Map Methods:</strong> Built-in methods for creating and managing key-value pairs.</li>
        <li><strong>JS Classes:</strong> Templates for creating objects, allowing for object-oriented programming.</li>
        <li><strong>JS Debugging:</strong> Tools and techniques for identifying and fixing errors in JavaScript code.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">JavaScript Versions</h2>
      <p>JavaScript has evolved significantly since its inception, with new versions introducing powerful features and improvements. Here is a detailed overview of JavaScript versions:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>ES5 (2009):</strong> Introduced JSON support, new methods for arrays, and strict mode.</li>
        <li><strong>ES6 (2015):</strong> A major update that included arrow functions, classes, modules, and more.</li>
        <li><strong>ES2020:</strong> Added new features like optional chaining and BigInt.</li>
        <li><strong>ES2021:</strong> Introduced logical assignment operators and other enhancements.</li>
        <li><strong>ES2022:</strong> Brought features like top-level await and class fields.</li>
      </ul>
    </section>

   

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with JavaScript</h2>
      <p>To write efficient and effective JavaScript code, consider the following best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Use Strict Mode:</strong> Enforce stricter parsing and error handling in your JavaScript code by enabling strict mode.</li>
        <li><strong>Optimize Performance:</strong> Use techniques like debouncing, throttling, and memoization to improve the performance of your JavaScript code.</li>
        <li><strong>Stay Updated:</strong> Keep up with the latest ECMAScript versions to take advantage of new features and improvements.</li>
        <li><strong>Write Modular Code:</strong> Break your code into reusable modules to improve maintainability and scalability.</li>
        <li><strong>Use Modern Syntax:</strong> Embrace modern JavaScript syntax, such as arrow functions, destructuring, and template literals, to write cleaner, more concise code.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning JavaScript</h2>
      <p>There are numerous resources available to help you master JavaScript:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Mozilla Developer Network (MDN):</strong> Offers comprehensive documentation and tutorials for all levels of JavaScript developers.</li>
        <li><strong>JavaScript.info:</strong> A detailed online guide covering JavaScript fundamentals and advanced topics.</li>
        <li><strong>freeCodeCamp:</strong> Provides an extensive JavaScript curriculum, including interactive challenges and projects.</li>
        <li><strong>Codecademy:</strong> Offers interactive JavaScript courses for beginners and advanced learners alike.</li>
        <li><strong>W3Schools:</strong> Features tutorials and references for JavaScript, including examples and exercises.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>JavaScript is an essential technology in web development, powering the interactivity and logic behind modern web applications. By understanding its core concepts, keeping up with new versions, and following best practices, you can leverage JavaScript to create dynamic and engaging web experiences. Whether you’re a novice or an experienced developer, continuous learning and practice will help you excel in JavaScript development and contribute to the ever-evolving world of web technologies.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
