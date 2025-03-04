The `useEffect` hook in React is used for handling side effects in functional components. It runs after the render and can be used for various scenarios like fetching data, subscribing to events, modifying the DOM, and managing timers.  

## **Key Use Cases of `useEffect`**
1. **Run on every render** (No dependencies)
2. **Run only on mount and unmount** (Empty dependency array `[]`)
3. **Run when specific values change** (Dependency array with values)
4. **Cleanup function** (Return a function inside `useEffect`)

---

### **1. Run on Every Render (No Dependency Array)**
If no dependency array is provided, `useEffect` runs after every render.

#### **Example**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs after every render");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```
📌 **When does this run?**  
- **On the first render**  
- **After every re-render**  

---

### **2. Run Only on Mount and Unmount (Empty Dependency Array `[]`)**
If an empty array `[]` is passed, the effect runs **only once** when the component mounts and cleans up when it unmounts.

#### **Example**
```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return <h1>Hello, React!</h1>;
}

export default App;
```
📌 **When does this run?**  
- **On component mount (initial render)**  
- **On component unmount (cleanup function runs)**  

---

### **3. Run When Specific Values Change (Dependency Array with Variables)**
If specific values are provided in the dependency array, `useEffect` runs **only when those values change**.

#### **Example**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```
📌 **When does this run?**  
- **On the first render**  
- **Whenever `count` changes**  
- **Does NOT run if `count` remains the same**  

---

### **4. Cleanup Function in `useEffect`**
The cleanup function is used to remove event listeners, clear intervals, or unsubscribe from services when a component unmounts.

#### **Example - Cleanup in Event Listener**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Cleanup: Removing event listener");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <p>Window width: {width}px</p>;
}

export default App;
```
📌 **When does this run?**  
- **On component mount (attaches event listener)**  
- **On unmount (removes event listener to prevent memory leaks)**  

---

### **5. Fetching Data with `useEffect`**
A common use case of `useEffect` is making API calls.

#### **Example - Fetching Data from an API**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    return () => console.log("Cleanup on unmount");
  }, []); // Runs only once when the component mounts

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
```
📌 **When does this run?**  
- **On component mount (fetches data once)**  

---

### **6. `useEffect` with Multiple Dependencies**
You can pass multiple dependencies to `useEffect`, and it will re-run when **any** of them change.

#### **Example**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`Count: ${count}, Text: ${text}`);
  }, [count, text]); // Runs when either `count` or `text` changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
```
📌 **When does this run?**  
- **On first render**  
- **When `count` changes**  
- **When `text` changes**  

---

## **Best Practices for `useEffect`**
✅ **Always clean up side effects** (e.g., remove event listeners)  
✅ **Avoid unnecessary re-renders** by using the dependency array correctly  
✅ **Do not update state inside `useEffect` without conditions**, as it can cause infinite loops  

---

## **Conclusion**
| Case | When it runs? | Example |
|------|-------------|---------|
| No dependency array | On every render | `useEffect(() => {...});` |
| Empty dependency array (`[]`) | Only on mount | `useEffect(() => {...}, []);` |
| With dependencies (`[var1, var2]`) | When `var1` or `var2` changes | `useEffect(() => {...}, [var1, var2]);` |
| Cleanup function | On unmount | `return () => {...}` inside `useEffect` |


To check the **unmount scenario** in `useEffect`, you can use the **cleanup function** inside `useEffect`. The cleanup function runs when the component **unmounts** (gets removed from the DOM).  

## **Example: Checking Unmount Scenario**
Let's create a **parent component** that conditionally renders the **child component**. When we remove the child component (by clicking a button), we should see the **cleanup function executing in the console**.

### **Step 1: Create Child Component (`ChildComponent.js`)**
```jsx
import { useEffect } from "react";

function ChildComponent() {
  useEffect(() => {
    console.log("ChildComponent Mounted");

    return () => {
      console.log("ChildComponent Unmounted"); // Cleanup runs when component is removed
    };
  }, []);

  return <h2>Child Component</h2>;
}

export default ChildComponent;
```

---

### **Step 2: Create Parent Component (`App.js`)**
```jsx
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Unmount Child" : "Mount Child"}
      </button>
      
      {showChild && <ChildComponent />}
    </div>
  );
}

export default App;
```

---

### **Expected Console Output**
1. When the app starts:
   ```
   ChildComponent Mounted
   ```

2. When you click "Unmount Child":
   ```
   ChildComponent Unmounted
   ```

3. When you click "Mount Child" again:
   ```
   ChildComponent Mounted
   ```

---

## **Key Takeaways**
✅ `useEffect` with `[]` runs **only once** when the component **mounts**.  
✅ The **cleanup function** inside `useEffect` runs when the component **unmounts**.  
✅ You can check this by conditionally rendering the component.