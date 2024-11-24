
Here are two quick stories:
# In the web development world, we often hear that the trend is leaning from `Monolithic` towards the`Microservices` architecture.
● Atlassian's Shift: Back in 2018, ‘Atlassian’ faced some growing pains. 
    To keep up with demand and stay flexible, they switched to microservices. 
    This move helped them stay agile and scale up smoothly.
● Netflix's Transformation : The popular video streaming platform over in the world 
    ‘Netflix’ runs on AWS. They started with a monolith and moved to microservices.
📢 In today's episode, we discussed the trend towards lighter and more adaptable web architectures.

# What are ‘Monolithic’ and ‘Microservices’ architectures exactly?
● Understanding ‘Monolith’ and ‘Microservices’ architectures is a big deal in software development,
    but as developers, it's important to grasp the basics. So, in this episode, we'll break 
    it down into simple terms.
# Monolithic Architecture
● In the past, we used to build large projects where everything was bundled together.
    Imagine building an entire application where all the code—APIs, user interface, database connections, authentication, even notification services— resides in one massive project with single code base.
● Size and Complexity Limitation: Monolithic applications become too large and complex to understand.
● Slow Startup: The application's size can slow down startup time.
● Full Deployment Required: Every update requires redeploying the entire application.
● Limited Change Understanding: It's hard to grasp the full impact of changes, leading to extensive 
    manual testing.
● Difficult Continuous Deployment: Implementing continuous deployment is challenging.
● Scaling Challenges: Different modules may have conflicting resource needs, making scaling difficulty.
● Reliability Concerns: Bugs in any module can crash the whole application, affecting availability.
● Adoption of New Technologies: Making changes in frameworks or languages is expensive and 
    time-consuming since it affects the entire application.
# Microservices Architecture
● The idea is to split your application into a set of smaller, interconnected services instead of 
    building a single monolithic application. 
● Each service handles a specific job, like handling user accounts or managing payments. 
● Inside each service, there's a mini-world of its own, with its own set of 
    rules (business logic) and tools (adapters). 
● Some services talk to each other in different ways, like using REST or messaging.
    Others might even have their own website!
● Simpler Development: Microservices break down complex applications into smaller, 
    easier-to-handle services. This makes development faster and maintenance easier.
● Independent Teams: Each service can be developed independently by a team focused on that specific task.
● Flexibility in Technology: Developers have the freedom to choose the best technologies for each
    service, without being tied to choices made at the project's start.
● Continuous Deployment: Microservices allow for independent deployment, enabling continuous 
    deployment for complex applications.
● Scalability: Each service can be scaled independently, ensuring efficient resource usage.
● Separation of Concerns: With each task having its own project, the architecture stays organized 
    and manageable.
● Single Responsibility: Every service has its own job, following the principle of single 
    responsibility. This ensures focused and efficient development.

# Why Microservices?
● Breaking things down into microservices helps us work faster and smarter. 
● We can update or replace each piece without causing a fuss. It's like having a well 
    oiled machine where each part does its job perfectly.

# How do these services interact with each other?
● In our setup, the UI microservice is written in React, which handles the user interface.
# Communication Channels
● These services interact with each other through various communication channels.
● For instance, the UI microservice might need data from the backend microservice,
    which in turn might need to access the database.
# Ports and Domain Mapping
● Each microservice runs on its specific port. This means that different services can be 
    deployed independently, with each one assigned to a different port. 
● All these ports are then mapped to a domain name, providing a unified access point for
    the entire application.

# Connecting to the External World
● In this episode, we're going to explore how our React application communicates with the 
    outside world. We'll dive into how our application fetches data and seamlessly integrates 
    it into the user interface. It's all about understanding data exchange that makes our 
    app come alive.

Initially, we used mock data inside the ‘ useState() ’ hook to create a state variable. 
Now will see, fetching real-time data from Swiggy's API and displaying it dynamically on the screen.
# Let's understand two approaches to fetch and render the data :
1. `Load and Render`:
● We can make the API call as soon as the app loads, fetch the data, and render it.
2. `Render First Fetch Later`:
● Alternatively, we can quickly render the UI when the page loads we could show the structure of the 
    web page, and then make the API call. Once we get the data, we re-render the application to 
    display the updated information.
In React, we're opting for the second approach. This approach enhances user experience by rendering 
    the UI swiftly and then seamlessly updating it once we receive the data from the API call.

# useEffect()
● Essentially, `useEffect()` is a Hook React provides us, it is a regular JavaScript function,
    to help manage our components. To start exploring its purpose, let's first import it from React.

`import { useEffect } from "react"`;
● useEffect() takes two arguments.
1. `Callback function`.
2. `Dependency Array`.

// Syntax of useEffect()
// We passed Arrow function as callback function.
`useEffect(() => {}, [])`;
# When will the callback function get called inside the useEffect()?
● Callback function is getting called after the whole component get rendered.
● In our app we are using ’ useEffect() ' inside Body component. So it will get called once Body 
    component complete its render cycle.
● If we have to do something after the rendercycle complets we can pass it inside the ‘ useEffect() '.
    this is the actual use case of useEffect. It is really helpful to render data which we will 
    get after the ‘ fetch() ' operation and we are going to follow second approach which we have 
    discussed already.
# Where we fetch the data?
● inside the ‘useEffect() ' we use ‘ fetchData() ' function to fetch data from the external world.
● logic of fetching the data is exactly the same that we used to do in javascript.
    here we are fetching the swiggy’s API.

