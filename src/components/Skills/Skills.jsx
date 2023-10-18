                                          //Skills component
import React, { useContext } from "react";
import "./Skills.css";
import SQL from "../../img/SQL.png";
import ReactLogo from "../../img/react.gif";
import JavaScript from "../../img/javascript.gif";
import HTML from "../../img/html.jpeg";
import CSS from "../../img/css.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="skills" id="skills">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Skills
          </span>
          <p style={{fontSize:'30px'}}>HTML, CSS, JavaScript, React.Js<br/> SQL, Boostrap, Material UI<br/> Redux, Redux Toolkit, Git </p>
          {/* <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane> */}
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={HTML} alt="" />
          </div>
          <div className="w-secCircle" >
            <img src={JavaScript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReactLogo} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={SQL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={CSS} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skills;
