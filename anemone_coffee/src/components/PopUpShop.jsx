import React from 'react';
import './PopUpShop.scss'; // Importation du fichier SCSS

const PopUpShop = ({ closePopup, redirectToShop }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <div className="popUp_header">
          <h2>📢 Annonce importante!</h2>
        </div>
        <div className="popUp_container">
          <p>
            En attendant de vous recevoir dans notre restaurant, laissez-vous tenter dès maintenant par nos délicieux gâteaux faits maison, disponibles à la commande en ligne. Un plaisir gourmand vous attend ! 😉
          </p>
          <button onClick={redirectToShop} className="button">
            Découvrir le shop
          </button>
          {/*<button onClick={closePopup} className="closeButton">
            Fermer
          </button>
          */}
        </div>
      </div>
    </div>
  );
};

export default PopUpShop;
