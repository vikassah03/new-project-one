"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Next'; // Assuming questions are exported from this path
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
                  <td className="border px-4 py-2">{item.question.question}</td>
                  <td className="border px-4 py-2">
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

  <Link href="../NodeQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering Next.js: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into Next.js, Its Features, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is Next.js?</h2>
        <p>
          Next.js is a React framework that enables developers to build fast and scalable web applications with ease. It provides features like server-side rendering (SSR), static site generation (SSG), and API routes, making it a powerful tool for creating modern web applications.
        </p>
        <p className="mt-4">
          Next.js simplifies the process of building React applications by providing a robust set of tools and conventions. Whether you're building a static site, a dynamic web app, or a hybrid, Next.js is designed to handle it efficiently.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/23496606/pexels-photo-23496606/free-photo-of-a-man-in-a-red-hat-is-working-on-his-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is Next.js?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Core Features of Next.js</h2>
      <p>Next.js is packed with features that simplify the development process and enhance the performance of your applications:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Server-Side Rendering (SSR):</strong> Automatically renders pages on the server before sending them to the client, improving performance and SEO.</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-renders pages at build time, offering the best performance and caching benefits.</li>
        <li><strong>API Routes:</strong> Built-in API routes allow you to create back-end functionality within your Next.js application.</li>
        <li><strong>File-System Routing:</strong> Pages are created based on the file structure, simplifying navigation and routing.</li>
        <li><strong>Image Optimization:</strong> Automatically optimizes images to improve performance.</li>
        <li><strong>Internationalization:</strong> Built-in support for multi-language applications with ease.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Getting Started with Next.js</h2>
      <p>Starting a new Next.js project is straightforward. Here are the basic steps:</p>
      <ol className="list-decimal list-inside pl-4">
        <li><strong>Install Next.js:</strong> Use npm or yarn to install Next.js and its dependencies.</li>
        <li><strong>Create Pages:</strong> Add files to the `pages` directory to create routes.</li>
        <li><strong>Customize:</strong> Utilize features like SSR, SSG, and API routes to build a fully-fledged application.</li>
      </ol>
      <pre className="bg-gray-100 p-4 rounded">
        <code>
          npx create-next-app@latest<br />
          cd your-project<br />
          npm run dev
        </code>
      </pre>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
      <p>When working with Next.js, consider these best practices to maximize efficiency:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Utilize Incremental Static Regeneration (ISR):</strong> Update static content without rebuilding the entire site.</li>
        <li><strong>Optimize Images:</strong> Use the built-in `next/image` component for optimal image loading.</li>
        <li><strong>Handle Global Styles:</strong> Use `globals.css` or styled-components for managing global styles.</li>
        <li><strong>Leverage Dynamic Routes:</strong> Use dynamic routing for pages with variable paths, such as blog posts.</li>
        <li><strong>Deploy with Vercel:</strong> Vercel, the company behind Next.js, offers seamless deployment for Next.js projects.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>Next.js is a versatile framework that enables developers to build robust and scalable web applications with ease. By mastering Next.js, you can create performant, SEO-friendly, and feature-rich web applications that meet modern web standards.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
