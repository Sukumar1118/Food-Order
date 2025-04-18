=====================

# What is `npm`?
   ● npm is a package manager primarily for JavaSript.
   ● npm actually has `no full form` but many places it is mentioned as `Node Package Manager`.
   ● npm is world's largest software registry where developers(or many organizations) can share 
        or borrow packages for projects.

# Package Manager:
  ● Package manager is a tool that helps to `manage the dependencies` in the Project.
  ● It automates the process of `installing, upgrading & removing packages` and helps 
    to develop & miantain applications easily.
    EX: `npm`, `yarn` etc.

# Module:
   ● A module is a `single file (or group of files)` containing JavaScript code that can be 
        exported and used in other files by importing it.
   ● It `encapsulates related functionality`, for code organization and reusability.
   ● You can define modules using `import and export` statements in JS(ES6 modules).

# Package:
   ● A package is a `collection of modules` that are bundled together and distributed as 
        a single unit.
   ● It includes a `package.json` file that contains `meta data`, `dependencies`, `versioning` etc.
   ● It can be installed via package manager like `npm or yarn`.

# Library:
   ● A library is a `collection of reusable code` that provides specific functionalities. 
   ● It can be a `single module` or a `collection of modules (or a package)`.

# NOTE:
   ● All above definitions are generic for module, package & library.
   ● In `JS(or in npm ecosystem)`, these terminologies are used `interchangably`.
   EX: `React` is considered as both `package & library`.
        React is a library which provide functionalities for building web apps.
        React is distributed as a npm package which can be installed via npm and
        it also has package.json file.

# CLI(Command Line Interface):
  ● CLI is a tool that allows users to interact with programs via a command line or terminal.
  ● CLI takes input as text & responds with text as output unlike GUIs(no need of GUIs).

# CLI Tools:
  ● CLI Tools are `command-line-based applications` instead of GUI to perform tasks in command
    prompt or terminal.
    EX: npm (npm install react),
        Git (git clone <repository-url>),
        Angular CLI (ng serve),
        Webpack CLI (webpack --config webpack.config.js)

   ● `Uses`:
        - They are `speed, flexible` and `ease of automation`.
        - They are more eficient to manage & streamline development process and manage apps.
        - Useful in managing `remote servers`, where GUIs may not be available or practical.

   ● How to get `CLI Tools`?
   ● `NPM`:
        - npm, node, npx from `Node.js`(.msi installer file).
        - npm is maintained by `Microsoft`(through its subsidiary `GitHub`) and 
            is an `open-source` tool.
   ● `Git`:
        - git, git bash from `Git`(.exe file).
        - Git is maintained by the `Linux Foundation` and is an `open-source` tool.

   ● Both `npm & git` can be installed through CLI using `winget`(included in WIN 10, 11)
          or `Chocolatey`.

# Terminal:
   ● Terminal in VS Code is an `integrated command-line interface` (CLI).
   ● It allows you to execute commands directly within the editor, without switching 
        to an external terminal application.
        
    EX: powershell (Windows (available on macOS and Linux too)),
        command prompt (Windows),
        Git Bash (Cross-platform (part of Git for Windows)),
        Javascript debug terminal (Cross-platform, integrated with VS Code’s debugging environment).

# Git:
   ● Git is `Version Control System` (VCS).
   ● Command-line tool used for `tracking changes` in source code during development.
   ● Provides features like `branching`, `merging`, `committing`, and `viewing history` etc.

# GitHub:
   ● `Hosting service` for Git repositories & a `Web-based platform` for `project management`
        and community engagement.
   ● UI for git and provides features such as `issue tracking`, `pull requests`, 
        and `collaboration tools`.
   ● Similar platforms like GitHub: `GitLab`, `Bitbucket` etc.

# To make our app production ready what should we do?
   ● `Minify our file` (Remove console logs, bundle things up).
   ● `Need a server` to run things.

📢 NOTE: Minify —> Optimization —> Clean console —> Bundle

# What is Parcel/Webpack? Why do we need it?
   ● Parcel/Webpack is `module bundler`.
   ● Used to `bundle and package` JS applications and their dependencies.

# Bundlers:
   ● A bundler is a tool that `bundles & packages` our app into one or more output files.
        This optimized files can be shipped to production.
    Examples of Bundlers:
                    1. Webpack (create-react-app uses this bundler).
                    2. Parcel.
                    3. Vite.
   ● Bundlers are packages.

# Configuring the Project:
   ● `npm init`
   ● It creates a package.json file.

# package.json:
   ● Package.json file is a `configuration` for `NPM and the project`.
   ● Install packages our project needs using: 
        `npm install <packageName>`.
   ● Once package installation is complete, their versions and configuration related 
        information is stored as dependencies inside package.json file

# Now to install parcel we will do:
   ● npm install -D parcel
   ● Now we will get a `package-lock.json` file.

