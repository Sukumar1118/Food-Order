
# Why do we use React? Some of us might wonder why we don't just stick to HTML, CSS, and JAVASCRIPT for everything we've been doing?
● Of course! It's absolutely possible to accomplish `everything using regular HTML,`
    `CSS and JAVASCRIPT without using REACT`. However, we chose React because it enhances
    our `developer experience`, making it more `seamless and efficient`.

# Introducing React-Hooks.
 
# Folder structure & Best practices.
● We are going to Restructure our project folder. There is a very `good convention` in the
    industry that `all the code` in a React project is kept in a `src-folder`.
● There is `no compulsion` to use a `src-folder` in a project. But here we are following 
    what the `industry follows`.
● The `best practice` is to make `separate files for every component`.
● When we are creating separate `component files` inside the ‘components-folder’ always 
    start with a `capital letter` like.
            1. Header.js
            2. Body.js

📢 NOTE: `We can use (.jsx)` as an extension `instead of (.js)` it's up to the developer's wish.
        1. Header.jsx
        2. Body.jsx

📢 NOTE: `NO Thumb Rule` to use this convention, we could use `any folder structure` you wish.

# Understanding Export and Import in React.
● Two types of export/import in React, We will understand each of them in details.
        1.Default export/import.
        2.Named export/import.


# 1.Default export/import.
Step-1 (export)————————>
● We use the `export` and `default` keywords with the component name at the end of 
    the component file.
    Syntax:
        `export default Header`;
    Or we can write with extension.
    `export default Header.js`;

Step-2 (import)————————>
● We use `import` with the component name at the start of the file.
Understand the Syntax properly.
    Syntax:
        `import Header from "./components/Header`

📢 NOTE:
● We `don't` have to put an `extension in the file in the import statement`.
    If want to put then completely Fine.

📢 NOTE:
● we `never put` any `hard-coded data` like the source-URL of logo and images inside the 
    `component file`. That's not the best practice the industry follows.
● We need to put all hard coded data in `constants files`.

# 2.Named export/import.
● Just write the `export` keyword before the variables we want to export 
Step-1 (export)————————>
    `export const LOGO_URL = "<URL Path>"`;
Step-2 (import)————————>
    `import { LOGO_URL } from "../utils/constants"`;
● When we import there is a slight difference in syntax we use curly braces.

# Can we use default export with named export ?
 yes

# Imp points.
● `Use map()` method to go through each item in `array list & map` the items instead of for loops.

📢 Note:
● Whenever we have react App we have a `UI layer and data layer`, UI layer will display
    what is being sent by the data layer.

# How can we display filtered restaurants dynamically on UI(display screen) ?
● we require a `superpowerful React variable` known as a `state variable`.

# How do we create Super-powerful variable ?
● For that we use `React Hooks`.

# What is Hook ?
● It's simply a `regular JavaScript function`. However, it becomes 
    `powerful when used within React`, as it's provided to us by React itself.
● These pre-built functions have underlying logic developed by React developers. 
    When we install React via npm, we gain access to these superpowers.
`Two crucial hooks` we frequently utilize are:
    1. useState()
    2. useEffect()

# useState()
(import)————————>
● First, we have to `import` as a `named import` from `react`. We use useState() 
    inside the component to create a ‘state variable‘. 
    `import { useState } from "react"`;
    Syntax of useState():
        `const [listOfRestaurant] = useState([])`;

● In the provided code, we pass an `empty array []` as the initial value inside 
    the useState([]) method. This empty array `serves as the default value` for the 
    listOfRestaurant variable.

● If we pass the listOfRestaurant(with any data) `data inside the useState()` as the 
    default data, it will `render the data` on the screen using that initial data.

# How could we modify the datam?
● To modify we pass the second argument setListOfRestaurant we can name as we wish. 
    setListOfRestaurant used to update the list.
    Syntax of useState():
        `const [listOfRestaurant , setListOfRestaurant] = useState([])`;

# How can we display updated data dynamically on UI(display screen)? 
● The crucial point about `State variables` is that whenever they `update`, React 
    `triggers a reconciliation cycle` and `re-renders the component`.
● This means that as soon as the `data layer changes`, React promptly `updates the UI layer`.
    The `data layer` is always kept in `sync with the UI layer`.
● To achieve this rapid operation, React employs a `reconciliation algorithm`, also known 
    as the `diffing algorithm or React-Fibre` which we will delve into further below.

