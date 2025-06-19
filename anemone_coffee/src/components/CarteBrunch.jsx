import "./CarteItem.scss";
import CarteItem from "./CarteItem"
import "./CarteBrunch.scss"

function CarteBrunch() {
    const platsSales = [
        { name: "Avocado toast", description: "Pain rustique, houmous, avocat, pickles d'oignons", image:"/logos/vegan.png", alt:"logo végan", price: 15 },
        { name: "Oeufs sauce hollandaise", description: "Pain rustique, bacon grillé (ou végétal), oeuf poché, sauce hollandaise maison, ciboulette", price: 16 },
        { name: "Chakchouka", description: "Oeufs au plat sur un mélange de poivrons, tomates et oignons cuisinés, parsemé de fêta et persil", image:"/logos/vegetarien.png", alt:"logo végétarien", price: 14 },
        { name: "Bruschetta burrata", description: "Pain rustique, aubergines grillées, tomates, burrata, basilic, crème de balsamique", image:"/logos/vegetarien.png", alt:"logo végétarien", price: 14 }
    ];

    const platsSucres = [
        { name: "Pancakes Nocciolata Pistache", description: "Trois beaux pancakes accompagnés de nocciolata (pâte à tartiner chocolat-noisette bio), de purée de pistache et pistache concassées", price: 8 },
        { name: "Pancakes fruits mascarpone", description: "Trois beaux pancakes accompagnés de sirop d'érable, fruits de saison, d'une crème légère à base de mascarpone et d'amandes effilées grillées", price: 8 },
        { name: "Granola bowl", description: "Yaourt végétal, granola maison du moment et fruits frais", price: 8 },
        { name: "Pain perdu pêche romarin", description: "Pain perdu, crème légère à base de mascarpone, pêches rôties, romarin et miel", price: 8 },
        
    ];

    const boissonsFraiches = [
        { name: "Community Cola", description: "", price: 3.5 },
        { name: "Community Cola Zero", description: "", price: 3.5 },
        { name: "Charitea citron", description: "", price: 3.5 },
        { name: "Charitea menthe", description: "", price: 3.5 },
        { name: "Jus frais du jour", description: "", price: 4.5 },
    ];

    const petitDej = [
        { name: "Viennoiseries", description: "Une viennoiserie au choix + 1 jus du jour", price: 5 },
        { name: "Tartines", description: "Deux tranches de pain grillées, confiture + beurre + 1 jus du jour", price: 5 },
        { name: "Granola bowl", description: "Yaourt végétal, granola maison du moment et fruits frais", price: 8 },
    ];

    const formuleBrunch = [
        { name: "Viennoiseries", description: "Une viennoiserie au choix + 1 jus du jour", price: 5 },
        { name: "Tartines", description: "Deux tranches de pain grillées, confiture + beurre", price: 5 },
        { name: "Granola bowl", description: "Yaourt végétal, granola maison du moment et fruits frais", price: 8 },
    ];

    return (
        <section className="carte_brunch">
            <hr></hr>
                    <h2>PTITS DEJ'</h2>
                    <hr></hr>
            <div className="section_petitdej">
                <img className="illu_toast" src="/logos/illu_toast.png" alt="illu toast"/>
                <div className="petit_dej">
                    
                    <br></br>
                    <p className="text_horaire">Jusqu'à 11h00</p>
                        <div className="text_petitdej">
                            {petitDej.map((dej, index) => (
                                <CarteItem key={index} {...dej} />
                            ))}
                        </div>
                </div>
            </div>
            

            <br></br>
            <br></br><hr></hr>
            <h2>BRUNCH</h2>
            <hr></hr>
            <div className="horaire">
                <p>MERCREDI À VENDREDI : 11h-17h30</p>
                <p>SAMEDI-DIMANCHE : 10h-17h30</p>
            </div>
            <div className="infos_food">
                <div className="vegan_veggie">
                    <p><i><img className="logo_veggie" src="/logos/vegan.png"/>Végan</i></p>
                    <p><i><img className="logo_veggie" src="/logos/vegetarien.png"/>Végétarien</i></p>
                </div>
                    <p><i>Tous nos plats sont succeptibles de contenir des allergènes, merci de communiquer toute allergie connue à notre personnel.</i></p>
            </div>

            <div className="sale_sucre">
                <div className="plats_sales">
                    <div className="title_container">
                        <h3>PLATS SALÉS</h3>
                        <img className="avocado_carte" src="/logos/avocado.png" ></img>
                    </div>
                    {platsSales.map((sale, index) => (
                        <CarteItem key={index} {...sale} />
                    ))}
                </div>

                <div className="plats_sucre">
                    <div className="title_container">
                        <h3>PLATS SUCRÉS</h3>
                        <img className="pancakes_carte" src="/logos/pancakes.png" alt="pancakes" />
                    </div>
                    {platsSucres.map((sucre, index) => (
                        <CarteItem key={index} {...sucre} />
                    ))}
                </div>
            </div>

            <div className="formules">
                <h3>NOS FORMULES</h3>
                    <div className="formule_brunch">
                        <div className="formule_adulte_brunch">
                            <h4>FORMULE BRUNCH</h4>
                            <li>
                                Une boisson
                            </li>
                            <li>
                                + Un jus frais du jour
                            </li>
                            <li>
                                + Un plat salé
                            </li>
                            <li>
                                + Un plat sucré
                            </li>
                            <p><strong>27€</strong></p>
                        </div>
                        <div className="formule_kids_brunch">
                            <h4>KIDS BRUNCH</h4>
                            <li>
                                + Un jus frais du jour ou un chocolat au lait
                            </li>
                            <li>
                                + Un p'tit plat salé ou croque jambon fromage
                            </li>
                            <li>
                                + Un p'tit plat sucré
                            </li>
                            <p><strong>13€</strong></p>
                        </div>
                </div>
                <div className="formule_lunch">
                    <div>
                        <h4>FORMULE LUNCH</h4>
                            <h5>Semaine uniquement</h5>
                            <li>
                                Une boisson fraîche OU un expresso
                            </li>
                            <li>+</li>
                            <li>
                                - Salade de pastèque, concombre, menthe, fêta, oignons rouge, mélange de graines
                            </li>
                            <li>
                                OU
                            </li>
                            <li>
                                - Bagel garni de blanc de poulet OU oeuf au plat, cream cheese, avocat, pickles de chou rouge et sauce moutarde au miel 
                            </li>
                            <li>
                                + 
                            </li>
                            <li>
                            Une douceur
                            </li>
                            <p><strong>16€</strong></p>
                        </div>
                </div>
            </div>


        </section>
    );
}

export default CarteBrunch;
