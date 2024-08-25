"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Node'; // Assuming questions are exported from this path
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
          <div className="button-group mt-6">
            <button onClick={handleTryAgainClick} className="block mt-4 lg:inline-block sm:px-7 px-4 py-2 mx-10 bg-slate-400 rounded text-white text-lg hover:underline">
              Try Again
            </button>

            <Link href="../PhpQ" className="block mt-4 lg:inline-block px-4 py-2 mx-10 bg-slate-400 rounded text-white text-lg hover:underline">
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
    <h1 className="text-3xl font-bold">Mastering Node.js: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into Node.js, Its Core Concepts, Features, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is Node.js?</h2>
        <p>
          Node.js is a powerful, open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. Built on Google Chrome's V8 JavaScript engine, Node.js enables server-side scripting, allowing developers to create scalable and efficient applications.
        </p>
        <p className="mt-4">
          With Node.js, JavaScript has evolved from being just a client-side scripting language to a full-fledged server-side programming language. Its non-blocking, event-driven architecture makes it ideal for building real-time applications like chat servers, gaming platforms, and more.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is Node.js?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Core Concepts of Node.js</h2>
      <p>Node.js is built around several core concepts that are essential to understand in order to use the platform effectively:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Event-Driven Architecture:</strong> Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.</li>
        <li><strong>Single-Threaded Event Loop:</strong> Despite being single-threaded, Node.js can handle multiple connections concurrently thanks to its event loop, which manages asynchronous operations.</li>
        <li><strong>Asynchronous Programming:</strong> Node.js promotes asynchronous programming, where tasks can run in the background without blocking the main thread.</li>
        <li><strong>Modules:</strong> Node.js has a rich set of built-in modules that provide functionalities like file I/O, networking, and more. Additionally, the Node Package Manager (NPM) allows developers to install and manage third-party modules.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Node.js Features and Their Benefits</h2>
      <p>Node.js offers a wide range of features that contribute to its popularity among developers:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Fast Execution:</strong> Node.js uses the V8 engine, known for its high performance, allowing JavaScript code to be executed at a very high speed.</li>
        <li><strong>Scalability:</strong> Node.js is highly scalable, thanks to its asynchronous nature, making it ideal for building scalable network applications.</li>
        <li><strong>Rich Ecosystem:</strong> With NPM, Node.js has a vast ecosystem of libraries and packages, enabling developers to find solutions for almost any problem.</li>
        <li><strong>Cross-Platform Compatibility:</strong> Node.js can run on multiple platforms including Windows, Linux, and macOS, making it a versatile choice for developers.</li>
        <li><strong>Community Support:</strong> Node.js has a large and active community, offering a wealth of resources, tutorials, and support.</li>
        <li><strong>Real-time Communication:</strong> Node.js is well-suited for building real-time applications like chat apps, collaborative tools, and live data streaming services.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Node.js Features" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Advanced Node.js Features</h2>
        <p>Node.js is not only about basic features but also offers advanced capabilities that can enhance the development experience:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Cluster Module:</strong> Enables the creation of child processes (workers) that share the same server port, allowing for the handling of more requests simultaneously.</li>
          <li><strong>Stream API:</strong> Provides a powerful way to handle streaming data, such as reading or writing files, compressing data, and working with network requests.</li>
          <li><strong>Worker Threads:</strong> Allows the creation of multiple threads within a Node.js process, facilitating multi-threaded execution in CPU-intensive tasks.</li>
          <li><strong>Buffer:</strong> A raw binary data container, which can be used to handle binary data directly, especially in scenarios like file I/O.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Best Practices for Node.js Development</h2>
      <p>To make the most out of Node.js, it’s important to follow best practices that ensure the performance, security, and maintainability of your applications:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Use Asynchronous Code:</strong> Embrace async/await patterns or promises to handle asynchronous operations effectively.</li>
        <li><strong>Handle Errors Gracefully:</strong> Always include error handling in your code to prevent your application from crashing unexpectedly.</li>
        <li><strong>Modularize Your Code:</strong> Break your code into smaller, reusable modules to enhance maintainability and scalability.</li>
        <li><strong>Use Environment Variables:</strong> Store sensitive information like API keys and database credentials in environment variables instead of hardcoding them.</li>
        <li><strong>Implement Security Best Practices:</strong> Protect your application from common security threats by validating input, using HTTPS, and keeping dependencies up to date.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning Node.js</h2>
      <p>There are plenty of resources available for developers who want to learn Node.js:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Node.js Documentation:</strong> The official Node.js documentation provides a comprehensive guide to the platform, including tutorials and API references.</li>
        <li><strong>freeCodeCamp:</strong> Offers an extensive curriculum that covers Node.js fundamentals and includes hands-on projects.</li>
        <li><strong>Node School:</strong> A community-driven platform that provides interactive tutorials to learn Node.js in a practical manner.</li>
        <li><strong>Udemy and Coursera:</strong> Provide a variety of courses ranging from beginner to advanced levels, allowing you to learn Node.js at your own pace.</li>
        <li><strong>GitHub:</strong> Explore open-source Node.js projects on GitHub to understand how real-world applications are built.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>Node.js has transformed the way JavaScript is used, enabling developers to create full-stack applications with a single language. Its event-driven, non-blocking I/O model, combined with a rich ecosystem of libraries, makes it a powerful tool for modern web development. By understanding its core concepts, leveraging its advanced features, and following best practices, you can build high-performance, scalable, and secure applications. Whether you are new to Node.js or looking to deepen your knowledge, continuous learning and hands-on experience are key to mastering this versatile runtime environment.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
