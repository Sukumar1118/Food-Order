# What is another way of starting the build of the project?

● We will be `creating scripts` instead of using “npx parcel index.html”.
● We can create `different scripts` for starting our project in Development and Production.

    In package.json , in the script section write the following command.
    "Scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html"
    }
Note: If you’re not sure how to `start the project in a new company` then find these 
        `scripts in package.json` and use them.

# Scripts in package.json:
● In a package.json file, the scripts section is used to `define custom commands` that 
    you can run using `npm run <script-name>`.
● These scripts can `automate tasks like building, testing, linting, and starting your application`.
● `npm run start` is the `general form & correct way` for running any script.
● `npm start` is a `shortcut` specifically for the "start" script.

# Introducing JSX - why JSX?
● Before we begin, we have to remove the existing React Code from App.js where we used 
        React.createElement() for displaying content on the webpage but its syntax is very bad.
● It’s not developer friendly, and very hard to read. To solve this problem Facebook developers
        built JSX.
● JSX makes developer life easy as we no longer have to write our code using React.createElement().

📢 NOTE: We write `code for both Machines and Humans` but first for Human understanding as it is read 
            by a lot of developers.

# What is JSX?
● JSX is `HTML-like or XML-like syntax`. JSX stands for `JavaScript XML`.
● It's a `syntax extension` for JavaScript.
● It is `not a part of React`. React apps can be built even `without JSX` but the code will become 
    very hard to read.
● It is `not HTML inside JavaScript`.
● JavaScript engine cannot understand JSX as it `only understands ECMAScript`.

# Introducing Babel

# Is JSX a valid JavaScript?
● The answer is `yes and no`.
● JSX is `not a valid Javascript syntax` as it’s not pure HTML or pure JavaScript for a browser to understand.
● JS does not have `built-in JSX`.
● The JS engine `does not understand JSX` because the JS engine `understands ECMAScript or ES6+ code`.

# If the browser can’t understand JSX how is it still working?
● This is because of Parcel because `Parcel is a Beast`.
● Before the code gets to JS Engine it is `sent to Parcel and Transpiled` there. 
    Then after transpilation, the `browser gets the code that it can understand`.
● `Transpilation` ⇒ Converting the code in such a `format that the browsers can understand`.
● Parcel is like a manager who gives the `responsibility of transpilation` to a package called `Babel`.
● Babel is a package that is a `compiler/transpiler of JavaScript` that is already present inside       `node-modules`.
● It takes JSX and `converts it into the code that browsers understand`, as soon as we write it and save the  file.
● Babel is `not created by Facebook`.

Note: `JSX(transpiled by Babel)` ⇒ `React.createElement` ⇒  `ReactElement` ⇒ 
                `JS Object` ⇒ `HTML Element(render)`.

# How JSX works internally in React?
● Babel transpiles JSX, it `translates JSX into function calls(by default React.createElement)`
    that can create elements.
● It takes care of creating the element structure `described by the JSX code`.
● You need to add either the `@babel/preset-react` preset or the `@babel/plugin-transform-react-jsx` plugin
    to enable JSX transpilation.
● JSX works with `any library` that provides a `createElement-like function` compatible with its 
    output structure. 
● This function `doesn’t need to be React.createElement` specifically, it can be any function 
    that knows how to `interpret JSX inputs` to create a structured representation of 
    `elements that the library can later render`.

# What is the difference between HTML and JSX?
● JSX is `not HTML. It’s HTML-like syntax`.
● HTML uses `class` property whereas JSX uses `className` property.
● HTML can use `hypens` in `property names` whereas JSX uses `camelCase syntax`.

📢 NOTE:    
● Use `Prettier - Code Formatter` VS Code Extension to make your code look beautiful with proper formatting.
● Use `ES lint` VS Code Extension for linting.
● Use `Better Comments` VS Code Extension to beautify your comments.
● Use `Bracket Pair Colorization Toggler` extension for bracket colors.

# Introducing React Components
● `Everything inside React is a component`.

# What are Components?
● There are 2 types of components:
        1.`Class-based Components` - Old way of writing code, used rarely in industry.
        2.`Functional Components` - New way of writing code, most commonly used.

# What is a React Functional Components?
● It is just a `JavaScript Function that returns some JSX or a react element`.
● Always `name` React Functional Component with `Capital Letters` otherwise you will confuse it 
    with normal function.

# Components Composition
● A `component inside a component`. 
● `Calling a component inside another component` is Component Composition.

# How to use JavaScript code inside JSX?
● Inside a React Component when `{}` parenthesis is present we can write any JavaScript expression inside it.
    const number = 10000;
    const HeadingComponent = () => (
    <div id="containter">
        {number}
        <h1>Namaste React</h1>
    </div>
    )

# How to call React Element in JSX?
● We can use `{}` parenthesis.

# What will happen if we call 2 elements inside each other?
● If we put `2 components inside each other`, then it will go into an `infinite loop` and the stack will    overflow.
● It will `freeze your browser`, so it’s not recommended to do so.

# Advantages of using JSX.
1) `Sanitizes the data`:
    ● If someone gets access to your JS code and sends some malicious data which will then get 
        displayed on the screen, that attack is called cross-site scripting.
    ● It can read cookies, local storage, session storage, get cookies, get info about your device, 
        and read data.
    ● JSx takes care of your data.
    ● If some API passes some malicious data JSX will escape it.
    ● It prevents cross-site scripting and sanitizes the data before rendering.
2) `Makes code readable`:
    ● JSX makes it easier to write code as we are no longer creating elements using React.createElement().
3) `Makes code simple and elegant`.
4) `Show more useful errors and warnings`.
5) `JSX prevents code injections`(attacks).

`Term`	     `Purpose`	                                          `Example`
Plugin	    | Adds `individual functionality` or transformations | @babel/plugin-transform-arrow-functions,
              to a tool.                                           @babel/plugin-transform-react-jsx

Preset	    | `Collection of related plugins`, often for         | @babel/preset-react
              specific environmnet or framework.	

Toolchain	| `Set of tools` that work together for series of    | Babel, Webpack, ESLint
              `multiple development tasks` like ranspiling, 
              bundling, minifying, and testing code etc.

## Babel features:

# Transpilation:
● Babel converts `newer JavaScript` syntax (like ES6, ES7, etc.) into `older JavaScript (ES5)` 
    to ensure `compatibility with older browsers`.
  Example: Converting `arrow functions` (()=>) to `traditional functions`.

# Polyfilling:
● Babel can `include polyfills  for modern JavaScript features` not natively supported in 
    older environments, such as `Promise` etc.
● It uses: `@babel/preset-env along with core-js`;

# JSX Transformation:
● Babel transforms `JSX syntax into JavaScript code` that browsers can execute especially
    in React apps.
● Preset: `@babel/preset-react`

# It has other features like `TypeScript Compilation`, `Code Optimization` etc.



