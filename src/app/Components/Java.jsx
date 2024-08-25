"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/Java'; // Assuming questions are exported from this path
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

  <Link href="../DotnetQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Mastering Java: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into Java, Its Core Concepts, Ecosystem, and Best Practices</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is Java?</h2>
        <p>
          Java is a versatile, high-level programming language that is widely used for building robust, scalable, and portable applications. It is known for its "write once, run anywhere" capability, allowing developers to run their Java code on any platform that supports the Java Virtual Machine (JVM).
        </p>
        <p className="mt-4">
          Java is often used in enterprise environments, mobile applications, web development, and embedded systems. It is designed to be secure, fast, and reliable, making it a preferred choice for large-scale systems and critical applications.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="What is Java?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Java Core Concepts</h2>
      <p>Understanding Java requires a grasp of several fundamental concepts:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Classes and Objects:</strong> Java is object-oriented, meaning it organizes software design around data, or objects, rather than functions and logic.</li>
        <li><strong>Inheritance:</strong> Java allows new classes to inherit features from existing classes, promoting reusability and a hierarchical classification.</li>
        <li><strong>Polymorphism:</strong> Java's ability to process objects differently based on their data type or class, making it flexible and extensible.</li>
        <li><strong>Encapsulation:</strong> Bundling the data (variables) and the code (methods) that manipulates the data into a single unit called a class.</li>
        <li><strong>Abstraction:</strong> Hiding the complex implementation details and showing only the essential features of an object.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Java Ecosystem</h2>
      <p>The Java ecosystem is vast, with tools and libraries that simplify development:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Java Development Kit (JDK):</strong> The JDK provides the essential tools for developing Java applications, including the Java compiler, interpreter, and other tools.</li>
        <li><strong>Java Runtime Environment (JRE):</strong> The JRE is a part of the JDK that enables running Java applications without the need for development tools.</li>
        <li><strong>Integrated Development Environments (IDEs):</strong> Tools like IntelliJ IDEA, Eclipse, and NetBeans offer advanced features to enhance productivity.</li>
        <li><strong>Frameworks:</strong> Popular Java frameworks like Spring and Hibernate streamline the development of enterprise and web applications.</li>
        <li><strong>Libraries:</strong> Extensive libraries such as Apache Commons, Google Guava, and JUnit provide reusable code for common tasks.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Java Versions and Features</h2>
      <p>Java has seen numerous updates over the years, each introducing powerful features:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Java SE 8:</strong> Introduced lambdas, the Stream API, and the java.time package for modern date and time API.</li>
        <li><strong>Java SE 9:</strong> Brought the module system, which supports modular programming, and enhanced Javadoc.</li>
        <li><strong>Java SE 11:</strong> Introduced the var keyword for local variable type inference and removed some deprecated features.</li>
        <li><strong>Java SE 17:</strong> A long-term support release that included enhancements like sealed classes, pattern matching for switch, and records.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Java Versions and Features" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Advanced Java Topics</h2>
        <p>For developers looking to deepen their Java knowledge, exploring advanced topics is crucial:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Concurrency:</strong> Learn about threads, synchronization, and the java.util.concurrent package for building multithreaded applications.</li>
          <li><strong>Memory Management:</strong> Understanding Java's garbage collection and memory management is key to optimizing performance.</li>
          <li><strong>Design Patterns:</strong> Familiarize yourself with common design patterns such as Singleton, Factory, and Observer.</li>
          <li><strong>Networking:</strong> Java provides powerful APIs for building networked applications using sockets, RMI, and HTTP clients.</li>
          <li><strong>Security:</strong> Java's security features include encryption, digital signatures, and secure communication protocols.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Best Practices for Java Development</h2>
      <p>To excel in Java development, consider these best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Follow Coding Standards:</strong> Adhere to coding standards and conventions to write clean, readable, and maintainable code.</li>
        <li><strong>Optimize Performance:</strong> Regularly profile and optimize your code for better performance, especially in memory management and I/O operations.</li>
        <li><strong>Write Unit Tests:</strong> Ensure your code is reliable by writing comprehensive unit tests using frameworks like JUnit and TestNG.</li>
        <li><strong>Use Version Control:</strong> Track changes to your codebase using Git, and collaborate efficiently with others.</li>
        <li><strong>Keep Learning:</strong> Stay updated with the latest Java releases and best practices by following community blogs, attending webinars, and participating in coding challenges.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Learning Java</h2>
      <p>Whether you're a beginner or an experienced developer, these resources can help you master Java:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Oracle's Official Java Documentation:</strong> The official source for Java's syntax, APIs, and best practices.</li>
        <li><strong>GeeksforGeeks:</strong> A comprehensive platform for tutorials, coding challenges, and interview preparation.</li>
        <li><strong>Coursera:</strong> Offers Java courses from renowned universities and instructors, covering both basic and advanced topics.</li>
        <li><strong>Codecademy:</strong> Provides interactive courses for beginners, focusing on hands-on practice and project-based learning.</li>
        <li><strong>Java Programming Masterclass (Udemy):</strong> A popular course that covers Java fundamentals and advanced topics, with over 200 hours of content.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>Java remains a dominant force in the programming world, offering unmatched versatility, scalability, and reliability. By mastering its core concepts, exploring advanced topics, and following best practices, you can build robust applications that meet modern demands. Whether you're developing enterprise solutions, mobile apps, or embedded systems, Java provides the tools and ecosystem to succeed.</p>
      <p>Keep learning, experimenting, and refining your skills to stay ahead in the ever-evolving world of Java development.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
