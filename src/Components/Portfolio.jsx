import React, { useEffect, useState } from "react";
import CleanerImage from "../assets/Cleaner.png";
import ChessImage from "../assets/Chess.png";
import DocImage from "../assets/Doc.png";
import starry from "../assets/2824536.jpg";

const projectList = [
  {
    title: "Chess Master",
    description:
      "Developed a dynamic chess application using the MERN stack, WebSockets, and FEN. The app integrates chessboard.js and Chess.js libraries for interactive gameplay and Tailwind CSS for sleek styling. Enjoy real-time updates and seamless multiplayer matches on a robust platform designed for chess enthusiasts.",
    tools: ["MERN Stack", "WebSockets", "Tailwind", "Redux", "JWT", "bcrypt.js"],
    url: "https://github.com/contributorsambhav/ReactChess",
    deploymentUrl: "https://reactchess.onrender.com/",
    image: ChessImage // Image for Chess Master project
  },
  {
    title: "DocuSharp",
    description:
      "Developed a platform designed to bridge the documentation gap! DocuSharp enables developers to share concise intros and curated resources for various programming languages. Built with React.js, Redux Toolkit, Appwrite, and Tailwind CSS, it offers real-time editing with TinyMCE.",
    tools: ["React.js", "Redux", "Appwrite", "Tailwind", "TinyMCE"],
    url: "https://github.com/contributorsambhav/BLOG-Using-React-Redux-Appwrite-for-Backend",
    deploymentUrl: "https://docusharp.vercel.app",
    image: DocImage // Image for DocuSharp project
  },
  {
    title: "CleanUpNow",
    description:
      "Developed at Electrothon, this trash tracking app uses OpenCV for garbage detection in crowd images. It identifies the nearest municipality to streamline waste management. Designed to foster community responsibility and awareness, CleanUpNow aims to make a positive impact through innovative technology!",
    tools: ["MERN Stack", "Tailwind", "OpenCV"],
    url: "https://github.com/contributorsambhav/trashtrack",
    deploymentUrl: "https://github.com/contributorsambhav/trashtrack",
    image: CleanerImage // Image for CleanUpNow project
  }
];

const Portfolio = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="padding portfolio-section" id="portfolio">
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* Conditionally render images based on screen width */}
        {isWideScreen && (
          <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {projectList.map((project) => (
              <a href={project.deploymentUrl} key={project.title} target="_blank" rel="noopener noreferrer" className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image ImagesocialIcon"
                />
              </a>
            ))}
          </div>
        )}

        {/* Project Cards Container */}
        <div style={{ flex: "2", display: "flex", flexDirection: "column", paddingLeft: "2rem" }}>
          {projectList.map((project) => (
            <div className="card" key={project.title} style={cardStyle}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ fontWeight: "600", fontSize: "1.8rem", marginBottom: "1.5rem", color: "white" }}>{project.title}</h3>
              </a>
              <p style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: "1.5rem", color: "white" }}>{project.description}</p>
              <p style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: "1.5rem", fontStyle: "italic", color: "white" }}>
                Tools Used: {project.tools.join(", ")}
              </p>
              {(project.title !== "CleanUpNow") &&
                <a className="socialIcon" href={project.deploymentUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  View Deployment
                </a>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Inline styles for card and link
const cardStyle = {
  backgroundColor: "#2d3748",  // White background
  borderRadius: "8px",          // Rounded corners
  boxShadow: "0 10px 15px rgba(29, 78, 216, 0.5)",  // Larger shadow with blue tint
  padding: "2rem",              // Padding inside the card
  marginBottom: "3rem",         // Space between cards
  textAlign: "left",            // Align text to the left
  color: "white",               // Text color (white)
  width: "75%",                 // Set the card width to 75%
  opacity: 0.9
};

const linkStyle = {
  display: "inline-block",
  marginTop: "1rem",
  color: "white",
  textDecoration: "none",
  fontWeight: "semibold"
};

export default Portfolio;
