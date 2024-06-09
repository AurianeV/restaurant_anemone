import NavBar from '../components/header/NavBar'
import ImageCarre from '../components/ImageCarre'
import { useTranslation } from 'react-i18next';
import Sections from '../components/Sections'


function Valeurs({ navbarProps }) {
    const { t } = useTranslation();

    return (
        <div>
            <NavBar {...navbarProps} />
            <ImageCarre
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
            />
            
        </div>
    );
}

export default Valeurs;