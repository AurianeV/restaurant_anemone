import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/Sections.css'

function Section({ title, text, image, isTextOnLeft, linkPage, textButton }) {
  return (
    <div className="section">
      {isTextOnLeft && (
        <div className="section-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={linkPage}>{textButton}</Link>
        </div>
      )}
      <div className="section-image">
        <img src={image} alt="Section Image" />
      </div>
      {!isTextOnLeft && (
        <div className="section-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={linkPage}>{textButton}</Link>
        </div>
      )}
    </div>
  );
}

export default Section;
