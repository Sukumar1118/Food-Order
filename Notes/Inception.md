### React Inception:
====================

# What is React?
    # React is open source JS library & can be used on any small portion of the app like header, footer, 
        sidebar etc. like any other JS library in our existing application.

# React uses:
    # It can be used to develop:
                            1. Web applications.
                            2. Mobile applications.
                            3. Large-scale enterprise applications etc.

# Why React is known as ‘React’?
    # The name ‘React’ was chosen because the library was designed to allow developers to react
        to changes in state and data within an application, and to update the user interface in 
        a declarative and efficient manner.

# What is Library?
    # Library is a collections of prewritten code snippets that can be used to perform certain tasks. 
        A particular JavaScript library code can be plugged into application code which leads to faster development and fewer vulnerabilities to have errors.
    Examples: React, jQuery

# What is Framework?
    # Framework provides a basic foundation or structure for a website or an application.
    Examples: Angular

# Similarities between Library and Framework?
    # Frameworks and libraries are code written by third parties to solve regular/common 
        problems or to optimise performance.

# Difference between Library and Framework?
    # A key difference between the two is Inversion of control. 
        -> When using a library, the control remains with the developer who tells the application 
            when to call library functions. 
        -> When using a framework, the control is reversed, which means that the 
            framework tells the developer where code needs to be provided and calls it as it requires.
# Emmet:
    # Emmet is the essential toolkit for web-developers. 
    # It allows you to type shortcuts that are then expanded into full-fledged boiler plate code for 
        writing HTML and CSS.

### About ReactJS CDN links(or libraries):
# React & ReactDOM objects:
    # React and ReactDOM are exposed as global objects when you add React and ReactDOM via CDN links.

    # We can use these objects in JavaScript code to build and render React components.

    # __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED object of React's internal structure. 
        It emphasizes that developers should not rely on or manipulate these internals directly,
        as they can lead to issues with application stability and future compatibility.
        Always stick to the documented React API for building and managing your React applications.

# React(react.development.js):
    # React is a core react library responsible for handling component structure, state and lifecycle.
# ReactDOM(react-dom.development.js):
    # ReactDOM library is responsible for rendering React components to DOM.

# Are both libraries required?
    # React can be used in multiple environments like:
        -> React native for mobile Apps where react DOM is not required. React provides core logic for
            handling components and react DOM deals with web specific operation like DOM manipulation.

        -> For web project both are required and for mobile Apps React DOM is not required. So, it's better
            split it into two libraries and use it according to the requirements.


# Why "crossorigin" attribute is included in CDN links?
1. # Handling CORS (Cross-Origin Resource Sharing):
    -> The crossorigin attribute in the script tag enables CrossOrigin Resource Sharing (CORS) for loading   external JavaScript files from different origin than the hosting web page.

    -> This allows the script to access resources from the server hosting the script, such as making HTTP   requests or accessing data.

2. # Ensure proper error handling: 
# Without the crossorigin Attribute
    -> Browsers can block detailed error messages when resources fail to load due to 
        cross-orogin issues without "crossorigin" attribute.

    ->  When errors like CORS issue or a network failure occurs, 
        it gives generic meassage like:

    EX: Console Error: "Script Error."
        Network Panel: The status might show "Failed" or simply "Error."

    // This is a vague, unhelpful error. You have no idea why the script failed to load,
    // whether it’s due to a CORS issue, network issue, or other reasons.
# With crossorigin Attribute
    # Browsers will provide more detailed error information with "crossorigin" attribute.

    EX: Access to Script at 'https://cdn.example.com/react.min.js' from origin 'https://yourdomain.com' 
        has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the 
        requested resource.

    // This error clearly tells you the reason for the failure — the absence of the 
    // Access-Control-Allow-Origin header, indicating a CORS policy violation.
    
# NOTE: 
    # React will overwrite everything inside "root" and replaces with whatever given inside render.

# What is CDN? 
    # CDN(Content Delivery Network) is a network of geographically distributed servers that work together to deliver content (like    websites, images, videos, and other assets) to users more quickly and efficiently.

# Why do we use CDN?
    # It is:
        1. Faster & Reduces Latency (serves from server closest to the user)
        2. Improves website performance (offloading the static content to CDN servers)
        3. Secure (Web Application Firewalls (WAF)) etc.

    # When a user requests content, the CDN serves it from the server closest to the user, reducing latency and load times.

# How a CDN Works?
    # CDNs cache content in servers located across the globe.
    # When a user requests a webpage, the CDN delivers a cached version of the page from the nearest server.

