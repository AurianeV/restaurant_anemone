import PopUpMenu from '../components/PopUpMenu'
import { useState } from 'react'
import NavBar from '../components/header/NavBar'
import ModalComponent from '../components/PopUp/PopUp';
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';


export default function Menu({navbarProps}){
  const { t } = useTranslation();

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

    return(
        <>
    <NavBar {...navbarProps} />
      <div>
        <Sections
        title={t('menu.titleBrunch')}
        text={t('menu.textBrunch')}
        image="/image_menus/brunch"
        isTextOnLeft={true}
        textButtonModal={t('menu.textButton')}
        buttonAction={openModal}
        showButton={true}
        alt="photo d'une assiette de brunch"
      />
      <Sections
        title={t('menu.titleBoissons')}
        text={t('menu.textBoissons')}
        image="/image_menus/boissons4"
        isTextOnLeft={false}
        textButtonModal={t('menu.textButton')}
        buttonAction={openModal}
        showButton={true}
        alt="photo d'un café et chai latte"
      />
      <Sections
        title={t('menu.titleDinner')}
        text={t('menu.textDinner')}
        image="/image_menus/dinner1"
        isTextOnLeft={true}
        textButtonModal={t('menu.textButton')}
        buttonAction={openModal}
        showButton={true}
        alt="photo de tapas"
      />


    <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="custom-modal"
    >
      <PopUpMenu
            title="Nos Menus"
            items={[
              { title: 'Nos cartes seront bientôt disponibles !', image: '/loading.png' }]/*[
                { title: 'Brunch', image: '/coffee-mug.png', buttonLabel: 'Découvrir la carte', menuPdfLink: '/Menus-Boissons.pdf', link: '/menu/entrees' },
                { title: 'Tapas', image: '/lunch.png', buttonLabel: 'Découvrir la carte', menuPdfLink: '/Menus-Boissons.pdf', link: '/menu/plats' },
                { title: 'Boissons', image: '/drink.png', buttonLabel: 'Découvrir la carte', menuPdfLink: '/Menus-Boissons.pdf', link: '/menu/desserts' },
            ]*/}
        />
    </ModalComponent>

    </div>
        
        
        </>
    )
}