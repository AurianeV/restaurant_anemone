import NavBar from '../components/header/NavBar'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n'
import CountDown from '../components/CountDown'
import '../components/CountDown.scss'; 


export default function Events({ navbarProps }) {
    const { t } = useTranslation();

    return (
        <div>
            <NavBar {...navbarProps} />
            <div className="countdown-container">
                <h2>{t('event.title')}</h2>
                <p>{t('event.text')}</p>
            </div>
            <CountDown/>
        </div>
    );
}

