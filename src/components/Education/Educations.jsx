import React from "react";
import "../Education/Education.css";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h1 className="education-heading">Education</h1>
      <div className="education-item">
        <h2 className="education-title">MCA 2012-2015</h2>
        <span className="education-subtitle">Vivekananda Institute of Professional Studies (VIPS), Delhi</span>
      </div>
      <div className="education-item">
        <h2 className="education-title">BCA 2016-2019</h2>
        <span className="education-subtitle">Indira Gandhi National Open University, Delhi</span>
      </div>
    </div>
  );
};

export default Education;
