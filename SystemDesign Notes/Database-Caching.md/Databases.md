Here’s a **complete and concise set of notes** summarizing all points and examples from our discussion on **Local Storage** — with duplication removed, all important details preserved, and examples included:

---

# 📘 Local Storage – Frontend System Design Notes

---

## 🔹 What is Local Storage?
- A web storage mechanism to store **key-value data** **persistently** in the user's browser.
- Data is stored **locally on the client side** and does not expire unless explicitly cleared.

---

## 🔹 API Methods
Provided by the `localStorage` object:

```javascript
localStorage.setItem("key", "value");       // Save data
localStorage.getItem("key");                // Retrieve data
localStorage.removeItem("key");             // Delete a specific key
localStorage.clear();                       // Clear all keys
```

---

## 🔹 Key Characteristics

| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Size Limit**         | 5MB per domain                                                              |
| **Performance**        | Synchronous (blocks the main thread)                                       |
| **Persistence**        | Persists even after browser session ends or tab is closed                  |
| **Data Structure**     | Stores data as **key-value pairs**, where **value is always a string**     |

---

## 🔹 Security Considerations
- ❌ No built-in encryption.
- ❌ Vulnerable to:
  - **XSS (Cross-Site Scripting)** – malicious script can access `localStorage`.
  - **CORS misuse** – if misconfigured, can expose data across domains.
- ⚠️ Should never store **sensitive data**, **tokens**, or **user details**.

---

## 🔹 When to Use
- ✅ Storing **user preferences** (e.g., theme settings).
- ✅ Handling **non-sensitive, small pieces** of information that must persist.

---

## 🔹 When Not to Use
- ❌ Large datasets (due to 5MB limit).
- ❌ Sensitive or private data (e.g., tokens, passwords).
- ❌ Cross-profile or shared-user scenarios.
- ❌ Information requiring encryption or secure access.

---

## 🔹 Sharing Local Storage Across Tabs

### ✅ Behavior
- `localStorage` is **shared between all tabs** from the same origin.
- If a value is changed in one tab, it is **instantly available** in the other tabs **manually** via JavaScript.

### 🔔 Detecting Changes in Other Tabs

To listen for changes made in **another tab**, use the `storage` event:

```javascript
window.addEventListener("storage", (event) => {
  console.log("Key changed:", event.key);
  console.log("Old value:", event.oldValue);
  console.log("New value:", event.newValue);
});
```

> 🔸 This event only triggers in **other tabs**, **not in the one** where the change originated.

------------------------------------------------------------------------------------------------------------

Here’s a detailed, well-structured **summary of Session Storage** behavior and usage based on all the above conversations, formatted as **technical notes** for future reference:

---

## 📦 **Session Storage – Technical Notes**

### 🟢 What is Session Storage?
- `sessionStorage` is a web storage API used to **store key-value data** in the browser **per session**.
- It allows **temporary, synchronous storage** that is accessible within the current **tab/window** only.

---

### ⚙️ How It Works
You can interact with `sessionStorage` using its built-in methods:

```js
// Set a value
sessionStorage.setItem('key', 'value');

// Get a value
sessionStorage.getItem('key');

// Remove a specific item
sessionStorage.removeItem('key');

// Clear all data in sessionStorage
sessionStorage.clear();
```

---

### 📏 Size Limit
- **5 MB per domain** (can vary slightly between browsers).

---

### 🚀 Performance
- `sessionStorage` is **synchronous**, meaning it blocks the main thread during read/write operations.

---

### 💾 Data Persistence
- Data in `sessionStorage` is:
  - **Retained as long as the tab or window is open**.
  - **Cleared automatically** when the tab or window is **closed**.

---

### 📚 Data Structure
- Stores data as **key-value pairs**, where the **value is always a string**.
  
  Example:
  ```js
  sessionStorage.setItem('user', JSON.stringify({ name: 'Alice' }));
  const user = JSON.parse(sessionStorage.getItem('user'));
  ```

