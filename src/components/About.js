import { useEffect, useState } from "react";
import React from "react";

// const About = () => {
//   return (
//     <div className="about-us">
//       <h1>About Us</h1>
//       <h2>This is Food Ordering App created using React</h2>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("P constructor");
  }

  componentDidMount() {
    console.log("P compDidMount");
  }

  render() {
    console.log("P render");
    return (
      <div>
        <h1>Parent</h1>
        <ChildClass name="Child1" />
        <ChildClass name="Child2" />
      </div>
    );
  }
}

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log(this.props.name + " C constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " C compDidMount");
  }

  render() {
    console.log(this.props.name + " C render");
    const fcname = this.props.name + "-first";
    const scname = this.props.name + "-second";
    return (
      <div>
        <GrandChildClass name={fcname} />
        <GrandChildClass name={scname} />
      </div>
    );
  }
}

class GrandChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log(this.props.name + " CC constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " CC compDidMount");
  }

  render() {
    console.log(this.props.name + " CC render");
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default About;
