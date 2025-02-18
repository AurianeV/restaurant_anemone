import React from 'react';
import './PopUpShop.scss'; // Importation du fichier SCSS

const PopUpShop = ({ closePopup, redirectToShop }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <div className="popUp_header">
          <h2 className="title_popshop">📢 Site en construction !</h2>
        </div>
        <div className="popUp_container">
          <p className="text_popshop">
Notre site sera bientôt disponible. Restez connectés !           </p>
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
