"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Monogodb'; // Assuming questions are exported from this path
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

  <Link href="../AptitudeTestQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering MongoDB: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into MongoDB, Its Core Concepts, Ecosystem, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is MongoDB?</h2>
        <p>
          MongoDB is a powerful, document-oriented NoSQL database designed for handling large volumes of data with high performance and scalability. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents, making it ideal for modern applications that require fast, real-time data processing.
        </p>
        <p className="mt-4">
          MongoDB is widely used in industries such as finance, e-commerce, and social media for building scalable and distributed applications. It supports various data types and provides powerful query capabilities, making it a preferred choice for both startups and large enterprises.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is MongoDB?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">MongoDB Core Concepts</h2>
      <p>Understanding MongoDB requires familiarity with several key concepts:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Documents and Collections:</strong> MongoDB stores data in BSON (Binary JSON) documents within collections, allowing for flexible schemas.</li>
        <li><strong>Indexing:</strong> Indexes in MongoDB improve query performance by making data retrieval faster and more efficient.</li>
        <li><strong>Replication:</strong> MongoDB supports data replication across multiple servers, ensuring data availability and reliability.</li>
        <li><strong>Sharding:</strong> MongoDB uses sharding to distribute large datasets across multiple servers, providing horizontal scalability.</li>
        <li><strong>Aggregation:</strong> MongoDB's aggregation framework allows for advanced data processing and analysis, similar to SQL's GROUP BY operations.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">MongoDB Ecosystem</h2>
      <p>The MongoDB ecosystem includes a wide range of tools and services:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>MongoDB Atlas:</strong> A fully-managed cloud database service that simplifies deployment, management, and scaling of MongoDB clusters.</li>
        <li><strong>MongoDB Compass:</strong> A GUI for MongoDB that provides a visual interface to explore data, run queries, and optimize performance.</li>
        <li><strong>Mongoose:</strong> A popular ODM (Object Data Modeling) library for Node.js, providing a schema-based solution to model MongoDB data.</li>
        <li><strong>MongoDB Aggregation Framework:</strong> Offers powerful data processing features for transforming and summarizing data within the database.</li>
        <li><strong>MongoDB Charts:</strong> A data visualization tool integrated with MongoDB, allowing users to create and share dashboards easily.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">MongoDB Versions and Features</h2>
      <p>Over the years, MongoDB has evolved with new features and improvements:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>MongoDB 4.0:</strong> Introduced multi-document ACID transactions, making it easier to handle complex operations with full transactional support.</li>
        <li><strong>MongoDB 4.2:</strong> Added features like on-demand materialized views, distributed transactions, and wildcard indexes.</li>
        <li><strong>MongoDB 4.4:</strong> Enhanced sharding capabilities, introduced hedged reads, and improved performance for large-scale deployments.</li>
        <li><strong>MongoDB 5.0:</strong> Brought support for time-series collections, live resharding, and versioned API, enabling smoother migrations.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="MongoDB Versions and Features" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Advanced MongoDB Topics</h2>
        <p>For developers aiming to master MongoDB, exploring advanced topics is essential:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Schema Design:</strong> Learn best practices for designing efficient and scalable schemas tailored to your application's needs.</li>
          <li><strong>Performance Tuning:</strong> Explore indexing strategies, query optimization, and sharding techniques to maximize MongoDB's performance.</li>
          <li><strong>Security:</strong> Understand MongoDB's security features, including authentication, authorization, and encryption.</li>
          <li><strong>Backup and Recovery:</strong> Implement robust backup and recovery strategies to ensure data integrity and availability.</li>
          <li><strong>Data Migration:</strong> Master the tools and techniques for migrating data from relational databases or older MongoDB versions.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Best Practices for MongoDB Development</h2>
      <p>To excel in MongoDB development, consider these best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Design Efficient Schemas:</strong> Avoid anti-patterns and design schemas that align with your query patterns and access patterns.</li>
        <li><strong>Monitor Performance:</strong> Regularly monitor database performance using MongoDB's built-in tools and third-party solutions.</li>
        <li><strong>Implement Proper Indexing:</strong> Index the fields that are frequently queried to reduce query time and improve overall performance.</li>
        <li><strong>Use Transactions Wisely:</strong> While MongoDB supports multi-document transactions, use them judiciously to avoid performance issues.</li>
        <li><strong>Stay Updated:</strong> Keep your MongoDB version up-to-date and leverage new features and improvements to enhance your application.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning MongoDB</h2>
      <p>Whether you're a beginner or an experienced developer, these resources can help you master MongoDB:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>MongoDB University:</strong> The official learning platform offering free courses on MongoDB fundamentals, advanced topics, and certifications.</li>
        <li><strong>MongoDB Documentation:</strong> The comprehensive official documentation is a go-to resource for understanding MongoDB's features and best practices.</li>
        <li><strong>Udemy Courses:</strong> Explore a variety of MongoDB courses covering everything from basics to advanced topics and real-world projects.</li>
        <li><strong>Coursera:</strong> Offers MongoDB courses from renowned universities and institutions, providing a deep dive into database design and development.</li>
        <li><strong>Books:</strong> "MongoDB: The Definitive Guide" and "Mastering MongoDB" are excellent resources for developers of all levels.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>MongoDB has established itself as a leading NoSQL database, offering unmatched flexibility, scalability, and performance. By mastering its core concepts, exploring advanced topics, and following best practices, you can build robust, high-performance applications that meet the demands of modern data-driven environments. Whether you're working on small projects or large-scale systems, MongoDB provides the tools and ecosystem to succeed.</p>
      <p>Keep learning, experimenting, and refining your skills to stay ahead in the dynamic world of MongoDB development.</p>
    </section>
  </article>
</div>





    </div>
  );
};

export default Quiz;
