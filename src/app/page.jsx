"use client"
import React from "react";
import Home from "./Home/page";
import { usePathname } from "next/navigation";
import Head from "next/head";

const pageTitles = {
  "/": "Coding Quiz Hub - Online Coding Tests & Programming Challenges",
  "/html": "HTML Quiz - Test Your HTML Skills with Interactive Questions | HTML MCQs | Learn HTML with Practice Tests | HTML Basics to Advanced Quiz | HTML Coding Challenges | HTML Multiple Choice Questions | Web Development HTML Quiz | HTML Forms and Elements Quiz | SEO-friendly HTML Questions | Free HTML Practice Test | Best HTML Quiz Online | Beginner to Expert HTML Quiz | Interactive HTML Knowledge Test | Advanced HTML Concepts Quiz | HTML Interview Questions | Web Design HTML Quiz | Learn HTML5 with Interactive Tests | HTML and CSS Combined Quiz | HTML Syntax and Semantics Quiz | HTML Accessibility Quiz | HTML for Beginners | HTML Expert Level Questions | HTML and JavaScript Integration Quiz | HTML Responsive Design Quiz | Master HTML Elements and Attributes | HTML Meta Tags and SEO Quiz | HTML and Forms Handling Quiz | Interactive HTML Coding Exercises | HTML Image and Multimedia Quiz | HTML Tables and Layouts Quiz | HTML Best Practices Quiz | Free Online HTML Quiz | HTML Quizzes for Web Developers | Learn HTML with Real Examples | Advanced HTML and Web Components Quiz | HTML API and Web Storage Quiz | HTML Events and DOM Manipulation Quiz | HTML and CSS Grid Quiz | HTML and SEO Optimization Quiz | HTML Challenges with Answers | Build Your HTML Skills | Interactive HTML Learning Path | Complete HTML Quiz Series",
  "/css": "CSS Quiz - Master CSS with Interactive Tests | CSS MCQs | Learn CSS with Hands-on Challenges | CSS Basics to Advanced Quiz | CSS Multiple Choice Questions | Web Development CSS Quiz | CSS Grid and Flexbox Quiz | SEO-friendly CSS Questions | Free CSS Practice Test | Best CSS Quiz Online | Beginner to Expert CSS Quiz | Interactive CSS Knowledge Test | Advanced CSS Concepts Quiz | CSS Interview Questions | CSS Animations and Transitions Quiz | CSS Responsive Design Quiz | CSS Variables and Preprocessors Quiz | CSS Frameworks Quiz | CSS and JavaScript Integration Quiz | CSS Selectors and Specificity Quiz | CSS Typography and Design Quiz | Master CSS Layout Techniques | CSS Performance Optimization Quiz | CSS Media Queries and Adaptive Design Quiz | Interactive CSS Coding Exercises | CSS Best Practices Quiz | Free Online CSS Quiz | CSS Quizzes for Web Developers | Learn CSS with Real Examples | Advanced CSS and Web Components Quiz | CSS API and Web Storage Quiz | CSS Events and DOM Manipulation Quiz | CSS and SEO Optimization Quiz | CSS Challenges with Answers | Build Your CSS Skills | Interactive CSS Learning Path | Complete CSS Quiz Series",
  "/javascript": "JavaScript Quiz - Enhance Your JS Knowledge with MCQs | JavaScript Coding Challenges | JavaScript Basics to Advanced Quiz | JavaScript Multiple Choice Questions | Web Development JavaScript Quiz | JavaScript ES6+ Features Quiz | SEO-friendly JavaScript Questions | Free JavaScript Practice Test | Best JavaScript Quiz Online | Beginner to Expert JavaScript Quiz | Interactive JavaScript Knowledge Test | Advanced JavaScript Concepts Quiz | JavaScript Interview Questions | JavaScript Functions and Scope Quiz | JavaScript Arrays and Objects Quiz | JavaScript Asynchronous Programming Quiz | JavaScript Closures and Callbacks Quiz | JavaScript and Web APIs Quiz | JavaScript Event Handling Quiz | JavaScript Data Structures Quiz | JavaScript Performance Optimization Quiz | JavaScript Error Handling Quiz | JavaScript Debugging Quiz | JavaScript and Frameworks Quiz | JavaScript Frontend and Backend Development Quiz | JavaScript Algorithms and Data Structures Quiz | JavaScript Regular Expressions Quiz | JavaScript DOM Manipulation Quiz | JavaScript ES6 Modules and Imports Quiz | JavaScript Functional Programming Quiz | JavaScript Classes and OOP Quiz | JavaScript Promises and Async/Await Quiz | JavaScript Design Patterns Quiz | JavaScript Web Security Quiz | JavaScript Testing and Debugging Quiz | JavaScript and SEO Optimization Quiz | JavaScript Challenges with Answers | Build Your JavaScript Skills | Interactive JavaScript Learning Path | Complete JavaScript Quiz Series",
  "/react": "React.js Quiz - Learn React with Hands-On Challenges | React MCQs | React.js Basics to Advanced Quiz | React.js Multiple Choice Questions | React Hooks and Context API Quiz | SEO-friendly React Questions | Free React Practice Test | Best React.js Quiz Online | Beginner to Expert React Quiz | Interactive React Knowledge Test | Advanced React Concepts Quiz | React Interview Questions | React Components and Props Quiz | React State Management Quiz | React Router and Navigation Quiz | React Lifecycle Methods Quiz | React Performance Optimization Quiz | React and Redux Quiz | React Forms and Events Quiz | React Testing Library Quiz | React Design Patterns Quiz | React and Next.js Quiz | React and TypeScript Quiz | React and Firebase Quiz | React and GraphQL Quiz | React Suspense and Concurrent Mode Quiz | React Server Components Quiz | React and Web Performance Quiz | React Animation and Motion Quiz | React Accessibility and Best Practices Quiz | React Debugging and Error Handling Quiz | React Deployment and Hosting Quiz | React UI Frameworks Quiz | React and Headless CMS Quiz | React Static Site Generation Quiz | React and PWA Quiz | React and SEO Optimization Quiz | React Challenges with Answers | Build Your React Skills | Interactive React Learning Path | Complete React Quiz Series",
  "/nextjs": "Next.js Quiz - Improve Your Next.js Expertise | Next.js MCQs | Learn Next.js with Hands-on Challenges | Next.js Basics to Advanced Quiz | Next.js Multiple Choice Questions | Web Development with Next.js Quiz | Next.js Routing and API Quiz | SEO-friendly Next.js Questions | Free Next.js Practice Test | Best Next.js Quiz Online | Beginner to Expert Next.js Quiz | Interactive Next.js Knowledge Test | Advanced Next.js Concepts Quiz | Next.js Interview Questions | Next.js Static and Server-Side Rendering Quiz | Next.js Performance Optimization Quiz | Next.js and Headless CMS Quiz | Next.js and Authentication Quiz | Next.js and GraphQL Quiz | Next.js and Tailwind CSS Quiz | Next.js Deployment and Hosting Quiz | Next.js and PWA Quiz | Next.js and SEO Optimization Quiz | Next.js Challenges with Answers | Build Your Next.js Skills | Interactive Next.js Learning Path | Complete Next.js Quiz Series",
  "/nodejs": "Node.js Quiz - Master Backend Development with MCQs | Learn Node.js with Coding Challenges | Node.js Basics to Advanced Quiz | Node.js Multiple Choice Questions | Server-side JavaScript Quiz | Express.js and Node.js Quiz | Node.js API Development Quiz | SEO-friendly Node.js Questions | Free Node.js Practice Test | Best Node.js Quiz Online | Interactive Node.js Knowledge Test | Node.js Debugging and Error Handling Quiz | Node.js Authentication and Security Quiz | Node.js Performance Optimization Quiz | Node.js and Databases Quiz | Node.js Deployment and Hosting Quiz | Build Your Node.js Skills | Complete Node.js Quiz Series",
  "/python": "Python Quiz - Test Your Python Programming Skills | Python Coding Challenges | Python Basics to Advanced Quiz | Python Multiple Choice Questions | Data Science with Python Quiz | Django and Flask Quiz | Python Automation Quiz | Python and AI Quiz | Python Debugging and Error Handling Quiz | Python Performance Optimization Quiz | Python Algorithms and Data Structures Quiz | Build Your Python Skills | Complete Python Quiz Series",
  "/java": "Java Quiz - Java Programming Challenges | Java Basics to Advanced Quiz | Java MCQs | Java OOP Concepts Quiz | Java Web Development Quiz | Java Performance Optimization Quiz | Java Debugging and Error Handling Quiz | Java Frameworks Quiz | Build Your Java Skills | Complete Java Quiz Series",
  "/dotnet": ".NET Quiz - C# & ASP.NET Coding Tests | Learn .NET with MCQs | .NET Performance Optimization Quiz | Build Your .NET Skills | Complete .NET Quiz Series",
  "/mongodb": "MongoDB Quiz - NoSQL Database Challenges | Learn MongoDB with MCQs | MongoDB Performance Optimization Quiz | MongoDB Query Language Quiz | Build Your MongoDB Skills | Complete MongoDB Quiz Series",
  "/aptitude-test": "Aptitude Test - Logical & Mathematical Questions | Logical Reasoning Quiz | Quantitative Aptitude Quiz | Complete Aptitude Test Series",
  "/blog": "Coding Blog - Latest Articles on Web & Software Development"
};


const Page = () => {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Coding Quiz Hub - Best Coding Challenges";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Sharpen your coding skills with interactive quizzes on Coding Quiz Hub. Practice JavaScript, Python, Java, React, Next.js, and more!"
        />
        <meta
          name="keywords"
          content="coding quiz, programming quiz, JavaScript quiz, Python quiz, Java quiz, React quiz, Next.js quiz, aptitude test, coding challenges"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Coding Quiz Hub" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Enhance your coding skills with interactive quizzes on Coding Quiz Hub!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://codingquizhub.com${pathname}`} />
      </Head>
      <Home />
    </>
  );
};

export default Page;
