/*
    <div id="parent">
        <div id="child">
            <h1>I am h1 tag</h1>
            <h2>I am h1 tag</h2>
        </div>
        <div id="child">
            <h1>I am h1 tag</h1>
            <h2>I am h1 tag</h2>
        </div>
    </div>


*/

// const header = React.createElement(
//   "h1",
//   { id: "header", datah1: "d1" },
//   "Hello world form React App!"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("header: ", parent);
console.log("root: ", root);
root.render(parent);
