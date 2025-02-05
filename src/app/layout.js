import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO
export const metadata = {
  title: "CodingQuizHub - Learn Coding with Interactive Quizzes | Programming Challenges, Coding Practices, Web Development, Frontend & Backend Technologies, Data Structures, Algorithms, Software Engineering, Full-Stack Development, Backend Optimization, UI/UX Principles, Debugging Techniques, Performance Enhancement,  API Integrations,   Competitive Programming, Code Optimization, Database Management, Server-Side Rendering, Static Site Generation, RESTful API Development,Progressive Web Apps",
  description: "Master coding through interactive quizzes on CodingQuizHub. Learn HTML, CSS, JavaScript, React, Python, Java, Dotnet, MongoDB, Next.js, Node.js, PHP, MySQL, Angular, and Aptitude Test.",
  keywords: "HTML, CSS, JavaScript, React.js, Next.js, Node.js, PHP, MySQL, Angular, Python, Java, Dotnet, MongoDB, Aptitude Test, Coding Practices, Programming Challenges, Interactive Quizzes, Web Development, Frontend Development, Backend Development, Full-Stack Development, Data Structures, Algorithms, Problem-Solving, Technical Interviews, Software Development, Web Applications, App Development, Code Optimization, Debugging, Performance Tuning, Clean Code, UI/UX Design, Responsive Web Design, Coding Productivity Tools, Developer Roadmaps, Continuous Learning, Coding for Beginners, Advanced Coding, Coding Exercises, Coding Questions, Interview Preparation, Coding Tips, Programming Skills, Software Engineering, Software Development Life Cycle, API Development, Database Management, Code Refactoring, Testing & Debugging, JavaScript Frameworks, Coding Bootcamps, Online Coding Courses, Web Technologies, Software Architecture, Coding Techniques, Programming Roadmaps, Code Quality, Project-Based Learning, IT Career Growth, Programming Best Practices, Cloud Computing Basics, Programming Knowledge, Coding Knowledge, Digital Skills, Learning to Code, Software Development Tools, Coding Enthusiasts, Coding Quiz Platform, Programming Challenges, Aptitude Preparation, Coding Competitions, Problem-Solving Strategies, Full-Stack Applications, State Management, Object-Oriented Programming, Functional Programming, TypeScript Basics, Server-Side Rendering, Static Site Generation, Database Optimization, Web Security, Authentication & Authorization, GraphQL Queries, RESTful APIs, JSON Handling, WebSockets, Event-Driven Programming, Coding Patterns, Mobile App Development, Progressive Web Apps, Software Testing, Debugging Techniques, Deployment Strategies, Version Control, DevOps, CI/CD Pipelines, Agile Methodologies, IT Certifications, Freelance Coding, Open Source Contributions, Game Development, Blockchain Development, Ethical Hacking, Data Science Basics, Machine Learning Fundamentals, and AI in Programming.",
  author: "CodingQuizHub",
  openGraph: {
    title: "CodingQuizHub - Learn Coding with Interactive Quizzes & Challenges",
    description: "Master coding through interactive quizzes on CodingQuizHub. Learn HTML, CSS, JavaScript, React, Python, Java, Dotnet, MongoDB, and more.",
    url: "https://www.codingquizhub.com",
    type: "website",
    images: [
      {
        url: "https://www.codingquizhub.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodingQuizHub - Learn Coding with Interactive Quizzes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodingQuizHub - Learn Coding with Interactive Quizzes & Challenges",
    description: "Master coding through interactive quizzes on CodingQuizHub. Learn HTML, CSS, JavaScript, React, Python, Java, and more.",
    images: ["https://www.codingquizhub.com/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.codingquizhub.com" />

        {/* Google Adsense */}
        <script type='text/javascript' src='//pl25748443.profitablecpmrate.com/98/09/fc/9809fc1c07e49792d271d009f521c87c.js'></script>
      <script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HZXCR9YV9R');
        `}
      </script>
      </Head>
      <body className={inter.className}>{children}
      <script type='text/javascript' src='//pl25747768.profitablecpmrate.com/fe/b2/3c/feb23c23606b1f21baabeb52d82aa42f.js'></script>
      
      <script async="async" data-cfasync="false" src="//pl25748529.profitablecpmrate.com/973da03438430a67f8d94d103c0bff91/invoke.js"></script>
      <div id="container-973da03438430a67f8d94d103c0bff91"></div>
      </body>
    </html>
  );
}