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
    {
        question: "What is Angular's ChangeDetectionStrategy?",
        options: [
            "A strategy to manage component lifecycles",
            "A technique for optimizing DOM updates",
            "A method for handling HTTP requests",
            "A process for dependency injection"
        ],
        answer: 1
    },
    {
        question: "What is Angular's ViewChild decorator?",
        options: [
            "To create child components",
            "To access a child component or directive",
            "To inject dependencies into components",
            "To manage application state"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of Angular's Renderer2?",
        options: [
            "To manage form validation",
            "To create animations",
            "To safely interact with the DOM",
            "To handle routing"
        ],
        answer: 2
    },
    {
        question: "How can you define routes in Angular?",
        options: [
            "Using RouteModule",
            "Using RouterModule",
            "Using RoutesModule",
            "Using RouteDecorator"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of Angular's @Output decorator?",
        options: [
            "To define output properties",
            "To emit events to parent components",
            "To inject services",
            "To create form controls"
        ],
        answer: 1
    },
    {
        question: "What is Angular's structural directive?",
        options: [
            "A directive that changes the DOM structure",
            "A directive for handling forms",
            "A directive for HTTP requests",
            "A directive for routing"
        ],
        answer: 0
    },
    {
        question: "What is Angular's reactive form?",
        options: [
            "A form built using template-driven approach",
            "A form built using reactive approach",
            "A form for handling HTTP requests",
            "A form for handling animations"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of Angular's ngSwitch directive?",
        options: [
            "To iterate over a list of items",
            "To add or remove elements conditionally",
            "To switch between different components",
            "To handle form validations"
        ],
        answer: 1
    },
    {
        question: "How can you create a custom pipe in Angular?",
        options: [
            "Using @Pipe decorator",
            "Using @CustomPipe decorator",
            "Using @Directive decorator",
            "Using @Component decorator"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of Angular's ViewEncapsulation?",
        options: [
            "To encapsulate services",
            "To encapsulate component styles",
            "To encapsulate modules",
            "To encapsulate routes"
        ],
        answer: 1
    },
    {
        question: "What is Angular's OnPush change detection strategy?",
        options: [
            "A strategy to update the view on each change",
            "A strategy to update the view only on specific events",
            "A strategy to update the view on HTTP requests",
            "A strategy to update the view on form submissions"
        ],
        answer: 1
    },
    {
        question: "How can you create a service in Angular?",
        options: [
            "Using ng create service",
            "Using ng generate service",
            "Using ng add service",
            "Using ng build service"
        ],
        answer: 1
    },
    {
        question: "What is Angular's NgModule?",
        options: [
            "A decorator for defining modules",
            "A decorator for defining components",
            "A decorator for defining services",
            "A decorator for defining pipes"
        ],
        answer: 0
    },
    {
        question: "What is Angular's ElementRef?",
        options: [
            "A reference to a DOM element",
            "A reference to a service",
            "A reference to a module",
            "A reference to a route"
        ],
        answer: 0
    },
    {
        question: "What is Angular's HttpInterceptor?",
        options: [
            "A service for handling HTTP requests",
            "A service for handling HTTP responses",
            "A service for intercepting HTTP requests and responses",
            "A service for handling routing"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of Angular's ngClass directive?",
        options: [
            "To dynamically add or remove CSS classes",
            "To dynamically add or remove HTML elements",
            "To dynamically add or remove form controls",
            "To dynamically add or remove routes"
        ],
        answer: 0
    },
    {
        question: "What is Angular's ngModel directive?",
        options: [
            "To bind form controls to model properties",
            "To bind routes to components",
            "To bind services to components",
            "To bind modules to components"
        ],
        answer: 0
    },
    {
        question: "What is Angular's RendererFactory2?",
        options: [
            "A factory for creating components",
            "A factory for creating services",
            "A factory for creating renderers",
            "A factory for creating modules"
        ],
        answer: 2
    },
    {
        question: "What is Angular's NgZone?",
        options: [
            "A service for managing application state",
            "A service for handling change detection",
            "A service for managing zones",
            "A service for handling routing"
        ],
        answer: 1
    },
    {
        question: "What is Angular's HttpBackend?",
        options: [
            "A backend for handling HTTP requests",
            "A backend for handling HTTP responses",
            "A backend for handling HTTP interceptors",
            "A backend for handling routing"
        ],
        answer: 0
    },
    {
        question: "What is Angular's HttpParams?",
        options: [
            "A class for handling HTTP parameters",
            "A class for handling HTTP headers",
            "A class for handling HTTP interceptors",
            "A class for handling HTTP requests"
        ],
        answer: 0
    },
    {
        question: "What is Angular's HttpHeaders?",
        options: [
            "A class for handling HTTP parameters",
            "A class for handling HTTP headers",
            "A class for handling HTTP interceptors",
            "A class for handling HTTP requests"
        ],
        answer: 1
    },
    {
        question: "What is Angular's HttpErrorResponse?",
        options: [
            "A class for handling HTTP parameters",
            "A class for handling HTTP headers",
            "A class for handling HTTP errors",
            "A class for handling HTTP requests"
        ],
        answer: 2
    },
    {
        question: "What is Angular's HttpEvent?",
        options: [
            "An event for handling HTTP parameters",
            "An event for handling HTTP headers",
            "An event for handling HTTP errors",
            "An event for handling HTTP requests"
        ],
        answer: 3
    },
    {
        question: "What is Angular's HttpEventType?",
        options: [
            "A type for handling HTTP parameters",
            "A type for handling HTTP headers",
            "A type for handling HTTP events",
            "A type for handling HTTP requests"
        ],
        answer: 2
    },
    {
        question: "What is Angular's HttpHeaderResponse?",
        options: [
            "A response for handling HTTP parameters",
            "A response for handling HTTP headers",
            "A response for handling HTTP events",
            "A response for handling HTTP requests"
        ],
        answer: 1
    },
    {
        question: "What is Angular's HttpRequest?",
        options: [
            "A request for handling HTTP parameters",
            "A request for handling HTTP headers",
            "A request for handling HTTP events",
            "A request for handling HTTP requests"
        ],
        answer: 3
    },
    {
        question: "What is Angular's HttpResponse?",
        options: [
            "A response for handling HTTP parameters",
            "A response for handling HTTP headers",
            "A response for handling HTTP events",
            "A response for handling HTTP requests"
        ],
        answer: 3
    },
    {
        question: "What is Angular's HttpResponseBase?",
        options: [
            "A base class for handling HTTP responses",
            "A base class for handling HTTP headers",
            "A base class for handling HTTP events",
            "A base class for handling HTTP requests"
        ],
        answer: 0
    },
    {
        question: "What is Angular's HttpUrlEncodingCodec?",
        options: [
            "A codec for encoding HTTP URLs",
            "A codec for encoding HTTP headers",
            "A codec for encoding HTTP events",
            "A codec for encoding HTTP requests"
        ],
        answer: 0
    }
];
