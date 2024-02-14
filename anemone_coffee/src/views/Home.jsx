import NavBar from '../components/header/NavBar'
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';
import TransitionImg from '../components/TransitionImage/TransitionImg'
import ImageCarre from '../components/ImageCarre'
import 'intersection-observer'; 
import React, { useEffect, useRef, useState } from 'react';
import MainAdminPage from './MainAdminPage'


export default function Home({ navbarProps }) {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState(0);

  const headerRef= useRef();
  const discoverRef = useRef();
  const coffeeShopRef = useRef();
  const brunchRef = useRef();
  const tapasRef=useRef();
  const reservationRef=useRef();
  const reseauxRef= useRef();

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target) {
          
          case discoverRef.current:
            setActiveSection(0);
            break;
          case coffeeShopRef.current:
            setActiveSection(1);
            break;
          case brunchRef.current:
            setActiveSection(2);
            break;
            case tapasRef.current:
              setActiveSection(3);
              break;
            case reservationRef.current:
              setActiveSection(4);
              break;
            case reseauxRef.current:
              setActiveSection(5);
              break;          
              default:
            break;
        }
      }
    });
  };
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (discoverRef.current) {
      observer.observe(discoverRef.current);
    }
    if (coffeeShopRef.current) {
      observer.observe(coffeeShopRef.current);
    }
    if (brunchRef.current) {
      observer.observe(brunchRef.current);
    }
    if (tapasRef.current) {
      observer.observe(tapasRef.current);
    }
    if (reservationRef.current) {
      observer.observe(reservationRef.current);
    }
    if (reseauxRef.current) {
      observer.observe(reseauxRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []); 
    return (
        <div>
            <div className="points-container">
              <div className={`point ${activeSection === 0 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 1 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 2 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 3 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 4 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 5 ? 'active' : ''}`} />
            </div>

      <NavBar {...navbarProps} 
        ref={headerRef}
      />
      <Sections
        title={t('home.sectionDiscover.title')}
        text={t('home.sectionDiscover.text')}
        image="/image_home/presentationrestau.png"
        isTextOnLeft={true}
        textButton={t('home.sectionDiscover.buttonValues')}
        linkPage="/valeurs"
        ref={discoverRef}
        alt="photo d'un restaurateur"
      />
      <TransitionImg
        imageTransition="/transition1.png"
        titleTransition={t('home.transition.title_coffee')}
      />
      <ImageCarre
        isTextOnRight={true}
        image1="/image_home/carre_patisseriesCoffee/sectioncarre1.png"
        image2="/image_home/carre_patisseriesCoffee/sectioncarre3.png"
        image3="/image_home/carre_patisseriesCoffee/sectioncarre2.png"
        image4="/image_home/carre_patisseriesCoffee/sectioncarre4.png"
        title={t('home.sectionCoffeeShop_Patisseries.title')}
        text={t('home.sectionCoffeeShop_Patisseries.text')}
        textButton={t('home.sectionCoffeeShop_Patisseries.buttonBoisson')}
        alt1="photo brownie"
        alt2="photo café"
        alt3="photo café"
        alt4="photo smoothie"
        linkPage="/Menus-Boissons.pdf"
        ref={coffeeShopRef} 
        />
      <TransitionImg
        imageTransition="/image_home/transition2.png"
        titleTransition={t('home.transition.titleBrunch')}
      />
      <ImageCarre
        isTextOnRight={false}
        image1="/image_home/carre_brunch/5.png"
        image2="/image_home/carre_brunch/6.png"
        image3="/image_home/carre_brunch/7.png"
        image4="/image_home/carre_brunch/8.png"
        alt1="photo brunch"
        alt2="photo avocado toast"
        alt3="photo pancakes"
        alt4="photo café"
        title={t('home.sectionBrunch.title')}
        text={t('home.sectionBrunch.text')}
        textButton={t('home.sectionBrunch.buttonBoisson')}
        alt="image1"
        ref={brunchRef}
      />
      <TransitionImg
        imageTransition="/image_home/transition_tapas.png"
        titleTransition={t('home.transition.titleTapas')}
      />
      <ImageCarre
        isTextOnRight={true}
        image1="/image_home/carre_tapas/9.png"
        image2="/image_home/carre_tapas/10.png"
        image3="/image_home/carre_tapas/11.png"
        image4="/image_home/carre_tapas/12.png"
        alt1="photo personne à table"
        alt2="photo assiette nourriture"
        alt3="photo assiette nourriture"
        alt4="photo vin"
        title={t('home.sectionTapas.title')}
        text={t('home.sectionTapas.text')}
        textButton={t('home.sectionTapas.buttonTapas')}
        alt="image1"
        ref= {tapasRef}
      />
      <Sections
        title={t('home.sectionReseaux.title')}
        text={t('home.sectionReseaux.text')}
        image="/logos/RS.png"
        isTextOnLeft={true}
        logoInsta={true}
        logoFacebook={true}
        logoTiktok={true}
        ref={reseauxRef}
      />
    </div>
        
    );
}

