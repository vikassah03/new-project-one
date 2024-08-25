"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/questions'; // Assuming questions are exported from this path
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

            <Link href="../CssQ" className="block mt-4 lg:inline-block px-4 py-2 mx-10 bg-slate-400 rounded text-white text-lg hover:underline">
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
          <h1 className="text-3xl font-bold">Understanding HTML: A Comprehensive Guide</h1>
          <p className="text-lg text-gray-600">In-depth Insights into HTML, Its Tags, Versions, and History</p>
        </div>

        <article className="mt-8 p-4">
          <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold mb-2">What is HTML?</h2>
              <p>
                HTML, or HyperText Markup Language, is the standard markup language used to create and design web pages and web applications. It provides the basic structure for web documents by defining the elements on a page and how they are displayed. HTML is crucial for web development as it enables the creation of text, images, links, and other content on the web.
              </p>
              <p className="mt-4">
                HTML is often paired with CSS (Cascading Style Sheets) and JavaScript. While HTML provides the structure, CSS handles the visual presentation and layout, and JavaScript adds interactivity to web pages.
              </p>
            </div>
            <div className="md:w-2/4">
              <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="What is HTML?" className="w-full h-auto rounded-lg my-6 md:my-0" />
            </div>
          </section>


          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About HTML</h2>
            <p>HTML is a language composed of elements represented by tags. These tags are enclosed in angle brackets and can have attributes that provide additional information about the element. HTML is designed to be both simple to learn and powerful in its capabilities. With a robust set of elements, HTML allows developers to structure documents effectively, ensuring accessibility and usability across different platforms and devices.</p>
            <p>The language is continuously evolving, with updates that include new elements, attributes, and APIs to meet the demands of modern web development. HTML5, the latest version, introduces semantic elements that enhance the meaning of content, making web documents more readable and accessible.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">All HTML Tags and Their Details</h2>
            <p>HTML tags are used to define the structure and content of a web page. Each tag serves a specific purpose and can be combined to create complex layouts. Here is an expanded overview of some common and advanced HTML tags:</p>
            <ul className="list-disc list-inside pl-4">
              <li><strong>&lt;html&gt;:</strong> The root element that wraps all other HTML elements in a document.</li>
              <li><strong>&lt;head&gt;:</strong> Contains meta-information about the document, including links to external resources such as stylesheets and scripts.</li>
              <li><strong>&lt;meta&gt;:</strong> Provides metadata about the HTML document, such as character encoding and viewport settings.</li>
              <li><strong>&lt;link&gt;:</strong> Used to link external resources like stylesheets to the document.</li>
              <li><strong>&lt;script&gt;:</strong> Embeds or links to JavaScript code that adds interactivity to web pages.</li>
              <li><strong>&lt;body&gt;:</strong> Contains the content that is visible on the web page, including text, images, and multimedia.</li>
              <li><strong>&lt;section&gt;:</strong> Defines a section of content, typically used to group related elements and improve document structure.</li>
              <li><strong>&lt;article&gt;:</strong> Represents a self-contained piece of content that could be distributed independently, such as a blog post or news article.</li>
              <li><strong>&lt;header&gt;:</strong> Defines the header for a section or document, often containing headings and navigation links.</li>
              <li><strong>&lt;footer&gt;:</strong> Contains footer content for a section or document, such as copyright information and contact details.</li>
              <li><strong>&lt;aside&gt;:</strong> Represents content that is tangentially related to the content around it, like sidebars or pull quotes.</li>
              <li><strong>&lt;figure&gt;:</strong> Used to group media elements like images and their captions together.</li>
              <li><strong>&lt;figcaption&gt;:</strong> Provides a caption or description for a &lt;figure&gt; element.</li>
              <li><strong>&lt;mark&gt;:</strong> Highlights parts of the text that are of special interest, often used for search results or important terms.</li>
              <li><strong>&lt;details&gt;:</strong> Creates a disclosure widget from which the user can obtain additional information or controls.</li>
              <li><strong>&lt;summary&gt;:</strong> Represents a summary or heading for the &lt;details&gt; element, which can be toggled to show or hide additional content.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">HTML Versions</h2>
            <p>HTML has undergone several revisions since its inception, each adding new features and improving upon previous versions. Here is a detailed overview of HTML versions:</p>
            <ul className="list-disc list-inside pl-4">
              <li><strong>HTML 1.0:</strong> The initial version released in 1991, which provided basic tags for creating and formatting text documents on the web.</li>
              <li><strong>HTML 2.0:</strong> Released in 1995, it introduced new elements like forms and tables, which allowed for more interactive and structured content.</li>
              <li><strong>HTML 3.2:</strong> Released in 1997, it added support for scripting languages and style sheets, enhancing the interactivity and appearance of web pages.</li>
              <li><strong>HTML 4.01:</strong> Released in 1999, this version introduced significant improvements in accessibility and internationalization. It included new elements for multimedia and scripting.</li>
              <li><strong>HTML5:</strong> The latest version, officially released in 2014, brought major advancements such as semantic elements (e.g., &lt;article&gt;, &lt;section&gt;), native support for audio and video, and APIs for offline storage and local data management. HTML5 aims to provide a more robust and integrated approach to modern web development.</li>
            </ul>
          </section>

          <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
          <div className='md:w-2/4'>
            <img src="https://images.pexels.com/photos/5257276/pexels-photo-5257276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="History of HTML" className="w-full h-auto rounded-lg my-6" />
            </div>
            <div className='md:w-2/4'>

            <h2 className="text-xl font-semibold mb-2">History of HTML</h2>
            <p>The history of HTML reflects the evolution of the web and web development practices. Tim Berners-Lee, a physicist at CERN, proposed HTML in 1989 as a way to share documents over the web. The first specification was published in 1991, marking the beginning of the World Wide Web era.</p>
            <p>Throughout the 1990s and early 2000s, HTML continued to evolve with new specifications and features. The rise of web standards and accessibility led to the development of HTML 4.01 and its focus on semantic structure. The introduction of HTML5 marked a significant shift towards a more integrated and feature-rich approach to web development, addressing the needs of modern web applications and multimedia content.</p>
            <p>As web technologies continue to advance, HTML remains a foundational technology that adapts to new developments and trends in web design and development.</p>
            </div>
         
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Practical Tips for Working with HTML</h2>
            <p>When working with HTML, following best practices can help ensure your web pages are well-structured, accessible, and performant. Here are some practical tips:</p>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Use Semantic HTML:</strong> Leverage semantic elements like &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, and &lt;section&gt; to enhance the readability and accessibility of your web pages.</li>
              <li><strong>Validate Your HTML:</strong> Use HTML validators to check for syntax errors and ensure your code adheres to web standards. This can help prevent rendering issues and improve compatibility across different browsers.</li>
              <li><strong>Optimize for Accessibility:</strong> Ensure your web pages are accessible to all users, including those with disabilities. Use descriptive alt text for images, ensure proper contrast, and implement keyboard navigation.</li>
              <li><strong>Keep Your HTML Clean:</strong> Write clean, well-organized HTML code to make it easier to maintain and debug. Use comments and consistent formatting to improve code readability.</li>
              <li><strong>Test Across Browsers:</strong> Test your HTML in multiple browsers and devices to ensure consistent behavior and appearance. Different browsers may render HTML differently, so testing helps identify and resolve compatibility issues.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Resources for Learning HTML</h2>
            <p>There are many resources available for learning HTML and improving your web development skills. Here are some recommended resources:</p>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Mozilla Developer Network (MDN):</strong> A comprehensive resource for HTML documentation, tutorials, and best practices.</li>
              <li><strong>W3Schools:</strong> An online tutorial website that offers interactive lessons and examples for HTML and other web technologies.</li>
              <li><strong>Codecademy:</strong> An online learning platform that provides interactive courses on HTML, CSS, and other programming languages.</li>
              <li><strong>freeCodeCamp:</strong> A free online coding bootcamp that includes HTML and web development tutorials as part of its curriculum.</li>
              <li><strong>HTML5 Rocks:</strong> A resource for learning about HTML5 features, APIs, and best practices, though it is now archived.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p>HTML is a fundamental technology in web development, providing the essential structure and semantics for web content. Its evolution over the years reflects the growing complexity and capabilities of the web. By mastering HTML and understanding its versions, tags, and best practices, developers can create well-structured, accessible, and engaging web experiences. Whether you are a beginner or an experienced developer, continuous learning and staying updated with HTML advancements will help you build better web applications and contribute to the ever-evolving web landscape.</p>
          </section>
        </article>
      </div>


    </div>
  );
};

export default Quiz;