# package-lock.json:
   ● Package-lock.json locks the `exact version` of packages being used in the project.
   ● `npm install` - npm `automatically` creates or updates `package-lock.json` to 
        reflect any new dependencies or updates.
   ● `Do not edit manually`, since it is automatically generated & `managed by npm`.     
   ● package-lock.json ensures a `stable, consistent environment` by locking dependency versions,
        making npm installations reliable and predictable.

# Why should I not modify package-lock.json?
   ● package-lock.json it is automatically generated and managed by npm to 
        `ensure dependency consistency`. 
   ● Making manual changes to package-lock.json can cause `issues in dependency management`, 
        leading to potential `bugs or unexpected behaviors`.

# What is difference between package.json and package.lock.json?
   ● In `package. json` we have information about `generic version` of installed packages.
   ● In `package.lock.json` we have information about the `specific or exact version` of installed packages.

# What is node_modules?
   ● All packages which are installed are like `database for the npm`.
   ● node_modules folder is essential for `managing project dependencies locally`.
   ● Every `dependency` in node_module will have its `package.json`.
   ● Node modules are very heavy so we should always put this in `git ignore`.

# 📢 NOTE: Never touch node_modules and package-lock.json

# What is .gitignore? What should we add and not add into it?
   ● .gitignore file specifies files and directories that `Git should ignore` when
        `tracking changes` in a repository.

   ● `Should add` to .gitignore:
    Ex: 1. Dependency folders like `node_modules` - these can be `regenerated` by like 
            npm using package.json.
        2. `Build output` files like `dist, build` etc.
        3. `Generated test` coverage reports like `coverage` etc.

   ● `Should not add` to .gitignore:
    Ex: 1. `Core application code` (like .js, .py, .html files) should always be 
                tracked by Git.
        2. `Configuration files` like package.json, webpack.config.js etc.
        3. `Documentation files` and other important project files like  `README.md`,
                `LICENSE`, `.gitignore` etc.

# Is it a good idea to push node_modules that on git?
   ● `No`, it’s generally not a good idea to push the node_modules folder to Git.
   ● Adding node_modules to .gitignore and `excluding it from version` control is a 
        best practice.
   ● It keeps the repository `lightweight and efficient`, because node_modules contains 
        not just dependencies mentioned in package.json and also it's `internal dependencies`.
   ● Dependency information in package.json and package-lock.json ensures 
        `version consistency`.

# To ignite our app:
   ● `npx parcel index.html`
   ● npx means `execute using npm` & index.html is the entry point.

# What is npx ?
   ● npx is a `CLI tool` that comes bundled with npm and is used to 
        `execute packages directly from the npm registry` without needing to install
        them globally or locally first.
   ● npx is a `package runner tool`. 

    Ex: npx create-react-app my-app
   ● This command `temporarily installs create-react-app`, runs it, and then removes it. 
   ● This helps saving you from `managing it as a global or project dependency`.
   ● If `it's dependency` is mentioned in package.json it `will install` it and can be seen 
        in node modules.
   ● `create-react-app` is a Node package that generates a `boilerplate React application`.

# What is .parcel-cache?
   ● Parcel `caches code` all the time.
   ● When we run the application, a build is created which takes some time in ms.
   ● If we make any code changes and save the application, another build will be triggered which 
        might take even less time than the previous build. 
        This `reduction of time` is due to parcel cache.
   ● Parcel immediately loads the code from the `cache every time there is a subsequent build`.
   ● On the very `first build` parcel creates a `folder .parcelcache` where it stores the caches in 
        `binary code format`.
   ● Parcel gives `faster build`, `faster developer experience` because of caching.

# dist:
   ● It keeps the `files minified` for us.
   ● When `bundler builds the app`, the build goes into a folder called `dist`.
   ● The /dist folder contains the `minimized and optimised` version of the `source code`.
   ● Along with the minified code, the /dist folder also comprises of all the compiled modules that 
        may or may not be used with other systems.

   ● When we run command:
            `npx parcel index.html`
        -> This will create a faster development version of our project and serves it on the server.
    
   ● When I tell parcel to make a `production build`:
            `npx parcel build index.html`
        -> It creates a lot of things, `minify your file`. 
        -> And the parcel will build all the production files to the dist folder.

# ^ (caret) and ~ (tilde)
   ● In package.json, the ^ and ~ symbols specify `version ranges for npm packages`.
   ● `^ (Caret)` - Allows updates to `minor & patch versions`, but restricts major version updates.
   Ex: "express": "^4.17.1"
        -> "^4.17.1" version will match any version >=4.17.1 <5.0.0
   ● `~ (tilde)` = Allowa updates to `patch versions only`, but restricts minor & major updates.
   Ex: "express": "~4.17.1"
        -> "~4.17.1" version will match any version >=4.17.1 <4.18.0
   ● To `update package-lock.json` with the latest version, you typically use:
                -> `npm update` for specific packages,
                -> `Modify package.json` version ranges directly,
                -> `npm install package@latest`,
                -> `Delete package.lock.json` & install again
    With above methods, npm will then install and lock the latest versions within the specified range.

