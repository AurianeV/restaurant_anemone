import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className="buttonLangue" onClick={() => changeLanguage('en')}>🇬🇧</button>
      <button className="buttonLangue" onClick={() => changeLanguage('fr')}>🇫🇷</button>
    </div>
  );
}

export default LanguageSwitcher;
