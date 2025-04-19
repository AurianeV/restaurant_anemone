import Navbar from '../components/header/Navbar'
import Sections from '../components/Sections'
import { useTranslation } from 'react-i18next';


export default function Menu({navbarProps}){
  const { t } = useTranslation();

    return(
        <>
    <Navbar {...navbarProps} />
      <div>
        <Sections
        title={t('menu.titleBrunch')}
        text={t('menu.textBrunch')}
        imageDesktop="/image_menus/brunch_desktop.png"
        imageMobile="/image_menus/brunch_mobile.png"
        isTextOnLeft={true}
        textButton={t('menu.textButton')}
        linkPage="/menu/brunch"
        alt="photo d'une assiette de brunch"
      />
      <hr className="separateur"/>
      <Sections
        title={t('menu.titleBoissons')}
        text={t('menu.textBoissons')}
        imageDesktop="/image_menus/boisson_desktop.png"
        imageMobile="/image_menus/boisson_mobile.png"
        isTextOnLeft={false}
        textButton={t('menu.textButton')}
        linkPage="/menu/boissons"        
        alt="photo d'un café et chai latte"
      />
    </div>
        
        
        </>
    )
}