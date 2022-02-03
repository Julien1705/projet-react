import React, { Component } from 'react';
import axios from "axios";

import Titre from '../../../components/Titres/TitreH1';
import Bouton from '../../../components/Bouton/Bouton';

import Etablissement from './Etablissement/Etablissement';

class Localisation extends Component {

    state = {
        recherche : null,
    }

    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/62/${type}`)
        .then(response => {
            console.log(response.data)
            this.setState({recherche : response.data.features})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <Titre>Rechercher un etablissement</Titre>
                <Bouton typeBtn={"btn-primary m-1"} clic={() => this.rechercheEtablissement('mairie')}>Mairie</Bouton>
                <Bouton typeBtn={"btn-primary m-1"} clic={() => this.rechercheEtablissement('commissariat_police')}>Commissariat de Police</Bouton>
                <Bouton typeBtn={"btn-primary m-1"} clic={() => this.rechercheEtablissement('pole_emploi')}>Pole Emploi</Bouton>
                <Bouton typeBtn={"btn-primary m-1"} clic={() => this.rechercheEtablissement('prefecture')}>Prefecture</Bouton>
                {
                    this.state.recherche && this.state.recherche.map(etablissement => {
                        return <Etablissement 
                            addresses = {etablissement.properties.adresses}
                            horaires = {etablissement.properties.horaires}
                            id = {etablissement.properties.id}
                            nom = {etablissement.properties.nom}
                            telephone = {etablissement.properties.telephone}
                            mail = {etablissement.properties.email}
                            url = {etablissement.properties.url}
                        />
                    })
                }
            </>
        );
    }
}


export default Localisation;