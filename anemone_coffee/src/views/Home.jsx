import NavBar from '../components/header/NavBar'
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';
import TransitionImg from '../components/TransitionImage/TransitionImg'
import PreLoader from '../components/PreLoader';
import ImageCarre from '../components/ImageCarre'

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
                textButton={t('home.sectionDiscover.values')}
                linkPage="/valeurs" 
            />
            <TransitionImg 
                imageTransition = "/transition1.png"
                titleTransition = {t('transitionTitle1')}
            />
            <ImageCarre
                isTextOnRight={true}
                image1='/image_home/sectioncarre1.png'
                image2='/image_home/sectioncarre3.png'
                image3='/image_home/sectioncarre2.png'
                image4='/image_home/sectioncarre4.png'
                title={t('home.sectionCarre.title')}
                text={t('home.sectionCarre.text')}
                textButton={t('home.sectionCarre.menu')}
                alt="image1"
            />
            <TransitionImg
                imageTransition="/image_home/transition2.png"
                titleTransition = {t('transitionTitle1')}
            />
            <ImageCarre
                isTextOnRight={false}
                image1='/image_home/sectioncarre1.png'
                image2='/image_home/sectioncarre3.png'
                image3='/image_home/sectioncarre2.png'
                image4='/image_home/sectioncarre4.png'
                title={t('home.sectionCarre.title')}
                text={t('home.sectionCarre.text')}
                textButton={t('home.sectionCarre.menu')}
                alt="image1"
            />
        </div>
    );
}

