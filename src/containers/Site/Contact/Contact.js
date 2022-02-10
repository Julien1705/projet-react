import React, { Component } from 'react';
import TitreH1 from '../../../components/Titres/TitreH1';
import Bouton from '../../../components/Bouton/Bouton';

import { Icon } from '@iconify/react';

import { NavLink } from "react-router-dom";


class Contact extends Component {
    render() {
        return (
            <>
                <TitreH1>Contactez-nous !</TitreH1>
                <div className="row no-gutters">
                    <div class="card text-white bg-primary  mb-3 col-6">
                        <div class="card-header text-center"><Icon icon="ant-design:home-twotone" color="white" /> Adresse <Icon icon="ant-design:home-twotone" color="white" /></div>
                        <div class="card-body">
                            <p class="card-text text-center">1A rue de Bomy</p>
                            <p class="card-text text-center">62560 Coyecques</p>
                        </div>
                    </div>
                    <div class="card text-white bg-primary  mb-3 col-6">
                        <div class="card-header text-center"><Icon icon="bx:bx-phone-call" color="white" /> Téléphone <Icon icon="bx:bx-phone-call" color="white" /></div>
                        <div class="card-body">
                            <p class="card-text text-center">06-38-18-20-22</p>
                        </div>
                    </div>
                    
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <Bouton typeBtn={"btn-info m-2"}><NavLink className="nav-link text-white" exact="true" to="/projet-react/contact/form">Formulaire de contact</NavLink></Bouton>

            </>
        );
    }
}


export default Contact;