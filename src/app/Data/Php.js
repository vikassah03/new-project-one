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
  },
  {
    question: "Which of the following methods can be used to send an HTTP POST request in PHP?",
    options: [
      "curl",
      "file_get_contents()",
      "fopen()",
      "All of the above"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'explode()' function in PHP?",
    options: [
      "To break a string into an array",
      "To join array elements into a string",
      "To remove white spaces from a string",
      "To convert a string to an integer"
    ],
    answer: 0
  },
  {
    question: "How do you handle exceptions in PHP?",
    options: [
      "Using try and catch blocks",
      "Using error_reporting()",
      "Using @ operator",
      "Using trigger_error()"
    ],
    answer: 0
  },
  {
    question: "What does the 'die()' function do in PHP?",
    options: [
      "Terminates the script",
      "Displays an error message",
      "Creates a new process",
      "Restarts the script"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'isset()' function in PHP?",
    options: [
      "To check if a variable is set and is not NULL",
      "To check if a variable is empty",
      "To unset a variable",
      "To initialize a variable"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'include' and 'require' in PHP?",
    options: [
      "'include' gives a warning, 'require' gives a fatal error",
      "'require' gives a warning, 'include' gives a fatal error",
      "'include' is used for functions, 'require' for classes",
      "There is no difference"
    ],
    answer: 0
  },
  {
    question: "Which function is used to send a raw HTTP header in PHP?",
    options: [
      "header()",
      "setheader()",
      "sendheader()",
      "http_header()"
    ],
    answer: 0
  },
  {
    question: "How do you get information about an image in PHP?",
    options: [
      "getimagesize()",
      "imageinfo()",
      "imginfo()",
      "getimgsize()"
    ],
    answer: 0
  },
  {
    question: "Which PHP function is used to get the client's IP address?",
    options: [
      "$_SERVER['REMOTE_ADDR']",
      "get_ip()",
      "client_ip()",
      "$_ENV['REMOTE_ADDR']"
    ],
    answer: 0
  },
  {
    question: "What is the output of the following PHP code? echo 'Hello ' . 1 + 2 . ' World';",
    options: [
      "Hello 3 World",
      "Hello 12 World",
      "Hello 1 World",
      "Hello 3"
    ],
    answer: 0
  },
  {
    question: "What is the difference between '==' and '===' in PHP?",
    options: [
      "'==' checks value, '===' checks value and type",
      "'==' checks value and type, '===' checks value",
      "There is no difference",
      "'===' checks type, '==' checks value"
    ],
    answer: 0
  },
  {
    question: "Which function in PHP is used to find files?",
    options: [
      "glob()",
      "find()",
      "search()",
      "locate()"
    ],
    answer: 0
  },
  {
    question: "What does 'PDO' stand for in PHP?",
    options: [
      "PHP Data Objects",
      "PHP Database Objects",
      "PHP Data Operations",
      "PHP Development Objects"
    ],
    answer: 0
  },
  {
    question: "How can you retrieve the keys of an array in PHP?",
    options: [
      "array_keys()",
      "array_values()",
      "array_key()",
      "array_get_keys()"
    ],
    answer: 0
  },
  {
    question: "What does the 'foreach' loop do in PHP?",
    options: [
      "Iterates over an array",
      "Iterates over an object",
      "Iterates over a string",
      "Both 1 and 2"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of the 'final' keyword in PHP?",
    options: [
      "To prevent method overriding",
      "To declare a constant",
      "To declare an abstract class",
      "To stop script execution"
    ],
    answer: 0
  },
  {
    question: "Which PHP function is used to create a directory?",
    options: [
      "mkdir()",
      "createdir()",
      "make_directory()",
      "newdir()"
    ],
    answer: 0
  },
  {
    question: "What does the 'var_dump()' function do in PHP?",
    options: [
      "Displays structured information about one or more variables",
      "Dumps the contents of a file",
      "Sets a variable's value to NULL",
      "Removes a variable"
    ],
    answer: 0
  },
  {
    question: "Which function is used to generate a random number in PHP?",
    options: [
      "rand()",
      "random()",
      "generate()",
      "create_random()"
    ],
    answer: 0
  },
  {
    question: "How can you terminate script execution in PHP?",
    options: [
      "exit()",
      "die()",
      "Both 1 and 2",
      "stop()"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of the 'header()' function in PHP?",
    options: [
      "To send raw HTTP headers",
      "To set HTTP status codes",
      "To redirect to a different URL",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which function is used to create an associative array in PHP?",
    options: [
      "array()",
      "associative_array()",
      "create_assoc_array()",
      "assoc_array()"
    ],
    answer: 0
  },
  {
    question: "What does the 'error_reporting()' function do in PHP?",
    options: [
      "Sets which PHP errors are reported",
      "Reports PHP errors to a log file",
      "Disables all error reporting",
      "Enables error reporting"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'serialize()' function in PHP?",
    options: [
      "Converts a PHP value to a storable representation",
      "Deserializes a stored value",
      "Converts an array to a string",
      "Converts an object to a JSON string"
    ],
    answer: 0
  },
  {
    question: "How can you send a raw HTTP header in PHP?",
    options: [
      "header()",
      "sendheader()",
      "raw_header()",
      "http_header()"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'include()' and 'require()' in PHP?",
    options: [
      "'include()' gives a warning, 'require()' gives a fatal error",
      "'require()' gives a warning, 'include()' gives a fatal error",
      "'include()' is for functions, 'require()' is for classes",
      "There is no difference"
    ],
    answer: 0
  },
  {
    question: "Which function is used to check if a variable is an array in PHP?",
    options: [
      "is_array()",
      "isarr()",
      "check_array()",
      "array_check()"
    ],
    answer: 0
  },
  {
    question: "How do you create a cookie in PHP?",
    options: [
      "setcookie()",
      "create_cookie()",
      "set_cookie()",
      "make_cookie()"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'unset()' function in PHP?",
    options: [
      "To destroy a variable",
      "To set a variable to NULL",
      "To remove an array element",
      "To destroy a session"
    ],
    answer: 0
  },
  {
    question: "Which function is used to start output buffering in PHP?",
    options: [
      "ob_start()",
      "start_output_buffering()",
      "buffer_start()",
      "ob_begin()"
    ],
    answer: 0
  },
  {
    question: "What is the use of the 'echo' statement in PHP?",
    options: [
      "To output text",
      "To execute a command",
      "To create a function",
      "To define a class"
    ],
    answer: 0
  },
  {
    question: "Which of the following is not a valid PHP function to set a cookie?",
    options: [
      "setcookie()",
      "setcookie()",
      "createcookie()",
      "None of the above"
    ],
    answer: 2
  },
  {
    question: "How can you check if a file is readable in PHP?",
    options: [
      "is_readable()",
      "can_read()",
      "readable()",
      "file_readable()"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a PHP magic constant?",
    options: [
      "__LINE__",
      "__FILE__",
      "__DIR__",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you create an array with the same keys and values in PHP?",
    options: [
      "array_combine()",
      "array_fill_keys()",
      "array_map()",
      "array_fill()"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of the 'list()' function in PHP?",
    options: [
      "To assign variables as if they were an array",
      "To list all variables",
      "To create an array",
      "To list all functions"
    ],
    answer: 0
  },
  {
    question: "Which function is used to parse an INI file in PHP?",
    options: [
      "parse_ini_file()",
      "ini_parse()",
      "file_parse()",
      "parse_file()"
    ],
    answer: 0
  },
  {
    question: "How do you find the position of the first occurrence of a substring in a string in PHP?",
    options: [
      "strpos()",
      "find_pos()",
      "str_pos()",
      "find()"
    ],
    answer: 0
  },
  {
    question: "What does the 'spl_autoload_register()' function do in PHP?",
    options: [
      "Registers a function for autoloading classes",
      "Loads a file",
      "Registers a class",
      "Unregisters a class"
    ],
    answer: 0
  },
  {
    question: "How do you read a file line by line in PHP?",
    options: [
      "fgets()",
      "file()",
      "readline()",
      "read_file()"
    ],
    answer: 0
  },
  {
    question: "Which function in PHP is used to generate a unique ID?",
    options: [
      "uniqid()",
      "uniqueid()",
      "generate_id()",
      "getuniqueid()"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'microtime()' function in PHP?",
    options: [
      "Returns the current Unix timestamp with microseconds",
      "Returns the current date and time",
      "Returns the current memory usage",
      "Returns the current CPU usage"
    ],
    answer: 0
  },
  {
    question: "Which function in PHP is used to extract the last error message?",
    options: [
      "error_get_last()",
      "last_error()",
      "get_last_error()",
      "error_last()"
    ],
    answer: 0
  },
  {
    question: "Which function in PHP is used to split a string into an array?",
    options: [
      "explode()",
      "split()",
      "str_split()",
      "array_split()"
    ],
    answer: 0
  },
  {
    question: "What does the 'array_diff()' function do in PHP?",
    options: [
      "Compares arrays and returns the differences",
      "Compares arrays and returns the similarities",
      "Merges two arrays",
      "Splits an array"
    ],
    answer: 0
  },
  {
    question: "How do you set a default value for a function parameter in PHP?",
    options: [
      "function foo($param = 'default')",
      "function foo($param : 'default')",
      "function foo(default: 'default')",
      "function foo('default' = $param)"
    ],
    answer: 0
  },
  {
    question: "Which function is used to generate a hash value in PHP?",
    options: [
      "hash()",
      "generate_hash()",
      "create_hash()",
      "make_hash()"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'session_unset()' function in PHP?",
    options: [
      "Frees all session variables",
      "Destroys the session",
      "Ends the session",
      "Sets a session variable"
    ],
    answer: 0
  },
  {
    question: "What does the 'mysqli_real_escape_string()' function do in PHP?",
    options: [
      "Escapes special characters in a string for use in an SQL statement",
      "Escapes special characters in a URL",
      "Escapes HTML special characters",
      "Escapes shell commands"
    ],
    answer: 0
  },
  {
    question: "Which function is used to send emails in PHP?",
    options: [
      "mail()",
      "sendmail()",
      "email()",
      "send()"
    ],
    answer: 0
  },
  {
    question: "What does the 'json_encode()' function do in PHP?",
    options: [
      "Encodes a PHP value to JSON format",
      "Decodes a JSON string",
      "Encodes a string to base64",
      "Encodes a URL"
    ],
    answer: 0
  },
  {
    question: "Which function is used to convert an array into a JSON string in PHP?",
    options: [
      "json_encode()",
      "json_decode()",
      "array_to_json()",
      "json_array()"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'print' and 'echo' in PHP?",
    options: [
      "'print' returns a value, 'echo' does not",
      "'echo' returns a value, 'print' does not",
      "There is no difference",
      "'print' is faster than 'echo'"
    ],
    answer: 0
  },
  {
    question: "How do you calculate the length of an array in PHP?",
    options: [
      "count()",
      "length()",
      "size()",
      "array_length()"
    ],
    answer: 0
  },
  {
    question: "What does the 'htmlspecialchars()' function do in PHP?",
    options: [
      "Converts special characters to HTML entities",
      "Strips HTML tags from a string",
      "Encodes a string to base64",
      "Escapes shell commands"
    ],
    answer: 0
  },
  {
    question: "How can you find the position of the last occurrence of a substring in a string in PHP?",
    options: [
      "strrpos()",
      "strpos()",
      "strlast()",
      "strpos_last()"
    ],
    answer: 0
  },
  {
    question: "Which function is used to return the number of characters in a string in PHP?",
    options: [
      "strlen()",
      "count()",
      "strcount()",
      "length()"
    ],
    answer: 0
  },
  {
    question: "How can you remove the whitespace from the beginning and end of a string in PHP?",
    options: [
      "trim()",
      "strip()",
      "cut()",
      "remove_space()"
    ],
    answer: 0
  },
  {
    question: "What does the 'array_merge()' function do in PHP?",
    options: [
      "Merges two or more arrays",
      "Splits an array into smaller arrays",
      "Finds the differences between two arrays",
      "Finds the intersection of two arrays"
    ],
    answer: 0
  },
  {
    question: "How do you create a constant in PHP?",
    options: [
      "define('NAME', 'value');",
      "const NAME = 'value';",
      "constant NAME = 'value';",
      "Both 1 and 2"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of the 'filter_var()' function in PHP?",
    options: [
      "Validates and filters a variable",
      "Sanitizes a string",
      "Filters an array",
      "Removes elements from an array"
    ],
    answer: 0
  },
  {
    question: "How can you retrieve the current script's directory in PHP?",
    options: [
      "__DIR__",
      "dirname(__FILE__)",
      "getcwd()",
      "Both 1 and 2"
    ],
    answer: 3
  },
  {
    question: "What does the 'array_key_exists()' function do in PHP?",
    options: [
      "Checks if the specified key exists in the array",
      "Checks if the specified value exists in the array",
      "Returns the value of the specified key in the array",
      "Returns the index of the specified key in the array"
    ],
    answer: 0
  },
  {
    question: "How do you generate a random string in PHP?",
    options: [
      "Using the 'random_bytes()' function",
      "Using the 'mt_rand()' function",
      "Using the 'uniqid()' function",
      "Using the 'generate_random()' function"
    ],
    answer: 0
  },
  {
    question: "Which function is used to delete a cookie in PHP?",
    options: [
      "setcookie() with a past expiration date",
      "delete_cookie()",
      "remove_cookie()",
      "unset_cookie()"
    ],
    answer: 0
  },
  {
    question: "What does the 'file_get_contents()' function do in PHP?",
    options: [
      "Reads the entire file into a string",
      "Writes a string to a file",
      "Gets the contents of a file line by line",
      "Gets the file's metadata"
    ],
    answer: 0
  },
  {
    question: "How can you encode a string in base64 in PHP?",
    options: [
      "base64_encode()",
      "base64_decode()",
      "encode_base64()",
      "base64_string()"
    ],
    answer: 0
  },
  {
    question: "Which function is used to decode a JSON string in PHP?",
    options: [
      "json_decode()",
      "json_encode()",
      "decode_json()",
      "json_string_decode()"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'isset()' function in PHP?",
    options: [
      "Checks if a variable is set and is not NULL",
      "Checks if a variable is empty",
      "Sets a variable",
      "Unsets a variable"
    ],
    answer: 0
  },
  {
    question: "Which function is used to stop the script execution in PHP?",
    options: [
      "exit()",
      "stop()",
      "terminate()",
      "end()"
    ],
    answer: 0
  },
  {
    question: "How do you connect to a PostgreSQL database in PHP?",
    options: [
      "pg_connect()",
      "pg_connect_db()",
      "pgsql_connect()",
      "pgsql_db_connect()"
    ],
    answer: 0
  },
  {
    question: "What does the 'session_destroy()' function do in PHP?",
    options: [
      "Destroys all data associated with the current session",
      "Unsets a session variable",
      "Resets session variables to their default values",
      "Ends the script"
    ],
    answer: 0
  },
  {
    question: "Which function is used to set headers in PHP?",
    options: [
      "header()",
      "setheader()",
      "sendheader()",
      "http_header()"
    ],
    answer: 0
  }
];
