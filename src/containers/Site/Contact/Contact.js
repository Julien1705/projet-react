import React, { Component } from 'react';
import TitreH1 from '../../../components/Titres/TitreH1';
import Bouton from '../../../components/Bouton/Bouton';

import { NavLink } from "react-router-dom";


class Contact extends Component {
    render() {
        return (
            <>
                <TitreH1>Contactez-nous !</TitreH1>
                <div>
                    <h2>Adresse : </h2>
                    xxxxxxxxxxxxxxxxxxx
                    <h2>Telephone : </h2>
                    00 00 00 00 00
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <Bouton typeBtn={"btn-info"}><NavLink className="nav-link text-white" exact="true" to="/projet-react/contact/form">Formulaire de contact</NavLink></Bouton>

            </>
        );
    }
}


export default Contact;