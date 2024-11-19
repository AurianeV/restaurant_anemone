import { NavLink } from "react-router-dom";
import { useState } from 'react'
import  { forwardRef } from 'react';
import './Navbar.scss'
import SwitchLanguage from '../SwitchLanguage'
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/display-name
const Navbar = forwardRef((props, ref) => {
   const { t } = useTranslation();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   
   const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
   };

   const closeDropdown = () => {
      setIsDropdownOpen(false);
      document.body.classList.remove('no-scroll'); // Assurez-vous de retirer la classe
   };
   

   const toggleMobileMenu = () => {
   setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
         document.body.classList.add('no-scroll'); // Empêche le scroll
      } else {
         document.body.classList.remove('no-scroll'); // Réactive le scroll
      }
      return newState;
   });
};


   // eslint-disable-next-line no-sparse-arrays
   const navLinks = [
      { path: '/a-propos', label: t('knowUsLabel'),
      /*children : [
      ]*/
    },
      { path: '/reservation', label: t('reservationLabel') },
      { path: '/menu', label: t('menuLabel'),},
      { path: '/events', label: t('eventsLabel') },
      {path: 'https://www.anemonecafe.fr/shop/', label:t('commandLabel'),  isExternal: true }
      

      /*{ path: '/contact', label: t('contactLabel') }*/,
   ];

   return (
      <header>
         <nav style={{ backgroundImage: `url(${props.backgroundImage})` }} onMouseEnter={toggleDropdown}
         onMouseLeave={closeDropdown} ref={ref}>
            <div className="navbar">
               <NavLink to="/">
                  <img className="navbar_logo" src="/logos/logotasse_sanstextev1.png" alt="Logo Anemone Café" />
               </NavLink>
               <button className={`burger-icon ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                  <div className="burger"></div>
                  <div className="burger"></div>
                  <div className="burger"></div>
               </button>               
               <ul className={`navbar_link ${isMobileMenuOpen ? 'active' : ''}`}>
               {navLinks.map((link, index) => (
                     <li className="navbar_item" key={index}>
                        {link.children ? (
                        <div className="dropdown" onBlur={closeDropdown}>
                           <NavLink onClick={toggleDropdown}>{t(link.label)}</NavLink>
                           {isDropdownOpen && (
                              <div className="dropdown-content">
                                 {link.children.map((childLink, childIndex) => (
                                    <NavLink
                                    key={childIndex}
                                    to={childLink.path}
                                    onClick={closeDropdown}
                                    >
                                    {t(childLink.label)}
                                    </NavLink>
                                 ))}
                                 
                              </div>
                           )}
                        </div>
                        ) : link.isExternal ? (
                        // Liens externes (avec <a>)
                        <a className="commandLabel"
                           href={link.path} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           onClick={closeDropdown} // Optionnel : pour fermer un menu mobile après clic
                        >
                           {t(link.label)}
                        </a>
                        ) : (
                        // Liens internes (avec <NavLink>)
                        <NavLink to={link.path} onClick={closeDropdown}>
                           {t(link.label)}
                        </NavLink>
                        )}
                     </li>
                  ))}
                  {/*
                  <li>
                     <NavLink to="/">
                        <img className="navbar_logoInsta" src="/logos/logo_instagram.png" alt="Logo instagram" />
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/">
                        <img className="navbar_logoFacebook" src="/logos/logo_facebook.png" alt="Logo facebook" />
                     </NavLink>
                  </li>
                  */}
                  <li>
                     <SwitchLanguage />
                  </li>
                  {/* <li>
                     <NavLink to="/user">
                        <img className="navbar_logoUser" src="/logos/user.png" alt="logo connexion utilisateur"/>
                     </NavLink>
                  </li>
                  */}
               </ul>
            </div>
            <div className="navbar_container">
               <h1 className="navbar_container_title"> {props.title}</h1>
               <p className="navbar_container_text">{props.text}</p>
               
            </div>
         </nav>
      </header>
   );
})


export default Navbar;
