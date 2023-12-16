import React from 'react';
import './ImageCarre.css'; 
import { useTranslation } from 'react-i18next';


const Image = ({ src, alt }) => (
  <div className="image-container">
    <img src={src} alt={alt} />
  </div>
);

const ImageCarre = ({isTextOnRight, image1, image2, image3, image4, alt1, alt2, alt3, alt4, title, text, textButton}) => {
    const { t } = useTranslation();
 
  return (
      
    <div className="image-section">
        {!isTextOnRight && (
            <div className="text-section">
                <h2>{t('home.sectionCarre.title')}</h2>
                <p>{t('home.sectionCarre.text')}</p>
                <button>{t('home.sectionCarre.menu')}</button>
            </div>
        )}
        <div className="image-row">
            <img className="image-container" src={image1} alt={alt1} />
            <img className="image-container" src={image2} alt={alt2} />
        </div>
        <div className="image-row">
            <img className="image-container" src={image3} alt={alt3} />
            <img className="image-container" src={image4} alt={alt4} />
        </div>
        {isTextOnRight && (
            <div className="text-section">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>{textButton}</button>
            </div>
        )}
  </div>
  );
};

export default ImageCarre;
