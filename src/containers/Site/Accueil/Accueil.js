import React, { Component } from 'react';
import Titre from "../../../components/Titres/TitreH1";

import imgChateau from "../../../assets/imgs/bienvenue.jpg";

class Accueil extends Component {
    render() {
        return (
            <div>
                <Titre>Bienvenue sur le site du NORD</Titre>
                <p className='text-center'>Le site vous aidant à trouver les établissements publics de ch'nord !! </p>
                <img src={imgChateau} alt="chateau" width="100%" />
            </div>
        );
    }
}


export default Accueil;