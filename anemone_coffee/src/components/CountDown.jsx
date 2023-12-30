// Countdown.jsx
import React, { useState, useEffect } from 'react';
import './CountDown.css'; 
import { useTranslation } from 'react-i18next';

function Countdown() {
  const [countdown, setCountdown] = useState(null);

  const openingDate = new Date('2024-12-31T12:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = openingDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        setCountdown('Le restaurant est ouvert !');
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setCountdown(
          `${days}j ${hours}h ${minutes}m ${seconds}s`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation();


  return (
    <div className="countdown-container">
      <h2>{t('event.title')}</h2>
      <p>{t('event.text')}</p>
      <div className="countdown-timer">
        {countdown &&
          countdown.split('').map((char, index) => (
            <div key={index} className={`countdown-digit digit-${index}`}>
              {char}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Countdown;
