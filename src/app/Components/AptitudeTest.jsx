"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import { questions } from '../Data/AptitudeTest'; // Assuming questions are exported from this path
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

            <Link href="../HtmlQ" className="block mt-4 lg:inline-block px-4 py-2 mx-10 bg-slate-400 rounded text-white text-lg hover:underline">
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
    <h1 className="text-3xl font-bold">Mastering Aptitude Tests: A Comprehensive Guide</h1>
    <p className="text-lg text-gray-600">In-depth Insights into Aptitude Tests, Their Core Concepts, Types, and Preparation Strategies</p>
  </div>

  <article className="mt-8 p-4">
    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">What are Aptitude Tests?</h2>
        <p>
          Aptitude tests are standardized assessments designed to measure a person's ability to perform specific tasks and react to a range of different scenarios. They are commonly used in education, career selection, and recruitment processes to evaluate candidates' logical reasoning, problem-solving skills, and critical thinking abilities.
        </p>
        <p className="mt-4">
          These tests are an essential tool for employers and educational institutions to gauge the potential success of applicants in various roles or courses. Aptitude tests often include questions on numerical reasoning, verbal reasoning, logical thinking, and sometimes domain-specific knowledge.
        </p>
      </div>
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/7092360/pexels-photo-7092360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Aptitude Tests" className="w-full h-auto rounded-lg my-6 md:my-0" />
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Types of Aptitude Tests</h2>
      <p>Aptitude tests come in various forms, each designed to assess different skills:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Numerical Reasoning:</strong> Tests your ability to work with numbers, understand data, and perform calculations.</li>
        <li><strong>Verbal Reasoning:</strong> Measures your ability to understand, interpret, and logically evaluate written information.</li>
        <li><strong>Logical Reasoning:</strong> Assesses your capacity to identify patterns, sequences, and logical connections in abstract information.</li>
        <li><strong>Abstract Reasoning:</strong> Evaluates your ability to identify relationships and make logical conclusions based on non-verbal information.</li>
        <li><strong>Domain-Specific Tests:</strong> These tests are tailored to assess skills specific to a particular industry or job role, such as technical, mechanical, or software-related tasks.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Importance of Aptitude Tests</h2>
      <p>Aptitude tests play a critical role in various selection and placement processes:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Career Selection:</strong> Helps individuals choose a career path that aligns with their strengths and abilities.</li>
        <li><strong>Recruitment:</strong> Employers use these tests to identify the most capable candidates for a job, ensuring a good fit for the role.</li>
        <li><strong>Educational Placement:</strong> Assists academic institutions in placing students in courses or programs that match their skill levels.</li>
        <li><strong>Self-Assessment:</strong> Allows individuals to evaluate their own strengths and weaknesses, guiding personal and professional development.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Preparing for Aptitude Tests</h2>
      <p>Effective preparation is key to performing well in aptitude tests:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Practice Regularly:</strong> Familiarize yourself with the types of questions by practicing with sample tests and past papers.</li>
        <li><strong>Understand the Format:</strong> Learn about the structure of the test, the types of questions, and the time limits to manage your time effectively.</li>
        <li><strong>Focus on Weak Areas:</strong> Identify the areas where you struggle the most and dedicate extra time to improve them.</li>
        <li><strong>Use Study Resources:</strong> Utilize books, online courses, and tutorials that focus on aptitude test preparation.</li>
        <li><strong>Stay Calm and Focused:</strong> Develop strategies to manage stress and maintain concentration during the test.</li>
      </ul>
    </section>

    <section className="mb-6 flex flex-col md:flex-row items-center md:space-x-6">
      <div className="md:w-2/4">
        <img src="https://images.pexels.com/photos/7092590/pexels-photo-7092590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Preparing for Aptitude Tests" className="w-full h-auto rounded-lg my-6" />
      </div>
      <div className="md:w-2/4">
        <h2 className="text-xl font-semibold mb-2">Advanced Preparation Tips</h2>
        <p>For those aiming to excel, consider these advanced tips:</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Simulate Test Conditions:</strong> Practice under timed conditions to build your speed and accuracy.</li>
          <li><strong>Review Mistakes:</strong> After each practice test, review your mistakes and understand why you got them wrong.</li>
          <li><strong>Join Study Groups:</strong> Collaborate with others to share insights, tips, and resources.</li>
          <li><strong>Take Breaks:</strong> Balance your study schedule with regular breaks to avoid burnout.</li>
          <li><strong>Stay Informed:</strong> Keep updated with any changes in test formats or types of questions by following relevant forums and websites.</li>
        </ul>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Best Practices for Taking Aptitude Tests</h2>
      <p>To perform your best on the test day, consider these best practices:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Read Instructions Carefully:</strong> Always read the instructions thoroughly before starting the test.</li>
        <li><strong>Time Management:</strong> Keep track of time and ensure you're allocating it wisely across all sections.</li>
        <li><strong>Prioritize Questions:</strong> Tackle easier questions first to secure those points, then move on to more challenging ones.</li>
        <li><strong>Stay Focused:</strong> Maintain concentration throughout the test, avoiding distractions.</li>
        <li><strong>Stay Positive:</strong> Approach the test with a positive mindset, and don't let difficult questions affect your confidence.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Resources for Aptitude Test Preparation</h2>
      <p>Here are some resources to help you prepare for aptitude tests:</p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Books:</strong> Consider using books like "Quantitative Aptitude for Competitive Examinations" by R.S. Aggarwal and "Verbal Reasoning" by Arihant Publications.</li>
        <li><strong>Online Courses:</strong> Websites like Coursera, Udemy, and Khan Academy offer courses tailored to aptitude test preparation.</li>
        <li><strong>Mobile Apps:</strong> Apps like Magoosh and Prep4GMAT provide on-the-go practice questions and tutorials.</li>
        <li><strong>Practice Tests:</strong> Utilize free practice tests available on platforms like Testbook and IndiaBix to hone your skills.</li>
        <li><strong>Coaching Centers:</strong> If you prefer guided preparation, consider joining a coaching center that specializes in aptitude tests.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
      <p>Aptitude tests are a crucial component of various selection processes, and mastering them requires a blend of practice, preparation, and strategy. By understanding the test structure, honing your skills through regular practice, and following best practices, you can enhance your performance and increase your chances of success. Stay dedicated, keep learning, and approach the tests with confidence to achieve your goals.</p>
    </section>
  </article>
</div>


    </div>
  );
};

export default Quiz;
