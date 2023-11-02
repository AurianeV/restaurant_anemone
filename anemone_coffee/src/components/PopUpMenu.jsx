import '../components/PopUpMenu.css'

export default function PopUpMenu(props) {
    const { title, items, onClose } = props;
    
  
    return (
        <>
        <div className="popUp_header">
            <button className="popUp_Close" onClick={onClose}>X</button>
            <h1 className="popUp_title">{title}</h1>
            
        </div>

        <div className="popUp_container">
                <div className="popUp_breakfast">
                {items.map((item, index) => (
                    <div key={index}>
                    <img className="popUp_breakfast_img" src={item.image} alt={item.title} />
                    <h2 className="popUp_items">{item.title}</h2>
                    <button>{item.buttonLabel}</button>
                    </div>
                ))}
                </div>
        </div>
      </>
    );
  }