---

### 🔐 Security Considerations
- Not encrypted by default — sensitive data should be manually encrypted before storage.
- Vulnerable to **Cross-Site Scripting (XSS)** if not handled securely.
- Respects **same-origin policy**.
- **Session expiry** happens automatically when the tab is closed.

---

### 🕒 When to Use
- Suitable for:
  - **Temporary, sensitive data**.
  - **Single-tab sessions**, like:
    - Form drafts
    - Auth tokens for short-lived sessions
    - State between page reloads (within a tab)

---

### 🚫 When Not to Use
Avoid `sessionStorage` for:
- **Large datasets** (limited space)
- **Asynchronous access needs** (it's synchronous)
- **Long-term persistence** (data disappears on tab close)
- **Cross-tab communication or persistence**

---

### 🧪 Tab Duplication Behavior

#### 🔁 What happens when you duplicate a tab?

- **Each duplicated tab gets a separate copy** of `sessionStorage` **at the moment of duplication**.
- After that, **each tab’s sessionStorage is isolated**.

#### 🔍 Key Points:
- sessionStorage is **scoped per tab/window**.
- Duplication **clones** the current data, but:
  - Any updates made in one tab do **not** reflect in others.
  - Closing one tab does **not** affect the sessionStorage of others.

#### 💡 Example:

```js
// In Tab 1
sessionStorage.setItem('user', 'Alice');

// Duplicate Tab 1 → Tab 2
// Now both tabs have 'user': 'Alice'

// In Tab 2
sessionStorage.setItem('user', 'Bob');

// Final Values:
  // Tab 1 → 'user': 'Alice'
  // Tab 2 → 'user': 'Bob'
```

Each tab behaves like its own **sandboxed session**.

-------------------------------------------------------------------------------------------------------------

## 🔐 Cookies and Secure Logout – System Design & Implementation Notes

---

### 📌 **1. Cookie Basics (Frontend System Design)**

| **Aspect**              | **Details**                                                                                                                                         |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definition**          | Small data stored on the client-side (browser) to persist user data like sessions, preferences, and auth tokens.                                    |
| **Types**               | - **Session Cookie**: Expires when the browser closes.<br>- **Persistent Cookie**: Has a defined expiration time.                                   |
| **How it works**        | Set by **client (JS)** or **server (via HTTP headers)**. Automatically included in each HTTP request to the same origin.                            |
| **Size Limit**          | 4KB per domain (browser-dependent).                                                                                                                 |
| **Performance**         | Can impact HTTP request/response time due to size. Cookies are sent with every request to the origin.                                               |
| **Persistence**         | Controlled via **expiry date** (persistent) or session-end (session cookie).                                                                       |
| **Data Structure**      | `key=value` pairs; values must be **strings**.                                                                                                       |
| **Security Flags**      | - `HttpOnly`: Not accessible via JavaScript<br>- `Secure`: Sent only over HTTPS<br>- `SameSite`: Protects against CSRF<br>- `Path`, `Domain`, XSS   |
| **When to Use**         | For light data, automatic request inclusion needs: authorization tokens (carefully), preferences, etc.                                              |
| **When NOT to Use**     | Avoid storing large data or sensitive info unless secured. Prefer localStorage/indexedDB for large client data.                                     |

---

### 🧹 **2. Clearing Cookies**

#### ✅ **Client-Side (Browser)**

**Using JavaScript:**
```javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```
> This sets the cookie's expiration to a past date. Make sure the `path` matches the one used when setting the cookie.

**Using DevTools (Manual):**
- Chrome: DevTools → Application → Cookies → Delete manually.

---

#### ✅ **Server-Side**

**HTTP Header Method:**
```http
Set-Cookie: username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;
```

**Express.js (Node.js):**
```javascript
res.clearCookie('username', { path: '/' });
```
> Ensure `path`, `domain`, `secure`, and `sameSite` match original cookie settings, or it won't be cleared.

---

### 🌐 **3. Clear Site Data (On Logout or Security Events)**

Use the special **`Clear-Site-Data`** HTTP header to instruct the browser to wipe cookies, cache, and storage:

```http
Clear-Site-Data: "cookies", "storage", "cache"
```

#### ✅ **Example in Express (Node.js):**
```javascript
app.post('/logout', (req, res) => {
  res.setHeader("Clear-Site-Data", '"cookies", "storage", "cache"');
  res.status(200).send('Logged out and cleared site data');
});
```

**Supported Tokens:**
- `"cookies"`: Deletes all cookies for the origin
- `"storage"`: Deletes localStorage, sessionStorage, IndexedDB
- `"cache"`: Deletes HTTP cache, Service Worker cache

> **Note**: Supported in most modern browsers (not Safari).

---

### 🔐 **4. Secure Logout Implementation in Express.js**

#### ✅ If using JWT or custom cookie:

```javascript
app.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,       // Only on HTTPS
    sameSite: 'Strict', // Should match cookie settings
    path: '/',          // Must match original path
  });

  res.setHeader("Clear-Site-Data", '"cookies", "storage", "cache"');

  res.status(200).json({ message: 'Logged out and cleared site data' });
});
```

#### ✅ If using `express-session`:

```javascript
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Could not log out.');
    }

    res.clearCookie('connect.sid'); // Default cookie name
    res.setHeader("Clear-Site-Data", '"cookies", "storage", "cache"');
    res.send('Logged out');
  });
});
```

---

## ✅ Final Recommendations

| **Best Practices**                                                                 |
|-----------------------------------------------------------------------------------|
| Always use `HttpOnly` + `Secure` flags on sensitive cookies (e.g., auth tokens). |
| Prefer server-side clearing for consistent logout behavior.                      |
| Avoid overloading cookies — use localStorage or IndexedDB for large data.        |
| Use `Clear-Site-Data` for complete cleanup during logout or security resets.     |

------------------------------------------------------------------------------------------------------------

### 📚 **IndexedDB - Explained Simply**

| Question               | Answer (Simplified) |
|------------------------|---------------------|
| **What?**              | A database **in the browser** for storing data on the **client side** (user's device), useful for offline storage. |
| **How it works?**      | You use methods like `indexedDB.open()`, create `transactions()`, and use `objectStore` to save or get data. |
| **Size Limit?**        | Can store **large datasets**, usually over **100MB** (depends on browser). Much bigger than LocalStorage or SessionStorage. |
| **Performance?**       | Works **asynchronously** (non-blocking), so it doesn't freeze your app while reading/writing data. |
| **Data Persistence?**  | Data **stays even after the browser is closed**, unless you clear it. |
| **Data Structure?**    | Stores **key-value pairs**, where values can be complex (like objects, files, blobs). Can use indexes to speed up queries. |
| **Security?**          | Supports **security best practices** like encryption, protection from XSS, auth-based access. Can also **clear data on logout**. |
| **When to use?**       | For **large datasets**, offline apps, caching, storing history or user actions locally. |
| **When not to use?**   | Avoid it for **sensitive or secure data**, or when storing just **a small amount** of data. |

---

### ✅ Example Use Cases

- **To-do app**: Save user tasks offline in IndexedDB and sync them later when online.
- **News reader**: Cache articles offline for reading later.
- **E-commerce**: Store browsing history or cart data in the browser.

---

### 🔧 Dexie.js - Simple Wrapper for IndexedDB

**Dexie** is a small JavaScript library that makes it easier to work with IndexedDB.

#### Without Dexie:
```javascript
const request = indexedDB.open("MyDB", 1);
```

#### With Dexie:
```javascript
const db = new Dexie("MyDB");
db.version(1).stores({
  friends: '++id,name,age'
});
db.friends.add({name: "John", age: 25});
```

### ✅ Dexie Benefits:
- Easier syntax
- Built-in error handling
- Querying is simpler
- Makes your code shorter and cleaner

--------------------------------------------------------------------------------------------------------

# 📘 Data Normalization in Web Applications – Summary Notes

---

## ✅ What is Data Normalization?

**Normalization** refers to organizing data to remove redundancy, improve consistency, and simplify maintenance or access.  
It applies in **two main contexts** in web apps:

---

### 1. **Database Normalization (Backend)**

#### 📌 Purpose:
- Eliminate **redundancy**
- Ensure **data integrity**
- Organize tables into **logical relationships**
- Optimize **storage** and **querying**

#### 📌 Example – Unnormalized Table:

```text
Orders Table
------------------------------------------------
| OrderID | CustomerName | CustomerEmail | ProductName |
|-------- |--------------|----------------|-------------|
| 101     | Alice         | a@email.com    | Laptop      |
| 102     | Alice         | a@email.com    | Mouse       |
```

**Problems:**
- Customer data is repeated

#### ✅ Normalized Structure (3rd Normal Form - 3NF):

```sql
-- Customers Table
CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  Name VARCHAR(100),
  Email VARCHAR(100)
);

-- Products Table
CREATE TABLE Products (
  ProductID INT PRIMARY KEY,
  Name VARCHAR(100)
);

-- Orders Table
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  ProductID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Sample Data
INSERT INTO Customers VALUES (1, 'Alice', 'a@email.com');
INSERT INTO Products VALUES (1, 'Laptop'), (2, 'Mouse');
INSERT INTO Orders VALUES (101, 1, 1), (102, 1, 2);
```

---

### 2. **Frontend State Normalization (e.g. Redux, NgRx)**

#### 📌 Purpose:
- Flatten **nested JSON data**
- Easier **lookup**, **update**, and **scalability**
- Avoid complex deep updates

---

#### ❌ Without Normalization (Nested State):

```js
const state = {
  posts: [
    {
      id: 1,
      title: 'Redux Rocks',
      author: {
        id: 101,
        name: 'Alice'
      }
    }
  ]
};
```

**Issues:**
- Redundant author data if reused
- Complex updates

---

#### ✅ With Normalized State:

```js
const state = {
  posts: {
    byId: {
      1: { id: 1, title: 'Redux Rocks', authorId: 101 }
    },
    allIds: [1]
  },
  authors: {
    byId: {
      101: { id: 101, name: 'Alice' }
    },
    allIds: [101]
  }
};
```

**Advantages:**
- Centralized updates (e.g. change author name in one place)
- Simplifies merging/fetching/updating entities

---

### 3. **Using `normalizr` Library in Frontend**

#### 📦 Install:
```bash
npm install normalizr
```

#### 🧱 Define and Use Schemas:

```js
import { normalize, schema } from 'normalizr';

// Define schema
const author = new schema.Entity('authors');
const post = new schema.Entity('posts', { author });

// Sample nested data
const originalData = {
  id: 1,
  title: 'Redux Rocks',
  author: { id: 101, name: 'Alice' }
};

// Normalize it
const normalizedData = normalize(originalData, post);
console.log(normalizedData);
```

#### ✅ Output (Normalized):
```js
{
  entities: {
    posts: {
      1: { id: 1, title: 'Redux Rocks', author: 101 }
    },
    authors: {
      101: { id: 101, name: 'Alice' }
    }
  },
  result: 1
}
```

**Benefits:**
- Automatically extracts and indexes entities
- Compatible with Redux state shape
- Great for processing nested API responses

---

## 🧠 Summary Table

| Area              | What is Normalized                         | Why Normalize                                      | Tool/Example Used                        |
|-------------------|--------------------------------------------|---------------------------------------------------|-------------------------------------------|
| **Backend (SQL)** | Related tables using foreign keys          | Remove duplication, enforce integrity             | SQL Tables, Foreign Keys                  |
| **Frontend (Redux)** | Flat lookup-based state shape              | Simplify updates, reduce nested structures        | Manual state design using byId/allIds     |
| **API Response Handling** | Flatten nested JSON from backend         | Better integration with Redux or NgRx             | `normalizr` library                       |

-----------------------------------------------------------------------------------------------------------

Here's a **complete and organized summary of all the above conversations** related to **HTTP caching in web apps**, with **all points and examples included**, **duplicates removed**, and **formatted as notes for future reference**.

---

# 📘 HTTP Caching in Web Apps – Summary Notes

---

## 🔸 Purpose of HTTP Caching

- **Improve performance**: Faster load times for returning users.
- **Reduce bandwidth**: Fewer repeated data downloads.
- **Minimize server load**: Server avoids regenerating same responses.
- **Improve scalability**: Efficient handling of more users.
- **Offline access** (via Service Workers or Cache API): Basic functionality without internet.

---

## 🔸 Types of HTTP Caching

| Type            | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| **Browser Cache**   | Stores static files (JS, CSS, images) locally in the browser.           |
| **CDN Cache**       | Caches files on geographically distributed servers close to users.     |
| **Proxy Cache**     | Middle-layer cache (e.g., reverse proxies like Varnish, Cloudflare).   |
| **Server-Side Cache** | Server saves expensive computation results for reuse.                |

---

## 🔸 Key HTTP Caching Headers

### 1. `Cache-Control` (Primary caching directive)
Controls all caching behavior for clients, proxies, and CDNs.

**Syntax Example:**
```http
Cache-Control: public, max-age=86400
```

**Common Directives:**

| Directive         | Meaning                                                            |
|------------------|---------------------------------------------------------------------|
| `public`         | Can be cached by browser, CDN, proxy.                              |
| `private`        | Only cacheable by browser (not shared caches).                     |
| `no-cache`       | Must validate with server before using cached copy.                |
| `no-store`       | Do not store at all (sensitive data).                              |
| `max-age=N`      | Time in seconds before cached copy becomes stale.                  |
| `must-revalidate`| Revalidate with server once expired.                               |
| `immutable`      | Resource will not change over time.                                |

---

### 2. `Expires` (Legacy)
- Defines an absolute expiration date/time for the resource.

**Example:**
```http
Expires: Fri, 01 May 2026 12:00:00 GMT
```

---

### 3. `ETag` (Entity Tag)
- A unique identifier (hash or version) for a response.
- Used for **conditional caching**.

**Response:**
```http
ETag: "abc123"
```

**Client sends next time:**
```http
If-None-Match: "abc123"
```

**Server responds:**
- `304 Not Modified` – if content is unchanged.
- `200 OK` with new data – if content is updated.

---

### 4. `Last-Modified`
- Timestamp indicating when the resource was last changed.

**Response:**
```http
Last-Modified: Tue, 30 Apr 2024 17:00:00 GMT
```

**Client sends:**
```http
If-Modified-Since: Tue, 30 Apr 2024 17:00:00 GMT
```

---

## 🔸 Caching Strategies (with Examples)

| Use Case                        | Strategy                                                                                     |
|---------------------------------|----------------------------------------------------------------------------------------------|
| Static Assets (e.g., JS/CSS)    | Version files → `main.v1.js` and use: `Cache-Control: public, max-age=31536000, immutable` |
| Dynamic HTML Content            | `Cache-Control: no-cache, must-revalidate`                                                  |
| Sensitive User Data             | `Cache-Control: private, no-store`                                                          |
| Low-change API responses        | `Cache-Control: public, max-age=60` + `ETag` or `Last-Modified`                             |

---

### 📦 Immutable Cache Example:
Used for assets that never change (versioned):
```http
Cache-Control: public, max-age=31536000, immutable
```

---

## 🔸 HTTP Status Codes in Caching

| Status Code     | Meaning                                 |
|------------------|------------------------------------------|
| `200 OK`         | Fresh content is returned.               |
| `304 Not Modified` | Cached copy is valid; no content sent. |

---

## 🔸 Advanced Caching – Service Workers

Used in Progressive Web Apps (PWAs):
- Intercept requests.
- Use **Cache API** to store and retrieve files manually.
- Enable offline-first functionality.

---

## 🔸 Best Practices ✅

1. **Version static assets** and cache them forever.
   ```js
   main.v1.2.3.js → Cache-Control: public, max-age=31536000, immutable
   ```
2. Use `ETag` or `Last-Modified` for dynamic API responses.
3. Use `no-store` for sensitive pages (e.g., user dashboards, financial data).
4. Use browser DevTools > Network tab to inspect caching behavior.
5. Leverage CDNs for static files caching.
6. Ensure proper cache busting when assets are updated.

---

## 🔸 Common Mistakes ❌

- Forgetting to version assets → causes users to load stale files.
- Misusing `no-cache` vs `no-store`:
  - `no-cache`: still cached, but revalidated.
  - `no-store`: not cached at all.
- Accidentally caching private or user-specific data with `public`.
- CDN overrides origin server headers (ensure correct config).

--------------------------------------------------------------------------------------------

Here's a simple and clear example of how **service worker caching** works using the **Cache API** — with the logic:

- If the requested resource is **in the cache**, return it.
- If not, **fetch it from the server**, **cache it**, and then return it.

---

### 📁 Project Structure (Simple)
```
/my-app
  ├── index.html
  ├── app.js
  └── sw.js     ← Service Worker
```

---

### ✅ `index.html`
```html
<!DOCTYPE html>
<html>
<head>
  <title>Service Worker Caching</title>
</head>
<body>
  <h1>Hello, Service Worker!</h1>
  <script src="app.js"></script>
</body>
</html>
```

---

### ✅ `app.js` — Registering the Service Worker
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(error => console.error('Service Worker Registration Failed:', error));
}
```

---

### ✅ `sw.js` — Service Worker Logic
```js
const CACHE_NAME = 'v1';

self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activated');
  // Clean old caches (optional in simple case)
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)  // Check cache first
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;  // ✅ Return cached version
        }

        // ❌ Not in cache — fetch from server and cache it
        return fetch(event.request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
  );
});
```

---

### 🧪 How it works:
1. On first load, files are fetched from the server.
2. When fetched, they are saved in the **cache**.
3. On subsequent loads, files are served directly from the cache.

-------------------------------------------------------------------------------------------

Here's a **practical example of API caching in a web app using React Query** (now called **TanStack Query**) with a typical React + REST API setup.

---

## 🔧 Scenario
Let's say you're building a user dashboard that fetches user profile data from an API endpoint like `/api/user`.

---

## ✅ Step-by-Step Example

### 1. **Install React Query**
```bash
npm install @tanstack/react-query
```

---

### 2. **Set Up the QueryClientProvider**
Wrap your app with `QueryClientProvider` in your main file (e.g., `index.js` or `App.js`):

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
```

---

### 3. **Create the API Call Function**
```js
// api.js
export const fetchUser = async () => {
  const res = await fetch('/api/user');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};
```

---

### 4. **Use React Query in a Component**
```jsx
// UserProfile.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from './api';

const UserProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user</p>;

  return (
    <div>
      <h2>Welcome, {data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserProfile;
```

---

### 💡 Caching Behavior Explanation

| Option       | Meaning |
|--------------|---------|
| `staleTime`  | Time during which the data is considered **fresh** (won’t re-fetch if already fetched). |
| `cacheTime`  | Time after which unused data is **garbage collected**. |

---

### 🧪 Result

- When the component mounts, it will fetch the data.
- If you **navigate away and come back** within 5 minutes (`staleTime`), it will use the cached data.
- If you come back **after 10 minutes**, the cached data is deleted, and it will re-fetch.

------------------------------------------------------------------------------------------------------------


