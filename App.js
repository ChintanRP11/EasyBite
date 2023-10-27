import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h2",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX - HTML like syntax
// JSX => (Babel) React.createElement => React Element - JS object => HTML element

const jsxHeading = (
  <div>
    <h1 className="heading">Namaste React using JSX 🚀</h1>
  </div>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
