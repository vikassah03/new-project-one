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
    },
    {
        "question": "How do you create a new set in Python?",
        "options": [
            "set = set()",
            "set = {}",
            "set = []",
            "set = ()"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is not a built-in data type in Python?",
        "options": [
            "list",
            "set",
            "dict",
            "array"
        ],
        "answer": 3
    },
    {
        "question": "What is the result of the expression 10 // 3 in Python?",
        "options": [
            "3",
            "3.333",
            "3.0",
            "None of the above"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following functions can be used to find the largest number in a list?",
        "options": [
            "maximum()",
            "max()",
            "largest()",
            "biggest()"
        ],
        "answer": 1
    },
    {
        "question": "What is the difference between '==' and 'is' in Python?",
        "options": [
            "'==' checks for equality, 'is' checks for identity",
            "'==' checks for identity, 'is' checks for equality",
            "Both are the same",
            "None of the above"
        ],
        "answer": 0
    },
    {
        "question": "How do you install a package using pip?",
        "options": [
            "pip download package_name",
            "pip add package_name",
            "pip install package_name",
            "pip get package_name"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nx = [1, 2, 3]\ny = [1, 2, 3]\nprint(x == y)\nprint(x is y)",
        "options": [
            "True True",
            "True False",
            "False True",
            "False False"
        ],
        "answer": 1
    },
    {
        "question": "Which method is used to remove an item from a list at a specific index in Python?",
        "options": [
            "remove()",
            "delete()",
            "pop()",
            "discard()"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nprint(bool(0))",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "What does the following code do?\n\na = [1, 2, 3, 4, 5]\nprint(a[1:4])",
        "options": [
            "Prints [1, 2, 3]",
            "Prints [1, 2, 3, 4]",
            "Prints [2, 3, 4]",
            "Prints [2, 3, 4, 5]"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following will give the length of a string 's' in Python?",
        "options": [
            "len(s)",
            "s.length()",
            "size(s)",
            "length(s)"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is a valid way to declare a set in Python?",
        "options": [
            "set = {1, 2, 3}",
            "set = (1, 2, 3)",
            "set = [1, 2, 3]",
            "set = set(1, 2, 3)"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint('a' in x)",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "Which method can be used to remove all elements from a list in Python?",
        "options": [
            "clear()",
            "removeAll()",
            "deleteAll()",
            "empty()"
        ],
        "answer": 0
    },
    {
        "question": "What will be the output of the following code?\n\ndef func(x=[]):\n    x.append(1)\n    print(x)\n\nfunc()\nfunc()",
        "options": [
            "[1]\n[1]",
            "[1]\n[1, 1]",
            "Error",
            "[1, 1]\n[1, 1]"
        ],
        "answer": 1
    },
    {
        "question": "What is the output of the following code?\n\nprint('Hello, {name}'.format(name='World'))",
        "options": [
            "Hello, name",
            "Hello, World",
            "Hello, {name}",
            "Error"
        ],
        "answer": 1
    },
    {
        "question": "Which keyword is used to handle exceptions in Python?",
        "options": [
            "try",
            "except",
            "catch",
            "finally"
        ],
        "answer": 1
    },
    {
        "question": "What will be the output of the following code?\n\nx = 10\ny = 5\nprint(x & y)",
        "options": [
            "10",
            "5",
            "0",
            "1"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nprint(bool(''))",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "What is the use of the 'with' statement in Python?",
        "options": [
            "To create classes",
            "To handle exceptions",
            "To simplify exception handling",
            "To ensure proper acquisition and release of resources"
        ],
        "answer": 3
    },
    {
        "question": "Which of the following is not a valid way to declare a dictionary in Python?",
        "options": [
            "dict = {'a': 1, 'b': 2}",
            "dict = {'a': 1, 'b': 2}",
            "dict = {a: 1, b: 2}",
            "dict = dict(a=1, b=2)"
        ],
        "answer": 2
    },
    {
        "question": "What will be the output of the following code?\n\nx = 1.1\nprint(x.is_integer())",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following can be used to concatenate two lists in Python?",
        "options": [
            "list1 + list2",
            "list1.extend(list2)",
            "list1.append(list2)",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "question": "Which of the following methods can be used to convert a list to a tuple in Python?",
        "options": [
            "tuple(list)",
            "list.to_tuple()",
            "tuple.list()",
            "to_tuple(list)"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nx.insert(1, 'a')\nprint(x)",
        "options": [
            "[1, 'a', 2, 3]",
            "['a', 1, 2, 3]",
            "[1, 2, 'a', 3]",
            "[1, 2, 3, 'a']"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following will check if a key exists in a dictionary?",
        "options": [
            "key in dict",
            "key.exists(dict)",
            "dict.has_key(key)",
            "dict.contains(key)"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nx.update({'c': 3})\nprint(x)",
        "options": [
            "{'a': 1, 'b': 2}",
            "{'a': 1, 'b': 2, 'c': 3}",
            "{'a': 1, 'b': 2, 'c': 3, 'd': 4}",
            "{'c': 3, 'a': 1, 'b': 2}"
        ],
        "answer": 1
    },
    {
        "question": "What does the map() function do in Python?",
        "options": [
            "Maps values from a list to a dictionary",
            "Applies a function to each item in an iterable",
            "Converts a list to a dictionary",
            "Finds the location of an item in a list"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following statements is true about Python modules?",
        "options": [
            "Modules are files containing Python code",
            "Modules can contain functions, classes, and variables",
            "Modules are imported using the 'import' statement",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "question": "What will be the output of the following code?\n\nx = [1, 2, 3, 4, 5]\nprint(x[-1])",
        "options": [
            "1",
            "5",
            "4",
            "Error"
        ],
        "answer": 1
    },
    {
        "question": "Which method is used to return the number of elements in a set in Python?",
        "options": [
            "len()",
            "count()",
            "size()",
            "length()"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(sum(x))",
        "options": [
            "6",
            "123",
            "Error",
            "None"
        ],
        "answer": 0
    },
    {
        "question": "How do you create a list of numbers from 1 to 10 in Python?",
        "options": [
            "[1, 10]",
            "[1:10]",
            "list(range(1, 11))",
            "list(range(1, 10))"
        ],
        "answer": 2
    },
    {
        "question": "What is the use of the 'global' keyword in Python?",
        "options": [
            "To define a global variable",
            "To create a global function",
            "To modify a global variable inside a function",
            "To access a global variable inside a function"
        ],
        "answer": 2
    },
    {
        "question": "What is the result of the following expression in Python?\n\nnot (True and False)",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following methods can be used to find the index of an item in a list?",
        "options": [
            "list.find(item)",
            "list.search(item)",
            "list.index(item)",
            "list.lookup(item)"
        ],
        "answer": 2
    },
    {
        "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nx.remove(2)\nprint(x)",
        "options": [
            "[1, 2, 3]",
            "[1, 3]",
            "[1, 3, 2]",
            "[2, 3]"
        ],
        "answer": 1
    },
    {
        "question": "Which method can be used to join elements of a list into a string?",
        "options": [
            "join()",
            "concat()",
            "append()",
            "combine()"
        ],
        "answer": 0
    },
    {
        "question": "What will be the output of the following code?\n\nx = [1, 2, 3]\ny = x.copy()\ny.append(4)\nprint(x)",
        "options": [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[1, 2]",
            "Error"
        ],
        "answer": 0
    },
    {
        "question": "Which method can be used to find the maximum value in a list?",
        "options": [
            "max()",
            "maximum()",
            "find_max()",
            "get_max()"
        ],
        "answer": 0
    },
    {
        "question": "What will be the output of the following code?\n\nx = [1, 2, 3, 4, 5]\nprint(x[1:4])",
        "options": [
            "[1, 2, 3, 4]",
            "[2, 3, 4]",
            "[1, 2, 3]",
            "[2, 3, 4, 5]"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following is not a keyword in Python?",
        "options": [
            "lambda",
            "def",
            "class",
            "print"
        ],
        "answer": 3
    },
    {
        "question": "What will be the output of the following code?\n\nx = {'a': 1, 'b': 2}\nx['c'] = 3\nprint(x)",
        "options": [
            "{'a': 1, 'b': 2}",
            "{'a': 1, 'b': 2, 'c': 3}",
            "{'a': 1, 'b': 2, 'c': 3, 'd': 4}",
            "{'c': 3, 'a': 1, 'b': 2}"
        ],
        "answer": 1
    },
    {
        "question": "What is the output of the following code?\n\nx = [1, 2, 3, 4, 5]\nprint(x[-3])",
        "options": [
            "3",
            "1",
            "5",
            "Error"
        ],
        "answer": 0
    },
    {
        "question": "What does the 'lambda' keyword do in Python?",
        "options": [
            "Defines an anonymous function",
            "Creates a new class",
            "Imports a module",
            "Defines a variable"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following methods can be used to convert a string to an integer in Python?",
        "options": [
            "int()",
            "str()",
            "convert()",
            "toInt()"
        ],
        "answer": 0
    },
    {
        "question": "What will be the output of the following code?\n\nx = [1, 2, 3]\ny = x\ny[0] = 4\nprint(x)",
        "options": [
            "[1, 2, 3]",
            "[4, 2, 3]",
            "[1, 4, 3]",
            "[1, 2, 4]"
        ],
        "answer": 1
    },
    {
        "question": "Which of the following statements is used to handle exceptions in Python?",
        "options": [
            "try",
            "except",
            "finally",
            "all of the above"
        ],
        "answer": 3
    },
    {
        "question": "What is the result of the following expression?\n\nTrue or False",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "answer": 0
    },
    {
        "question": "Which method is used to add an item to a list at a specific index?",
        "options": [
            "insert()",
            "add()",
            "append()",
            "push()"
        ],
        "answer": 0
    },
    {
        "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nx.append(4)\nprint(x)",
        "options": [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[1, 2, 3, 3]",
            "[1, 2, 4]"
        ],
        "answer": 1
    },
    {
        "question": "What does the 'not' keyword do in Python?",
        "options": [
            "Reverses the truth value",
            "Performs a logical AND",
            "Performs a logical OR",
            "Negates a value"
        ],
        "answer": 0
    },
    {
        "question": "What is the result of the expression 3 ** 2 in Python?",
        "options": [
            "6",
            "9",
            "3",
            "None"
        ],
        "answer": 1
    },
    {
        "question": "What will be the output of the following code?\n\nx = [1, 2, 3]\nx.pop()\nprint(x)",
        "options": [
            "[1, 2, 3]",
            "[1, 2]",
            "[2, 3]",
            "[1]"
        ],
        "answer": 1
    }
];
