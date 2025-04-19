import "./CarteItem.scss";

function CarteItem({ name, description, image, alt, price }) {
    return (
        <div className="item">
            <div>
                <h4>{name}</h4>
                {description && <p className="description">{description} {image && <img width="30px" src={image} alt={alt}/>}</p>}
                
            </div>
            {price && <span className="price"><strong>{price}€</strong></span>}
        </div>
    );
}

export default CarteItem;
