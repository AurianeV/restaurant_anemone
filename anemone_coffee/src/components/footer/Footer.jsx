import { useTranslation } from 'react-i18next'
import './footer.scss'
import { NavLink } from 'react-router-dom'

function Footer () {
    const { t } = useTranslation();

    return (
        <footer className="footer_container">
            
                <div className="footer_img">
                    <img className="footer_logo" src="/logos/logotasse_sanstextev1.png" alt="Logo Anémone Coffee"/>  
                </div>

                <div className="footer_container_content">
                    <div className="footer_adress">
                        <h3>{t('footer.titleAdress')}</h3>
                        <p>{t('footer.adress')}</p>
                        <p>{t('footer.city')}</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.065516454313!2d2.242004080312217!3d49.01963764631847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65d8081dc501d%3A0x411598490186afa3!2s68%20Rue%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2095320%20Saint-Leu-la-For%C3%AAt!5e0!3m2!1sfr!2sfr!4v1718036407639!5m2!1sfr!2sfr" ></iframe>
                    </div>
                    <div className="footer_contact">
                        <h3>{t('footer.contact')}</h3>
                        <a href="tel:01 34 18 43 99" className="dropdown-item">📞 01 34 18 43 99</a>                        
                        <p>{t('footer.mail')}</p>
                    </div>
                    <div className="footer_propos">
                        <h3>{t('footer.propos')}</h3>
                        <ul>
                            <li>
                               <a href="https://bookings.zenchef.com/results?rid=374145"> {t('footer.reservation')}</a>
                            </li>
                            <li>
                                <NavLink to="/events">{t('footer.event')}</NavLink>
                            </li>
                            <li>
                               <a href="/mentions-legales"> {t('footer.mentionsLegales')}</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
    )
}
export default Footer