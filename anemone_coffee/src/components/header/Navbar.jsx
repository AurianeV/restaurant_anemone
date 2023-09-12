import { NavLink } from "react-router-dom";

function Navbar () {
    return(
    <>
    <nav className="navbar">
        <h3>LOGO ANEMONE COFFEE</h3>
          <ul>
            <li>
              <NavLink exact to="/">Le concept</NavLink>
            </li>
            <li>
              <NavLink to="/about">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/services">Réserver</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                img facebook
            </li>
            <li>
                img insta
            </li>
          </ul>
        </nav>
    </>
    )
}

export default Navbar;