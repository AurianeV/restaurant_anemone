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
import {useState} from 'react'
import { Navigate } from 'react-router-dom';
import UserPage from './views/UserPage'
import UserAccountPage from './views/UserAccountPage'


function App() {


    const navbarProps = {
        home: {
            backgroundImage: '/background_header/home.png',
            title:'Anémone Café',
            text:'COFFEE - FOOD - BRUNCH',
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
            backgroundImage: '/background_header/menus.png',
            title: 'Notre menu',
            buttonLabel: 'Découvrir'

        },
        reservation: {
            backgroundImage: '/background_header/reservation.png',
            title: 'Réservation'

        },
        admin: {
            backgroundImage: '/background_header/photo_connexion.png',
            title: 'Connexion - Administrateur'
        },
        dashboard: {
            backgroundImage: '/background_header/photo_connexion.png',
            title: 'Tableau de bord - Administration'
        },
        useraccount: {
            backgroundImage: '/background_header/photo_connexion.png',
            title: 'Connexion - Utilisateur'
        }

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
                    path="/menu"
                    element={<Menu navbarProps={navbarProps.menu} />}
                />
                <Route path="/events" 
                element={<Events navbarProps={navbarProps.events} />} />

                <Route path="/valeurs" 
                element={<Valeurs navbarProps={navbarProps.valeurs} />} />

                <Route path="/admin/dashboard" element={<AdminDashboard navbarProps={navbarProps.dashboard} />} />


                <Route path="/admin" element={<MainAdminPage navbarProps={navbarProps.admin}/>} /> 

                <Route path="/user" element={<UserPage navbarProps={navbarProps.useraccount}/>} />

                <Route path="/user-account" element={<UserAccountPage navbarProps={navbarProps.useraccount}/>} />

                </Routes>
            <Footer
            logoFacebook={navbarProps.home.logoFacebook}
            logoInsta={navbarProps.home.logoInsta}
            />
            </>
    );
}

export default App;
