import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Boissons from './views/Menu/Boissons';
import Concept from './views/Concept';
import Menu from './views/Menu';
import Contact from './views/Contact';
import Footer from './components/footer/Footer'
import CountDown from './components/CountDown'
import Events from './views/Events'
import Valeurs from './views/Apropos'
import AdminDashboard from './views/AdminDashboard'
import LoginForm from './components/admin/LoginForm'
import RegisterForm from './components/admin/RegisterForm'
import MainAdminPage from './views/MainAdminPage'
import MentionLegale from './views/MentionLegale'
import {useState} from 'react'
import { Navigate } from 'react-router-dom';
import UserPage from './views/UserPage'
import UserAccountPage from './views/UserAccountPage'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Ajout pour le ScrollToTop
import Apropos from './views/Apropos'
import ZenchefWidget from './components/zenchef/ZenchefWidget';
import Brunch from './views/Menu/Brunch';


// Composant ScrollToTop
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};


function App() {


    const navbarProps = {
        home: {
            backgroundImage: '/background_header/back_transparent.png',
            title:'Anémone Café',
            text:'COFFEE - FOOD - BRUNCH',
            buttonLabel: 'Découvrir'
        },
        aPropos: {
            backgroundImage:'/background_header/values.png',
            title:'À propos'
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
        menu_boissons: {
            backgroundImage: '/background_header/back_transparent.png',
            title: 'Nos boissons',
            buttonLabel: 'Découvrir'

        },
        menu_brunch: {
            backgroundImage: '/background_header/back_transparent.png',
            title: 'Notre brunch',
            buttonLabel: 'Découvrir'

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
        },
        mentionsLegales: {
            backgroundImage: '/background_header/back_transparent.png',
            title: 'Mentions légales'
        }

    };

    return (
        <>
            <ScrollToTop/>
            <ZenchefWidget/>
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
                    path="/menu"
                    element={<Menu navbarProps={navbarProps.menu} />}
                />

                <Route path="/menu/boissons" element={<Boissons navbarProps={navbarProps.menu_boissons}/>} />

                <Route path="/menu/brunch" element={<Brunch navbarProps={navbarProps.menu_brunch}/>} />
                
                <Route path="/events" 
                element={<Events navbarProps={navbarProps.events} />} />

                <Route path="/a-propos" element={<Apropos navbarProps={navbarProps.aPropos} />}/>

                <Route path="/admin/dashboard" element={<AdminDashboard navbarProps={navbarProps.dashboard} />} />


                <Route path="/admin" element={<MainAdminPage navbarProps={navbarProps.admin}/>} /> 

                <Route path="/user" element={<UserPage navbarProps={navbarProps.useraccount}/>} />

                <Route path="/user-account" element={<UserAccountPage navbarProps={navbarProps.useraccount}/>} />

                <Route path="/mentions-legales" element={<MentionLegale navbarProps={navbarProps.mentionsLegales} />} />

                </Routes>
            <Footer
            logoFacebook={navbarProps.home.logoFacebook}
            logoInsta={navbarProps.home.logoInsta}
            />
            </>
            
    );
}

export default App;
