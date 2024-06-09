import { useTranslation } from 'react-i18next'
import './footer.scss'
import { NavLink } from 'react-router-dom'

function Footer () {
    const { t } = useTranslation();

    return (
        <footer className="footer_container">
            
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
                        <p>{t('footer.mail')}</p>
                    </div>
                    <div className="footer_propos">
                        <h3>{t('footer.propos')}</h3>
                        <ul>
                            <li>
                                <NavLink to="/reservation">{t('footer.reservation')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/events">{t('footer.event')}</NavLink>
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
    )
}
export default Footer