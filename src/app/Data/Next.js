export const questions = [
    {
      question: "What is Next.js?",
      options: [
        "A front-end framework for building mobile applications",
        "A back-end framework for server-side programming",
        "A React framework for server-rendered applications",
        "A database management system"
      ],
      answer: 2
    },
    {
      question: "How do you create a new Next.js application?",
      options: [
        "npx create-next-app my-app",
        "npx create-react-app my-app",
        "npm install next my-app",
        "npx create-node-app my-app"
      ],
      answer: 0
    },
    {
      question: "Which file is the entry point of a Next.js application?",
      options: [
        "index.html",
        "index.js",
        "_app.js",
        "index.ts"
      ],
      answer: 1
    },
    {
      question: "What is the default directory for Next.js pages?",
      options: [
        "/src",
        "/components",
        "/pages",
        "/public"
      ],
      answer: 2
    },
    {
      question: "How do you define a static route in Next.js?",
      options: [
        "Create a file in the /pages directory",
        "Create a file in the /static directory",
        "Create a file in the /routes directory",
        "Create a file in the /api directory"
      ],
      answer: 0
    },
    {
      question: "Which of the following methods can be used for server-side rendering in Next.js?",
      options: [
        "getStaticProps",
        "getServerSideProps",
        "getInitialProps",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "How do you link between pages in Next.js?",
      options: [
        "Using the <a> tag",
        "Using the <Link> component from 'next/link'",
        "Using the <nav> tag",
        "Using the <navigate> component"
      ],
      answer: 1
    },
    {
      question: "What does 'getStaticProps' do in Next.js?",
      options: [
        "Fetches data at build time",
        "Fetches data at runtime on the server",
        "Fetches data on the client side",
        "Fetches data from a static file"
      ],
      answer: 0
    },
    {
      question: "How do you create dynamic routes in Next.js?",
      options: [
        "By using the [param].js syntax in the /pages directory",
        "By using the {param}.js syntax in the /pages directory",
        "By using the :param.js syntax in the /pages directory",
        "By using the <param>.js syntax in the /pages directory"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of 'next/head' in Next.js?",
      options: [
        "To add elements to the <body> tag",
        "To manage routing in the application",
        "To modify the <head> section of the HTML document",
        "To add CSS styles to the application"
      ],
      answer: 2
    },
    {
      question: "What is the use of the '_app.js' file in Next.js?",
      options: [
        "To customize the HTML structure of the application",
        "To add global CSS styles and state",
        "To manage API routes",
        "To define server-side logic"
      ],
      answer: 1
    },
    {
      question: "Which of the following methods is used for static generation with dynamic data in Next.js?",
      options: [
        "getInitialProps",
        "getStaticProps",
        "getServerSideProps",
        "getStaticPaths"
      ],
      answer: 3
    },
    {
      question: "How do you add CSS modules in a Next.js application?",
      options: [
        "Import the CSS file directly into the component",
        "Use the <style> tag inside the component",
        "Import the CSS module file and use styles as object properties",
        "Link the CSS file in the <head> section"
      ],
      answer: 2
    },
    {
      question: "What is the purpose of the 'next/link' component?",
      options: [
        "To handle API requests",
        "To manage application state",
        "To create client-side transitions between pages",
        "To style components"
      ],
      answer: 3
    },
    {
      question: "How can you add global styles in a Next.js application?",
      options: [
        "Using the '_app.js' file",
        "Using the '_document.js' file",
        "Using the 'index.js' file",
        "Using the 'styles.css' file"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of 'next.config.js'?",
      options: [
        "To manage global state",
        "To configure Next.js options and settings",
        "To define component styles",
        "To create API routes"
      ],
      answer: 1
    },
    {
      question: "Which method is used for incremental static regeneration in Next.js?",
      options: [
        "getStaticProps",
        "getServerSideProps",
        "getInitialProps",
        "revalidate"
      ],
      answer: 0
    },
    {
      question: "How do you optimize images in a Next.js application?",
      options: [
        "Using the <img> tag",
        "Using the <Image> component from 'next/image'",
        "Using the <picture> tag",
        "Using CSS background images"
      ],
      answer: 1
    },
    {
      question: "What is the default port for running a Next.js application?",
      options: [
        "3000",
        "8000",
        "5000",
        "8080"
      ],
      answer: 0
    },
    {
      question: "How can you enable TypeScript in a Next.js project?",
      options: [
        "Install TypeScript and add a tsconfig.json file",
        "Rename JavaScript files to TypeScript files",
        "Both of the above",
        "TypeScript is not supported in Next.js"
      ],
      answer: 2
    },
    {
      question: "What does the 'next export' command do?",
      options: [
        "Exports the project as a library",
        "Creates a production build of the application",
        "Generates a static HTML export of the application",
        "Deploys the application to Vercel"
      ],
      answer: 2
    },
    {
      question: "How do you handle redirects in Next.js?",
      options: [
        "Using the 'redirect' property in 'next.config.js'",
        "Using the 'Redirect' component",
        "Using the 'Link' component",
        "Using the 'Router' component"
      ],
      answer: 0
    },
    {
      question: "Which of the following is true about Next.js API routes?",
      options: [
        "They are stored in the /pages directory",
        "They are stored in the /api directory within /pages",
        "They are stored in the /routes directory",
        "They are stored in the /backend directory"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of 'next/head'?",
      options: [
        "To handle image optimization",
        "To modify the <head> section of the HTML document",
        "To manage routing",
        "To add global styles"
      ],
      answer: 1
    },
    {
      question: "How do you deploy a Next.js application to Vercel?",
      options: [
        "Using the 'vercel deploy' command",
        "Pushing the code to a GitHub repository connected to Vercel",
        "Both of the above",
        "Vercel does not support Next.js"
      ],
      answer: 2
    },
    {
      question: "How do you fetch data at runtime in a Next.js page?",
      options: [
        "Using 'getStaticProps'",
        "Using 'getServerSideProps'",
        "Using 'getInitialProps'",
        "Using 'fetch' inside the component"
      ],
      answer: 1
    },
    {
      question: "How do you add a custom document in Next.js?",
      options: [
        "Create a '_document.js' file in the /pages directory",
        "Create a 'document.js' file in the /pages directory",
        "Edit the 'index.js' file",
        "Create a 'custom.js' file in the /pages directory"
      ],
      answer: 0
    },
    {
      question: "Which hook can you use to fetch data in a client-side rendered component?",
      options: [
        "useEffect",
        "useState",
        "useContext",
        "useReducer"
      ],
      answer: 0
    },
    {
      question: "How do you add a custom server in Next.js?",
      options: [
        "Create a 'server.js' file in the root directory",
        "Edit the 'next.config.js' file",
        "Create a 'custom-server.js' file in the /pages directory",
        "Add a 'server.ts' file in the /pages directory"
      ],
      answer: 0
    },
]
  