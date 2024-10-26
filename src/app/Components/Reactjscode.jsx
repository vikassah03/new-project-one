"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/React'; // Assuming questions are exported from this path
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

  <Link href="../NextQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering React.js: A Comprehensive Guide</h1>
    <a href='https://luglawhaulsano.net/4/8420433' target="_blank" className='pl-10'> Click here to visit the link</a>
    <p className="text-lg text-gray-600">In-depth Insights into React.js, Its Concepts, Features, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is React.js?</h2>
        <p>
          React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create large web applications that can update and render efficiently with dynamic data changes.
        </p>
        <p className="mt-4">
          Developed by Facebook, React.js uses a component-based architecture, enabling developers to build encapsulated components that manage their own state and can be composed to create complex UIs.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is React.js?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">React.js Concepts</h2>
      <p>React.js is built around several core concepts that are crucial to understanding its capabilities:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Components:</strong> The building blocks of a React application, components are self-contained units of code that represent parts of the UI.</li>
        <li><strong>JSX:</strong> A syntax extension that allows mixing HTML with JavaScript, making it easier to write and understand the UI structure.</li>
        <li><strong>State:</strong> An object that holds data and determines how a component renders and behaves.</li>
        <li><strong>Props:</strong> Short for properties, these are inputs to components that allow data to be passed from one component to another.</li>
        <li><strong>Virtual DOM:</strong> A lightweight copy of the actual DOM, allowing React to efficiently update and render components by minimizing direct manipulations.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">React.js Features and Tools</h2>
      <p>React.js offers a variety of features and tools that enhance development and improve performance:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Hooks:</strong> Functions that allow you to use state and other React features in functional components.</li>
        <li><strong>Context API:</strong> A method to pass data through the component tree without having to pass props down manually at every level.</li>
        <li><strong>React Router:</strong> A standard library for routing in React applications, enabling navigation between different views.</li>
        <li><strong>Redux:</strong> A state management tool that helps manage application state in a predictable way.</li>
        <li><strong>React DevTools:</strong> Browser extensions that help developers inspect and debug React applications more effectively.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with React.js</h2>
      <p>To write efficient and maintainable React.js code, consider these best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Component Reusability:</strong> Build reusable components to reduce code duplication and enhance maintainability.</li>
        <li><strong>Use Functional Components:</strong> Prefer functional components with Hooks over class components for simplicity and performance.</li>
        <li><strong>Keep State Local:</strong> Avoid global state where possible to minimize complexity and improve performance.</li>
        <li><strong>Leverage Prop Types:</strong> Use PropTypes to ensure your components receive the right data types and to catch errors early.</li>
        <li><strong>Use Lazy Loading:</strong> Implement code-splitting and lazy loading to optimize the loading speed of your application.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning React.js</h2>
      <p>There are numerous resources available to help you master React.js:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>React Official Documentation:</strong> Comprehensive documentation straight from the source, covering all aspects of React.js.</li>
        <li><strong>freeCodeCamp:</strong> Offers interactive tutorials and projects to help you build your React skills.</li>
        <li><strong>Egghead.io:</strong> Short, expert-led video tutorials covering React.js topics in depth.</li>
        <li><strong>Codecademy:</strong> Interactive courses that take you from the basics to advanced React.js concepts.</li>
        <li><strong>W3Schools:</strong> Provides React.js tutorials, references, and examples to support your learning.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>React.js is a powerful library that has transformed the way developers build web applications. By understanding its core concepts, leveraging its features, and following best practices, you can create dynamic, high-performance user interfaces. Continuous learning and practice are key to mastering React.js and contributing to the world of modern web development.</p>
    </section>
  </article>
</div>
      

    </div>
  );
};

export default Quiz;
