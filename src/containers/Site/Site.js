import React, { Component } from 'react';

import { Route, Routes } from 'react-router-dom';

import Localisation from './Localisation/Localisation';
import Contact from './Contact/Contact';
import Accueil from './Accueil/Accueil';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Erreur404 from '../../components/Erreur/Erreur404/Erreur404';
import ContactForm from './Contact/ContactForm/ContactForm';


class Site extends Component {
    render() {
        return (
            <>
                <div className='site'>
                    <NavBar />
                    <div className='container'>
                        <Routes>
                            <Route path="/" exact element={<Accueil />} />
                            <Route path="/localisation" exact element={<Localisation />} />
                            <Route path="/contact" exact element={<Contact />} />
                            <Route path="/contact/form" exact element={<ContactForm />} />
                            <Route path="*" element={<Erreur404 />} />
                        </Routes>                       
                    </div>
                    <div className='minSite'></div>
                </div>
                <Footer />
            </>

        );
    }
}


export default Site;