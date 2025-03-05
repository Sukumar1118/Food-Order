### **Lifting State Up**

1. Lifting state up in React refers to the practice of moving the state
   from a lower-level (child) component to a higher-level (parent or common
   ancestor) component in the component tree.
   This is done to share and manage state across multiple components.

2. When a child component needs access to certain data or needs to modify the
   data, instead of keeping that data and the corresponding state management solely
   within the child component, we move the state to a shared ancestor component.

3. By doing so, the parent component becomes the source of truth for the state, and
   it can pass down the necessary data and functions as props to its child
   components.

### **Simple Example of Lifting State Up (Counter Example)**

Here’s a basic example where we have two buttons in separate child components to **increase and decrease** a counter. The state is lifted up to the parent component.

---

### **Step 1: Create Parent Component (`Counter.js`)**

```jsx
import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <IncrementButton onIncrement={increment} />
      <DecrementButton onDecrement={decrement} />
    </div>
  );
}

export default Counter;
```

---

### **Step 2: Create Child Components (`IncrementButton.js` and `DecrementButton.js`)**

#### **Increment Button**

```jsx
function IncrementButton({ onIncrement }) {
  return <button onClick={onIncrement}>Increase</button>;
}

export default IncrementButton;
```

---

#### **Decrement Button**

```jsx
function DecrementButton({ onDecrement }) {
  return <button onClick={onDecrement}>Decrease</button>;
}

export default DecrementButton;
```

---

### **How It Works**

1. The **state (`count`) is stored in the `Counter` parent component**.
2. The child components (`IncrementButton` and `DecrementButton`) **do not have their own state**.
3. Instead, they receive functions (`onIncrement` and `onDecrement`) as **props** from the parent.
4. When a button is clicked, it updates the parent’s state, and the new count is displayed.

---

### **Why Lift State Up?**

✅ Ensures a **single source of truth** for state management.  
✅ Prevents unnecessary duplication of state across components.  
✅ Makes debugging and maintenance easier.

This pattern is commonly used for **forms, shared inputs, toggles, and component interactions** in React apps! 🚀

### **Prop Drilling in React (Simple Example)**

**Prop Drilling** occurs when data (state or functions) is passed down through multiple levels of components, even if some intermediate components don’t directly need it.

---

### **Example: Passing a "count" State from Parent to a Deep Child Component**

#### **🛠 Scenario:**

We have a **Grandparent Component** that holds the `count` state. The `Child` component is an intermediary that does not use the count but passes it down to the `Grandchild`, where it is displayed.

---

### **Step 1: Grandparent Component (Holds State)**

```jsx
import { useState } from "react";
import Child from "./Child";

function Grandparent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Grandparent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child count={count} />
    </div>
  );
}

export default Grandparent;
```

---

### **Step 2: Child Component (Only Passes Props)**

```jsx
import Grandchild from "./Grandchild";

function Child({ count }) {
  return (
    <div>
      <h3>Child Component</h3>
      <Grandchild count={count} />
    </div>
  );
}

export default Child;
```

---

### **Step 3: Grandchild Component (Uses Props)**

```jsx
function Grandchild({ count }) {
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Count: {count}</p>
    </div>
  );
}

export default Grandchild;
```

---

### **🔍 How It Works**

1. **State (`count`) is stored in `Grandparent`.**
2. The `count` prop is **passed down to `Child`**, even though `Child` doesn’t use it.
3. `Child` then **forwards the prop to `Grandchild`**, where it is finally used.

---

### **🛑 Problems with Prop Drilling**

- **Unnecessary passing**: If there are many intermediate components, it becomes **hard to manage**.
- **Tight coupling**: Changes in props require updating multiple components.

---

### **✅ Solution: Avoid Prop Drilling**

- **Use Context API**: Store data globally and access it in any component without passing props manually.
- **Use Redux/Zustand/Recoil**: State management libraries help manage global state efficiently.


### **Context API in React: Context Provider & Context Consumer**  

The **Context API** is used to manage and share state between components without **prop drilling** (passing props through multiple levels).  

---

### **🛠 Key Concepts**
1. **Context Provider** (`Provider`)  
   - Creates and **provides** state to all child components.  

2. **Context Consumer** (`useContext` or `Consumer`)  
   - Retrieves (consumes) the state provided by the **Provider**.

---

### **Example: Theme Context (Light/Dark Mode)**
We’ll create a **theme toggle** using the Context API.

---

### **Step 1: Create Context (`ThemeContext.js`)**
```jsx
import { createContext, useState } from "react";

// 1️⃣ Create Context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // 2️⃣ Provide context value to children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```
---
### **Step 2: Use Context in Components**

#### **Parent Component (`App.js`)**
```jsx
import { ThemeProvider } from "./ThemeContext";
import ThemeButton from "./ThemeButton";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Example</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
```
---
#### **Child Component (`ThemeButton.js`)**
```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeButton;
```

---

```jsx
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
          <p>Current Theme: {theme}</p>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeButton;
```

---

### **🔍 How It Works**
1. **Create Context (`ThemeContext`)**: Stores theme and toggle function.  
2. **Wrap `App` in `ThemeProvider`**: Provides theme data to all children.  
3. **Consume Context in `ThemeButton` using `useContext`**: Reads `theme` and `toggleTheme`.  

---

### **💡 Advantages of Context API**
✅ **Avoids Prop Drilling** – No need to pass props manually through intermediate components.  
✅ **Global State Management** – Useful for themes, user authentication, language settings, etc.  
✅ **Easier Code Maintenance** – Centralized state management with simple updates.