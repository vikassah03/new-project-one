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
      question: "How can you add a comment in a JavaScript?",
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
      question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
      options: [
        "w2 = window.new('http://www.example.com');",
        "w2 = window.open('http://www.example.com');",
        "w2 = window.newWindow('http://www.example.com');",
        "w2 = open.window('http://www.example.com');"
      ],
      answer: 1
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
    }
  ];
  