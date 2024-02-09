import React from 'react';
import './ImageCarre.scss'; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import  { forwardRef } from 'react';


  const ImageCarre = forwardRef(({ isTextOnRight, image1, image2, image3, image4, title, text, textButton, alt1, alt2, alt3, alt4, linkPage }, ref) => {

    const { t } = useTranslation();
 
  return (
      
    <div ref={ref} className="image-section">
        {!isTextOnRight && (
            <div className="text-section">
            <h2>{title}</h2>
            <p>{text}</p>
            {textButton &&
              <a href={linkPage} target="_blank" rel="noopener noreferrer">
                <button>{textButton}</button>
              </a>
            }        
            </div>
        )}
        <div className="image-row">
            <img  src={image1} alt={alt1} />
            <img  src={image2} alt={alt2} />
        </div>
        <div className="image-row">
            <img  src={image3} alt={alt3} />
            <img  src={image4} alt={alt4} />
        </div>
        {isTextOnRight && (
            <div className="text-section">
                <h2>{title}</h2>
                <p>{text}</p>
                {textButton &&
                  <a href={linkPage} target="_blank" rel="noopener noreferrer">
                    <button>{textButton}</button>
                  </a>
                }
           </div>
        )}
  </div>
  );
})

export default ImageCarre;