📢 IMPORTANT: The Fetch API provides an interface for fetching resources (including across the network). 
    It will seem familiar to anyone who has used XMLHttpRequest, but it provides a more powerful and
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_ concepts.

# How can we use Swiggys API in our App?
● We know that ‘fetch() ’ always return promise to us. we can handle response using ‘ .then() ’ method.
● but here we are using newer approach using ‘async/await’ to handle the promise.
● we convert this data to javascript object by using ‘ .json '

// here once the body component would have been rendered , we will fetch the data
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296
        1468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
    };

# By using above code let’s see can we able to call swiggy’s api sucessfully or not?
● We got an error 😅 (refer fig 6.1)

# What is the reasone we got that error?
● Basically calling swiggy’s API from local host has been blocked due to CORS policy.

# What exactly the CORS policy is?
● (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers,
    that determines whether browsers block frontend JavaScript code from accessing responses 
    for cross-origin requests.
In simpler terms, CORS (Cross-Origin Resource Sharing) is a security feature implemented by 
    browsers that restricts web pages from making requests to a different origin (domain) than 
    the one from which it was served. Therefore, when trying to call Swiggy's API from localhost, 
    the browser blocks the request due to CORS restrictions.

📢 IMPORTANT: CORS - MDN Web Docs Glossary: Definitions of Web-related terms | MDN
    CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, 
    that determines whether browsers block frontend JavaScript code from accessing responses for 
    cross-origin requests.
    https://developer.mozilla.org/en-US/docs/Glossary/CORS
    https://www.youtube.com/watch?v=tcLW5d0KAYE

📢 IMPORTANT! To prevent CORS errors when using APIs, utilize a CORS extension and activate it.
📢 IMPORTANT! In future swiggy definately change their API data so always remember go to swiggy’s website 
    and copy the updated URL of API to fetch data.

# How do we Update the data ?
● We're updating the ‘listOfRestaurant ' using a state variable we've already defined. We simply use the
‘ setlistOfRestaurant() ' function to replace the old data with the new.

After fetching the data, there's a noticeable one-second delay before it appears on the screen. 
    This delay occurs because the APIs take some time to load. Improving this can enhance the 
    user experience.

# How could we improve it?
● To enhance the user experience, we could add a spinning loader that appears while we wait for the data
    to load from the APIs. This provides visual feedback to the user and indicates that the application is working to retrieve the information.
● We could implement a condition to display a spinning loader if our list of restaurants hasn't received 
    any data yet.
    if (listOfRestaurant.length === 0) {
    return <h1>loading. . .</h1>;
    }

Refreshing the page to see the result,but this isn't an ideal approach. Instead, we can enhance the 
    user experience by implementing a ‘Shimmer UI’.
# Shimmer UI
● Shimmer UI is a technique that shows placeholder content while data is loading, reducing wait time 
    and keeping users engaged.
● Instead of displaying a generic "loading" message, we'll integrate a <shimmer/> component within our 
    app to provide visual feedback while data is loading. this concept is known as ‘conditional rendering‘.
# conditional rendering
    if (listOfRestaurant.length === 0) {
    return <Shimmer/>;
    }

# Why do we need State variable?
● Many developers have this confusion today we will see that Why with the help of following example:
● to understand this we will introduce on feature in our app is a ‘login/logout’ button
● Inside Header component we are adding the button look at the code given below. also we want to make 
    that login keyword dynamic it should change to logout after clicking.
step1 ——>
● We create ‘ btnName ' variable with login string stored in it and we are going use that btnName as a 
    button text look at the code below
step2 ——>
● Upon clicking this button, it changes to ‘logout’.
● But it will not change 😒.
    It's frustrating that despite updating the ‘ btnName ' value and seeing the change reflected in the console, the UI remains unchanged. This happens because we're treating ‘ btnName ' as a regular 
    variable. 

● To address this issue, we need a mechanism that triggers a UI refresh whenever ‘ btnName '
    is updated.
    To ensure UI updates reflect changes in ‘btnName ', we may need to use state management that 
        automatically refreshes the UI when data changes. that the reasone we need state variable
        ‘ useState() '.

● Let's utilize ‘ reactBtn ' as a state variable using ‘ useState() ' instead of btnName
Here's the code:
const [reactBtn, setReactBtn] = useState("login");
To update the default value of ‘ reactBtn ', we use ‘ setReactBtn 'function.

📢 NOTE: In React, we can't directly update a state variable like we would use a normal JavaScript
     variable. Instead, we must use the function provided by the ‘useState() ' hook. 
     This function allows us to update the state and triggers a re-render of the component,
     ensuring our UI is always up-to-date with the latest state.

● With the code provided below, we've enhanced the functionality of our app. Now, we can seamlessly 
    toggle between "login" and "logout" states using a ternary operator. This addition greatly improves 
    the user experience.
const [reactBtn, setReactBtn] = useState("login");
    return (
    <div className="container header">
        <a>logo</a>
            {navItems}
        <button
            Exploring The World!Namaste-React) 13
            className="login"
            onClick={() => {
            reactBtn === "login" ? setReactBtn("logout") : setReactBtn("login");
            }}
        >
        {reactBtn}
        </button>
    </div>
    );
📢 NOTE : 
● The interesting aspect of the above example is how we manage to modify a const variable like 
    ‘ reactBtn ', which traditionally isn't possible. 
● However, because React rerenders the entire component when a state variable changes, it essentially 
    creates a new instance of ‘ reactBtn ' with the updated value. 
● So, in essence, we're not updating ‘ reactBtn '; instead, React creates a new one with the modified 
    value each time the state changes. This is the beauty of React.