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
import AdminDashboard from './views/AdminDashboard'
import LoginForm from './components/admin/LoginForm'
import RegisterForm from './components/admin/RegisterForm'
import MainAdminPage from './views/MainAdminPage'

function App() {
    const navbarProps = {
        home: {
            backgroundImage: '/background_header/home.png',
            title:'Anémone Coffee',
            text:'COFFEE - BRUNCH - FOOD',
            buttonLabel: 'Découvrir'
        },
        valeurs: {
            backgroundImage:'/background_header/values.png',
            title:'Nos valeurs'
        },
        events: {
            backgroundImage: '/background_header/events.png',
            title: 'Les évènements'
        },

        menu: {
            backgroundImage: '/header_image_concept.png',
            title: 'Notre menu',
            buttonLabel: 'Découvrir'

        },
        reservation: {
            backgroundImage: '/background_header/reservation.png',
            title: 'Réservation'

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

                <Route path="/admin/dashboard" element={<AdminDashboard />} />

                <Route path="/admin" element={<MainAdminPage />} /> 



                </Routes>
            <Footer
            logoFacebook={navbarProps.home.logoFacebook}
            logoInsta={navbarProps.home.logoInsta}
            />
            </>
    );
}

export default App;
