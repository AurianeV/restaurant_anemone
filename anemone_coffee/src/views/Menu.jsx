import PopUpMenu from '../components/PopUpMenu'
import { useState } from 'react'
import NavBar from '../components/header/NavBar'

export default function Menu({navbarProps}){
    const [isPopUpOpen, setIsPopUpOpen] = useState (false);

    const openPopUp = () => {
        setIsPopUpOpen(true);
      };
    
      const closePopUp = () => {
        setIsPopUpOpen(false);
      };

    return(
        <>
        <NavBar {...navbarProps} />
        <button onClick={openPopUp}>Nos cartes</button>
        {isPopUpOpen && (
            <PopUpMenu
                title="Nos Menus"
                items={[
                    { title: 'Brunch', image: '/coffee-mug.png', buttonLabel: 'Découvrir la carte' },
                    { title: 'Tapas', image: '/lunch.png', buttonLabel: 'Découvrir la carte'},
                    { title: 'Boissons', image: '/drink.png', buttonLabel: 'Découvrir la carte'},
                    ]}
                onClose={closePopUp}
            />
        )}
        
        </>
    )
}