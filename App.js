import React from "react";
import ReactDom from "react-dom/client";

// create react element
const header = React.createElement(
  "h2",
  { id: "header" },
  "React element in JS"
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(header);
