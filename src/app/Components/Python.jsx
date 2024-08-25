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

  <Link href="../JavaQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering Python: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into Python, Its Concepts, Features, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is Python?</h2>
        <p>
          Python is a powerful, high-level programming language known for its readability and simplicity. It is widely used for web development, data analysis, artificial intelligence, scientific computing, and more. Python’s straightforward syntax makes it an ideal language for both beginners and experienced developers.
        </p>
        <p className="mt-4">
          Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Its extensive standard library and vast ecosystem of third-party packages enable developers to tackle a wide range of projects with ease.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg" alt="What is Python?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Python Concepts</h2>
      <p>Understanding core Python concepts is essential for effective programming:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Variables:</strong> Python uses dynamic typing, meaning variables can change types as needed.</li>
        <li><strong>Functions:</strong> Functions are defined using the <code>def</code> keyword and can return values using the <code>return</code> statement.</li>
        <li><strong>Data Structures:</strong> Python has powerful built-in data structures like lists, dictionaries, and sets.</li>
        <li><strong>Control Flow:</strong> Python supports if-else statements, loops, and exception handling to control the flow of programs.</li>
        <li><strong>Object-Oriented Programming:</strong> Python allows for creating classes and objects, supporting encapsulation, inheritance, and polymorphism.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Advanced Python Features</h2>
      <p>Python offers several advanced features that can enhance your programming capabilities:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Generators:</strong> Functions that return an iterator, allowing you to iterate over data without storing it in memory.</li>
        <li><strong>Decorators:</strong> Functions that modify the behavior of other functions or methods, often used for logging or access control.</li>
        <li><strong>List Comprehensions:</strong> A concise way to create lists by iterating over an iterable and optionally including conditions.</li>
        <li><strong>Lambda Functions:</strong> Anonymous functions defined using the <code>lambda</code> keyword, often used for short, throwaway functions.</li>
        <li><strong>Context Managers:</strong> Simplify resource management using the <code>with</code> statement, handling setup and cleanup automatically.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Python Ecosystem</h2>
      <p>Python's ecosystem is vast, offering tools and libraries for almost every domain:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Web Development:</strong> Frameworks like Django and Flask streamline web application development.</li>
        <li><strong>Data Science:</strong> Libraries like NumPy, Pandas, and Matplotlib make data analysis and visualization accessible.</li>
        <li><strong>Machine Learning:</strong> TensorFlow and PyTorch are popular frameworks for building machine learning models.</li>
        <li><strong>Automation:</strong> Python can automate repetitive tasks with scripts, enhancing productivity.</li>
        <li><strong>Testing:</strong> PyTest and Unittest are powerful tools for testing Python code, ensuring reliability.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg" alt="Best Practices" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Best Practices for Python Development</h2>
        <p>Adopting best practices is key to writing clean, efficient, and maintainable Python code:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Follow PEP 8:</strong> Python’s style guide, PEP 8, promotes consistency and readability in code.</li>
          <li><strong>Use Virtual Environments:</strong> Isolate project dependencies using virtual environments to avoid conflicts.</li>
          <li><strong>Write Tests:</strong> Ensure your code is reliable and bug-free by writing and running unit tests.</li>
          <li><strong>Document Your Code:</strong> Use docstrings and comments to explain complex logic and functions.</li>
          <li><strong>Leverage Libraries:</strong> Utilize Python’s rich ecosystem of libraries instead of reinventing the wheel.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Python Tips</h2>
      <p>Here are some practical tips to help you excel in Python development:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Optimize Performance:</strong> Use profiling tools to identify bottlenecks and optimize your code for speed.</li>
        <li><strong>Keep Code DRY:</strong> Avoid duplication by following the "Don't Repeat Yourself" principle.</li>
        <li><strong>Use Type Hinting:</strong> Python 3 supports type hints, which can improve code readability and reduce bugs.</li>
        <li><strong>Master Debugging:</strong> Learn to use Python’s built-in debugger, pdb, to troubleshoot issues effectively.</li>
        <li><strong>Stay Updated:</strong> Regularly update your Python knowledge by following Python Enhancement Proposals (PEPs) and participating in the community.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning Python</h2>
      <p>To further your Python skills, explore these learning resources:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Python.org:</strong> The official Python website offers extensive documentation, tutorials, and guides.</li>
        <li><strong>Real Python:</strong> A platform with articles, courses, and tutorials to help you become proficient in Python.</li>
        <li><strong>Coursera:</strong> Offers courses on Python programming, data science, and machine learning.</li>
        <li><strong>edX:</strong> Provides Python courses from top universities and institutions.</li>
        <li><strong>Automate the Boring Stuff with Python:</strong> A practical book for learning Python by automating everyday tasks.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>Python is a versatile and powerful programming language that can be used for a wide range of applications. By mastering its core concepts, taking advantage of its advanced features, and following best practices, you can become an effective Python developer. Continuous learning and practical application are the keys to success in Python development, and with the vast resources available, there's no better time to start or continue your Python journey.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
