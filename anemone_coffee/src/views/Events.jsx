import NavBar from '../components/header/NavBar'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n'
import CountDown from '../components/CountDown'


export default function Events({ navbarProps }) {
    const { t } = useTranslation();

    return (
        <div>
            <NavBar {...navbarProps} />
            <CountDown/>
        </div>
    );
}

