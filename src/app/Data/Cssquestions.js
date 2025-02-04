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
  },
  {
    question: "How do you select elements with the class name 'example'?",
    options: [
      ".example",
      "#example",
      "example",
      "*example"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the text alignment?",
    options: [
      "text-align",
      "align",
      "alignment",
      "text-style"
    ],
    answer: 0
  },
  {
    question: "How do you add a border to an element?",
    options: [
      "border: 1px solid black;",
      "border-style: solid black;",
      "border-width: 1px;",
      "border-color: black;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the width of an element?",
    options: [
      "width",
      "size",
      "element-width",
      "content-width"
    ],
    answer: 0
  },
  {
    question: "How do you set the height of an element?",
    options: [
      "height",
      "size",
      "element-height",
      "content-height"
    ],
    answer: 0
  },
  {
    question: "Which property is used to specify the style of the list item marker?",
    options: [
      "list-style-type",
      "list-type",
      "item-style-type",
      "marker-style"
    ],
    answer: 0
  },
  {
    question: "How do you make an element hidden?",
    options: [
      "visibility: hidden;",
      "display: none;",
      "visibility: none;",
      "display: hidden;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to add or subtract space between the letters of a text?",
    options: [
      "letter-spacing",
      "text-spacing",
      "character-spacing",
      "spacing"
    ],
    answer: 0
  },
  {
    question: "How do you create a transition effect?",
    options: [
      "transition",
      "transition-effect",
      "transition-style",
      "effect"
    ],
    answer: 0
  },
  {
    question: "How do you set the minimum width of an element?",
    options: [
      "min-width",
      "minimum-width",
      "element-min-width",
      "content-min-width"
    ],
    answer: 0
  },
  {
    question: "How do you set the maximum height of an element?",
    options: [
      "max-height",
      "maximum-height",
      "element-max-height",
      "content-max-height"
    ],
    answer: 0
  },
  {
    question: "How do you center a block element horizontally?",
    options: [
      "margin: 0 auto;",
      "text-align: center;",
      "align: center;",
      "padding: center;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the indentation of the first line of text?",
    options: [
      "text-indent",
      "indent",
      "first-line-indent",
      "text-indent"
    ],
    answer: 0
  },
  {
    question: "How do you make an element take up the full width of its parent?",
    options: [
      "width: 100%;",
      "width: full;",
      "size: full;",
      "full-width: true;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the shadow of a box?",
    options: [
      "box-shadow",
      "shadow",
      "element-shadow",
      "box-effect"
    ],
    answer: 0
  },
  {
    question: "How do you set the transparency of an element?",
    options: [
      "opacity",
      "transparency",
      "visible",
      "alpha"
    ],
    answer: 0
  },
  {
    question: "Which property is used to add space inside an element, between the element and its border?",
    options: [
      "padding",
      "margin",
      "spacing",
      "border-spacing"
    ],
    answer: 0
  },
  {
    question: "How do you set the border radius of an element to 50%?",
    options: [
      "border-radius: 50%;",
      "border-radius: round;",
      "radius: 50%;",
      "border-round: 50%;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to change the alignment of flex items?",
    options: [
      "align-items",
      "justify-content",
      "align-content",
      "flex-align"
    ],
    answer: 0
  },
  {
    question: "How do you set the flex direction to column?",
    options: [
      "flex-direction: column;",
      "flex: column;",
      "direction: column;",
      "flex-style: column;"
    ],
    answer: 0
  },
  {
    question: "How do you wrap flex items in a flex container?",
    options: [
      "flex-wrap",
      "wrap-items",
      "flex: wrap",
      "flex-item-wrap"
    ],
    answer: 0
  },
  {
    question: "Which property is used to specify the animation duration?",
    options: [
      "animation-duration",
      "duration",
      "animation-time",
      "time-duration"
    ],
    answer: 0
  },
  {
    question: "How do you set a gradient background?",
    options: [
      "background: linear-gradient(to right, red, blue);",
      "background-gradient: linear-gradient(to right, red, blue);",
      "background-style: gradient(to right, red, blue);",
      "gradient: linear-gradient(to right, red, blue);"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the gap between grid items?",
    options: [
      "grid-gap",
      "gap",
      "grid-spacing",
      "spacing"
    ],
    answer: 0
  },
  {
    question: "How do you define a grid template with two columns?",
    options: [
      "grid-template-columns: 1fr 1fr;",
      "grid-template: columns 1fr 1fr;",
      "grid-columns: 1fr 1fr;",
      "template-columns: 1fr 1fr;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the size of a background image?",
    options: [
      "background-size",
      "background-image-size",
      "image-size",
      "background-style"
    ],
    answer: 0
  },
  {
    question: "How do you position a background image at the top right?",
    options: [
      "background-position: top right;",
      "background-align: top right;",
      "background-placement: top right;",
      "position: background top right;"
    ],
    answer: 0
  },
  {
    question: "How do you set the z-index of an element?",
    options: [
      "z-index: 10;",
      "index: 10;",
      "layer: 10;",
      "stack: 10;"
    ],
    answer: 0
  },
  {
    question: "How do you set the display of an element to inline?",
    options: [
      "display: inline;",
      "inline: true;",
      "element-display: inline;",
      "display-style: inline;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to specify the type of cursor to be displayed?",
    options: [
      "cursor",
      "pointer",
      "mouse",
      "display-cursor"
    ],
    answer: 0
  },
  {
    question: "How do you set the position of an element to absolute?",
    options: [
      "position: absolute;",
      "absolute: true;",
      "element-position: absolute;",
      "position-style: absolute;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to specify the stacking order of elements?",
    options: [
      "z-index",
      "index",
      "stack-order",
      "layer-order"
    ],
    answer: 0
  },
  {
    question: "How do you make an element unselectable?",
    options: [
      "user-select: none;",
      "select: none;",
      "unselectable: true;",
      "user-select: no;"
    ],
    answer: 0
  },
  {
    question: "Which property is used to set the number of columns in a grid layout?",
    options: [
      "grid-template-columns",
      "grid-columns",
      "grid-layout",
      "grid-template"
    ],
    answer: 0
  }
    // Add more questions as needed
  ];
  
  export default cssQuestions;
  