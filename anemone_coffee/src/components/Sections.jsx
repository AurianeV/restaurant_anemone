import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/Sections.css'

function Section({ title, text, image, isTextOnLeft, linkPage }) {
  return (
    <div className="section">
      {isTextOnLeft && (
        <div className="section-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={linkPage}>Voir les détails</Link>
        </div>
      )}
      <div className="section-image">
        <img src={image} alt="Section Image" />
      </div>
      {!isTextOnLeft && (
        <div className="section-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={linkPage}>Voir les détails</Link>
        </div>
      )}
    </div>
  );
}

export default Section;
