import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Concept from './views/Concept';
import Reservation from './views/Reservation';
import Menu from './views/Menu';
import Contact from './views/Contact';

function App() {
    const navbarProps = {
        home: {
            backgroundImage: '/header_home.png',
            logo: '/ANEMONE_COFFEE.png',
            navLinks: [
                { path: '/concept', label: 'Le concept' },
                { path: '/menu', label: 'Menu' },
                { path: '/reservation', label: 'Réserver' },
                { path: '/contact', label: 'Contact' },
            ],
            title:'Anémone Coffee',
            text:'COFFEE - BRUNCH - FOOD',
            logoInsta: '/logo_instagram.png',
            logoFacebook: '/logo_facebook.png',
            buttonLabel: 'Découvrir'
        },
        concept: {
            backgroundImage: '/header_image_concept.png',
            logo: '/ANEMONE_COFFEE.png',
            navLinks: [
                { path: '/', label: 'Accueil' },
                { path: '/menu', label: 'Menu' },
                { path: '/reservation', label: 'Réserver' },
                { path: '/contact', label: 'Contact' },
            ],
            title: 'Notre concept',
            buttonLabel: 'Découvrir'

        },
        // Define similar objects for other pages
    };

    return (
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
            </Routes>
    );
}

export default App;
