import { useTranslation } from 'react-i18next'
import './footer.scss'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Footer (props) {
    const { t } = useTranslation();

    return (
        <div className="footer_container">
            
                <div className="footer_img">
                    <img className="footer_logo" src="/logos/LogoAnemone_blanc.png" alt="Logo Anémone Coffee"/>  
                </div>

                <div className="footer_container_content">
                    <div className="footer_adress">
                        <h3>{t('footer.titleAdress')}</h3>
                        <p>{t('footer.adress')}</p>
                    </div>
                    <div className="footer_contact">
                        <h3>{t('footer.contact')}</h3>
                        <p>06 00 00 00 00</p>
                    </div>
                    <div className="footer_propos">
                        <h3>{t('footer.propos')}</h3>
                        <p>lien 1</p>
                        <p>lien 2</p>
                    </div>
            </div>
        </div>
    )
}
export default Footer