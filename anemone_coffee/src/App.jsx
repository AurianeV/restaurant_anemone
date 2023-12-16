import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Concept from './views/Concept';
import Reservation from './views/Reservation';
import Menu from './views/Menu';
import Contact from './views/Contact';
import Footer from './components/footer/Footer'
import CountDown from './components/CountDown'
import Events from './views/Events'
import Valeurs from './views/Valeurs'

function App() {
    const navbarProps = {
        home: {
            backgroundImage: '/background_header/home.png',
            title:'Anémone Coffee',
            text:'COFFEE - BRUNCH - FOOD',
            buttonLabel: 'Découvrir'
        },
        concept: {
            backgroundImage: '/header_image_concept.png',
            title: 'Notre concept',
            buttonLabel: 'Découvrir'

        },
        menu: {
            backgroundImage: '/header_image_concept.png',
            title: 'Notre menu',
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
                <Route path="/events" 
                element={<Events navbarProps={navbarProps.events} />} />

                <Route path="/valeurs" 
                element={<Valeurs navbarProps={navbarProps.valeurs} />} />

                </Routes>
            <Footer
            logoFacebook={navbarProps.home.logoFacebook}
            logoInsta={navbarProps.home.logoInsta}
            />
            </>
    );
}

export default App;
