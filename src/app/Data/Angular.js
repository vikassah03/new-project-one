export const questions = [
    {
        question: "What is Angular?",
        options: [
            "A programming language",
            "A JavaScript framework for building client-side applications",
            "A server-side framework built on Node.js",
            "A database management system"
        ],
        answer: 1
    },
    {
        question: "Which command is used to create a new Angular application?",
        options: [
            "ng build",
            "ng new",
            "ng generate",
            "ng start"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of *ngFor directive in Angular?",
        options: [
            "To add or remove HTML elements conditionally",
            "To create reusable components",
            "To iterate over a list of items and generate HTML for each",
            "To handle form submissions"
        ],
        answer: 2
    },
    {
        question: "Which decorator is used to define an input property in Angular?",
        options: [
            "@Input()",
            "@Prop()",
            "@Component()",
            "@Injectable()"
        ],
        answer: 0
    },
    {
        question: "What is a service in Angular?",
        options: [
            "A function that returns HTML content",
            "A function that performs specific tasks and can be shared across components",
            "A type of Angular directive",
            "A module that handles routing"
        ],
        answer: 1
    },
    {
        question: "What is HttpClient used for in Angular?",
        options: [
            "To create forms",
            "To make HTTP requests",
            "To manage application state",
            "To define routes"
        ],
        answer: 1
    },
    {
        question: "Which module is used to handle forms in Angular?",
        options: [
            "FormsModule",
            "RouterModule",
            "HttpClientModule",
            "NgFormModule"
        ],
        answer: 0
    },
    {
        question: "What does Angular CLI stand for?",
        options: [
            "Client Line Interface",
            "Command Line Interface",
            "Client Language Integration",
            "Command Language Interface"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of ng-template in Angular?",
        options: [
            "To create a reusable piece of UI that can be rendered conditionally",
            "To define the structure of a component",
            "To handle form submissions",
            "To create a routing module"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of canActivate guard in Angular routing?",
        options: [
            "To activate a component based on a condition",
            "To prevent access to a route based on a condition",
            "To load a lazy-loaded module",
            "To navigate to a specified route"
        ],
        answer: 1
    },
    {
        question: "How can you pass data from a parent to a child component?",
        options: [
            "Using event binding",
            "Using property binding",
            "Using template variables",
            "Using interpolation"
        ],
        answer: 1
    },
    {
        question: "Which Angular feature allows you to lazily load modules?",
        options: [
            "LazyLoad modules",
            "LazyModules",
            "Lazy Loading",
            "ngLazyLoad"
        ],
        answer: 2
    },
    {
        question: "What does the 'async' pipe do in Angular?",
        options: [
            "It asynchronously loads external stylesheets",
            "It asynchronously executes a function",
            "It subscribes to an Observable or Promise and returns the latest value it has emitted",
            "It delays the execution of a function until a condition is met"
        ],
        answer: 2
    },
    {
        question: "What is AOT compilation in Angular?",
        options: [
            "Ahead-of-Time compilation that converts Angular HTML and TypeScript code into efficient JavaScript code during the build phase",
            "A type of data binding in Angular",
            "Angular Object Templating",
            "A module that handles Angular routing"
        ],
        answer: 0
    },
    {
        question: "Which decorator is used to inject a service into a component in Angular?",
        options: [
            "@Component()",
            "@Inject()",
            "@Service()",
            "@Injectable()"
        ],
        answer: 3
    },
    {
        question: "What is Angular Universal?",
        options: [
            "A way to build native mobile applications using Angular",
            "A tool for server-side rendering of Angular applications",
            "A method to store application state centrally in Angular",
            "A feature to create universal components in Angular"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of ngOnChanges lifecycle hook in Angular?",
        options: [
            "To execute code when a component is initialized",
            "To perform actions after Angular projects external content into the component's view",
            "To react to changes in the input properties of a component",
            "To destroy the component when it is no longer needed"
        ],
        answer: 2
    },
    {
        question: "Which operator is used for two-way data binding in Angular?",
        options: [
            "=",
            "->",
            "<>",
            "[]"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of Angular router outlet?",
        options: [
            "To define a placeholder where Angular can dynamically load a component as per the current route",
            "To handle HTTP requests in Angular applications",
            "To define a reusable component",
            "To define routes in Angular applications"
        ],
        answer: 0
    },
    {
        question: "How can you subscribe to an Observable in Angular?",
        options: [
            "Using the subscribe method",
            "Using ngFor directive",
            "Using @observable decorator",
            "Using @subscribe decorator"
        ],
        answer: 0
    },
    {
        question: "What is Angular Ivy?",
        options: [
            "A version of Angular released in 2018",
            "A module used for testing Angular components",
            "The new compiler and runtime of Angular",
            "A tool for generating Angular documentation"
        ],
        answer: 2
    },
    {
        question: "What is a resolver in Angular?",
        options: [
            "A type of directive in Angular",
            "A module that handles form validations",
            "A service that performs route data retrieval before route activation",
            "A function that executes an HTTP request"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of a guard in Angular?",
        options: [
            "To guard against XSS attacks",
            "To guard against CSRF attacks",
            "To protect routes from unauthorized access",
            "To improve performance of Angular applications"
        ],
        answer: 2
    },
    {
        question: "Which Angular module is commonly used for HTTP client operations?",
        options: [
            "HttpModule",
            "HttpClientModule",
            "HttpService",
            "HttpRequestModule"
        ],
        answer: 1
    },
    {
        question: "What is Angular CLI command to generate a new component?",
        options: [
            "ng create component",
            "ng generate component",
            "ng add component",
            "ng build component"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of 'trackBy' function in *ngFor directive?",
        options: [
            "To iterate over a list of items",
            "To add tracking analytics to the loop",
            "To improve performance by identifying unique items in the list",
            "To conditionally add or remove elements"
        ],
        answer: 2
    },
    {
        question: "Which decorator is used to inject dependencies in Angular services?",
        options: [
            "@Inject()",
            "@Injectable()",
            "@Dependency()",
            "@Service()"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of TestBed in Angular testing?",
        options: [
            "To test HTTP requests",
            "To test components with their templates and dependencies",
            "To mock services",
            "To test routing configurations"
        ],
        answer: 1
    },
    {
        question: "How can you share data between sibling components in Angular?",
        options: [
            "Using services",
            "Using ViewChild decorator",
            "Using @Input and @Output decorators",
            "Using template variables"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of Angular decorators like @Component and @Injectable?",
        options: [
            "To style Angular components",
            "To define the structure of Angular services",
            "To provide metadata about classes",
            "To create Angular modules"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of Angular pipes?",
        options: [
            "To communicate with external APIs",
            "To transform data before displaying it in the view",
            "To create animations in Angular applications",
            "To handle form validations"
        ],
        answer: 1
    },
    {
        question: "Which lifecycle hook is called once after Angular has fully initialized a component's view?",
        options: [
            "ngOnInit",
            "ngAfterViewInit",
            "ngOnChanges",
            "ngAfterContentInit"
        ],
        answer: 1
    },
]
