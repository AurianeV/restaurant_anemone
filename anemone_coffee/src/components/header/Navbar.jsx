import { NavLink, useLocation } from "react-router-dom";
import '../header/Navbar.css'

function Navbar(props) {
  return (
      <nav style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      
        <div className="navbar" >
            <NavLink to="/"><img className="navbar_logo" src={props.logo} alt="Logo" /></NavLink>
            <ul className="navbar_link">
                {props.navLinks.map((link, index) => (
                    <li className="navbar_item" key={index}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            <NavLink to="/"><img className="navbar_logoInsta" src={props.logoInsta} alt="Logo" /></NavLink>
            <NavLink to="/"><img className="navbar_logoFacebook" src={props.logoFacebook} alt="Logo" /></NavLink>
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