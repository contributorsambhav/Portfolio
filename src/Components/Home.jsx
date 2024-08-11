import React, { useEffect, useRef } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

// Import all images
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import Express from "../assets/expressjs.png";
import Node from "../assets/Nodejs.png";
import ReactImage from "../assets/React.png";
import MongoDB from "../assets/MongoDB.png";
import Tailwind from "../assets/Tailwind.png";
import Socket from "../assets/SocketIO.png";
import "./Home.css"; // Import the CSS file

const imageAltText = "Background with floating technology icons";

// Function to check collision between two elements
const checkCollision = (el1, el2) => {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  return !(rect1.right < rect2.left ||
           rect1.left > rect2.right ||
           rect1.bottom < rect2.top ||
           rect1.top > rect2.bottom);
};

// Function to avoid overlap by adjusting positions
const avoidOverlap = (images) => {
  const positions = [];
  const imageSize = window.innerWidth * 0.1; // 10vw in pixels
  const width = window.innerWidth - imageSize; // Adjust based on image size
  const height = window.innerHeight - imageSize; // Adjust based on image size

  for (let i = 0; i < images.length; i++) {
    let x, y, overlap;

    do {
      x = Math.random() * width;
      y = Math.random() * height;
      overlap = false;

      for (let j = 0; j < positions.length; j++) {
        const [px, py] = positions[j];
        const distance = Math.sqrt((x - px) ** 2 + (y - py) ** 2);
        if (distance < imageSize) { // Adjust based on image size
          overlap = true;
          break;
        }
      }
    } while (overlap);

    positions.push([x, y]);
    images[i].style.transform = `translate(${x}px, ${y}px)`;
  }
};

const Home = ({ name, title }) => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current;
    avoidOverlap(images);

    images.forEach(img => {
      // Set random velocities
      const velocityX = (Math.random() - 0.5) * 1.6; // Random velocity between -0.8 and 0.8
      const velocityY = (Math.random() - 0.5) * 1.6; // Random velocity between -0.8 and 0.8

      img.dataset.velocityX = velocityX;
      img.dataset.velocityY = velocityY;
    });

    const animate = () => {
      images.forEach(img => {
        let transform = img.style.transform;
        let x = parseFloat(transform.split('(')[1].split('px')[0]);
        let y = parseFloat(transform.split(' ')[1].split('px')[0]);
        let velocityX = parseFloat(img.dataset.velocityX);
        let velocityY = parseFloat(img.dataset.velocityY);

        x += velocityX;
        y += velocityY;

        // Bounce off the edges of the section
        const sectionWidth = window.innerWidth;
        const sectionHeight = window.innerHeight;
        const imageSize = window.innerWidth * 0.1; // 10vw in pixels

        if (x < 0 || x > sectionWidth - imageSize) velocityX *= -1; // Adjust for image width
        if (y < 0 || y > sectionHeight - imageSize) velocityY *= -1; // Adjust for image height

        img.style.transform = `translate(${x}px, ${y}px)`;
        img.dataset.velocityX = velocityX;
        img.dataset.velocityY = velocityY;
      });

      // Check for collisions between images
      for (let i = 0; i < images.length; i++) {
        for (let j = i + 1; j < images.length; j++) {
          if (checkCollision(images[i], images[j])) {
            // Reverse velocities to simulate bounce
            const velocityX1 = parseFloat(images[i].dataset.velocityX);
            const velocityY1 = parseFloat(images[i].dataset.velocityY);
            const velocityX2 = parseFloat(images[j].dataset.velocityX);
            const velocityY2 = parseFloat(images[j].dataset.velocityY);

            images[i].dataset.velocityX = velocityX2;
            images[i].dataset.velocityY = velocityY2;
            images[j].dataset.velocityX = velocityX1;
            images[j].dataset.velocityY = velocityY1;
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="floating-images">
        <img src={HTML} alt="HTML" className="floating-image" ref={el => (imagesRef.current[0] = el)} />
        <img src={CSS} alt="CSS" className="floating-image" ref={el => (imagesRef.current[1] = el)} />
        <img src={JS} alt="JavaScript" className="floating-image" ref={el => (imagesRef.current[2] = el)} />
        <img src={Express} alt="Express.js" className="floating-image" ref={el => (imagesRef.current[3] = el)} />
        <img src={Node} alt="Node.js" className="floating-image" ref={el => (imagesRef.current[4] = el)} />
        <img src={ReactImage} alt="React" className="floating-image" ref={el => (imagesRef.current[5] = el)} />
        <img src={MongoDB} alt="MongoDB" className="floating-image" ref={el => (imagesRef.current[6] = el)} />
        <img src={Tailwind} alt="Tailwind CSS" className="floating-image" ref={el => (imagesRef.current[7] = el)} />
        <img src={Socket} alt="Socket.io" className="floating-image" ref={el => (imagesRef.current[8] = el)} />
      </div>
      <div className="text-container">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="arrow-container">
        <a href="#about">
          <img src={arrowSvg} alt="Scroll down arrow" />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
