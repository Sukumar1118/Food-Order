import React from "react";
import ReactDom from "react-dom/client";
import skypeLogo from "./assets/logos/skypeLogo.jpg";
import userIcon from "./assets/logos/userIcon.jpg";
import "/app.css";

//* create a simple react element.
const reactElement = React.createElement(
  "h2",
  { id: "header" },
  "React element in JS"
);

/*
 * Create a Nested header Element using -
 * React.createElement(h1,h2,h3 inside a div with class “title”).
 */
const reactHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { className: "title" }, "React Header1"),
  React.createElement("h2", { className: "title" }, "React Header2"),
  React.createElement("h3", { className: "title" }, "React Header3"),
]);

/*
 * Create a Nested header Element using - JSX.
 * (h1,h2,h3 inside a div with class “title”).
 */
const jsxHeader = (
  <div>
    <h1 id="h1" className="title">
      JSX Header1
    </h1>
    <h2 id="h2" className="title">
      JSX Header2
    </h2>
    <h3 id="h3" className="title">
      JSX Header3
    </h3>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

/*
 * Render React element & JSX element.
 */
root.render(reactHeader);
root.render(jsxHeader);

//* Single Line JSX Code:
const jsxHeadingSingleLine = <h1>I am JSX single syntax</h1>;

/*
 * Multi-line JSX code:
 * If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory.
 * To tell Babel from where JSX is starting and ending.
 */
const jsxHeadingMultiLine = (
  <div>
    <h1>I am JSX multi-line syntax</h1>
  </div>
);

/*
 ? Composition of Component?
 * "Adding or calling a component inside another component".
 */
const TitleComponent = () => {
  return <h3>I am from Title Component</h3>;
};
const DescComponent = () => {
  return (
    <div>
      {/* 
      //* Different ways of calling a Componentor React element in JSX.

      //* Calling the component function directly. */}
      {TitleComponent()}

      {/* //* Other ways of calling component. */}
      <TitleComponent />
      <TitleComponent></TitleComponent>

      {/* //* Calling JSX elements. */}
      {jsxHeadingSingleLine}
      {jsxHeadingMultiLine}

      <h2>I am from Desc Component</h2>
      {/* <InfiniteLoopComponent /> */}
    </div>
  );
};

/*
 * Calling 2-components inside each other will result in infininte loop.
 */
const InfiniteLoopComponent = () => {
  return (
    <div>
      <DescComponent />
      <h3>I am from infinite-Loop Component</h3>
    </div>
  );
};

root.render(<DescComponent />);

/* 
    Create a Header Component from scratch using Functional Components with JSX.
        ○ Add a Logo on left
        ○ Add a search bar in middle
        ○ Add User icon on right
        ○ Add CSS to make it look nice
*/
const HeaderComponet = () => {
  return (
    <div>
      <div className="header-component">
        <div>
          <img width="30px" src={skypeLogo} alt="skypeLogo"></img>
        </div>
        <div>
          <input type="text"></input>
        </div>
        <div>
          <img width="30px" src={userIcon} alt="userIcon"></img>
        </div>
      </div>
    </div>
  );
};

root.render(<HeaderComponet />);
