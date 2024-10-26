"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Angular'; // Assuming questions are exported from this path
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

  <Link href="../PythonQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering Angular: A Comprehensive Guide</h1>
    <a href='https://luglawhaulsano.net/4/8420433' target="_blank" className='pl-10'> Click here to visit the link</a>
    <p className="text-lg text-gray-600">In-depth Insights into Angular, Its Concepts, Versions, Best Practices, and More</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is Angular?</h2>
        <p>
          Angular is a powerful, open-source web application framework developed and maintained by Google. It is designed to simplify the development and testing of single-page applications (SPAs) by providing a comprehensive set of tools and features. Angular uses TypeScript, a superset of JavaScript, and follows the MVC (Model-View-Controller) architecture.
        </p>
        <p className="mt-4">
          Since its release in 2016, Angular has become one of the most popular frameworks for building dynamic, complex web applications. Its rich ecosystem, robust features, and active community make it a go-to choice for developers looking to create scalable and maintainable applications.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is Angular?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Angular Core Concepts</h2>
      <p>Angular is built around several core concepts that are essential to understand in order to use the framework effectively:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Components:</strong> The building blocks of Angular applications, components encapsulate the logic, template, and styles for a specific part of the UI.</li>
        <li><strong>Modules:</strong> Angular applications are organized into modules, which group related components, services, and other code into cohesive blocks.</li>
        <li><strong>Services:</strong> Services provide a way to share data and logic across components. They are typically used for tasks like data fetching, state management, and business logic.</li>
        <li><strong>Directives:</strong> Angular directives extend HTML by adding new behaviors to elements and components. Common directives include <code>*ngIf</code> and <code>*ngFor</code>.</li>
        <li><strong>Routing:</strong> Angular's powerful routing module allows developers to define routes for different parts of their application, enabling navigation between views.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Advanced Angular Concepts</h2>
      <p>Angular offers a wealth of advanced features that enable developers to build sophisticated applications:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Dependency Injection:</strong> Angular's dependency injection system allows services and other dependencies to be injected into components, making code more modular and testable.</li>
        <li><strong>Change Detection:</strong> Angular's change detection mechanism keeps the UI in sync with the application's state. It efficiently tracks changes and updates the DOM only when necessary.</li>
        <li><strong>Forms and Reactive Programming:</strong> Angular provides powerful tools for handling forms, including template-driven and reactive forms. Reactive forms, in particular, allow for more complex and scalable form management.</li>
        <li><strong>State Management with NgRx:</strong> For larger applications, state management becomes crucial. NgRx is a popular library that integrates with Angular to manage application state using a reactive, store-based approach.</li>
        <li><strong>Lazy Loading:</strong> Angular supports lazy loading, which allows parts of an application to be loaded on demand, reducing the initial load time and improving performance.</li>
        <li><strong>Unit Testing:</strong> Angular has built-in support for unit testing with Jasmine and Karma, making it easier to write and run tests for components, services, and other parts of the application.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Angular Versions and Their Features</h2>
      <p>Angular has undergone significant evolution since its inception, with new versions bringing powerful features and improvements:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Angular 2 (2016):</strong> A complete rewrite of AngularJS, introducing a component-based architecture, TypeScript, and improved performance.</li>
        <li><strong>Angular 4 (2017):</strong> Introduced smaller and faster applications, with features like <code>ngIf</code> with <code>else</code>, and Angular Universal for server-side rendering.</li>
        <li><strong>Angular 6 (2018):</strong> Brought Angular Elements, the Angular CLI, and tree-shakable providers.</li>
        <li><strong>Angular 9 (2020):</strong> Introduced the Ivy renderer, which improves build times and bundle sizes.</li>
        <li><strong>Angular 11 (2020):</strong> Focused on improving developer experience, with features like stricter types, better error messages, and faster builds.</li>
        <li><strong>Angular 14 (2022):</strong> Added typed forms, standalone components, and enhanced tooling support.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Best Practices for Angular Development</h2>
      <p>To write efficient and maintainable Angular applications, consider the following best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Follow the Angular Style Guide:</strong> Angular provides an official style guide that offers recommendations for writing clean and consistent code.</li>
        <li><strong>Use TypeScript:</strong> TypeScript's strong typing and other features make it a perfect fit for Angular, helping to catch errors early and improve code quality.</li>
        <li><strong>Optimize Performance:</strong> Use techniques like lazy loading, AOT compilation, and tree shaking to optimize the performance of your Angular applications.</li>
        <li><strong>Write Modular Code:</strong> Break your application into modules and services to improve code organization and reusability.</li>
        <li><strong>Keep Up with Angular Updates:</strong> Angular is continuously evolving, so staying updated with the latest versions and features is crucial for maintaining your applications.</li>
        <li><strong>Test Thoroughly:</strong> Use Angular's built-in testing tools to write unit tests, end-to-end tests, and integration tests to ensure your application works as expected.</li>
        <li><strong>Use Angular CLI:</strong> The Angular CLI simplifies many development tasks, from creating new components to running tests and optimizing builds.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Real-World Applications of Angular</h2>
      <p>Angular is used by many organizations to build complex and high-performance applications:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Enterprise Applications:</strong> Angular's modular architecture and robust features make it ideal for building large-scale enterprise applications, such as customer relationship management (CRM) systems, enterprise resource planning (ERP) tools, and content management systems (CMS).</li>
        <li><strong>Progressive Web Apps (PWAs):</strong> Angular's support for progressive web apps allows developers to create fast, reliable, and offline-capable applications that work on any device.</li>
        <li><strong>eCommerce Platforms:</strong> Angular is a popular choice for building eCommerce platforms, thanks to its ability to handle dynamic content, complex user interactions, and seamless integration with payment gateways.</li>
        <li><strong>Single-Page Applications (SPAs):</strong> Angular's powerful routing and state management capabilities make it perfect for building SPAs that provide a smooth and responsive user experience.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Tips for Angular Developers</h2>
      <p>Here are some practical tips to help you get the most out of Angular:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Understand the Angular Lifecycle:</strong> Familiarize yourself with Angular's component lifecycle hooks, such as <code>ngOnInit</code> and <code>ngOnDestroy</code>, to manage component state and side effects effectively.</li>
        <li><strong>Master RxJS:</strong> RxJS is an integral part of Angular's reactive programming model. Invest time in learning how to use observables, operators, and subjects to handle asynchronous data streams.</li>
        <li><strong>Utilize Angular Material:</strong> Angular Material provides a set of UI components that follow the Material Design guidelines. It helps you create a consistent and visually appealing user interface quickly.</li>
        <li><strong>Optimize for SEO:</strong> Angular applications can be optimized for search engines by using server-side rendering (SSR) with Angular Universal or pre-rendering techniques.</li>
        <li><strong>Leverage Angular Schematics:</strong> Angular Schematics allows you to automate repetitive tasks, such as generating components, services, and modules, following best practices.</li>
        <li><strong>Use Reactive Forms Wisely:</strong> Reactive forms provide a powerful way to manage form data and validation. Use them for complex forms that require dynamic behavior and validation logic.</li>
        <li><strong>Participate in the Angular Community:</strong> The Angular community is vibrant and active. Engage with other developers through forums, social media, and conferences to stay updated and share knowledge.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>Angular is a versatile and powerful framework that offers everything you need to build modern, high-performance web applications. Whether you're building small projects or large-scale enterprise applications, Angular provides the tools and features to help you succeed. By mastering Angular's core and advanced concepts, following best practices, and staying engaged with the community, you can become a proficient Angular developer and build applications that stand the test of time.</p>
      <p className="mt-4">With continuous updates and a thriving ecosystem, Angular remains a top choice for developers looking to create cutting-edge web applications. So, dive into Angular, explore its features, and start building amazing applications today!</p>
    </section>
  </article>
</div>



    </div>
  );
};

export default Quiz;
