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
    },
    {
        question: "What is the purpose of the 'cluster' module in Node.js?",
        options: [
          "To handle multi-threaded execution",
          "To create child processes",
          "To manage multiple instances of the Node.js application",
          "To connect to a database"
        ],
        answer: 2
      },
      {
        question: "How do you handle asynchronous operations in Node.js?",
        options: [
          "Using callbacks",
          "Using promises",
          "Using async/await",
          "All of the above"
        ],
        answer: 3
      },
      {
        question: "Which method is used to stop a Node.js server?",
        options: [
          "server.close()",
          "server.stop()",
          "server.end()",
          "server.terminate()"
        ],
        answer: 0
      },
      {
        question: "What is a 'stream' in Node.js?",
        options: [
          "An object that allows you to read data from a source or write data to a destination in a continuous fashion",
          "A function that handles HTTP requests",
          "A method to connect to databases",
          "A data structure for storing key-value pairs"
        ],
        answer: 0
      },
      {
        question: "How do you handle errors in promises?",
        options: [
          "Using .then()",
          "Using .catch()",
          "Using .finally()",
          "Using try...catch"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of the 'worker_threads' module?",
        options: [
          "To create separate threads for executing JavaScript code",
          "To manage child processes",
          "To handle HTTP requests",
          "To manage file system operations"
        ],
        answer: 0
      },
      {
        question: "How can you optimize performance in a Node.js application?",
        options: [
          "Using caching",
          "Using a load balancer",
          "Optimizing database queries",
          "All of the above"
        ],
        answer: 3
      },
      {
        question: "What is the purpose of 'event emitters' in Node.js?",
        options: [
          "To handle asynchronous events",
          "To manage user sessions",
          "To handle file uploads",
          "To manage HTTP headers"
        ],
        answer: 0
      },
      {
        question: "Which command is used to update npm to the latest version?",
        options: [
          "npm update -g npm",
          "npm install npm@latest -g",
          "npm upgrade npm",
          "npm get npm@latest"
        ],
        answer: 1
      },
      {
        question: "What is 'middleware' in Node.js?",
        options: [
          "A function that executes between receiving a request and sending a response",
          "A module that handles database connections",
          "A library for managing file uploads",
          "A tool for performance optimization"
        ],
        answer: 0
      },
      {
        question: "How do you create a readable stream in Node.js?",
        options: [
          "fs.createReadStream()",
          "fs.readFile()",
          "fs.readStream()",
          "fs.stream()"
        ],
        answer: 0
      },
      {
        question: "Which module in Node.js provides cryptographic functionality?",
        options: [
          "crypto",
          "crypto-js",
          "crypto-node",
          "crypto-secure"
        ],
        answer: 0
      },
      {
        question: "How do you schedule a function to execute after a delay in Node.js?",
        options: [
          "setTimeout()",
          "setInterval()",
          "setImmediate()",
          "nextTick()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'package.json' in a Node.js project?",
        options: [
          "To list the project dependencies",
          "To define project metadata",
          "To specify script commands",
          "All of the above"
        ],
        answer: 3
      },
      {
        question: "How can you read environment variables in Node.js?",
        options: [
          "process.env",
          "env.get()",
          "process.getEnv()",
          "env.read()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of the 'http' module in Node.js?",
        options: [
          "To create and manage HTTP servers and clients",
          "To handle database operations",
          "To manage file system interactions",
          "To perform cryptographic operations"
        ],
        answer: 0
      },
      {
        question: "How do you create a writable stream in Node.js?",
        options: [
          "fs.createWriteStream()",
          "fs.writeFile()",
          "fs.writeStream()",
          "fs.streamWrite()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'npm' in the Node.js ecosystem?",
        options: [
          "To manage packages and dependencies",
          "To compile Node.js applications",
          "To debug Node.js applications",
          "To run Node.js applications"
        ],
        answer: 0
      },
      {
        question: "How do you handle JSON data in Node.js?",
        options: [
          "Using JSON.parse() and JSON.stringify()",
          "Using json.decode() and json.encode()",
          "Using JSON.read() and JSON.write()",
          "Using json.import() and json.export()"
        ],
        answer: 0
      },
      {
        question: "Which method is used to handle exceptions in a Node.js process?",
        options: [
          "process.on('uncaughtException')",
          "global.handle('error')",
          "process.catch('error')",
          "global.on('uncaughtError')"
        ],
        answer: 0
      },
      {
        question: "How do you handle file uploads in Node.js?",
        options: [
          "Using multer or formidable modules",
          "Using fs.writeFile()",
          "Using fs.readFile()",
          "Using http.upload()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'require.resolve()' in Node.js?",
        options: [
          "To resolve the full path of a module",
          "To load a module",
          "To check if a module exists",
          "To uninstall a module"
        ],
        answer: 0
      },
      {
        question: "How do you measure the performance of a Node.js application?",
        options: [
          "Using the 'perf_hooks' module",
          "Using the 'os' module",
          "Using the 'http' module",
          "Using the 'fs' module"
        ],
        answer: 0
      },
      {
        question: "Which method is used to close a readable stream in Node.js?",
        options: [
          "stream.close()",
          "stream.end()",
          "stream.finish()",
          "stream.stop()"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of the 'child_process' module?",
        options: [
          "To spawn child processes",
          "To manage file operations",
          "To create HTTP servers",
          "To handle cryptographic operations"
        ],
        answer: 0
      },
      {
        question: "How do you update Node.js to the latest version?",
        options: [
          "Using n or nvm",
          "Using npm update node",
          "Using npm install node@latest",
          "Using node update"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'path.resolve()' in Node.js?",
        options: [
          "To resolve a sequence of paths into an absolute path",
          "To join multiple path segments",
          "To parse a path into its components",
          "To check if a path exists"
        ],
        answer: 0
      },
      {
        question: "How can you improve the security of a Node.js application?",
        options: [
          "Using helmet to secure HTTP headers",
          "Validating user inputs",
          "Using HTTPS",
          "All of the above"
        ],
        answer: 3
      },
      {
        question: "Which method is used to unpipe a writable stream in Node.js?",
        options: [
          "stream.unpipe()",
          "stream.stopPipe()",
          "stream.detach()",
          "stream.disconnect()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of the 'tls' module in Node.js?",
        options: [
          "To provide Transport Layer Security and secure communications",
          "To manage HTTP connections",
          "To handle file operations",
          "To interact with databases"
        ],
        answer: 0
      },
      {
        question: "Which method is used to compress data in Node.js?",
        options: [
          "zlib.gzip()",
          "zlib.compress()",
          "zlib.deflate()",
          "zlib.zip()"
        ],
        answer: 0
      },
      {
        question: "How can you handle large numbers of simultaneous connections in Node.js?",
        options: [
          "Using the 'cluster' module to distribute connections across multiple processes",
          "Using a single thread to handle all connections",
          "Using the 'crypto' module",
          "Using synchronous programming"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'dns' module in Node.js?",
        options: [
          "To perform DNS queries and resolve domain names",
          "To manage network connections",
          "To perform file system operations",
          "To create HTTP servers"
        ],
        answer: 0
      },
      {
        question: "Which method is used to inspect the content of a Buffer in Node.js?",
        options: [
          "buffer.toString()",
          "buffer.inspect()",
          "buffer.view()",
          "buffer.show()"
        ],
        answer: 0
      },
      {
        question: "How do you handle sessions in a Node.js application?",
        options: [
          "Using express-session middleware",
          "Using cookies",
          "Using local storage",
          "Using global variables"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'process.nextTick()'?",
        options: [
          "To schedule a callback to be invoked in the next iteration of the event loop",
          "To delay a function execution for a given amount of time",
          "To immediately stop the execution of a script",
          "To handle HTTP requests"
        ],
        answer: 0
      },
      {
        question: "Which method is used to terminate a process in Node.js?",
        options: [
          "process.exit()",
          "process.terminate()",
          "process.stop()",
          "process.kill()"
        ],
        answer: 0
      },
      {
        question: "How do you install a specific version of a package using npm?",
        options: [
          "npm install package@version",
          "npm get package version",
          "npm set package@version",
          "npm package@version install"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'util.promisify()' in Node.js?",
        options: [
          "To convert callback-based functions to promise-based functions",
          "To handle HTTP requests",
          "To manage file operations",
          "To create HTTP servers"
        ],
        answer: 0
      },
      {
        question: "Which method is used to split a readable stream into multiple writable destinations?",
        options: [
          "stream.pipe()",
          "stream.split()",
          "stream.fork()",
          "stream.divert()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of the 'assert' module in Node.js?",
        options: [
          "To write tests and perform assertions",
          "To manage HTTP requests",
          "To handle file operations",
          "To interact with databases"
        ],
        answer: 0
      },
      {
        question: "How can you share data between modules in Node.js?",
        options: [
          "Using exports and require",
          "Using global variables",
          "Using local storage",
          "Using environment variables"
        ],
        answer: 0
      },
      {
        question: "Which method is used to handle backpressure in streams?",
        options: [
          "stream.pause() and stream.resume()",
          "stream.hold() and stream.release()",
          "stream.delay() and stream.continue()",
          "stream.buffer() and stream.flush()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'domain' module in Node.js?",
        options: [
          "To handle multiple subdomains",
          "To provide a way to handle multiple I/O operations",
          "To provide a way to manage the execution context and handle errors",
          "To manage DNS queries"
        ],
        answer: 2
      },
      {
        question: "Which method is used to read a stream into a buffer in Node.js?",
        options: [
          "stream.read()",
          "stream.toBuffer()",
          "stream.getBuffer()",
          "stream.readBuffer()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'dotenv' package in Node.js?",
        options: [
          "To load environment variables from a .env file",
          "To encrypt data",
          "To manage HTTP requests",
          "To handle file operations"
        ],
        answer: 0
      },
      {
        question: "How can you enable CORS in a Node.js application?",
        options: [
          "Using the cors middleware",
          "Using express-cors",
          "Configuring headers manually",
          "Both A and C"
        ],
        answer: 3
      },
      {
        question: "Which command is used to remove a package and its dependencies in npm?",
        options: [
          "npm uninstall package",
          "npm remove package --save",
          "npm delete package",
          "npm discard package"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of 'npm scripts' in package.json?",
        options: [
          "To define custom commands",
          "To manage environment variables",
          "To configure build tools",
          "To store project metadata"
        ],
        answer: 0
      },
      {
        question: "Which method is used to watch for file changes in Node.js?",
        options: [
          "fs.watch()",
          "fs.observe()",
          "fs.monitor()",
          "fs.track()"
        ],
        answer: 0
      },
      {
        question: "How do you generate a random string in Node.js?",
        options: [
          "Using crypto.randomBytes()",
          "Using Math.random()",
          "Using crypto.generateRandom()",
          "Using random.string()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'stream.pipeline()' in Node.js?",
        options: [
          "To connect multiple streams and manage their flow",
          "To create a series of streams",
          "To split a stream into multiple paths",
          "To buffer a stream"
        ],
        answer: 0
      },
      {
        question: "Which command is used to install a package as a development dependency in npm?",
        options: [
          "npm install package --save-dev",
          "npm install package --dev",
          "npm install package --develop",
          "npm install package --save-dev-only"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'console.time()' and 'console.timeEnd()'?",
        options: [
          "To measure the duration of a code execution",
          "To display the current time",
          "To schedule a function to execute after a delay",
          "To log time-based events"
        ],
        answer: 0
      },
      {
        question: "How do you secure a Node.js application?",
        options: [
          "Validating inputs",
          "Using HTTPS",
          "Implementing proper authentication",
          "All of the above"
        ],
        answer: 3
      },
      {
        question: "Which method is used to listen for events in an EventEmitter?",
        options: [
          "emitter.on()",
          "emitter.listen()",
          "emitter.catch()",
          "emitter.observe()"
        ],
        answer: 0
      },
      {
        question: "How do you handle multipart form data in Node.js?",
        options: [
          "Using multer",
          "Using fs.readFile()",
          "Using body-parser",
          "Using formidable"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'stream.finished()' in Node.js?",
        options: [
          "To handle the end of a stream",
          "To terminate a stream",
          "To close a stream",
          "To buffer a stream"
        ],
        answer: 0
      },
      {
        question: "How do you create a self-signed certificate for HTTPS in Node.js?",
        options: [
          "Using OpenSSL",
          "Using HTTPS module",
          "Using cert module",
          "Using crypto module"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of the 'readline' module in Node.js?",
        options: [
          "To read data from a readable stream line-by-line",
          "To parse JSON data",
          "To handle HTTP requests",
          "To interact with databases"
        ],
        answer: 0
      },
      {
        question: "Which method is used to listen for connections on a socket in Node.js?",
        options: [
          "socket.listen()",
          "socket.on()",
          "socket.connect()",
          "socket.bind()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'child_process.spawn()' in Node.js?",
        options: [
          "To launch a new process with a given command",
          "To terminate a process",
          "To manage file system operations",
          "To handle network connections"
        ],
        answer: 0
      },
      {
        question: "Which method is used to parse a JSON string in Node.js?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.decode()",
          "JSON.parseString()"
        ],
        answer: 0
      },
      {
        question: "How can you check the version of Node.js installed?",
        options: [
          "node -v",
          "npm version",
          "node --version",
          "Both A and C"
        ],
        answer: 3
      },
      {
        question: "What is the purpose of 'package-lock.json' in a Node.js project?",
        options: [
          "To lock the version of packages",
          "To define scripts for project automation",
          "To store environment variables",
          "To manage project dependencies"
        ],
        answer: 0
      },
      {
        question: "Which method is used to create a readable stream in Node.js?",
        options: [
          "fs.createReadStream()",
          "fs.read()",
          "fs.stream()",
          "fs.openStream()"
        ],
        answer: 0
      },
      {
        question: "How can you generate a hash in Node.js?",
        options: [
          "Using crypto.createHash()",
          "Using hash.generate()",
          "Using crypto.generateHash()",
          "Using hash.create()"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of 'process.argv' in Node.js?",
        options: [
          "To access command-line arguments",
          "To set environment variables",
          "To terminate a process",
          "To manage file system operations"
        ],
        answer: 0
      },
      {
        question: "How do you remove a directory and its contents in Node.js?",
        options: [
          "fs.rmdir()",
          "fs.removeDir()",
          "fs.deleteDir()",
          "fs.rmDir()"
        ],
        answer: 0
      },
      {
        question: "Which method is used to inspect the properties of an object in Node.js?",
        options: [
          "util.inspect()",
          "object.inspect()",
          "inspect.object()",
          "util.examine()"
        ],
        answer: 0
      }
];
