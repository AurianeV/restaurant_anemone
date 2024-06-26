import React from 'react';
import { Link } from 'react-router-dom'; 
import './Sections.scss'
import { forwardRef } from 'react';

const Section = forwardRef(({title, text, image, isTextOnLeft, linkPage, textButton, logoFacebook, logoInsta, logoTiktok, buttonAction, showButton, textButtonModal, alt}, ref) => {

  return (
    <section ref={ref} className="section">
      {isTextOnLeft && (
        <div className="section-text">
            <h2 className="title-left">{title}</h2>
            <p className="text-left" >{text}</p>
            
            {showButton && textButtonModal && (
            <button className="button-left" onClick={buttonAction}>{textButtonModal}</button>
          )}
          <div className="logo_reseaux">
            {textButton &&
              <Link to={linkPage}><button>{textButton}</button></Link>
            }
            {logoFacebook &&
              <Link to={linkPage}>                     
              <img className="navbar_logoFacebook" src="/logos/RS_fb.png" alt="Logo facebook" />
              </Link>
            }
            {logoInsta &&
              <Link to={linkPage}>                     
              <img className="navbar_logoInsta" src="/logos/RS_insta.png" alt="Logo instagram" />
              </Link>
            }
            {logoTiktok &&
              <Link to={linkPage}>                     
              <img className="navbar_logoTiktok" src="/logos/RS_tiktok.png" alt="Logo Tiktok" />
              </Link>
            }
            </div>
        </div>
      )}
      <div className="section-image">
        <img className="section-image-photo" src={image} alt={alt}/>
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
  );
})

export default Section;
