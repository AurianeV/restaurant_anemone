import './CarteBoisson.scss';

function CarteItem({ name, description, price }) {
    return (
        <div className="item">
            <div>
                <h4>{name}</h4>
                {description && <p className="description">{description}</p>}
            </div>
            <span className="price"><strong>{price}€</strong></span>
        </div>
    );
}

function CarteBoisson() {
    const boissonsChaudes = [
        { name: "Chaï latte", description: "Mélange de thé et épices masala + lait", price: 5 },
        { name: "Matcha Latte", description: "Cérémonie originaire de Uji + lait", price: 5 },
        { name: "Hojicha latte", description: "Thé vert torréfié + lait", price: 5 },
        { name: "Golden latte", description: "Boisson à base de curcuma + lait", price: 5 },
        { name: "Chocolat chaud", description: "", price: 4 },
        { name: "Thé", description: "(menthe, noir petit-déj)", price: 3.5 },
    ];

    const coffee = [
        {name:"Expresso", description:"", price: 2.5},
        {name:"Double Expresso", description:"Deux shots d'expresso", price: 3.5},
        {name:"Allongé", description:"", price: 2.5},
        {name:"Café Latte", description:"1 shot d'expresso + lait moussé (300ml)", price: 4.5},
        {name:"Cappuccino", description:"1 shot d'expresso + lait moussé (250ml)", price: 3.5},
        {name:"Latte machiatto", description:"Lait moussé + shot d'expresso dans un grand verre (300ml)", price: 4.5},
        {name:"Flat white", description:"Deux shots d'expresso + lait moussé (160ml)", price: 4.5}
    ]

    const boissonsFraiches = [
        {name:"Community Cola", description:"", price: 3.5},
        {name:"Community Cola Zero", description:"", price: 3.5},
        {name:"Charitea citron", description:"", price: 3.5},
        {name:"Charitea menthe", description:"", price: 3.5},
        {name:"Jus frais du jour", description:"", price: 4.5},
    ]

    const alcool = [
        {name:"Blonde", description:"33cl", price: 6},
        {name:"IPA", description:"33cl", price:6.5},
        {name:"Vins", description:"Voir la carte du moment", price: ""}
    ]




    return (
        <>
        <section className="carte_boissons">
            <div className="boissons_coffee">
                
                <div className="boisson_chaude">
                    <h3>BOISSONS CHAUDES</h3>
                    {boissonsChaudes.map((boisson, index) => (
                        <CarteItem key={index} {...boisson} />
                    ))}

                    <p><i>Sirop : caramel, orgeat +0,50cts</i></p>
                    <p><i>Toutes nos boissons sont disponibles avec des laits végétaux (avoine, coco +0,50cts)</i></p>
                </div>
        
                
                <div className="coffee">
                    <div className="title_container">
                        <h3>CAFÉ</h3>
                        <img src="/logos/logo_coffee_carte.png" alt="pictogramme café"/>
                    </div>
                    {coffee.map((boisson, index) => (
                        <CarteItem key={index} {...boisson} />
                    ))}

                    <p><i>Sirop : caramel, orgeat +0,50cts</i></p>
                    <p><i>Toutes nos boissons sont disponibles avec des laits végétaux (avoine, coco +0,50cts)</i></p>
                </div>
            </div>

            <div className="boissons_alcool">    
                <div className="boissons_fraiches">
                    <h3>BOISSONS FRAÎCHES</h3>
                    {boissonsFraiches.map((boisson, index) => (
                        <CarteItem key={index} {...boisson} />
                    ))}
                </div>
                
                <div className="alcool">
                    <h3>ALCOOL</h3>
                    {alcool.map((boisson, index) => (
                        <CarteItem key={index} {...boisson} />
                    ))}
                    <p><i>*En accompagnement du repas uniquement</i></p>
                </div>
                </div>
    </section>
    </>
    );
}

export default CarteBoisson;
