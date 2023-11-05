import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Concept from './views/Concept';
import Reservation from './views/Reservation';
import Menu from './views/Menu';
import Contact from './views/Contact';
import Footer from './components/footer/Footer'
import CountDown from './components/CountDown'

function App() {
    const navbarProps = {
        home: {
            backgroundImage: '/header_home.png',
            logo: '/ANEMONE_COFFEE.png',
            title:'Anémone Coffee',
            text:'COFFEE - BRUNCH - FOOD',
            logoInsta: '/logo_instagram.png',
            logoFacebook: '/logo_facebook.png',
            buttonLabel: 'Découvrir'
        },
        concept: {
            backgroundImage: '/header_image_concept.png',
            logo: '/ANEMONE_COFFEE.png',
            title: 'Notre concept',
            logoInsta: '/logo_instagram.png',
            logoFacebook: '/logo_facebook.png',
            buttonLabel: 'Découvrir'

        },
        menu: {
            backgroundImage: '/header_image_concept.png',
            logo: '/ANEMONE_COFFEE.png',
            title: 'Notre menu',
            logoInsta: '/logo_instagram.png',
            logoFacebook: '/logo_facebook.png',
            buttonLabel: 'Découvrir'

        },

    };

    return (
        <>
            <Routes>
                
                <Route
                    path="/"
                    element={<Home navbarProps={navbarProps.home} />}
                />
                <Route
                    path="/concept"
                    element={<Concept navbarProps={navbarProps.concept} />}
                />
                <Route
                    path="/reservation"
                    element={<Reservation navbarProps={navbarProps.reservation} />}
                />
                <Route
                    path="/contact"
                    element={<Contact navbarProps={navbarProps.contact} />}
                />
                <Route
                    path="/menu"
                    element={<Menu navbarProps={navbarProps.menu} />}
                />
                        <Route path="/countdown" element={<CountDown />} />

            </Routes>
            <Footer
            logoFacebook={navbarProps.home.logoFacebook}
            logoInsta={navbarProps.home.logoInsta}
            />
            </>
    );
}

export default App;
