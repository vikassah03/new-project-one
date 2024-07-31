export const questions = [
  {
    question: "What is the primary purpose of Next.js's `getStaticProps`?",
    options: [
      "To fetch data at runtime",
      "To generate static pages at build time",
      "To manage state in components",
      "To handle server-side logic"
    ],
    answer: 1
  },
  {
    question: "How do you enable AMP (Accelerated Mobile Pages) in a Next.js application?",
    options: [
      "By adding a `amp` property to `next.config.js`",
      "By using the `amp` component from 'next/amp'",
      "By configuring AMP in `_document.js`",
      "AMP is not supported in Next.js"
    ],
    answer: 0
  },
  {
    question: "Which hook is used to manage state in functional components in Next.js?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: 0
  },
  {
    question: "How do you handle authentication in Next.js?",
    options: [
      "Using the `getServerSideProps` method",
      "Using middleware in `next.config.js`",
      "By implementing custom hooks",
      "By creating API routes for login and token management"
    ],
    answer: 3
  },
  {
    question: "What does `getServerSideProps` do in Next.js?",
    options: [
      "Fetches data at build time",
      "Fetches data on the server at request time",
      "Handles static content generation",
      "Manages client-side state"
    ],
    answer: 1
  },
  {
    question: "How do you configure custom webpack settings in Next.js?",
    options: [
      "By editing the `webpack.config.js` file",
      "By adding a `webpack` property in `next.config.js`",
      "By using the `next-webpack` package",
      "Custom webpack settings are not supported"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of `getStaticPaths` in Next.js?",
    options: [
      "To fetch data at runtime",
      "To specify dynamic routes for static generation",
      "To define API routes",
      "To manage global state"
    ],
    answer: 1
  },
  {
    question: "How can you optimize performance in a Next.js application?",
    options: [
      "By using server-side rendering",
      "By implementing static site generation",
      "By using image optimization with the `Image` component",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of the `next/image` component?",
    options: [
      "To handle responsive images",
      "To add animations to images",
      "To fetch images from a CDN",
      "To create custom image galleries"
    ],
    answer: 0
  },
  {
    question: "How do you use environment variables in Next.js?",
    options: [
      "By defining them in the `.env.local` file",
      "By setting them in `next.config.js`",
      "By passing them as props",
      "Environment variables are not supported"
    ],
    answer: 0
  },
  {
    question: "What is `getInitialProps` used for?",
    options: [
      "To fetch data at build time",
      "To fetch data before rendering a page",
      "To handle client-side rendering",
      "To manage static content"
    ],
    answer: 1
  },
  {
    question: "How do you implement internationalization (i18n) in Next.js?",
    options: [
      "By using the `next-i18next` library",
      "By configuring i18n in `next.config.js`",
      "By creating custom localization components",
      "Internationalization is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the role of the `next/dynamic` component?",
    options: [
      "To dynamically import modules or components",
      "To handle dynamic routing",
      "To manage application state",
      "To create dynamic API routes"
    ],
    answer: 0
  },
  {
    question: "How can you manage authentication sessions in Next.js?",
    options: [
      "Using cookies and server-side APIs",
      "Using local storage",
      "By creating session management components",
      "Authentication sessions are not supported"
    ],
    answer: 0
  },
  {
    question: "What is the difference between `getStaticProps` and `getServerSideProps`?",
    options: [
      "`getStaticProps` fetches data at build time, while `getServerSideProps` fetches data at request time",
      "`getStaticProps` handles client-side data, while `getServerSideProps` handles server-side data",
      "Both methods fetch data at runtime",
      "`getStaticProps` is used for static content, while `getServerSideProps` is for dynamic content"
    ],
    answer: 0
  },
  {
    question: "How do you use TypeScript in a Next.js project?",
    options: [
      "Install TypeScript and create a `tsconfig.json` file",
      "Rename files with `.ts` and `.tsx` extensions",
      "Both of the above",
      "TypeScript is not supported"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of `_app.js` in Next.js?",
    options: [
      "To customize the default App component",
      "To manage global styles",
      "To define routing logic",
      "To handle server-side rendering"
    ],
    answer: 0
  },
  {
    question: "How do you handle client-side navigation in Next.js?",
    options: [
      "Using the `Link` component",
      "By using server-side redirects",
      "Using the `navigate` function",
      "Client-side navigation is not supported"
    ],
    answer: 0
  },
  {
    question: "How do you add custom error handling in Next.js?",
    options: [
      "By creating a `pages/_error.js` file",
      "By using `try-catch` blocks",
      "By configuring error boundaries",
      "Custom error handling is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of `next.config.js`?",
    options: [
      "To configure Next.js settings and options",
      "To define API routes",
      "To manage global state",
      "To add custom styles"
    ],
    answer: 0
  },
  {
    question: "How do you create a custom document in Next.js?",
    options: [
      "By creating a `_document.js` file",
      "By editing `index.js`",
      "By adding a custom `_app.js` file",
      "Creating a custom document is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the role of `getStaticPaths` in dynamic routing?",
    options: [
      "To define which paths should be statically generated",
      "To manage API routes",
      "To handle client-side navigation",
      "To fetch data at runtime"
    ],
    answer: 0
  },
  {
    question: "How do you enable custom server logic in Next.js?",
    options: [
      "By creating a `server.js` file",
      "By modifying `next.config.js`",
      "By using serverless functions",
      "Custom server logic is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the difference between static generation and server-side rendering?",
    options: [
      "Static generation generates pages at build time, server-side rendering generates pages at request time",
      "Static generation is used for client-side data, server-side rendering is used for static data",
      "Both methods generate pages at runtime",
      "Static generation is used for dynamic content, server-side rendering is used for static content"
    ],
    answer: 0
  },
  {
    question: "How do you handle redirects in Next.js?",
    options: [
      "By using the `redirect` property in `next.config.js`",
      "By using the `Redirect` component",
      "By creating server-side logic",
      "Redirects are not supported"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the `next/image` component?",
    options: [
      "To handle responsive images",
      "To optimize and lazy-load images",
      "To create image galleries",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "How do you add CSS styles in Next.js?",
    options: [
      "By importing CSS files in `pages/_app.js`",
      "By using inline styles",
      "By adding styles directly to components",
      "CSS styles are not supported"
    ],
    answer: 0
  },
  {
    question: "How do you manage SEO in a Next.js application?",
    options: [
      "By using the `next/head` component",
      "By adding meta tags in `index.html`",
      "By configuring SEO settings in `next.config.js`",
      "SEO management is not supported"
    ],
    answer: 0
  },
  {
    question: "How can you use environment variables in Next.js?",
    options: [
      "By creating a `.env.local` file",
      "By adding them to `next.config.js`",
      "By using `process.env` in your components",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you create a custom API route in Next.js?",
    options: [
      "By creating a file in the `pages/api` directory",
      "By adding routes in `next.config.js`",
      "By creating a custom server",
      "API routes are not supported"
    ],
    answer: 0
  },
  {
    question: "What does `next export` do?",
    options: [
      "Generates a static HTML export of the application",
      "Creates a production build of the application",
      "Deploys the application to Vercel",
      "Exports the project as a library"
    ],
    answer: 0
  },
  {
    question: "How do you handle form submissions in Next.js?",
    options: [
      "By using serverless functions or API routes",
      "By using the `fetch` API",
      "By handling form data in client-side components",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you manage session state in Next.js?",
    options: [
      "By using cookies and server-side APIs",
      "By using local storage",
      "By implementing custom session management components",
      "Session management is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the `next/head` component?",
    options: [
      "To modify the `<head>` section of the HTML document",
      "To manage routing",
      "To handle image optimization",
      "To create client-side transitions"
    ],
    answer: 0
  },
  {
    question: "How do you implement server-side logic in Next.js?",
    options: [
      "By using `getServerSideProps`",
      "By creating API routes",
      "By using custom server logic",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is the difference between `getStaticProps` and `getServerSideProps`?",
    options: [
      "`getStaticProps` fetches data at build time; `getServerSideProps` fetches data at request time",
      "`getStaticProps` fetches data at request time; `getServerSideProps` fetches data at build time",
      "Both methods fetch data at runtime",
      "There is no difference between the two"
    ],
    answer: 0
  },
  {
    question: "How can you use TypeScript with Next.js?",
    options: [
      "By installing TypeScript and creating a `tsconfig.json` file",
      "By renaming `.js` files to `.ts`",
      "By adding TypeScript configuration in `next.config.js`",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "What is the role of `next.config.js`?",
    options: [
      "To configure Next.js settings and options",
      "To manage global state",
      "To define custom API routes",
      "To handle client-side routing"
    ],
    answer: 0
  },
  {
    question: "How do you create a custom `_document.js` in Next.js?",
    options: [
      "By creating a file in the `pages` directory with the name `_document.js`",
      "By creating a file in the `public` directory",
      "By modifying `index.js`",
      "Custom `_document.js` is not supported"
    ],
    answer: 0
  },
  {
    question: "How do you use the `next/dynamic` component?",
    options: [
      "To dynamically import modules or components",
      "To handle client-side navigation",
      "To create dynamic routes",
      "To manage global state"
    ],
    answer: 0
  },
  {
    question: "What is the primary purpose of the `next/image` component?",
    options: [
      "To optimize and lazy-load images",
      "To handle responsive images",
      "To create image galleries",
      "To manage global styles"
    ],
    answer: 0
  },
  {
    question: "How do you handle redirects in Next.js?",
    options: [
      "By using the `redirect` property in `next.config.js`",
      "By using the `Redirect` component",
      "By using server-side logic",
      "Redirects are not supported"
    ],
    answer: 0
  },
  {
    question: "What does `getServerSideProps` do in Next.js?",
    options: [
      "Fetches data at request time",
      "Fetches data at build time",
      "Handles static content generation",
      "Manages client-side state"
    ],
    answer: 0
  },
  {
    question: "How do you configure TypeScript in a Next.js project?",
    options: [
      "Install TypeScript and create a `tsconfig.json` file",
      "Rename files with `.ts` and `.tsx` extensions",
      "Both A and B",
      "TypeScript is not supported"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of `_app.js`?",
    options: [
      "To customize the default App component",
      "To manage global styles",
      "To handle server-side rendering",
      "To manage API routes"
    ],
    answer: 0
  },
  {
    question: "How do you manage SEO in a Next.js application?",
    options: [
      "By using the `next/head` component",
      "By adding meta tags in `index.html`",
      "By configuring SEO settings in `next.config.js`",
      "SEO management is not supported"
    ],
    answer: 0
  },
  {
    question: "How do you create API routes in Next.js?",
    options: [
      "By creating files in the `pages/api` directory",
      "By defining routes in `next.config.js`",
      "By creating custom server logic",
      "API routes are not supported"
    ],
    answer: 0
  },
  {
    question: "What is the primary purpose of the `next/head` component?",
    options: [
      "To modify the `<head>` section of the HTML document",
      "To manage routing",
      "To handle image optimization",
      "To create client-side transitions"
    ],
    answer: 0
  },
  {
    question: "How do you enable custom server logic in Next.js?",
    options: [
      "By creating a `server.js` file",
      "By modifying `next.config.js`",
      "By using serverless functions",
      "Custom server logic is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the difference between `getStaticProps` and `getServerSideProps`?",
    options: [
      "`getStaticProps` fetches data at build time; `getServerSideProps` fetches data at request time",
      "`getStaticProps` fetches data at request time; `getServerSideProps` fetches data at build time",
      "Both methods fetch data at runtime",
      "There is no difference between the two"
    ],
    answer: 0
  },
  {
    question: "How do you handle form submissions in Next.js?",
    options: [
      "By using serverless functions or API routes",
      "By using the `fetch` API",
      "By handling form data in client-side components",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you manage session state in Next.js?",
    options: [
      "By using cookies and server-side APIs",
      "By using local storage",
      "By implementing custom session management components",
      "Session management is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the `next/image` component?",
    options: [
      "To handle responsive images",
      "To optimize and lazy-load images",
      "To create image galleries",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "How do you add global styles in Next.js?",
    options: [
      "By importing CSS files in `pages/_app.js`",
      "By using inline styles",
      "By adding styles directly to components",
      "Global styles are not supported"
    ],
    answer: 0
  },
  {
    question: "How do you handle redirects in Next.js?",
    options: [
      "By using the `redirect` property in `next.config.js`",
      "By using the `Redirect` component",
      "By creating server-side logic",
      "Redirects are not supported"
    ],
    answer: 0
  },
  {
    question: "How do you add custom server logic in Next.js?",
    options: [
      "By creating a `server.js` file",
      "By modifying `next.config.js`",
      "By using serverless functions",
      "Custom server logic is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the role of `next/dynamic`?",
    options: [
      "To dynamically import modules or components",
      "To handle client-side navigation",
      "To create dynamic routes",
      "To manage global state"
    ],
    answer: 0
  },
  {
    question: "What does the `getStaticPaths` method do?",
    options: [
      "Specifies dynamic routes to be generated at build time",
      "Fetches data at request time",
      "Creates static files for all pages",
      "Handles client-side routing"
    ],
    answer: 0
  },
  {
    question: "How do you use the `getStaticProps` method?",
    options: [
      "To fetch data at build time",
      "To fetch data at request time",
      "To handle client-side rendering",
      "To manage global state"
    ],
    answer: 0
  },
  {
    question: "What is the role of `_document.js`?",
    options: [
      "To customize the HTML document structure",
      "To handle API routes",
      "To manage global styles",
      "To configure server-side logic"
    ],
    answer: 0
  },
  {
    question: "How do you handle image optimization in Next.js?",
    options: [
      "By using the `next/image` component",
      "By manually optimizing images",
      "By using third-party libraries",
      "Image optimization is not supported"
    ],
    answer: 0
  },
  {
    question: "What is the primary purpose of `getServerSideProps`?",
    options: [
      "To fetch data at request time",
      "To fetch data at build time",
      "To manage static content generation",
      "To handle client-side state"
    ],
    answer: 0
  },
  {
    question: "How do you create a custom `_app.js` in Next.js?",
    options: [
      "By creating a file in the `pages` directory with the name `_app.js`",
      "By modifying `index.js`",
      "By adding a file in the `public` directory",
      "Custom `_app.js` is not supported"
    ],
    answer: 0
  },
  {
    question: "How do you enable TypeScript in a Next.js project?",
    options: [
      "By installing TypeScript and creating a `tsconfig.json` file",
      "By renaming JavaScript files to TypeScript files",
      "By adding TypeScript configuration in `next.config.js`",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "What does `next export` do?",
    options: [
      "Generates a static HTML export of the application",
      "Creates a production build of the application",
      "Deploys the application to Vercel",
      "Exports the project as a library"
    ],
    answer: 0
  },
  {
    question: "How do you manage SEO in a Next.js application?",
    options: [
      "By using the `next/head` component",
      "By adding meta tags in `index.html`",
      "By configuring SEO settings in `next.config.js`",
      "SEO management is not supported"
    ],
    answer: 0
  },
]

// export default Questions;
