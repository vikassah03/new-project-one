"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Mysql'; // Assuming questions are exported from this path
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

            <Link href="../AngularQ" className="block mt-4 lg:inline-block px-4 py-2 mx-10 bg-slate-400 rounded text-white text-lg hover:underline">
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
    <h1 className="text-3xl font-bold">Mastering MySQL: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into MySQL, Its Concepts, Features, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is MySQL?</h2>
        <p>
          MySQL is an open-source relational database management system (RDBMS) that is widely used for managing and organizing data in a structured way. It is known for its high performance, flexibility, and reliability, making it one of the most popular database systems for web applications and data-driven websites.
        </p>
        <p className="mt-4">
          MySQL is commonly used in combination with PHP and Apache in a LAMP (Linux, Apache, MySQL, PHP) stack to power dynamic websites and applications. It supports a wide range of SQL commands for querying and managing data, providing developers with the tools needed to build scalable and secure databases.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is MySQL?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">MySQL Concepts</h2>
      <p>MySQL operates on several key concepts that are fundamental to understanding and using the system effectively:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Databases:</strong> Structured collections of data organized into tables.</li>
        <li><strong>Tables:</strong> Organized data stored in rows and columns, representing entities and their attributes.</li>
        <li><strong>SQL (Structured Query Language):</strong> The language used to interact with the database, including querying, updating, and managing data.</li>
        <li><strong>Indexes:</strong> Structures that improve the speed of data retrieval operations on a database table.</li>
        <li><strong>Transactions:</strong> A sequence of database operations that are executed as a single unit, ensuring data integrity.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">All MySQL Topics and Their Details</h2>
      <p>MySQL encompasses a wide range of topics essential for both beginner and advanced database administrators:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Data Types:</strong> Define the type of data that can be stored in a column (e.g., INT, VARCHAR, DATE).</li>
        <li><strong>Joins:</strong> Methods to combine rows from two or more tables based on a related column.</li>
        <li><strong>Stored Procedures:</strong> A set of SQL statements that can be stored in the database and executed repeatedly.</li>
        <li><strong>Triggers:</strong> SQL code that automatically executes in response to certain events on a table.</li>
        <li><strong>Backup and Recovery:</strong> Techniques for preserving and restoring database data.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Advanced MySQL Features</h2>
      <p>MySQL offers a variety of advanced features that enhance its functionality and performance:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Replication:</strong> The process of copying data from one MySQL database server to another, enabling high availability and disaster recovery.</li>
        <li><strong>Partitioning:</strong> The division of a database table into smaller, more manageable pieces, improving performance and manageability.</li>
        <li><strong>Full-Text Search:</strong> A powerful search feature that enables complex queries to find specific text in large databases.</li>
        <li><strong>InnoDB Storage Engine:</strong> A default storage engine in MySQL that provides ACID-compliant transaction features, including foreign key support.</li>
        <li><strong>Performance Tuning:</strong> Techniques and tools for optimizing MySQL performance, such as query optimization and indexing strategies.</li>
        <li><strong>Clustered MySQL:</strong> A distributed database setup that ensures high availability and scalability by replicating data across multiple nodes.</li>
        <li><strong>Security Features:</strong> Includes encryption, user authentication, and access control mechanisms to protect sensitive data.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/7213361/pexels-photo-7213361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Practical Tips for MySQL" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with MySQL</h2>
        <p>To efficiently manage and optimize your MySQL databases, consider the following best practices:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Regular Backups:</strong> Implement regular backup schedules to prevent data loss.</li>
          <li><strong>Optimize Queries:</strong> Use indexes and efficient query structures to reduce load times.</li>
          <li><strong>Monitor Performance:</strong> Regularly monitor database performance using tools like MySQL Workbench.</li>
          <li><strong>Use Transactions:</strong> Group multiple SQL statements into transactions to ensure data integrity.</li>
          <li><strong>Security Practices:</strong> Implement strong passwords, limit user privileges, and use SSL for secure connections.</li>
          <li><strong>Stay Updated:</strong> Regularly update MySQL to the latest version to benefit from new features and security patches.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning MySQL</h2>
      <p>There are numerous resources available to help you master MySQL:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>MySQL Documentation:</strong> The official MySQL documentation provides comprehensive information on all aspects of MySQL.</li>
        <li><strong>W3Schools:</strong> Offers tutorials and references on SQL and MySQL, complete with examples and exercises.</li>
        <li><strong>Udemy:</strong> Provides a wide range of courses on MySQL, from beginner to advanced levels.</li>
        <li><strong>freeCodeCamp:</strong> Offers a MySQL section in its database curriculum, including interactive challenges.</li>
        <li><strong>Codecademy:</strong> Features interactive MySQL courses designed for learners at different levels.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>MySQL is a powerful and versatile database management system that plays a critical role in modern web development and data management. By understanding its core concepts, leveraging advanced features, and following best practices, you can harness the full potential of MySQL for your projects. Whether you're a beginner or an experienced database administrator, continuous learning and hands-on experience will enable you to excel in using MySQL effectively.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
