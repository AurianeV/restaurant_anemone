import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SwitchLanguage.scss';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher">
      <button className="buttonLangue" onClick={toggleDropdown}>
        {currentLanguage === 'fr' ? '🇫🇷' : '🇬🇧'}
        <span className="arrow">
          {isDropdownVisible ? (
            // Flèche vers le haut
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 8.828l-6.364 6.364-1.414-1.414L12 6l7.778 7.778-1.414 1.414z" />
            </svg>
          ) : (
            // Flèche vers le bas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 15.172l6.364-6.364 1.414 1.414L12 18 4.222 10.222l1.414-1.414z" />
            </svg>
          )}
        </span>
      </button>
      {isDropdownVisible && (
        <div className="dropdown-menu">
          {currentLanguage === 'fr' ? (
            <button className="buttonLangue" onClick={() => changeLanguage('en')}>🇬🇧</button>
          ) : (
            <button className="buttonLangue" onClick={() => changeLanguage('fr')}>🇫🇷</button>
          )}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
