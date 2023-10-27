import React from "react";
import ReactDOM from "react-dom/client";

// jsx element
const title = (
  <div>
    <h1 className="head" tabIndex={5}>
      Heading using JSX element
    </h1>
  </div>
);

// same as above but created using functional component
const TitleComponent = () => (
  <h1 className="head" tabIndex={5}>
    Heading using functional component
  </h1>
);

// react functional component
const HeadingComponent = () => (
  <div id="container">
    {title}
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent></TitleComponent>
    <h1 className="heading">
      Namaste React using React Functional Component 🚀
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
