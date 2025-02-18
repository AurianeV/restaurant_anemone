import NavBar from '../components/header/NavBar'
import { useTranslation } from 'react-i18next';


function Apropos({ navbarProps }) {
    const { t } = useTranslation();

    return (
        <div>
            <NavBar {...navbarProps} />
            <p className="aPropos">Bienvenue chez <strong>Anémone Café</strong>, un lieu chaleureux et convivial où chaque détail est pensé pour vous offrir une expérience unique. Inspiré par mon amour pour la fleur anémone que je partage avec mes grands-mères, notre café est conçu comme un espace où chacun peut se sentir chez soi.<br/><br/>
            Notre mission est simple : célébrer le plaisir de partager de bons moments autour d’un café de spécialité, de délicieuses pâtisseries, et des plats savoureux. En collaborant avec des producteurs locaux, nous nous engageons à vous offrir des produits frais et de qualité, tout en soutenant l’économie locale et en privilégiant les circuits courts.<br/><br/>
            Chez Anémone Café, le partage est au cœur de notre philosophie. Que ce soit autour de nos tapas à partager le soir ou lors de nos brunchs du week-end, nous croyons que chaque moment passé ensemble compte. Nous souhaitons créer un lieu où les amis se retrouvent, où les familles se rassemblent et où de nouvelles amitiés peuvent naître.<br/><br/>
            Nous avons hâte de vous accueillir pour partager avec vous notre passion pour la bonne cuisine et le café. Rejoignez-nous pour découvrir notre univers, où chaque tasse et chaque plat racontent une histoire.<br/><br/>
            À très bientôt chez Anémone Café !</p>
            {/*<ImageCarre
                isTextOnRight={true}
                image1='/image_values/carre_partenariats/13.png'
                image2='/image_values/carre_partenariats/14.png'
                image3='/image_values/carre_partenariats/15.png'
                image4='/image_values/carre_partenariats/16.png'
                title={t('values.sectionPartenariats.title')}
                text={t('values.sectionPartenariats.text')}
                alt1="photo fromage"
                alt2="photo café"
                alt3="photo grains de café"
                alt4="photo carottes"
            />*/}
            
        </div>
    );
}

export default Apropos;