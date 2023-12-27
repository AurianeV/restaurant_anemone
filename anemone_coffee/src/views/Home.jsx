import NavBar from '../components/header/NavBar'
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';
import TransitionImg from '../components/TransitionImage/TransitionImg'
import PreLoader from '../components/PreLoader';
import ImageCarre from '../components/ImageCarre'
import Reservation from '../components/Reservation'

export default function Home({ navbarProps }) {
    const { t } = useTranslation();

    return (
        <div>
            <NavBar {...navbarProps} />
            <Sections
                title={t('home.sectionDiscover.title')}
                text={t('home.sectionDiscover.text')}
                image="/image_home/presentationrestau.png"
                isTextOnLeft={true}
                textButton={t('home.sectionDiscover.buttonValues')}
                linkPage="/valeurs" 
            />
            <TransitionImg 
                imageTransition = "/transition1.png"
                titleTransition = {t('home.transition.title_coffee')}
            />
            <ImageCarre
                isTextOnRight={true}
                image1='/image_home/carre_patisseriesCoffee/sectioncarre1.png'
                image2='/image_home/carre_patisseriesCoffee/sectioncarre3.png'
                image3='/image_home/carre_patisseriesCoffee/sectioncarre2.png'
                image4='/image_home/carre_patisseriesCoffee/sectioncarre4.png'
                title={t('home.sectionCoffeeShop_Patisseries.title')}
                text={t('home.sectionCoffeeShop_Patisseries.text')}
                textButton={t('home.sectionCoffeeShop_Patisseries.buttonBoisson')}
                alt="image1"
            />
            <TransitionImg
                imageTransition="/image_home/transition2.png"
                titleTransition = {t('home.transition.titleBrunch')}
            />
            <ImageCarre
                isTextOnRight={false}
                image1='/image_home/carre_brunch/5.png'
                image2='/image_home/carre_brunch/6.png'
                image3='/image_home/carre_brunch/7.png'
                image4='/image_home/carre_brunch/8.png'
                title={t('home.sectionBrunch.title')}
                text={t('home.sectionBrunch.text')}
                textButton={t('home.sectionBrunch.buttonBoisson')}
                alt="image1"
            />
            <TransitionImg
                imageTransition="/image_home/transition_tapas.png"
                titleTransition = {t('home.transition.titleTapas')}
            />
            <ImageCarre
                isTextOnRight={true}
                image1='/image_home/carre_tapas/9.png'
                image2='/image_home/carre_tapas/10.png'
                image3='/image_home/carre_tapas/11.png'
                image4='/image_home/carre_tapas/12.png'
                title={t('home.sectionTapas.title')}
                text={t('home.sectionTapas.text')}
                textButton={t('home.sectionTapas.buttonTapas')}
                alt="image1"
            />
            <Reservation/>
            <Sections
                title={t('home.sectionReseaux.title')}
                text={t('home.sectionReseaux.text')}
                image="/image_home/presentationrestau.png"
                isTextOnLeft={true}
                logoInsta={true}
                logoFacebook={true}
            />
        </div>
        
    );
}

