"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import  questions  from '../Data/Cssquestions'; // Assuming questions are exported from this path
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

  <Link href="../JavascriptQ" className="mt-4 sm:px-7 px-4 py-2 bg-slate-400 rounded text-white text-lg hover:underline lg:ml-4 text-center">
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
    <h1 className="text-3xl font-bold">Understanding CSS: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into CSS, Its Syntax, Properties, and History</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What is CSS?</h2>
        <p>
          CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, in print, or on other media. By separating the content from its visual styling, CSS enables greater flexibility and control over the layout, design, and overall look and feel of web pages.
        </p>
        <p className="mt-4">
          CSS works hand-in-hand with HTML and JavaScript, where HTML structures the content, CSS styles it, and JavaScript adds interactivity. Understanding CSS is key to creating visually appealing and responsive web designs.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.unsplash.com/photo-1504164996022-09080787b6b3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="What is CSS?" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">About CSS</h2>
      <p>CSS is composed of rulesets that target HTML elements and apply specific styles. A CSS ruleset consists of a selector and a declaration block.</p>
      <p>Let's break down a basic CSS rule:</p>
      <pre className="bg-gray-100 p-4 rounded">
        <code>
          p {'{'}<br />
          &nbsp;&nbsp;color: blue;<br />
          &nbsp;&nbsp;font-size: 14px;<br />
          {'}'}
        </code>
      </pre>
     <p>
  - Selector (<code>p</code>): The selector targets the HTML element to be styled, in this case, all <code>&lt;p&gt;</code> (paragraph) elements.
</p>
<p>
  Declaration Block (<code>{`{ ... }`}</code>): The declaration block contains the style rules to be applied. Each rule consists of a property (e.g., <code>color</code>, <code>font-size</code>) and a value (e.g., <code>blue</code>, <code>14px</code>), separated by a colon.
</p>

    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Common CSS Properties</h2>
      <p>CSS properties define various aspects of styling, such as colors, fonts, and layout. Here are some commonly used CSS properties:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>color:</strong> Sets the color of the text. Example: `color: red;` will make the text red.</li>
        <li><strong>background-color:</strong> Specifies the background color of an element. Example: `background-color: yellow;` sets a yellow background.</li>
        <li><strong>font-family:</strong> Defines the font to be used for the text. Example: `font-family: Arial, sans-serif;` sets the font to Arial or a fallback sans-serif font.</li>
        <li><strong>font-size:</strong> Sets the size of the font. Example: `font-size: 16px;` sets the font size to 16 pixels.</li>
        <li><strong>margin:</strong> Controls the space outside an element. Example: `margin: 20px;` adds 20 pixels of space around the element.</li>
        <li><strong>padding:</strong> Controls the space inside an element, between the content and its border. Example: `padding: 10px;` adds 10 pixels of space inside the element.</li>
        <li><strong>border:</strong> Sets the border around an element. Example: `border: 1px solid black;` adds a 1-pixel solid black border.</li>
        <li><strong>display:</strong> Specifies how an element is displayed on the page (e.g., `block`, `inline`, `flex`). Example: `display: flex;` makes the element a flex container.</li>
        <li><strong>position:</strong> Controls the positioning of an element (e.g., `static`, `relative`, `absolute`, `fixed`). Example: `position: absolute;` positions the element relative to its nearest positioned ancestor.</li>
        <li><strong>width/height:</strong> Sets the width and height of an element. Example: `width: 100px;` sets the width to 100 pixels.</li>
        <li><strong>float:</strong> Allows an element to float to the left or right of its container. Example: `float: left;` makes the element float to the left.</li>
        <li><strong>overflow:</strong> Specifies what happens if content overflows an element's box (e.g., `visible`, `hidden`, `scroll`). Example: `overflow: scroll;` adds scrollbars if the content overflows.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">CSS Versions</h2>
      <p>CSS has evolved through various versions, each introducing new features and capabilities. Here's an overview:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>CSS1:</strong> Released in 1996, CSS1 introduced basic styling features such as fonts, colors, and text alignment.</li>
        <li><strong>CSS2:</strong> Released in 1998, CSS2 added support for media types, positioning, and more sophisticated selectors.</li>
        <li><strong>CSS2.1:</strong> A revision of CSS2, addressing issues and clarifying ambiguities.</li>
        <li><strong>CSS3:</strong> Introduced in the late 2000s, CSS3 brought modularization, allowing individual features to evolve independently. It added support for transitions, animations, flexbox, grid layout, and more.</li>
        <li><strong>CSS4:</strong> CSS4 is not an official version but a collection of CSS modules that are continuously evolving, introducing new features like custom properties (CSS variables) and advanced selectors.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className='md:w-2/4'>
        <img src="https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="History of CSS" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className='md:w-2/4'>
        <h2 className="text-xl font-semibold mb-2">History of CSS</h2>
        <p>CSS was developed by Håkon Wium Lie and Bert Bos in 1996 to separate content from presentation. The early versions were relatively simple, but CSS has evolved to become a critical tool in web design and development.</p>
        <p>With advancements in web technologies, CSS became more powerful, enabling developers to create complex layouts, animations, and responsive designs. Today, CSS is essential for building modern web interfaces.</p>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with CSS</h2>
      <p>To effectively work with CSS, consider these practical tips:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Organize Your CSS:</strong> Group related styles and comment your code to make it easier to maintain and understand. Example:
          <pre className="bg-gray-100 p-2 rounded">
            <code>
              /* Header Styles */<br />
              header {'{'}<br />
              &nbsp;&nbsp;background-color: #333;<br />
              &nbsp;&nbsp;color: white;<br />
              {'}'}<br />
              /* Footer Styles */<br />
              footer {'{'}<br />
              &nbsp;&nbsp;background-color: #f8f8f8;<br />
              &nbsp;&nbsp;color: #333;<br />
              {'}'}
            </code>
          </pre>
        </li>
        <li><strong>Use a CSS Preprocessor:</strong> Tools like SASS or LESS allow you to use variables, nesting, and functions, making your CSS more manageable.</li>
        <li><strong>Leverage Flexbox and Grid:</strong> Modern CSS layout techniques like Flexbox and Grid enable you to create complex layouts with ease.</li>
        <li><strong>Keep It Responsive:</strong> Use media queries to ensure your design looks good on all devices. Example:
          <pre className="bg-gray-100 p-2 rounded">
            <code>
              @media (max-width: 768px) {'{'}<br />
              &nbsp;&nbsp;body {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px;<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'}
            </code>
          </pre>
        </li>
        <li><strong>Test Across Browsers:</strong> Ensure your CSS works consistently across different browsers and devices.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>CSS is an indispensable tool for web developers. By mastering CSS, you can create visually appealing, responsive, and user-friendly websites that stand out. Whether you're a beginner or an experienced developer, there's always something new to learn in the world of CSS.</p>
    </section>
  </article>
</div>



    </div>
  );
};

export default Quiz;
