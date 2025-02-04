"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Dotnet'; // Assuming questions are exported from this path
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
        <div className="score-section mx-10 ">
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

  <Link href="../MongodbQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering .NET: A Comprehensive Guide</h1>
    <div className=' text-center'>
        

        </div>
    <p className="text-lg text-gray-600">In-depth Insights into .NET, Its Concepts, Frameworks, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is .NET?</h2>
        <p>
          .NET is a free, open-source developer platform created by Microsoft for building various types of applications. Whether you're targeting web, desktop, mobile, or cloud-based solutions, .NET provides a flexible, powerful environment that can handle everything from simple tools to complex, enterprise-grade systems.
        </p>
        <p className="mt-4">
          The platform supports multiple languages, libraries, and editors, allowing developers to build applications across a broad range of operating systems, including Windows, macOS, and Linux. .NET simplifies the development process by offering a unified programming environment for diverse applications, making it a popular choice among developers worldwide.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is .NET?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">.NET Core Concepts</h2>
      <p>.NET is built around several core concepts that are essential for creating robust and scalable applications:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>CLR (Common Language Runtime):</strong> The execution engine for .NET applications, providing services like memory management, exception handling, and security.</li>
        <li><strong>Framework Class Library (FCL):</strong> A comprehensive collection of reusable classes, interfaces, and value types that provide functionality for various types of applications.</li>
        <li><strong>Language Interoperability:</strong> .NET supports multiple programming languages, allowing seamless integration between code written in different languages.</li>
        <li><strong>Asynchronous Programming:</strong> Built-in support for asynchronous programming with async and await, enhancing performance and responsiveness.</li>
        <li><strong>Dependency Injection:</strong> A design pattern widely used in .NET to achieve Inversion of Control, making applications more modular, testable, and maintainable.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">.NET Frameworks and Libraries</h2>
      <p>.NET encompasses a wide array of frameworks and libraries that cater to different application types:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>ASP.NET Core:</strong> A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications, such as web apps, IoT apps, and mobile backends.</li>
        <li><strong>Entity Framework Core:</strong> An object-relational mapper (ORM) that allows .NET developers to work with databases using .NET objects, eliminating the need for most data-access code.</li>
        <li><strong>Blazor:</strong> A framework for building interactive web UIs using C# instead of JavaScript, allowing developers to share code between server and client applications.</li>
        <li><strong>Xamarin:</strong> A framework for creating mobile applications for iOS, Android, and Windows using a single shared .NET codebase.</li>
        <li><strong>SignalR:</strong> A library for adding real-time web functionality to applications, enabling bi-directional communication between server and client.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with .NET</h2>
      <p>To write efficient and effective .NET applications, consider the following best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Adopt Clean Architecture:</strong> Structure your projects with a clear separation of concerns, following principles like SOLID to create maintainable and scalable codebases.</li>
        <li><strong>Optimize Performance:</strong> Use asynchronous programming, caching, and other performance optimization techniques to ensure your applications run smoothly under heavy loads.</li>
        <li><strong>Leverage Dependency Injection:</strong> Utilize dependency injection to manage dependencies and increase the testability and flexibility of your applications.</li>
        <li><strong>Stay Updated:</strong> Keep up with the latest .NET releases and updates to take advantage of new features, security patches, and performance improvements.</li>
        <li><strong>Write Unit Tests:</strong> Implement comprehensive unit testing to catch bugs early and ensure that your code works as expected across different scenarios.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=".NET Frameworks" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Advanced .NET Features</h2>
        <p>.NET offers advanced features that enhance development and application performance:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Microservices Architecture:</strong> .NET supports microservices, allowing you to build scalable, independently deployable services that communicate over lightweight protocols.</li>
          <li><strong>Cloud Integration:</strong> Seamlessly integrate .NET applications with cloud services like Azure, enabling scalable and resilient cloud-based solutions.</li>
          <li><strong>Machine Learning with ML.NET:</strong> Utilize ML.NET to add machine learning capabilities to your .NET applications, including tasks like sentiment analysis, recommendation engines, and image classification.</li>
          <li><strong>gRPC Support:</strong> Implement high-performance, cross-platform remote procedure calls (RPC) with gRPC in .NET applications.</li>
          <li><strong>Containerization with Docker:</strong> Deploy .NET applications in containers using Docker, ensuring consistency across different environments.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning .NET</h2>
      <p>There are numerous resources available to help you master .NET:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Microsoft Learn:</strong> Official tutorials, modules, and learning paths provided by Microsoft to help developers master .NET.</li>
        <li><strong>Pluralsight:</strong> Offers in-depth courses and video tutorials on various .NET topics, ranging from beginner to advanced levels.</li>
        <li><strong>dotNETConf:</strong> An annual online conference providing the latest updates, trends, and best practices in .NET development.</li>
        <li><strong>Stack Overflow:</strong> A valuable community resource where you can find answers to common .NET questions and engage with other developers.</li>
        <li><strong>Udemy:</strong> Hosts a wide range of courses on .NET, including specific topics like ASP.NET Core, Xamarin, and Blazor.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>.NET is a versatile and powerful platform that can be used to build a wide variety of applications. By understanding its core concepts, keeping up with the latest features, and following best practices, you can create scalable, maintainable, and high-performing applications. Whether you are a novice or an experienced developer, leveraging the full potential of .NET will help you excel in your development career and contribute to the creation of innovative solutions in the tech industry.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
