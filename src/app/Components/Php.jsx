"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Php'; // Assuming questions are exported from this path
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

  <Link href="../MysqlQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering PHP: A Comprehensive Guide</h1>
    <div className=' text-center'>
        <a href='https://luglawhaulsano.net/4/8420433' target="_blank" rel="noopener noreferrer"  className=' py-5 pt-10 text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-blue-700 bg-clip-text text-transparent'> Click here to visit the link</a>

        </div>
    <p className="text-lg text-gray-600">In-depth Insights into PHP, Its Concepts, Features, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    {/* <!-- Introduction to PHP --> */}
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is PHP?</h2>
        <p>
          PHP (Hypertext Preprocessor) is a widely-used open-source scripting language designed for web development. It is a server-side language embedded within HTML, enabling the creation of dynamic web pages and applications.
        </p>
        <p className="mt-4">
          PHP powers a vast number of websites and web applications, including content management systems (CMS), e-commerce platforms, and social networks. Its flexibility, ease of use, and integration with databases like MySQL make it a foundational tool for web developers.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is PHP?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    {/* <!-- Core PHP Concepts --> */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Core PHP Concepts</h2>
      <p>Understanding the fundamental concepts of PHP is crucial for effective web development:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Variables:</strong> PHP variables are used to store data. They are declared with a <code>$</code> symbol followed by the variable name and can store different data types such as strings, integers, and arrays.</li>
        <li><strong>Functions:</strong> Functions are reusable blocks of code that perform specific tasks. PHP has a wide array of built-in functions and allows the creation of user-defined functions.</li>
        <li><strong>Arrays:</strong> Arrays are collections of data items. PHP supports indexed arrays, associative arrays, and multidimensional arrays.</li>
        <li><strong>Control Structures:</strong> PHP includes conditional statements and loops like <code>if</code>, <code>else</code>, <code>while</code>, and <code>for</code>, which control the flow of execution in a script.</li>
        <li><strong>Superglobals:</strong> PHP provides several superglobal variables such as <code>$_GET</code>, <code>$_POST</code>, and <code>$_SESSION</code>, which are available globally across scripts.</li>
        <li><strong>Data Types:</strong> PHP supports multiple data types, including strings, integers, floats, booleans, arrays, objects, and NULL.</li>
      </ul>
    </section>

    {/* <!-- Advanced PHP Features --> */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Advanced PHP Features</h2>
      <p>PHP offers a range of advanced features that allow developers to build robust and scalable web applications:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Object-Oriented Programming (OOP):</strong> PHP supports OOP principles, including classes, inheritance, and interfaces, allowing for more modular and maintainable code.</li>
        <li><strong>Error Handling:</strong> PHP includes mechanisms such as <code>try...catch</code> blocks for handling exceptions and errors gracefully.</li>
        <li><strong>Session Management:</strong> PHP’s session management capabilities allow the storage of user data across multiple pages, essential for user authentication and personalized experiences.</li>
        <li><strong>File Handling:</strong> PHP provides functions to read, write, and manipulate files on the server, which is useful for creating file-based applications.</li>
        <li><strong>Security Features:</strong> PHP has built-in features for input sanitization, encryption, and protection against common security threats like SQL injection and XSS.</li>
        <li><strong>Regular Expressions:</strong> PHP supports regular expressions for complex string manipulation, pattern matching, and data validation.</li>
      </ul>
    </section>

    {/* <!-- Database Integration with PHP --> */}
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Advanced PHP Features" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Database Integration with PHP</h2>
        <p>PHP is highly effective in interacting with databases, making it a preferred choice for building dynamic and data-driven applications:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>MySQL Integration:</strong> PHP’s built-in functions for MySQL enable easy database connection, querying, and management of data.</li>
          <li><strong>PDO (PHP Data Objects):</strong> PDO is a database access layer that provides a consistent interface for interacting with multiple database types, offering better security and flexibility.</li>
          <li><strong>ORM (Object-Relational Mapping):</strong> PHP frameworks like Laravel utilize ORM tools such as Eloquent to simplify database operations by mapping PHP objects to database records.</li>
          <li><strong>MongoDB Integration:</strong> PHP can also integrate with NoSQL databases like MongoDB, offering flexibility in managing large datasets.</li>
        </ul>
      </div>
    </section>

    {/* <!-- PHP Versions and Their Features --> */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">PHP Versions and Their Features</h2>
      <p>PHP has evolved significantly over the years, with each version introducing new features and improvements:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>PHP 5:</strong> Introduced significant features like OOP, exceptions, and improved MySQL support.</li>
        <li><strong>PHP 7:</strong> Offered major performance enhancements, scalar type declarations, and error handling improvements.</li>
        <li><strong>PHP 8:</strong> Brought Just-In-Time (JIT) compilation, union types, and further enhancements to error handling and the type system.</li>
        <li><strong>PHP 8.1:</strong> Introduced enums, readonly properties, and performance improvements.</li>
        <li><strong>PHP 8.2:</strong> Brought further refinements, such as readonly classes and type safety enhancements.</li>
      </ul>
    </section>

    {/* <!-- PHP Frameworks --> */}
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">PHP Frameworks</h2>
        <p>PHP frameworks provide a structured approach to development, speeding up the process and enforcing best practices:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Laravel:</strong> Laravel is a comprehensive MVC framework that offers features like routing, authentication, and database management out of the box.</li>
          <li><strong>Symfony:</strong> Symfony is a highly flexible framework known for its reusable components and high performance, suitable for large-scale applications.</li>
          <li><strong>CodeIgniter:</strong> CodeIgniter is a lightweight framework that is easy to set up and ideal for small to medium-sized projects.</li>
          <li><strong>Yii:</strong> Yii is a high-performance framework designed for building modern web applications, offering features like caching and security measures.</li>
        </ul>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="PHP Frameworks" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    {/* <!-- Practical Tips for Working with PHP --> */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with PHP</h2>
      <p>To enhance your PHP development skills, consider the following tips:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Follow Coding Standards:</strong> Adhere to PHP coding standards such as PSR-12 to ensure code consistency and readability.</li>
        <li><strong>Use Composer:</strong> Composer is a dependency management tool for PHP that simplifies the integration of third-party libraries into your projects.</li>
        <li><strong>Leverage Testing:</strong> Implement unit testing with tools like PHPUnit to ensure your code functions as expected and is free of bugs.</li>
        <li><strong>Optimize Performance:</strong> Optimize your PHP scripts by minimizing the use of loops, reducing database queries, and using caching mechanisms.</li>
        <li><strong>Stay Updated:</strong> Keep up with the latest PHP updates and best practices by following the official PHP documentation and community forums.</li>
      </ul>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
