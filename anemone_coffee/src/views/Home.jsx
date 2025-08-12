import Navbar from '../components/header/Navbar'
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';
import TransitionImg from '../components/TransitionImage/TransitionImg'
import ImageCarre from '../components/ImageCarre'
import 'intersection-observer'; 
import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo'
import PopUpNewMenu from '../components/PopUpNewMenu'


// eslint-disable-next-line react/prop-types
export default function Home({ navbarProps }) {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState(0);
    const [showContent, setShowContent] = useState(false)
    const [showPopNewMenu, setShowPopNewMenu] = useState(false);

    // Déclencher l'affichage du popup après 1 seconde
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopNewMenu(true);
      }, 1000); 

      // Nettoyage du timeout si le composant est démonté avant l'expiration
      return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
      setShowPopNewMenu(false);
    };

    const redirectToShop = () => {
      window.location.href = 'https://www.anemonecafe.fr/menu/brunch'; // Redirige vers la page de la boutique
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 3000); 
      return () => clearTimeout(timer);
    }, []);
  
  const headerRef= useRef();
  const discoverRef = useRef();
  const coffeeShopRef = useRef();
  const brunchRef = useRef();
  const tapasRef=useRef();
  const reseauxRef= useRef();

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      console.log("Section intersectée :", entry.target)
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
            case reseauxRef.current:
              setActiveSection(3);
              break;          
              default:
            break;
        }
      }
    });
  };
  useEffect(() => {
    const observerCallback = () => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      };

      const observer = new IntersectionObserver(handleIntersection, options);

      if (discoverRef.current) observer.observe(discoverRef.current);
      if (coffeeShopRef.current) observer.observe(coffeeShopRef.current);
      if (brunchRef.current) observer.observe(brunchRef.current);
      if (reseauxRef.current) observer.observe(reseauxRef.current);
  
      return () => {
        observer.disconnect();
      };
    };
  
    if (showContent) {
      observerCallback(); 
    }
  }, [showContent]);
    return (
        <>
          {!showContent && <Logo/>}
          {showContent && (
        <div> 
            <div className="points-container">
              <div className={`point ${activeSection === 0 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 1 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 2 ? 'active' : ''}`} />
              <div className={`point ${activeSection === 3 ? 'active' : ''}`} />
            </div>
          
      <Navbar {...navbarProps} 
        ref={headerRef}
      />
      <Sections
        title={t('home.sectionDiscover.title')}
        text={t('home.sectionDiscover.text')}
        imageDesktop="/image_home/presentationrestau_desktop.png"
        imageMobile="/image_home/presentationrestau_mobile.png"
        isTextOnLeft={true}
        textButton={t('home.sectionDiscover.buttonValues')}
        linkPage="/a-propos"
        ref={discoverRef}
        alt="photo d'un restaurateur"
      />
      <TransitionImg
        imageTransition="/transition1.png"
        titleTransition={t('home.transition.title_coffee')}
      />
      <ImageCarre
        isTextOnRight={true}
        image1="/image_home/carre_patisseriesCoffee/sectioncarre2.png"
        image2="/image_home/carre_patisseriesCoffee/sectioncarre3.png"
        image3="/image_home/carre_patisseriesCoffee/sectioncarre1.png"
        image4="/image_home/carre_patisseriesCoffee/sectioncarre4.png"
        title={t('home.sectionCoffeeShop_Patisseries.title')}
        text={t('home.sectionCoffeeShop_Patisseries.text')}
        textButton={t('home.sectionCoffeeShop_Patisseries.buttonBoisson')}
        alt1="photo café"
        alt2="photo cookie et expresso"
        alt3="photo banana bread"
        alt4="photo preparation café"
        linkPage="/menu"
        ref={coffeeShopRef} 
        />
      <TransitionImg
        imageTransition="/image_home/transition2.png"
        titleTransition={t('home.transition.titleBrunch')}
      />
      <ImageCarre
        isTextOnRight={false}
        image1="/image_home/carre_brunch/5.png"
        image2="/image_home/carre_brunch/9.png"
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
        linkPage="/menu"
      />
      <Sections
        title={t('home.sectionReseaux.title')}
        text={t('home.sectionReseaux.text')}
        imageDesktop="/image_home/gobelet_desktop.png"
        imageMobile="/image_home/gobelet_mobile.png"
        isTextOnLeft={false}
        logoInsta={true}
        logoFacebook={true}
        logoTiktok={false}
        ref={reseauxRef}
        alt="Gobelet"
      />
    </div>
          )}
        </>
    );
}

