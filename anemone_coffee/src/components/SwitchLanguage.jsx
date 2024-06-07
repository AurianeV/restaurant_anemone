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
      {currentLanguage === 'fr' ? (
        <button className="buttonLangue" onClick={toggleDropdown}>
          🇫🇷
          <span className="arrow">{isDropdownVisible ? '△' : '▽'}</span>
        </button>
      ) : (
        <button className="buttonLangue" onClick={toggleDropdown}>
          🇬🇧
          <span className="arrow">{isDropdownVisible ? '△' : '▽'}</span>
        </button>
      )}
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
