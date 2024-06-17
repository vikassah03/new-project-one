export const questions = [
    {
        question: "What is Node.js?",
        options: [
            "A client-side JavaScript framework",
            "A JavaScript runtime built on Chrome's V8 engine",
            "A database management system",
            "A version control system"
        ],
        answer: 1
    },
    {
        question: "Which command is used to install Node.js?",
        options: [
            "npm install node",
            "install nodejs",
            "node install",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "Which module is used for file operations in Node.js?",
        options: [
            "http",
            "fs",
            "url",
            "path"
        ],
        answer: 1
    },
    {
        question: "What does the 'fs' module stand for in Node.js?",
        options: [
            "File Storage",
            "File System",
            "File Structure",
            "File Stream"
        ],
        answer: 1
    },
    {
        question: "Which method is used to create a server in Node.js?",
        options: [
            "http.createServer()",
            "http.newServer()",
            "http.makeServer()",
            "http.initServer()"
        ],
        answer: 0
    },
    {
        question: "Which of the following is true about Node.js?",
        options: [
            "Node.js is single-threaded",
            "Node.js is multi-threaded",
            "Node.js uses synchronous programming",
            "Node.js is a programming language"
        ],
        answer: 0
    },
    {
        question: "How do you import a module in Node.js?",
        options: [
            "import module from 'module'",
            "require('module')",
            "include 'module'",
            "load 'module'"
        ],
        answer: 1
    },
    {
        question: "Which object is used to manage the caching of modules in Node.js?",
        options: [
            "process",
            "global",
            "module",
            "require"
        ],
        answer: 3
    },
    {
        question: "How can you write data to a file in Node.js?",
        options: [
            "fs.writeFile()",
            "fs.saveFile()",
            "fs.pushFile()",
            "fs.storeFile()"
        ],
        answer: 0
    },
    {
        question: "Which method is used to read a file synchronously in Node.js?",
        options: [
            "fs.readFileSync()",
            "fs.readSync()",
            "fs.getFileSync()",
            "fs.getSync()"
        ],
        answer: 0
    },
    {
        question: "What does 'npm' stand for?",
        options: [
            "Node Package Manager",
            "Node Programming Manager",
            "New Package Manager",
            "New Programming Manager"
        ],
        answer: 0
    },
    {
        question: "How do you install a package globally in Node.js?",
        options: [
            "npm install package -g",
            "npm get package",
            "npm install package",
            "npm global package"
        ],
        answer: 0
    },
    {
        question: "Which method is used to parse a URL in Node.js?",
        options: [
            "url.parse()",
            "url.get()",
            "url.fetch()",
            "url.scan()"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of 'util' module in Node.js?",
        options: [
            "To provide utility functions",
            "To handle file system operations",
            "To manage HTTP requests",
            "To interact with databases"
        ],
        answer: 0
    },
    {
        question: "Which method is used to create a directory in Node.js?",
        options: [
            "fs.mkdir()",
            "fs.makeDir()",
            "fs.createDir()",
            "fs.newDir()"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a core module in Node.js?",
        options: [
            "express",
            "http",
            "mongoose",
            "sequelize"
        ],
        answer: 1
    },
    {
        question: "Which command is used to initialize a new Node.js project?",
        options: [
            "npm init",
            "node init",
            "npm start",
            "node start"
        ],
        answer: 0
    },
    {
        question: "How do you uninstall a package in Node.js?",
        options: [
            "npm remove package",
            "npm uninstall package",
            "npm delete package",
            "npm discard package"
        ],
        answer: 1
    },
    {
        question: "Which event is emitted when an error occurs in a Node.js stream?",
        options: [
            "data",
            "end",
            "error",
            "finish"
        ],
        answer: 2
    },
    {
        question: "Which object is used to interact with the operating system in Node.js?",
        options: [
            "os",
            "fs",
            "http",
            "system"
        ],
        answer: 0
    },
    {
        question: "What is the default scope of Node.js modules?",
        options: [
            "Global",
            "Local",
            "Private",
            "Protected"
        ],
        answer: 1
    },
    {
        question: "Which method is used to append data to a file in Node.js?",
        options: [
            "fs.appendFile()",
            "fs.addFile()",
            "fs.updateFile()",
            "fs.insertFile()"
        ],
        answer: 0
    },
    {
        question: "Which statement about Node.js event loop is true?",
        options: [
            "It handles blocking operations only",
            "It handles both blocking and non-blocking operations",
            "It handles non-blocking operations only",
            "It does not handle any operations"
        ],
        answer: 2
    },
    {
        question: "Which method is used to read the content of a directory in Node.js?",
        options: [
            "fs.readdir()",
            "fs.readDir()",
            "fs.getDir()",
            "fs.openDir()"
        ],
        answer: 0
    },
    {
        question: "How do you export a function in Node.js?",
        options: [
            "module.exports = functionName",
            "exports.functionName = functionName",
            "export functionName",
            "module.export functionName"
        ],
        answer: 0
    },
    {
        question: "Which statement is used to catch errors in asynchronous code?",
        options: [
            "try...catch",
            "error...catch",
            "catch...try",
            "handle...error"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a Node.js framework?",
        options: [
            "Angular",
            "React",
            "Express",
            "Vue"
        ],
        answer: 2
    },
    {
        question: "How can you handle exceptions globally in Node.js?",
        options: [
            "Using process.on('uncaughtException')",
            "Using global.on('error')",
            "Using process.handle('exception')",
            "Using global.catch('error')"
        ],
        answer: 0
    },
    {
        question: "What does the 'path' module in Node.js provide?",
        options: [
            "Utility functions for file and directory paths",
            "Methods to manage HTTP requests",
            "Database connectivity features",
            "Functions to handle URL parsing"
        ],
        answer: 0
    },
    {
        question: "How do you create a buffer in Node.js?",
        options: [
            "Buffer.alloc()",
            "Buffer.create()",
            "Buffer.init()",
            "Buffer.new()"
        ],
        answer: 0
    }
];
