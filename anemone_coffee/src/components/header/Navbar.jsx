import { NavLink } from "react-router-dom";
import '../header/Navbar.css'
import SwitchLanguage from '../SwitchLanguage'
import { useTranslation } from 'react-i18next';

function Navbar(props) {
   const { t } = useTranslation();

   const navLinks = [
      { path: '/', label: t('homeLabel') },
      { path: '/concept', label: t('conceptLabel') },
      { path: '/reservation', label: t('reservationLabel') },
      { path: '/menu', label: t('menuLabel') },
      { path: '/contact', label: t('contactLabel') },
   ];

   return (
      <nav style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <div className="dark-overlay"></div> 
         <div className="navbar">
            <NavLink to="/">
               <img className="navbar_logo" src={props.logo} alt="Logo" />
            </NavLink>
            <ul className="navbar_link">
               {navLinks.map((link, index) => (
                  <li className="navbar_item" key={index}>
                     <NavLink to={link.path}>{link.label}</NavLink>
                  </li>
               ))}
               <li>
                  <NavLink to="/">
                     <img className="navbar_logoInsta" src={props.logoInsta} alt="Logo" />
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/">
                     <img className="navbar_logoFacebook" src={props.logoFacebook} alt="Logo" />
                  </NavLink>
               </li>
               <li>
                  <SwitchLanguage />
               </li>
            </ul>
         </div>
         <div className="navbar_container">
            <h1 className="navbar_container_title"> {props.title}</h1>
            <p className="navbar_container_text">{props.text}</p>
            <button>{props.buttonLabel}</button>
         </div>
      </nav>
   );
}

export default Navbar;
