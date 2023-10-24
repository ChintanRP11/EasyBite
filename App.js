const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [ React.createElement(
        "div",
        {id: "child1"}, [ 
            React.createElement("h1", {}, "I'm an H1 tag"), 
            React.createElement("h2", {}, "I'm an H2 tag")
        ]
    ), React.createElement(
        "div",
        {id: "child2"}, [ 
            React.createElement("h1", {}, "I'm an H1 tag"), 
            React.createElement("h2", {}, "I'm an H2 tag")
        ]
    )]
);

const child3 = React.createElement(
    "div",
    {id: "child3"}, [ 
        React.createElement("h1", {}, "I'm an H1 tag"), 
        React.createElement("h2", {}, "I'm an H2 tag")
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const last = ReactDOM.createRoot(document.getElementById("last"));
last.render(child3);

