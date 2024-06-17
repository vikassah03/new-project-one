const cssQuestions = [
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
      question: "Which CSS property is used to change the background color of an element?",
      options: [
        "color",
        "background-color",
        "bgcolor",
        "bg-color"
      ],
      answer: 1
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: [
        "#demo",
        ".demo",
        "element.demo",
        "id.demo"
      ],
      answer: 0
    },
    {
      question: "Which CSS property is used to control the text size of an element?",
      options: [
        "text-size",
        "font-size",
        "text-style",
        "font-style"
      ],
      answer: 1
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: 1
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      options: [
        "font",
        "font-family",
        "text-style",
        "font-style"
      ],
      answer: 1
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      options: [
        "h1.all {background-color:#FFFFFF;}",
        "all.h1 {background-color:#FFFFFF;}",
        "h1 {background-color:#FFFFFF;}",
        "h1:background {color:#FFFFFF;}"
      ],
      answer: 2
    },
    {
      question: "Which CSS property is used to make text bold?",
      options: [
        "font-weight",
        "text-style",
        "font-style",
        "bold"
      ],
      answer: 0
    },
    {
      question: "How do you display hyperlinks without an underline?",
      options: [
        "a {decoration:no-underline;}",
        "a {text-decoration:no-underline;}",
        "a {underline:none;}",
        "a {text-style:none;}"
      ],
      answer: 1
    },
    {
      question: "How do you make each word in a text start with a capital letter?",
      options: [
        "text-transform:capitalize",
        "transform:uppercase",
        "text-style:uppercase",
        "transform:capitalize"
      ],
      answer: 0
    },
    {
      question: "Which CSS property is used to change the left margin of an element?",
      options: [
        "margin-left",
        "padding-left",
        "indent",
        "spacing-left"
      ],
      answer: 0
    },
    {
      question: "How do you make a list that lists its items with squares?",
      options: [
        "list-type: square;",
        "list-style-type: square;",
        "type: square-list;",
        "style-type: square-list;"
      ],
      answer: 1
    },
    {
      question: "Which property is used to change the background color to red?",
      options: [
        "background-color: red;",
        "bg-color: red;",
        "color: red;",
        "background: red;"
      ],
      answer: 0
    },
    {
      question: "Which property is used to change the bottom margin of an element?",
      options: [
        "margin-bottom",
        "spacing-bottom",
        "padding-bottom",
        "bottom-margin"
      ],
      answer: 0
    },
    {
      question: "How do you change the text color of an element to red?",
      options: [
        "text-color: red;",
        "color: red;",
        "font-color: red;",
        "color-text: red;"
      ],
      answer: 1
    },
    {
      question: "Which property is used to change the right margin of an element?",
      options: [
        "margin-right",
        "spacing-right",
        "right-margin",
        "padding-right"
      ],
      answer: 0
    },
    {
      question: "How do you make a text italic?",
      options: [
        "text-style: italic;",
        "font-style: italic;",
        "italic: true;",
        "style: italic;"
      ],
      answer: 1
    },
    {
      question: "Which property is used to change the top margin of an element?",
      options: [
        "spacing-top",
        "margin-top",
        "top-margin",
        "padding-top"
      ],
      answer: 1
    },
    {
      question: "How do you make a background image fixed?",
      options: [
        "background-attachment:fixed;",
        "attachment:fixed;",
        "image-attachment:fixed;",
        "background-fixed:true;"
      ],
      answer: 0
    },
    {
      question: "Which property is used to change the color of the text?",
      options: [
        "text-color",
        "font-color",
        "color",
        "font-text"
      ],
      answer: 2
    },
    {
      question: "How do you round the borders of an element?",
      options: [
        "corner-style: round;",
        "border-style: round;",
        "corner-radius: round;",
        "border-radius: round;"
      ],
      answer: 3
    },
    {
      question: "Which property is used to change the space between lines of text?",
      options: [
        "line-height",
        "text-spacing",
        "spacing",
        "line-spacing"
      ],
      answer: 0
    },
    {
      question: "How do you make an element float to the right?",
      options: [
        "align: right;",
        "float: right;",
        "align: right;",
        "right: float;"
      ],
      answer: 1
    },
    {
      question: "Which property is used to change the color of the borders?",
      options: [
        "border-color",
        "border-style",
        "color-border",
        "border"
      ],
      answer: 0
    },
    {
      question: "How do you add a shadow to text?",
      options: [
        "text-shadow: 2px 2px #FF0000;",
        "shadow: 2px 2px #FF0000;",
        "text-effect: shadow 2px 2px #FF0000;",
        "text-style: shadow 2px 2px #FF0000;"
      ],
      answer: 0
    },
    {
      question: "Which property is used to change the size of an element's border?",
      options: [
        "border-size",
        "border-width",
        "size-border",
        "border-style"
      ],
      answer: 1
    },
    {
      question: "How do you make a text bold and underlined?",
      options: [
        "font: bold underline;",
        "text-style: bold underline;",
        "font-style: bold; text-style: underline;",
        "font-weight: bold; text-decoration: underline;"
      ],
      answer: 3
    },
    {
      question: "Which property is used to change the left padding of an element?",
      options: [
        "spacing-left",
        "indent-left",
        "padding-left",
        "left-padding"
      ],
      answer: 2
    },
    {
      question: "How do you make a text strikethrough?",
      options: [
        "font-style: strikethrough;",
        "text-decoration: line-through;",
        "style: strikethrough;",
        "text-style: line-through;"
      ],
      answer: 1
    },
    {
      question: "Which property is used to change the right padding of an element?",
      options: [
        "indent-right",
        "right-padding",
        "padding-right",
        "spacing-right"
      ],
      answer: 2
    },
    {
      question: "How do you change the font size of an element to 40 pixels?",
      options: [
        "font-size: 40px;",
        "size: 40px;",
        "text-size: 40px;",
        "font-style: 40px;"
      ],
      answer: 0
    }
    // Add more questions as needed
  ];
  
  export default cssQuestions;
  