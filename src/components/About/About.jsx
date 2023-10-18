import React from "react";
import "./About.css";


const About = () => {
  return (
    // <div className="t-wrapper blur t-blur1" id="about" style={{ background: "var(--purple)" }}>
    <div id="about" class="container">
        <img style={{borderRadius: '8px', width: '350px',  height: '275px'}} src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="nothing" />
        <h2><h1 className="stylediv">ABOUT ME<br></br></h1>
        A dedicated Front-end Developer based in Delhi,India<br></br>
        <div className="gap"><i><b>As a frontend developer with 3 years of experience, I am skilled in HTML, CSS, JavaScript, and React. I have experience collaborating with designers, project managers, and other developers to create visually appealing and user-friendly web pages that meet client requirements. I have a strong attention to detail, write clean and maintainable code, and am familiar with responsive design and mobile-first development practices. I am committed to creating high-quality web applications that exceed expectations. Overall, I am passionate about frontend development and am always looking for new challenges and opportunities to grow and expand my skill set. </b></i></div> </h2>
    </div>
  );
};

export default About;
