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


