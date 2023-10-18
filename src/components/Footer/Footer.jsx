import React from "react";
import "./Footer.css";
// import img from './footer.png'

const Footer = () => {
  return (
    <div className="footer" style={{ width: "200%", position: 'absolute',
    height: 'auto', marginTop:"5px"}}>
      <footer className="footercolor"></footer>
      {/* <img src={img} alt="footer"  /> */}
    </div>
  );
};

export default Footer;