# what are Popular CDN Providers?
                        1. Cloudflare
                        2. Akamai
                        3. Amazon CloudFront
                        4. Google Cloud CDN
                        5. Microsoft Azure CDN  etc.

# When to Use a CDN?
    # When your website:
        1. Has global audience.
        2. Improve wbsite load times & reduce server load.
        3. Handle large amounts of traffic etc.


# What is difference between react.development.js and react.production.js files via CDN?
    # Key Differences:
        Feature	            react.development.js	         react.production.js
        -------             --------------------             -------------------
        File Size	    :   Larger (unminified)	             Smaller (minified)
        Performance	    :   Slower (with extra checks)	     Faster (optimized)
        Warnings, Errors:	Detailed warnings and errors	 No warnings, just minimal errors
        Readability	    :   Readable (for debugging)	     Not human-readable
        Use Case	    :   Development and debugging	     Production deployment



==================================================================================================

# React Native:
    # React Native renders on native mobile components(like Android & IOS) rather than browser DOM.

    # React Native relies on APIs provided by the react native to manage styling, layouts and
        interaction with components in mobile environment. It doesn't depend on web's DOM.

# Uses:
    # React native can be used primarily for building Mobile Apps(like Android and IOS).
        It can be used for other platforms like:
                                        1. Mobile Apps(IOS and Android).
                                        2. Windows & Mac OS desktop apps.
                                        3. TV platforms.
                                        4. React native web apps.

### About CORS:
# CORS (Cross-Origin Resource Sharing):
    # CORS is a browser security mechanism that restricts web pages from making requests to a different domain (origin) than the one currently loaded. It is meant to protect users by preventing malicious websites from making unauthorized requests on behalf of a user to different domains.

# Cross-Origin Requests:
    # When you include resources such as a JavaScript file from a CDN in your React application, the browser treats it as a cross-origin request if the CDN's domain is different from your application's domain.

# CORS Policy:
    # To allow cross-origin requests, the server (in this case, the CDN server) must implement a CORS policy by sending the appropriate HTTP headers in its responses.

# Access-Control-Allow-Origin:
    # The `Access-Control-Allow-Origin` header specifies which domains are allowed to make requests to a resource. A value of `*` allows access from any domain, while specific domains can be allowed by specifying them (e.g., `https://example.com`).

# SOP (Same-Origin Policy):
    # Same-Origin Policy is a security measure that restricts web pages served from one domain from making requests to resources on another domain.

    # CORS is an extension of SOP that allows cross-origin requests under certain conditions. SOP is enforced by the browser at various levels, including the network layer, JavaScript engine, and browser storage, ensuring resources are isolated and accessed only by scripts from the same origin.

### This is part of Croos-Origin attribute...
3. # Subresource Integrity (SRI)
    If you use SRI to verify the integrity of the loaded resource i-e; to make sure it
        has not been tampered(or modifed by attackers), the "crossorigin" attribute is used.

    EX: <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"
        integrity="sha384-3HezAURKObYs1WVq/a+3cCkHVm/8FDvLczHokgOG+GcUx1U9CFZCzLfzt9pKwqJG"
        crossorigin="anonymous"></script>


# Same-Origin Policy vs CORS Policy

These two policies are related but serve different purposes:

## Same-Origin Policy
This is a **restrictive security mechanism** implemented by browsers that:
- Blocks JavaScript from accessing resources across different origins
- Is the default behavior built into browsers
- Acts as a security boundary to prevent malicious websites from accessing data on other sites
- Is essentially a "deny by default" approach

## CORS (Cross-Origin Resource Sharing)
This is a **permissive mechanism** that:
- Allows servers to selectively relax the same-origin policy
- Enables controlled access to resources across origins
- Uses HTTP headers to specify which origins can access the resource
- Is essentially an "allow by specific permission" approach

## Key Differences

1. **Purpose**:
   - Same-Origin: Restricts access (security barrier)
   - CORS: Enables access (controlled gateway)

2. **Implementation**:
   - Same-Origin: Enforced by browsers automatically
   - CORS: Implemented by servers through HTTP headers

3. **Default behavior**:
   - Same-Origin: Blocks cross-origin requests
   - CORS: Provides a framework to allow specific cross-origin requests

4. **Control**:
   - Same-Origin: Browser-controlled (users/websites cannot disable it)
   - CORS: Server-controlled (server decides who can access its resources)

5. **Headers**:
   - CORS uses specific headers like `Access-Control-Allow-Origin` to permit access
   - Same-Origin policy doesn't use special headers; it's the default behavior

Think of it this way: Same-Origin Policy is the lock on the door, while CORS is a system that allows the owner to give out specific keys to trusted visitors.

=========================

