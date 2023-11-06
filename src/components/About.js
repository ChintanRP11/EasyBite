import React from "react";
import UserContext from "../utils/userContext";
class About extends React.Component {
  render() {
    return (
      <div className="about-us">
        <UserContext.Consumer>
          {(data) => "User: " + data.loggedInUser}
        </UserContext.Consumer>
        <h1>About Us</h1>
        <h2>This is Food Ordering App created using React</h2>
      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div className="about-us">
//       <h1>About Us</h1>
//       <h2>This is Food Ordering App created using React</h2>
//     </div>
//   );
// };

// export default About;
