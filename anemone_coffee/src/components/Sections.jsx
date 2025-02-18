import React from 'react';
import { Link } from 'react-router-dom'; 
import './Sections.scss'
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Section = forwardRef(({title, text, imageDesktop, imageMobile, isTextOnLeft, linkPage, textButton, logoFacebook, logoInsta, logoTiktok, buttonAction, showButton, textButtonModal, alt}, ref) => {

  return (
    <>
    <h2 className="title_mobile">{title}</h2>

    <section ref={ref} className="section">
      {isTextOnLeft && (
        <div className="section-text">
            <h2 className="title-left">{title}</h2>
            {/* Utilisation de dangerouslySetInnerHTML pour rendre le texte avec balises HTML */}
            <p className="text-left" dangerouslySetInnerHTML={{ __html: text }}></p>
            
            {showButton && textButtonModal && (
            <button className="button-left" onClick={buttonAction}>{textButtonModal}</button>
          )}
            <div className="button_home">
            {textButton &&
              <Link to={linkPage}><button>{textButton}</button></Link>
            }
            </div>
            <div className="logo_reseaux">
            {logoFacebook &&
              <a href="https://www.facebook.com/share/CmB5FkcAye85fA4Z/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">                     
                <img className="navbar_logoFacebook" src="/logos/RS_fb.png" alt="Logo Facebook" />
              </a>
            }
            {logoInsta &&
              <a href="https://www.instagram.com/anemone.cafe?igsh=MWw0ejBmcGQzNDU4OA==" target="_blank" rel="noopener noreferrer">                     
              <img className="navbar_logoInsta" src="/logos/RS_insta.png" alt="Logo instagram" />
              </a>
            }
            {/*{logoTiktok &&
              <Link to={linkPage}>                     
              <img className="navbar_logoTiktok" src="/logos/RS_tiktok.png" alt="Logo Tiktok" />
              </Link>
            }*/}
            </div>
        </div>
      )}
      <div className="section-image">
          <img
            className="section-image-photo-desktop"
            src={imageDesktop}
            alt={alt}
          />
          <img
            className="section-image-photo-mobile"
            src={imageMobile}
            alt={alt}
          />
      </div>
      {!isTextOnLeft && (
        <div className="section-text">
            <h2 className="title-right" >{title}</h2>
            <p className="text-right" >{text}</p>
            {showButton && textButtonModal && (
            <button className="button-right" onClick={buttonAction}>{textButtonModal}</button>
          )}
            {textButton &&
              <Link to={linkPage}><button>{textButton}</button></Link>
            }
        </div>
      )}
    </section>
    </>
  );
})

export default Section;
