// Countdown.jsx
import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState(null);

  // Date d'ouverture du restaurant (à ajuster)
  const openingDate = new Date('2023-12-31T12:00:00');

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
          `Ouverture du restaurant dans ${days}j ${hours}h ${minutes}m ${seconds}s`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Compte à rebours de l'ouverture du restaurant</h2>
      <p>{countdown}</p>
    </div>
  );
}

export default Countdown;