# React is often praised for its speed, have you ever wondered why? 🤔
● At the core lies `React-Fiber` - a powerhouse `reimplementation of React's core algorithm`. 
    The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
● Its headline feature is `incremental rendering`: the ability to split rendering work into chunks
    and spread it out over multiple frames.
● These days, we can use JavaScript and React alongside popular libraries like GSAP 
    (GreenSock Animation Platform) and Three.js.
● These tools allow us to create animations and 3D designs using the capabilities of JavaScript and React.

# But how does it all work behind the scenes?
● When you `create elements in React`, you're actually `creating virtual DOM objects`. 
    These virtual replicas are synced with the real DOM, a process known as 
        `"Reconciliation" or the React "diffing" algorithm`.
● Essentially, every `rendering cycle compares` the `new UI` blueprint(updated VDOM) with 
    the `old one (previous VDOM)` and makes precise changes to the actual DOM accordingly.
● It's important to understand these fundamentals in order to unlock a world of possibilities for 
    front-end developers!

# React Fiber architecture
● Repository on the web: `https://github.com/acdlite/react-fiberarchitecture`.

In React.js, the terms **Virtual DOM**, **Reconciliation**, **React Fiber**, **Rendering**, and **Diff Algorithm**:

---

### 1. **Virtual DOM**
- The **Virtual DOM** is an in-memory representation of the actual DOM.
- React uses this lightweight version of the DOM to perform updates efficiently.
- When the state or props of a React component change, a new Virtual DOM tree is created and 
    compared with the previous one.

**Key Role**: It acts as an intermediate layer between the application's state and the actual browser DOM.

### 2. **Reconciliation**
- **Reconciliation** is the process by which React updates the DOM to match the Virtual DOM.
- It involves comparing the new Virtual DOM with the old Virtual DOM and finding the minimal set of changes required (using the Diff Algorithm).
- React applies these changes (or patches) to the real DOM.

**Key Role**: Ensures that React updates only the parts of the UI that actually changed, 
        optimizing performance.

### 3. **React Fiber**
- **React Fiber** is the re-implementation of React's core algorithm introduced in React 16.
- It enhances React's ability to handle rendering by breaking rendering tasks into smaller units of work (fiber nodes).
- It introduces the concept of **time slicing**, allowing React to prioritize and pause low-priority tasks (like rendering) in favor of high-priority tasks (like user input).

**Key Role**: Improves the rendering process by making it incremental and interruptible, 
        leading to better responsiveness.

### 4. **Rendering**
- **Rendering** is the process of generating the UI by converting React components into the 
        DOM elements displayed in the browser.
- Rendering happens in two phases:
  1. **Render Phase**: React builds the Virtual DOM and determines what changes are needed.
  2. **Commit Phase**: React applies these changes to the actual DOM.

**Key Role**: Translates React components into a visible interface.

### 5. **Diff Algorithm**
- The **Diff Algorithm** is a technique used by React to determine the difference between the
        old and new Virtual DOM trees.
- It is optimized for performance by assuming:
  1. Elements with the same type and key are the same.
  2. Elements of different types or keys are entirely replaced.
- The algorithm efficiently calculates the minimal set of updates needed to transition from the
        old tree to the new tree.

**Key Role**: Powers Reconciliation by identifying which parts of the DOM need updates.

### Relation and Connection Between These Terms
- **Virtual DOM**: Acts as the abstraction layer for efficient updates.
- **Diff Algorithm**: Compares old and new Virtual DOM trees during **Reconciliation** to determine changes.
- **Reconciliation**: Applies the updates identified by the Diff Algorithm to the actual DOM.
- **React Fiber**: Optimizes and schedules the Reconciliation and Rendering processes to ensure 
    smooth UI performance.
- **Rendering**: The final step where changes are committed to the real DOM.

### Workflow Summary
1. **State/Props Change** → Triggers a new **Virtual DOM** tree generation.
2. **Diff Algorithm** → Compares the new and old Virtual DOM trees.
3. **Reconciliation** → Determines the minimal changes needed and prepares updates.
4. **React Fiber** → Schedules and prioritizes these updates.
5. **Rendering** → Applies changes to the real DOM, updating the UI.

Note: This layered approach ensures React is fast, responsive, and efficient in managing complex UIs.