import React from 'react';
import './ImageCarre.scss'; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import  { forwardRef } from 'react';


  // eslint-disable-next-line react/display-name
  const ImageCarre = forwardRef(({ isTextOnRight, image1, image2, image3, image4, title, text, textButton, alt1, alt2, alt3, alt4, linkPage }, ref) => {

    const { t } = useTranslation();
 
  return (
    <>
      <h2 className="title_mobile">{title}</h2>
      <section ref={ref} className="image-section">
          {!isTextOnRight && (
              <div className="text-section-left">
              <h2 className="title_left">{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>            
              {textButton &&
                <Link to={linkPage}>
                  <button>{textButton}</button>
                </Link>
              }
                  
              </div>
          )}
          <div className="section-row">
            <div className="image-row">
                <img  className="image-row1" src={image1} alt={alt1} />
                <img  className="image-row2" src={image2} alt={alt2} />
            </div>
            <div className="image-row">
                <img  className="image-row3" src={image3} alt={alt3} />
                <img  className="image-row4" src={image4} alt={alt4} />
            </div>
          </div>
          {isTextOnRight && (
              <div className="text-section-right">
                  <h2 className="title_right">{title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: text }}></p>   
                  {textButton &&
                  <Link to={linkPage}>
                  <button>{textButton}</button>
                </Link>
                  }
            </div>
          )}
    </section>
  </>
  );
})

export default ImageCarre;
