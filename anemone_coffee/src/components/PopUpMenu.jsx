import './PopUpMenu.css'
import { Link } from 'react-router-dom';

export default function PopUpMenu(props) {
    const { title, items,  linkPage} = props;
    
  
    return (
        <div className="popUp">
          <div className="popUp_header">
              <h1 className="popUp_title">{title}</h1>
              
          </div>

          <div className="popUp_container">
                  <div className="popUp_breakfast">
                  {items.map((item, index) => (
                      <div key={index}>
                      <img className="popUp_breakfast_img" src={item.image} alt={item.title} />
                      <h2 className="popUp_items">{item.title}</h2>
                      <Link to={item.linkPage}><button>{item.buttonLabel}</button></Link>
                     
                      </div>
                  ))}
                  </div>
          </div>
      </div>
    );
  }

