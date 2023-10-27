import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/images/logo.png";
import userIcon from "./public/images/user-icon.png";

// Nested element using createElement()
const nestedheaderElement = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3"),
]);

// Using JSX
const nestedheaderJSXElement = (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

// Using Functional Component
const NestedHeaderComponent = () => (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

// Header
const HeaderComponent = () => (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="user-icon">
      <img src={userIcon} alt="User Icon" />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
