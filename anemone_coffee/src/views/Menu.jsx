import PopUpMenu from '../components/PopUpMenu'
import { useState } from 'react'
import NavBar from '../components/header/NavBar'
import ModalComponent from '../components/PopUp/PopUp';

export default function Menu({navbarProps}){

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

      const [selectedTab, setSelectedTab] = useState('appetizers');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return(
        <>
        <NavBar {...navbarProps} />
        <div>
      <h1>Mon Application</h1>
      <button onClick={openModal}>Ouvrir la modal</button>
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="custom-modal"
      >
            <PopUpMenu
                title="Nos Menus"
                items={[
                    { title: 'Brunch', image: '/coffee-mug.png', buttonLabel: 'Découvrir la carte', menuPdfLink:'/Menus-Boissons.pdf'},
                    { title: 'Tapas', image: '/lunch.png', buttonLabel: 'Découvrir la carte', menuPdfLink:'/Menus-Boissons.pdf'},
                    { title: 'Boissons', image: '/drink.png', buttonLabel: 'Découvrir la carte', menuPdfLink:'/Menus-Boissons.pdf'},
                    ]}
            />
      </ModalComponent>
    </div>
        
        
        </>
    )
}