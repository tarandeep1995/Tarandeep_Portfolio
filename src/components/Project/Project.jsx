import React, { useContext } from "react";
import "../Project/Project.css";
import Card from "../Card/Card";
import BMI from "../../img/BMI.png";
import ToDO from "../../img/to-do-list.png";
import Portfolio from "../../img/Portfolio.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Project = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
    <div className="projects" id="project">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Company's</span>
        <span>Projects</span>
        <spane style={{ color: "black", fontSize:"20px"}}>
          These are the 3 projects that I worked in my current company.
          <br />
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" >
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card 
            emoji={BMI}
            heading={"Project 1"}
            detail={"A Banking website that allows users to look for the Account details and their investments and manage their accounts. I was responsible for implementing the front-end using HTML, CSS, JavaScript."}
          />
        </motion.div> {/* //his code is using the Framer Motion library to create an animated div element that contains a Card component.
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={ToDO}
            heading={"Project 2"}
            detail={"Airline Loyalty Program: Build an airline loyalty program that allows users to earn and redeem points for ﬂights, upgrades, and other rewards. I was responsible for implementing the front-end using HTML, CSS, JavaScript and Angular."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Portfolio}
            heading={"Project 3"}
            detail={
              "A dashboard for a Banking services company website that provides real-time data visualization and analysis. I was responsible for implementing the front-end using HTML, CSS, JavaScript and React."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    {/* My Project */}
    <div>
    <div className="projects" id="project">
    {/* left side */}
    <div className="awesome">
      {/* dark mode */}
      <span style={{ color: darkMode ? "white" : "" }}>My</span>
      <span>Projects</span>
      <spane style={{ color: "black", fontSize:"20px"}}>
      These are one of the 3 projects that I build for myself.
        <br />
       
      </spane>
      <a href={Resume} download>
        <button className="button s-button">Download CV</button>
      </a>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>
    {/* right */}
    <div className="cards">
      {/* first card */}
      <motion.div
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
      >
        <Card
          emoji={BMI}
          heading={"BMI Calculator"}
          detail={"HTML,CSS,JavaScript,React"}
        />
      </motion.div>
      {/* second card */}
      <motion.div
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
      >
        <Card
          emoji={ToDO}
          heading={"TODO List"}
          detail={"Html, Css, JavaScript, React"}
        />
      </motion.div>
      {/* 3rd */}
      <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
      >
        <Card
          emoji={Portfolio}
          heading={"PORTFOLIO WebApp"}
          detail={
            "Lorem ispum dummy text are usually use in section where we need some random text"
          }
          color="rgba(252, 166, 31, 0.45)"
        />
      </motion.div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  </div>
  </div>
  </>
  );
};

export default Project;
