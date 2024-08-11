import React, { useEffect, useState } from "react";
import image from "../assets/2824536.jpg";
import "../styles.css"; // Ensure this path is correct

const imageAltText = "purple and blue abstract background";

const description =
  "I'm Sambhav, a B.Tech. student at NIT Hamirpur, specializing in Mathematics and Computing. Skilled in JavaScript and MERN Stack.";

const skillsList = [
  "React js",
  "Node js",
  "Express js",
  "Redux js",
  "Mongo DB",
  "JavaScript",
  "Tailwind CSS",
  "Socket.IO",
  "Git/Github",
  "JWT/Bcrypt",
  "CSS",
  "HTML"
];

const detailOrQuote = `. My passion lies in leveraging technology to solve real-world problems and create practical tools that enhance everyday experiences.

I thrive on challenges and complex tasks, constantly seeking to innovate and improve. I believe that the essence of a successful project lies in understanding user needs and creating intuitive solutions.

✨ I'm also deeply fascinated by the realms of Fintech, Geopolitics, and Investing, constantly exploring new horizons within these fields.`

const About = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById("about");
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section style={{
      paddingTop: "10vh",
      paddingBottom: "10vh",
      
    }} className="" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className={`content ${isVisible ? "animate-in" : ""}`}>
        <h2 className="section-heading">About Myself</h2>
        <p className="description">{description}</p>
        <hr className="separator" />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>
        <hr className="separator" />
        <p className="detail-or-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
