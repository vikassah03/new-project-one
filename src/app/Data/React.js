export const questions = [
    {
      question: "What is the command to create a new React app using Create React App?",
      options: [
        "npx create-react-app my-app",
        "npm create-react-app my-app",
        "react-create-app my-app",
        "npx create-app my-app"
      ],
      answer: 0
    },
    {
      question: "What is the default port number for a React app?",
      options: [
        "3000",
        "8080",
        "5000",
        "8888"
      ],
      answer: 0
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Extension",
        "JavaScript X"
      ],
      answer: 0
    },
    {
      question: "Which method is used to update the state in a React component?",
      options: [
        "changeState",
        "updateState",
        "setState",
        "modifyState"
      ],
      answer: 2
    },
    {
      question: "Which lifecycle method is called after a component is rendered for the first time?",
      options: [
        "componentDidMount",
        "componentWillMount",
        "componentDidUpdate",
        "componentWillUpdate"
      ],
      answer: 0
    },
    {
      question: "What hook is used to manage state in functional components?",
      options: [
        "useEffect",
        "useContext",
        "useState",
        "useReducer"
      ],
      answer: 2
    },
    {
      question: "What does the useEffect hook do?",
      options: [
        "Manages state",
        "Performs side effects in functional components",
        "Handles context",
        "Dispatches actions"
      ],
      answer: 1
    },
    {
      question: "How do you pass data from a parent to a child component?",
      options: [
        "Using props",
        "Using state",
        "Using hooks",
        "Using context"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the key attribute in a list?",
      options: [
        "To add a unique identifier to each element in the list",
        "To style the list",
        "To handle events",
        "To bind data"
      ],
      answer: 0
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "A direct representation of the real DOM",
        "A lightweight copy of the real DOM",
        "A real DOM element",
        "None of the above"
      ],
      answer: 1
    },
    {
      question: "Which hook would you use to fetch data when a component mounts?",
      options: [
        "useState",
        "useEffect",
        "useReducer",
        "useContext"
      ],
      answer: 1
    },
    {
      question: "How do you conditionally render a React component?",
      options: [
        "Using if statements",
        "Using ternary operators",
        "Using logical && operator",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "What is a React fragment?",
      options: [
        "A component used to return multiple elements",
        "A method for managing state",
        "A method for handling events",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "Which hook is used to optimize performance by memoizing functions?",
      options: [
        "useEffect",
        "useMemo",
        "useState",
        "useCallback"
      ],
      answer: 3
    },
    {
      question: "What is the context API?",
      options: [
        "A way to manage global state",
        "A way to fetch data",
        "A way to optimize performance",
        "A way to handle side effects"
      ],
      answer: 0
    },
    {
      question: "How do you handle events in React?",
      options: [
        "Using addEventListener",
        "Using on<Event> props",
        "Using event handlers",
        "None of the above"
      ],
      answer: 1
    },
    {
      question: "What is prop drilling?",
      options: [
        "Passing props from parent to child directly",
        "Passing props through multiple levels of components",
        "Managing state in a single component",
        "Handling events in child components"
      ],
      answer: 2
    },
    {
      question: "How do you create a ref in a functional component?",
      options: [
        "Using createRef",
        "Using useRef",
        "Using useEffect",
        "Using useState"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of shouldComponentUpdate?",
      options: [
        "To control if a component should re-render",
        "To fetch data",
        "To manage state",
        "To handle errors"
      ],
      answer: 0
    },
    {
      question: "How can you improve performance in a React app?",
      options: [
        "Using memoization",
        "Using code splitting",
        "Avoiding unnecessary re-renders",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "What is the difference between state and props?",
      options: [
        "State is mutable, props are immutable",
        "Props are mutable, state is immutable",
        "Both are mutable",
        "Both are immutable"
      ],
      answer: 0
    },
    {
      question: "How do you force a component to re-render?",
      options: [
        "Using forceUpdate",
        "Updating the state",
        "Using reRender method",
        "Both A and B"
      ],
      answer: 3
    },
    {
      question: "What is the purpose of the useMemo hook?",
      options: [
        "To memoize values",
        "To memoize functions",
        "To manage state",
        "To handle side effects"
      ],
      answer: 0
    },
    {
      question: "How do you handle form submissions in React?",
      options: [
        "Using onSubmit prop",
        "Using addEventListener",
        "Using onClick prop",
        "Using onChange prop"
      ],
      answer: 0
    },
    {
      question: "What is a higher-order component (HOC)?",
      options: [
        "A function that takes a component and returns a new component",
        "A component that manages state",
        "A component that handles events",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "What is the difference between useEffect and useLayoutEffect?",
      options: [
        "useEffect runs after rendering, useLayoutEffect runs before rendering",
        "useEffect runs before rendering, useLayoutEffect runs after rendering",
        "Both run before rendering",
        "Both run after rendering"
      ],
      answer: 0
    },
    {
      question: "How do you lift state up in React?",
      options: [
        "By passing state to parent component",
        "By passing state to child component",
        "By using context API",
        "By using higher-order component"
      ],
      answer: 0
    },
    {
      question: "What is React Router?",
      options: [
        "A library for handling routes in React applications",
        "A method for managing state",
        "A way to fetch data",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "How do you handle errors in React components?",
      options: [
        "Using try-catch",
        "Using Error Boundaries",
        "Using componentDidCatch",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "What is a controlled component?",
      options: [
        "A component that controls its own state",
        "A component that receives its state from props",
        "A component that renders only on specific conditions",
        "None of the above"
      ],
      answer: 1
    }
  ];
  