# What is difference between dependencies vs devDependencies?
●   Aspect	       |  dependencies	                         | devDependencies
    Purpose	       |  Required to run the app in production	| Needed only for development tasks
    Example Packages  |  express, react, axios	               | webpack, eslint, jest
    Installation	  |  Installed in all environments by default| Skipped in production installs
    Cmd to install    |	 npm install <package>	               | npm install <package> --save-dev


# What is browserlist?
   ● Browserslist is a tool that specifies which browsers should be supported/compatible 
        in your frontend app.
   ● It makes our code compatible for a lot of browsers.
    In package.json file do:
                {
                    "browserslist": [
                        "last 2 versions",
                        "not dead"
                    ]
                }
        `last 2 versions`: The last two versions of each major browser.
        `not dead`: Excludes browsers that are officially no longer maintained.
# How it works?
   ● Browserslist works by taking a `list of queries`, interpreting them and generating a 
        list of specific browser versions that match those criteria.
   ● Browserslist uses `caniuse-lite database`, which contains browser support and usage 
        statistics for various features & `generates browsers list`.
   ● This browser list is passed to tools like Babel, Autoprefixer, ESLint, and others. 
        These tools use the list to determine:
            `Babel`: Which JavaScript features to transpile or polyfill.
            `Autoprefixer`: Which CSS vendor prefixes to add.
            `Webpack`: Which code can be optimized for specific browsers.
   ● It optimizes code by only transforming what's necessary, based on current browser usage and 
        feature ensuring your project is both performant and compatible with your specified audience.
   ● If you `don't specify a Browserslist` configuration in your project, most tools will fall back 
        on a `default browser support list`.

# Transitive Dependencies:
   ● We have our package manager(nodeJs) which takes care of our transitive dependencies of our code.
   ● If we’ve to build a production ready app which uses all optimisations 
        (like minify, bundling, compression, etc), we need to do all these.
   ● But we can’t do this alone, we need some dependencies on it. Those dependencies are also dependent
        on other dependencies and `these nested dependencies` are called transitive dependencies.

# Parcel features at a glance:
    Hot Module Replacement (HMR)
    Tree Shaking
    code splitting
    Zero Config
    File Watcher Algorithm - C++
    Bundling
    Minify Code
    Cleaning our code
    Dev and production build
    Super fast build algorithm
    Image Optimization
    Caching while development
    Compression
    Compatible with older browser versions
    Https on dev
    Image Optimization
    Port No
    Consistency Hashing Algorithm
    

# Code Splitting:
   ● It is an optimization technique that `divides code into smaller bundles`, allowing only 
        `essential code to load initially` and deferring other parts until needed.
   ● `Improves load times, enables on-demand loading (lazy-loading)`, and 
        enhances performance in large applications by `reducing the initial bundle size`.
   ● Common methods include `route-based splitting` (loading by pages or routes) and 
        `component-based splitting` (loading individual components as needed).
   ● `Webpack & parcel supports` code splitting.

# Tree Shaking:
   ● Tree shaking is a process of `removing the unwanted code` that we do not use while developing 
        the application.
   ● In computing, tree shaking is a `dead code elimination technique` that is applied when optimizing code.
   ● Tree shaking relies on ES6 module syntax (import and export) and removes methods or functions which are
        `not imported or used anywhere`, `unused variables` etc.
   ● `Functions should be pure` to remove while treeshaking.
   ● `Webpack & parcel supprots` tree shaking.

# Hot Module Replacement (HMR):
   ● It means that parcel will keep a `track of all the files which you are updating`.
   ● There is `File Watcher Algorithm (written in C++)`. It keeps track of all the files
        which are changing realtime and it tells the server to reload.
   ● It allows `only updated modules to load instantly` in the browser `without a full page refresh`,
        preserving the application state.
   ● It works well with JavaScript, CSS, and some HTML changes, instantly reflecting updates in the browser.
   ● `Webpack, parcel` etc. supports HMR. 

# Zero config:
   ● Parcel `automatically handles most of the configuration tasks` needed to bundle an application.
   ● No need of `complex config set-up like webpack.config.js` to start bundling of application.
   ● It automatically handles tasks like file handling, HMR, treee shaking, code splitiing, 
        dependency management, built-in dev server etc. 

# Project Assignment:
- In your existing project
● - intialize npm into your repo
● - install react and react-dom
● - remove CDN links of react
● - install parcel
● - ignite your app with parcel
● - add scripts for “start” and “build” with parcel commands
● - add .gitignore file
● - add browserlists
● - build a production version of your code using parcel build

