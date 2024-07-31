export const questions = [
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    answer: 2
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');"
    ],
    answer: 3
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function => myFunction()"
    ],
    answer: 1
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
      "Call.myFunction()"
    ],
    answer: 2
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: [
      "if i = 5",
      "if i == 5 then",
      "if (i == 5)",
      "if i = 5 then"
    ],
    answer: 2
  },
  {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: [
      "if (i != 5)",
      "if i <> 5",
      "if (i <> 5)",
      "if i =! 5 then"
    ],
    answer: 0
  },
  {
    question: "How does a WHILE loop start?",
    options: [
      "while i = 1 to 10",
      "while (i <= 10)",
      "while (i <= 10; i++)",
      "while (i++ <= 10)"
    ],
    answer: 1
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for i = 1 to 5"
    ],
    answer: 2
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "'This is a comment",
      "//This is a comment",
      "<!--This is a comment-->",
      "# This is a comment"
    ],
    answer: 1
  },
  {
    question: "How can you add a multi-line comment in JavaScript?",
    options: [
      "/*This comment has\nmultiple lines*/",
      "//This comment has\nmultiple lines//",
      "<!--This comment has\nmultiple lines-->",
      "'This comment has\nmultiple lines'"
    ],
    answer: 0
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'"
    ],
    answer: 2
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: [
      "Math.rnd(7.25)",
      "Math.round(7.25)",
      "rnd(7.25)",
      "round(7.25)"
    ],
    answer: 1
  },
  {
    question: "How do you find the largest number of 2 and 4?",
    options: [
      "Math.ceil(2, 4)",
      "Math.max(2, 4)",
      "ceil(2, 4)",
      "max(2, 4)"
    ],
    answer: 1
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: [
      "ceil(x, y)",
      "Math.ceil(x, y)",
      "Math.max(x, y)",
      "max(x, y)"
    ],
    answer: 2
  },
 
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      "onchange",
      "onclick",
      "onmouseclick",
      "onmouseover"
    ],
    answer: 1
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "var carName;",
      "variable carName;",
      "v carName;",
      "declare carName;"
    ],
    answer: 0
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "*",
      "-",
      "=",
      "x"
    ],
    answer: 2
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    options: [
      "false",
      "NaN",
      "true",
      "undefined"
    ],
    answer: 2
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: [
      "No",
      "Yes",
      "Sometimes",
      "Depends on the browser"
    ],
    answer: 1
  },
  {
    question: "How do you create a Date object in JavaScript?",
    options: [
      "new Date()",
      "Date()",
      "new Date",
      "Date.new()"
    ],
    answer: 0
  },
  {
    question: "How do you find the length of a string in JavaScript?",
    options: [
      "len()",
      "length",
      "length()",
      "string.length"
    ],
    answer: 3
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    answer: 0
  },
  {
    question: "Which method converts a JavaScript object to JSON data?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toJSON()"
    ],
    answer: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "//",
      "#",
      "/* */",
      "<!-- -->"
    ],
    answer: 0
  },
  {
    question: "How do you write an array in JavaScript?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    ],
    answer: 1
  },
  {
    question: "What is the correct way to check if a variable 'a' is not equal to 'b'?",
    options: [
      "a <> b",
      "a != b",
      "a =! b",
      "a !== b"
    ],
    answer: 1
  },
  {
    question: "How do you write a JavaScript conditional statement to execute code if 'a' is greater than 'b'?",
    options: [
      "if a > b then",
      "if (a > b)",
      "if (a > b) then",
      "if a > b"
    ],
    answer: 1
  },
  {
    question: "Which method returns the character at a specified index in a string?",
    options: [
      "charAt()",
      "charAtIndex()",
      "getCharAt()",
      "characterAt()"
    ],
    answer: 0
  },
  {
    question: "How do you create a new array in JavaScript?",
    options: [
      "new Array()",
      "Array()",
      "new Array",
      "Array.new()"
    ],
    answer: 0
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The current object",
      "The previous object",
      "The global object",
      "The parent object"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      "To end the function execution and return a value",
      "To define a function",
      "To call another function",
      "To declare a variable"
    ],
    answer: 0
  },
  {
    question: "What is the correct way to add an element to the end of an array?",
    options: [
      "array.push(element)",
      "array.add(element)",
      "array.insert(element)",
      "array.append(element)"
    ],
    answer: 0
  },
  {
    question: "How do you remove the first element from an array?",
    options: [
      "array.shift()",
      "array.pop()",
      "array.remove(0)",
      "array.delete(0)"
    ],
    answer: 0
  },
  {
    question: "What does the 'map()' method do?",
    options: [
      "Executes a provided function once for each array element and returns a new array",
      "Filters the elements of an array based on a provided function",
      "Sorts the elements of an array",
      "Joins all elements of an array into a string"
    ],
    answer: 0
  },
  {
    question: "What is a promise in JavaScript?",
    options: [
      "An object that represents the eventual completion (or failure) of an asynchronous operation",
      "A function that runs immediately after another function",
      "A special type of array",
      "A method to handle errors"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: [
      "To declare an asynchronous function that returns a promise",
      "To declare a synchronous function",
      "To pause the execution of a function",
      "To handle errors in a function"
    ],
    answer: 0
  },
  {
    question: "How do you handle errors in a promise chain?",
    options: [
      "Using the 'catch()' method",
      "Using the 'then()' method",
      "Using the 'error()' method",
      "Using the 'finally()' method"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'let' and 'var' in JavaScript?",
    options: [
      "'let' is block-scoped, 'var' is function-scoped",
      "'var' is block-scoped, 'let' is function-scoped",
      "'let' can be redeclared, 'var' cannot",
      "'let' has no difference from 'var'"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'const' keyword in JavaScript?",
    options: [
      "To declare a block-scoped, read-only variable",
      "To declare a function-scoped variable",
      "To create a constant value that can be changed",
      "To declare a variable with a global scope"
    ],
    answer: 0
  },
  {
    question: "What is the correct syntax for a template literal in JavaScript?",
    options: [
      "`Hello, ${name}!`",
      "'Hello, ${name}!'",
      "\"Hello, ${name}!\"",
      "(Hello, ${name}!)"
    ],
    answer: 0
  },
  {
    question: "What is the spread operator in JavaScript?",
    options: [
      "An operator that allows an iterable to expand in places where multiple elements/variables/arguments are expected",
      "An operator that spreads the characters of a string",
      "An operator that copies an array",
      "An operator that joins arrays"
    ],
    answer: 0
  },
  {
    question: "How do you destructure an object in JavaScript?",
    options: [
      "const { property } = object;",
      "const property = object.property;",
      "const [ property ] = object;",
      "const property: object;"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'setTimeout()' function in JavaScript?",
    options: [
      "To execute a function after a specified delay",
      "To pause the execution of a function",
      "To set a timeout for a variable",
      "To clear a timeout"
    ],
    answer: 0
  },
  {
    question: "How do you check if an array includes a certain element?",
    options: [
      "array.includes(element)",
      "array.contains(element)",
      "array.has(element)",
      "array.exists(element)"
    ],
    answer: 0
  },
  {
    question: "What is the correct syntax for a class in JavaScript?",
    options: [
      "class MyClass { constructor() {} }",
      "class MyClass() { constructor {} }",
      "MyClass class { constructor() {} }",
      "MyClass { class() { constructor {} } }"
    ],
    answer: 0
  },
  {
    question: "How do you inherit a class in JavaScript?",
    options: [
      "class MySubClass extends MyClass {}",
      "class MySubClass inherits MyClass {}",
      "class MySubClass : MyClass {}",
      "class MySubClass => MyClass {}"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'super' keyword in JavaScript?",
    options: [
      "To call the constructor of a parent class",
      "To call a method of the same class",
      "To create a new instance of a class",
      "To define a static method"
    ],
    answer: 0
  },
  {
    question: "How do you define a static method in a class?",
    options: [
      "static methodName() {}",
      "methodName static() {}",
      "static: methodName() {}",
      "methodName() static {}"
    ],
    answer: 0
  },
  {
    question: "What is a generator function in JavaScript?",
    options: [
      "A function that can pause execution and resume at a later time",
      "A function that generates random numbers",
      "A function that creates an array",
      "A function that is executed immediately"
    ],
    answer: 0
  },
  {
    question: "How do you create a generator function in JavaScript?",
    options: [
      "function* myGenerator() {}",
      "function myGenerator*() {}",
      "function myGenerator() * {}",
      "function* myGenerator {}"
    ],
    answer: 0
  },
  {
    question: "What is the 'yield' keyword used for in a generator function?",
    options: [
      "To pause and resume a generator function",
      "To return a value from a generator function",
      "To end a generator function",
      "To create a new instance of a generator function"
    ],
    answer: 0
  },
  {
    question: "How do you iterate over the values of a generator function?",
    options: [
      "Using a 'for...of' loop",
      "Using a 'for...in' loop",
      "Using a 'while' loop",
      "Using a 'for' loop"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Symbol' type in JavaScript?",
    options: [
      "To create unique and immutable identifiers",
      "To create new data types",
      "To represent a unique numeric value",
      "To define a new class"
    ],
    answer: 0
  },
  {
    question: "How do you create a new Symbol in JavaScript?",
    options: [
      "Symbol('description')",
      "new Symbol('description')",
      "Symbol.create('description')",
      "create Symbol('description')"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Proxy' object in JavaScript?",
    options: [
      "To define custom behavior for fundamental operations",
      "To create a new instance of a class",
      "To handle errors in a program",
      "To perform asynchronous operations"
    ],
    answer: 0
  },
  {
    question: "How do you create a new Proxy object in JavaScript?",
    options: [
      "new Proxy(target, handler)",
      "Proxy.create(target, handler)",
      "Proxy(target, handler)",
      "create Proxy(target, handler)"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Reflect' object in JavaScript?",
    options: [
      "To perform operations on objects and properties",
      "To create new objects",
      "To handle errors in a program",
      "To define new data types"
    ],
    answer: 0
  },
  {
    question: "What is the correct syntax for using the 'fetch' API?",
    options: [
      "fetch('url').then(response => response.json())",
      "fetch('url', { method: 'GET' })",
      "fetch(url, { method: 'GET' })",
      "fetch('url').then(response => response)"
    ],
    answer: 0
  },
  {
    question: "How do you handle JSON data returned by the 'fetch' API?",
    options: [
      "response.json().then(data => console.log(data))",
      "response.text().then(data => console.log(data))",
      "response.json().then(data => data)",
      "response.text().then(data => data)"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'async' and 'await' keywords?",
    options: [
      "To write asynchronous code that looks synchronous",
      "To declare a function",
      "To handle errors in a program",
      "To perform synchronous operations"
    ],
    answer: 0
  },
  {
    question: "How do you declare an asynchronous function using 'async'?",
    options: [
      "async function myFunction() {}",
      "function async myFunction() {}",
      "async: function myFunction() {}",
      "async myFunction() {}"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'await' keyword?",
    options: [
      "To wait for a promise to resolve",
      "To declare a function",
      "To handle errors in a program",
      "To perform synchronous operations"
    ],
    answer: 0
  },
  {
    question: "How do you use the 'await' keyword inside an async function?",
    options: [
      "const result = await promise;",
      "const result = await(promise);",
      "await const result = promise;",
      "await result = promise;"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'setInterval()' function?",
    options: [
      "To repeatedly execute a function with a fixed time delay between each call",
      "To execute a function once after a specified delay",
      "To pause the execution of a function",
      "To clear a timeout"
    ],
    answer: 0
  },
  {
    question: "How do you stop the execution of a 'setInterval()' function?",
    options: [
      "clearInterval(intervalId)",
      "stopInterval(intervalId)",
      "intervalId.clear()",
      "intervalId.stop()"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'new' keyword in JavaScript?",
    options: [
      "To create a new instance of an object",
      "To declare a new variable",
      "To create a new function",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "How do you create a new instance of a class?",
    options: [
      "const instance = new ClassName();",
      "const instance = ClassName();",
      "const instance = new ClassName;",
      "const instance = create ClassName();"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'typeof' operator?",
    options: [
      "To determine the data type of a variable",
      "To declare a new variable",
      "To create a new object",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "How do you check the data type of a variable?",
    options: [
      "typeof variable",
      "variable.type",
      "typeOf(variable)",
      "variable.typeOf"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'instanceof' operator?",
    options: [
      "To check if an object is an instance of a class",
      "To determine the data type of a variable",
      "To declare a new variable",
      "To create a new object"
    ],
    answer: 0
  },
  {
    question: "How do you check if an object is an instance of a class?",
    options: [
      "object instanceof ClassName",
      "object.typeof ClassName",
      "object.isInstanceOf ClassName",
      "object.ClassName instanceof"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To refer to the current object",
      "To declare a new variable",
      "To create a new object",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'apply()' method in JavaScript?",
    options: [
      "To call a function with a given 'this' value and arguments provided as an array",
      "To call a function with a given 'this' value and arguments provided individually",
      "To apply a method to an object",
      "To create a new instance of a class"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'call()' and 'apply()' methods?",
    options: [
      "'call()' accepts arguments individually, 'apply()' accepts arguments as an array",
      "'apply()' accepts arguments individually, 'call()' accepts arguments as an array",
      "'call()' is used for synchronous functions, 'apply()' is used for asynchronous functions",
      "'apply()' is used for synchronous functions, 'call()' is used for asynchronous functions"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'bind()' method in JavaScript?",
    options: [
      "To create a new function with a given 'this' value and arguments",
      "To call a function with a given 'this' value and arguments provided individually",
      "To create a new instance of a class",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "How do you create a new object with a specific prototype?",
    options: [
      "Object.create(prototype)",
      "new Object(prototype)",
      "Object.new(prototype)",
      "create Object(prototype)"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.assign()' method?",
    options: [
      "To copy the values of all enumerable own properties from one or more source objects to a target object",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.keys()' method?",
    options: [
      "To return an array of a given object's own enumerable property names",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "How do you check if an object has a specific property?",
    options: [
      "'property' in object",
      "object.has(property)",
      "object.contains(property)",
      "object.property.exists"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.freeze()' method?",
    options: [
      "To prevent new properties from being added to an object and existing properties from being removed or changed",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.seal()' method?",
    options: [
      "To prevent new properties from being added to an object and mark all existing properties as non-configurable",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.defineProperty()' method?",
    options: [
      "To define a new property directly on an object",
      "To create a new object",
      "To check if an object has a specific property",
      "To return an array of a given object's own enumerable property names"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.defineProperties()' method?",
    options: [
      "To define new or modify existing properties directly on an object",
      "To create a new object",
      "To check if an object has a specific property",
      "To return an array of a given object's own enumerable property names"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.getPrototypeOf()' method?",
    options: [
      "To return the prototype of a given object",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "How do you set the prototype of an object?",
    options: [
      "Object.setPrototypeOf(object, prototype)",
      "object.setPrototype(prototype)",
      "Object.prototype.set(object, prototype)",
      "setPrototype(object, prototype)"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.entries()' method?",
    options: [
      "To return an array of a given object's own enumerable string-keyed property [key, value] pairs",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.fromEntries()' method?",
    options: [
      "To transform a list of key-value pairs into an object",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Object.values()' method?",
    options: [
      "To return an array of a given object's own enumerable property values",
      "To create a new object",
      "To define a new property",
      "To check if an object has a specific property"
    ],
    answer: 0
  },
  {
    question: "How do you create a new promise in JavaScript?",
    options: [
      "new Promise((resolve, reject) => {})",
      "Promise((resolve, reject) => {})",
      "new Promise() => {}",
      "create Promise((resolve, reject) => {})"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Promise.all()' method?",
    options: [
      "To wait for all promises to resolve and return a single promise that resolves to an array of the results",
      "To create a new promise",
      "To define a new property",
      "To handle errors in a program"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Promise.race()' method?",
    options: [
      "To wait for the first promise to resolve or reject and return a single promise that resolves or rejects with the result",
      "To wait for all promises to resolve and return a single promise that resolves to an array of the results",
      "To create a new promise",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Promise.resolve()' method?",
    options: [
      "To return a promise that is resolved with the given value",
      "To return a promise that is rejected with the given reason",
      "To create a new promise",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Promise.reject()' method?",
    options: [
      "To return a promise that is rejected with the given reason",
      "To return a promise that is resolved with the given value",
      "To create a new promise",
      "To define a new property"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'finally()' method in a promise?",
    options: [
      "To execute a callback when the promise is settled (resolved or rejected)",
      "To execute a callback when the promise is resolved",
      "To execute a callback when the promise is rejected",
      "To create a new promise"
    ],
    answer: 0
  }
]


