/** @@ Sample Hello world program with React @@
 * 
 * const header = React.createElement(
  "h1",
  { id: "header", datah1: "d1" },
  "Hello world form React App!"
    );
    const rootSample = ReactDOM.createRoot(document.getElementById("root"));
    console.log("header: ", parent);
    console.log("root: ", root);
    root.render(header);
 * 
 */


/** @@ Nested elements sample @@
 * 
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
 *
*/

// Create netsed elements, muliple child elements in an array sample.

/*  
    React createElemnt():
        -> React createElemnt() creates react element and it is plain JS object
            which represents the react element.
        -> JS object contains:
            {
                type: "div",
                props: children: Array(2)
                        0: {
                            type: "h1",
                            props: children: "I am h1 tag",
                                    id: "child1"
                        }
                        id: "parent"
            }
        Syntax: React.createElement(type, props, [...children]);
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", className: "greeting" }, [
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
