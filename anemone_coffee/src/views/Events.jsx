import NavBar from '../components/header/NavBar'
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n'



export default function Events({ navbarProps }) {
    const { t } = useTranslation();

    return (
        <div>
            <NavBar {...navbarProps} />
            <Sections
                title={t('home.sectionDiscover.title')}
                text={t('home.sectionDiscover.text')}
                image="/coffee_shop.png"
                isTextOnLeft={true}
                textButton={t('home.sectionDiscover.values')}
                linkPage="/page1" // Chemin de destination pour cette section
            />
            <Sections
                text="Texte de la section 2."
                image="/mug.png"
                isTextOnLeft={false}
                linkPage="/page2" // Chemin de destination pour cette section
            />
        </div>
    );
}
