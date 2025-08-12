import { NavLink } from "react-router-dom";
import { useState } from "react";
import { forwardRef } from "react";
import "./Navbar.scss";
import SwitchLanguage from "../SwitchLanguage";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const Navbar = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false); // État pour gérer le menu déroulant "Réservation"

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return newState;
    });
  };

  const toggleReservationMenu = () => {
    setIsReservationOpen((prev) => !prev);
  };

  const navLinks = [
    { path: "/a-propos", label: t("knowUsLabel") },
    { path: "/menu", label: t("menuLabel") },
    { path: "/events", label: t("eventsLabel") },
    { path: "https://www.anemonecafe.fr/prestashop/", label: t("boutiqueLabel") },
  ];

  return (
    <header>
      <nav
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}
        ref={ref}
      >
        <div className="navbar">
          <NavLink to="/">
            <img
              className="navbar_logo"
              src="/logos/logotasse_sanstextev1.png"
              alt="Logo Anemone Café"
            />
          </NavLink>
          <button
            className={`burger-icon ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </button>
          <ul className={`navbar_link ${isMobileMenuOpen ? "active" : ""}`}>
            {navLinks.map((link, index) => (
              <li className="navbar_item" key={index}>
                <NavLink to={link.path} onClick={closeDropdown}>
                  {t(link.label)}
                </NavLink>
              </li>
            ))}

            {/* Menu déroulant pour "Réservation" */}
            <li className="navbar_item reservation-dropdown">
              <button onClick={toggleReservationMenu} className="reservation-btn">
                {t("reservationLabel")}
              </button>
              {isReservationOpen && (
                <div className="dropdown-menu">
                  <a href="tel:01 34 18 43 99" className="dropdown-item">
                    📞 01 34 18 43 99
                  </a>
                  <a
                    href="https://bookings.zenchef.com/results?rid=374145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    🍽️ Réserver en ligne
                  </a>
                </div>
              )}
            </li>

            {/* Switch Language */}
            <li>
              <SwitchLanguage />
            </li>
          </ul>
        </div>

        <div className="navbar_container">
          <h1 className="navbar_container_title">{props.title}</h1>
          <p className="navbar_container_text">{props.text}</p>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
