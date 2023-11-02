import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <h2>This is Food Ordering App created using React</h2>
    </div>
  );
};

export default About;
