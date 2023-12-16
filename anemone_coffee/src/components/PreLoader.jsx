import React, { useEffect, useState } from 'react';
import '../App.css' // Assurez-vous d'ajuster le chemin selon votre structure de fichiers CSS

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Réglez le délai en millisecondes selon vos besoins

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <img src="../logos/LogoAnemone_blanc.png" alt="Logo" className="preloader-logo" />
      </div>
    )
  );
};

export default Preloader;
