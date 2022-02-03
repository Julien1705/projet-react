import React, { Component } from 'react';
import Titre from "../../../components/Titres/TitreH1";

import imgChateau from "../../../assets/imgs/chateau.jpg";

class Accueil extends Component {
    render() {
        return (
            <div>
                <Titre>Bienvenue sur le site de l'Ariège</Titre>
                <p>Le site vous aidant à trouver les établissements publics de l'Ariège</p>
                <img src={imgChateau} alt="chateau" width="100%" />
            </div>
        );
    }
}


export default Accueil;