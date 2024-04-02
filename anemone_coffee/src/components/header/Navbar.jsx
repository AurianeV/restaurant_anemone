import { NavLink } from "react-router-dom";
import { useState } from 'react'
import './Navbar.scss'
import SwitchLanguage from '../SwitchLanguage'
import { useTranslation } from 'react-i18next';

function Navbar(props) {
   const { t } = useTranslation();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   
   const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
   };

   const closeDropdown = () => {
      setIsDropdownOpen(false);
   };

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prev) => !prev);
      setIsDropdownOpen(false); 
   };

   const handleLogout = () => {
      // Supprimez le token JWT du stockage local ou effectuez toute autre action de déconnexion
      localStorage.removeItem('token');
      // Redirigez l'utilisateur vers la page de connexion ou une autre page appropriée
      window.location.href = '/reservation'; // Remplacez '/login' par l'URL de votre page de connexion
    };

   const navLinks = [
      { path: '/connaitre', label: t('knowUsLabel'),
      children : [
         {path:'/', label:t('conceptLabel') },
         {path:'/valeurs', label:t('valuesLabel') }
      ]
    },
      { path: '/reservation', label: t('reservationLabel') },
      { path: '/menu', label: t('menuLabel'),},
      { path: '/events', label: t('eventsLabel') },
      /*{ path: '/contact', label: t('contactLabel') }*/,
   ];

   return (
      <header>
         <nav style={{ backgroundImage: `url(${props.backgroundImage})` }} onMouseEnter={toggleDropdown}
         onMouseLeave={closeDropdown} >
            <div className="navbar">
               <NavLink to="/">
                  <img className="navbar_logo" src="/logos/LogoAnemone_blanc.png" alt="Logo Anemone Coffee" />
               </NavLink>
               <button className="burger-icon" onClick={toggleMobileMenu}>Menu</button>
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
                     ) : (
                        <NavLink to={link.path}>{t(link.label)}</NavLink>
                     )}
                     </li>
                  ))}
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
                  <li>
                     <SwitchLanguage />
                  </li>
                  <li>
                     <NavLink to="/admin">
                        <img className="navbar_logoAdmin" src="/logos/admin.png" alt="logo connexion administrateur"/>
                     </NavLink>
                  </li>
                  <li>
                     <button onClick={handleLogout}>{t('logout')}</button>
                  </li>
               </ul>
            </div>
            <div className="navbar_container">
               <h1 className="navbar_container_title"> {props.title}</h1>
               <p className="navbar_container_text">{props.text}</p>
               
            </div>
         </nav>
      </header>
   );
}


export default Navbar;
