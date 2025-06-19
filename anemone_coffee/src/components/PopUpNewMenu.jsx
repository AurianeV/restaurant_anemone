import './PopUpNewMenu.scss';
import { Link } from 'react-router-dom';


const PopUpNewMenu = ({ closePopup }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <div className="popup-header">
          <h2 className="popup-title">☀️ Nouvelle carte d'été !</h2>
        </div>
        <div className="popup-content">
          <p className="popup-text">
            Anémone lance sa carte estivale ! Fraîche, savoureuse & pleine de surprises.
          </p>
          <div className="popup-buttons">
            
            <Link to="/menu/brunch" className="btn-visit">
              Découvrir le menu
            </Link>
            <button className="btn-close" onClick={closePopup}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpNewMenu;
