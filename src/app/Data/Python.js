"use client";

export const questions = [
    {
        "question": "What will be the output of the following Python code?\n\nprint(2 + 3 * 5)",
        "options": [
            "10",
            "25",
            "17",
            "None of the above"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is used to define a function in Python?",
        "options": [
            "define",
            "function",
            "def",
            "fun"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nnumbers = [1, 2, 3]\nprint(numbers[3])",
        "options": [
            "Error: Index out of range",
            "None",
            "1",
            "3"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following statements is used to exit from a loop in Python?",
        "options": [
            "return",
            "break",
            "continue",
            "exit"
        ],
        "answer": 1
    },
    {
        "question": "What is the correct way to open and read a text file in Python?",
        "options": [
            "open('file.txt', 'r')",
            "open('file.txt')",
            "read('file.txt')",
            "open_file('file.txt', 'read')"
        ],
        "answer": 0
    },
    {
        "question": "What is the result of the expression '3' + '2' in Python?",
        "options": [
            "'5'",
            "5",
            "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "How do you comment multiple lines in Python?",
        "options": [
            "/* This is a comment */",
            "# This is a comment",
            "// This is a comment //",
            "''' This is a multiline comment '''"
        ],
        "answer": 3
    },
    {
        "question": "Which of the following data types is mutable in Python?",
        "options": [
            "int",
            "float",
            "tuple",
            "list"
        ],
        "answer": 3
    },
    {
        "question": "What is the output of the following code?\n\nprint('Hello' * 3)",
        "options": [
            "HelloHelloHello",
            "Hello Hello Hello",
            "Hello 3",
            "3"
        ],
        "answer": 0
    },
    {
        "question": "What is the result of the expression 'Hello'[::-1] in Python?",
        "options": [
            "'Hello'",
            "'olleH'",
            "Error: string slicing cannot be reversed",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "How do you convert a string to all lowercase letters in Python?",
        "options": [
            "str.lower()",
            "str.lowercase()",
            "str.toLower()",
            "str.casefold()"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following operators is used for exponentiation in Python?",
        "options": [
            "**",
            "^",
            "//",
            "exp"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\nx = 5\nprint(x > 3 and x < 10)",
        "options": [
            "True",
            "False",
            "Error: 'and' is not a valid operator",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following functions can be used to accept user input in Python?",
        "options": [
            "get()",
            "input()",
            "accept()",
            "read_input()"
        ],
        "answer": 1
    },
    {
        "question": "What is the correct way to initialize an empty dictionary in Python?",
        "options": [
            "{}",
            "dict()",
            "new dict()",
            "dict[]"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
        "options": [
            "[1, 2, 3, 4]",
            "[1, 2, 3]",
            "[1, 2, 3, 4, 4]",
            "Error: invalid syntax"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following statements is used to declare a class in Python?",
        "options": [
            "class MyClass:",
            "class = MyClass:",
            "new class MyClass:",
            "define class MyClass:"
        ],
        "answer": 0
    },
    {
        "question": "What will be the output of the following code?\n\nfor i in range(5):\n    print(i, end=' ')\nprint()",
        "options": [
            "0 1 2 3 4",
            "0 1 2 3 4 ",
            "0 1 2 3 4 5",
            "1 2 3 4 5"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is used to remove leading and trailing whitespaces from a string in Python?",
        "options": [
            "trim()",
            "strip()",
            "clean()",
            "remove_whitespace()"
        ],
        "answer": 1
    },
    {
        "question": "What does the 'pass' statement do in Python?",
        "options": [
            "Exits from a loop or function",
            "Skips to the next iteration of a loop",
            "Does nothing but is syntactically required",
            "Breaks the current loop"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nx = 'Python'\nprint(x[1:])",
        "options": [
            "Python",
            "P",
            "ython",
            "ython'"
        ],
        "answer": 2
    },
    {
        "question": "Which module in Python supports regular expressions?",
        "options": [
            "regex",
            "re",
            "regex.py",
            "pyregex"
        ],
        "answer": 1
    },
    {
        "question": "What will be the output of the following code?\n\ndef func(a, b=5):\n    return a + b\n\nprint(func(3))",
        "options": [
            "Error: invalid syntax",
            "8",
            "None",
            "3"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is not a valid data type in Python?",
        "options": [
            "complex",
            "boolean",
            "char",
            "tuple"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nx = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')",
        "options": [
            "x is greater than 5",
            "x is less than 5",
            "x is less than or equal to 5",
            "No output"
        ],
        "answer": 0
    },
    {
        "question": "How do you check the number of items in a list in Python?",
        "options": [
            "list.count()",
            "len(list)",
            "list.size()",
            "count(list)"
        ],
        "answer": 1
    },
    {
        "question": "What will be the output of the following code?\n\nprint(type(3.14))",
        "options": [
            "<class 'float'>",
            "<class 'int'>",
            "<class 'double'>",
            "Error: invalid syntax"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following statements is used to import a module in Python?",
        "options": [
            "import module_name",
            "module module_name",
            "include module_name",
            "use module_name"
        ],
        "answer": 0
    },
    {
        "question": "What does the function ord('A') return in Python?",
        "options": [
            "64",
            "65",
            "66",
            "97"
        ],
        "answer": 1
    }
];
