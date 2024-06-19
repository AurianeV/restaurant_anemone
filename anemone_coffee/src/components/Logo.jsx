import React from 'react';
import {useState, useEffect} from 'react'
import './Logo.css';
import logoColor from '../../public/logos/LogoAnemone_noir.png';
import logoWhite from '../../public/logos/LogoAnemone_blanc.png';

const Logo = () => {
    const [isvisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 4000); 
        return () => clearTimeout(timer);
      }, []);

  return (
    <div className="logo-container">
      <img src={logoWhite} className="logo logo-background" alt="logo" />
      <img src={logoColor} className="logo logo-foreground" alt="logo" />
    </div>
  );
};

export default Logo;
