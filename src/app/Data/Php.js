export const questions = [
    {
      question: "What does PHP stand for?",
      options: [
        "Personal Hypertext Processor",
        "Private Home Page",
        "PHP: Hypertext Preprocessor",
        "Personal Hyper Processor"
      ],
      answer: 2
    },
    {
      question: "Which of the following is the correct way to start a PHP block of code?",
      options: [
        "&lt;php&gt;",
        "&lt;?php&gt;",
        "&lt;script&gt;",
        "&lt;?&gt;"
      ],
      answer: 1
    },
    {
      question: "Which of the following is a PHP superglobal variable?",
      options: [
        "$GLOBALS",
        "$_SERVER",
        "$_POST",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "Which function is used to output text in PHP?",
      options: [
        "echo",
        "print",
        "write",
        "output"
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correct variable declaration in PHP?",
      options: [
        "var $variable;",
        "$variable = value;",
        "dim variable as integer;",
        "int $variable;"
      ],
      answer: 1
    },
    {
      question: "How do you create a function in PHP?",
      options: [
        "functionName()",
        "function functionName()",
        "create functionName()",
        "def functionName()"
      ],
      answer: 1
    },
    {
      question: "How can you get the length of a string in PHP?",
      options: [
        "length($string)",
        "strlen($string)",
        "count($string)",
        "strcount($string)"
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correct way to include a file in PHP?",
      options: [
        "include 'file.php';",
        "include_file('file.php');",
        "require_file('file.php');",
        "add_file('file.php');"
      ],
      answer: 0
    },
    {
      question: "Which of the following is used to check if a file exists in PHP?",
      options: [
        "file_exists()",
        "is_file()",
        "file_exist()",
        "is_exist()"
      ],
      answer: 0
    },
    {
      question: "How do you define a constant in PHP?",
      options: [
        "const NAME = 'value';",
        "define('NAME', 'value');",
        "constant NAME = 'value';",
        "constant('NAME', 'value');"
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correct way to start a session in PHP?",
      options: [
        "session_begin();",
        "session_start();",
        "start_session();",
        "begin_session();"
      ],
      answer: 1
    },
    {
      question: "Which of the following is the correct way to connect to a MySQL database in PHP?",
      options: [
        "$conn = new mysqli('localhost', 'username', 'password', 'database');",
        "$conn = connect('localhost', 'username', 'password', 'database');",
        "$conn = mysqli_connect('localhost', 'username', 'password', 'database');",
        "$conn = mysql_connect('localhost', 'username', 'password', 'database');"
      ],
      answer: 2
    },
    {
      question: "Which of the following is a valid way to comment in PHP?",
      options: [
        "// comment",
        "# comment",
        "/* comment */",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "Which function is used to get the current timestamp in PHP?",
      options: [
        "current_timestamp()",
        "date()",
        "time()",
        "now()"
      ],
      answer: 2
    },
    {
      question: "How do you check if a variable is set in PHP?",
      options: [
        "isset($variable)",
        "is_set($variable)",
        "var_set($variable)",
        "variable_isset($variable)"
      ],
      answer: 0
    },
    {
      question: "How can you concatenate two strings in PHP?",
      options: [
        "$string1 . $string2",
        "$string1 + $string2",
        "concat($string1, $string2)",
        "$string1 & $string2"
      ],
      answer: 0
    },
    {
      question: "Which function is used to sort an array in ascending order in PHP?",
      options: [
        "sort()",
        "asort()",
        "ksort()",
        "rsort()"
      ],
      answer: 0
    },
    {
      question: "How do you access a global variable within a function in PHP?",
      options: [
        "global $variable;",
        "$GLOBALS['variable'];",
        "use $variable;",
        "Both 1 and 2"
      ],
      answer: 3
    },
    {
      question: "What will be the output of echo 10 + '10';?",
      options: [
        "10",
        "20",
        "1010",
        "Error"
      ],
      answer: 1
    },
    {
      question: "Which of the following is not a data type in PHP?",
      options: [
        "String",
        "Integer",
        "Boolean",
        "Character"
      ],
      answer: 3
    },
    {
      question: "How can you create an array in PHP?",
      options: [
        "$array = array();",
        "$array = [];",
        "Both 1 and 2",
        "None of the above"
      ],
      answer: 2
    },
    {
      question: "How do you define a class in PHP?",
      options: [
        "class ClassName {}",
        "define class ClassName {}",
        "class ClassName[] {}",
        "define ClassName() {}"
      ],
      answer: 0
    },
    {
      question: "Which function is used to get the type of a variable in PHP?",
      options: [
        "get_type()",
        "type()",
        "gettype()",
        "typeof()"
      ],
      answer: 2
    },
    {
      question: "How can you convert a string to an integer in PHP?",
      options: [
        "intval()",
        "to_int()",
        "strtoint()",
        "convert()"
      ],
      answer: 0
    },
    {
      question: "Which of the following functions will return true if a variable is an array?",
      options: [
        "is_array()",
        "array_check()",
        "is_arr()",
        "check_array()"
      ],
      answer: 0
    },
    {
      question: "What is the correct way to open a file for reading in PHP?",
      options: [
        "fopen('file.txt', 'r')",
        "fopen('file.txt', 'read')",
        "open('file.txt', 'r')",
        "open('file.txt', 'read')"
      ],
      answer: 0
    },
    {
      question: "How do you add a comment in PHP?",
      options: [
        "// comment",
        "/* comment */",
        "# comment",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "Which of the following function checks if a variable is of type integer?",
      options: [
        "is_integer()",
        "is_int()",
        "is_number()",
        "Both 1 and 2"
      ],
      answer: 3
    },
    {
      question: "What is the result of 3 + 2 . '5'; in PHP?",
      options: [
        "10",
        "325",
        "55",
        "75"
      ],
      answer: 2
    },
    {
      question: "Which of the following is the correct way to create an object in PHP?",
      options: [
        "$object = new ClassName();",
        "$object = create_object(ClassName);",
        "$object = create ClassName();",
        "$object = new(ClassName);"
      ],
      answer: 0
    },
    {
      question: "Which function is used to delete a file in PHP?",
      options: [
        "delete()",
        "remove()",
        "unlink()",
        "del()"
      ],
      answer: 2
    }
  ];
  