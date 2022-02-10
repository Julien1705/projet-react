import React, { Component } from 'react';
import axios from "axios";

import Titre from '../../../components/Titres/TitreH1';
import Bouton from '../../../components/Bouton/Bouton';

import Etablissement from './Etablissement/Etablissement';

class Localisation extends Component {

    state = {
        recherche: null,
        numPageActuelle: 1,
        loading: false
    }

    rechercheEtablissement = (type) => {
        this.setState({ loading: true })
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/62/${type}`)
            .then(response => {
                console.log(response.data)
                this.setState({ recherche: response.data.features, loading: false })
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false })
            })
    }

    render() {

        let pagination = [];
        let recherche = "";
        if (this.state.recherche) {
            let fin = this.state.recherche.length / 10;
            if (this.state.recherche.length % 10 !== 0) fin++;
            for (let i = 1; i <= fin; i++) {
                pagination.push(
                    <Bouton
                        key={i}
                        typeBtn="btn-info m-1"
                        estSelection={this.state.numPageActuelle === i}
                        clic={() => this.setState({ numPageActuelle: i })}
                    >{i}</Bouton>)
            }

            const debut = (this.state.numPageActuelle - 1) * 10;
            const finListe = (this.state.numPageActuelle - 1) * 10 + 10;
            const listeReduite = this.state.recherche.slice(debut, finListe);

            recherche = listeReduite.map(etablissement => {
                return (
                    <div className='col-12 col-md-6' key={etablissement.properties.nom}>
                        <Etablissement
                            adresses={etablissement.properties.adresses}
                            horaires={etablissement.properties.horaires}
                            id={etablissement.properties.id}
                            nom={etablissement.properties.nom}
                            telephone={etablissement.properties.telephone}
                            mail={etablissement.properties.email}
                            url={etablissement.properties.url}
                        />
                    </div>
                )
            })
        }

        return (
            <>
                <Titre>Rechercher un etablissement</Titre>
                <Bouton typeBtn={"btn-info m-1"} clic={() => this.rechercheEtablissement('mairie')}>Mairie</Bouton>
                <Bouton typeBtn={"btn-info m-1"} clic={() => this.rechercheEtablissement('commissariat_police')}>Commissariat de Police</Bouton>
                <Bouton typeBtn={"btn-info m-1"} clic={() => this.rechercheEtablissement('pole_emploi')}>Pole Emploi</Bouton>
                <Bouton typeBtn={"btn-info m-1"} clic={() => this.rechercheEtablissement('prefecture')}>Prefecture</Bouton>
                <Bouton typeBtn={"btn-info m-1"} clic={() => this.rechercheEtablissement('centre_penitentiaire')}>Centre Penitentiaire</Bouton>
                <Bouton typeBtn={"btn-info m-1"} clic={() => this.rechercheEtablissement('ti')}>Tribunal d’instance</Bouton>

                {
                    this.state.loading ?
                        <div className="alert alert-dismissible alert-success col-6 my-3">
                            <strong>Chargement en cours ...</strong>
                        </div>
                        :
                        <div className='row no-gutters'>
                            {recherche}
                        </div>
                }

                <div>{pagination}</div>
            </>
        );
    }
}


export default Localisation;