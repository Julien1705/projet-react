import React from "react";

import Horaires from "./Horaires/Horaires";


const etablissement = (props) => (
    <div className="card text-white bg-info mb-3 col-6" >
        <div className="card-header">{props.nom}</div>
        <div className="card-body">
            <h4 className="card-title">
                Telephone : {props.telephone}
                <br />
                {props.mail && `Mail : ${props.mail}`}

            </h4>
            <p className="card-text">
                <strong>Adresse : </strong><br />
                {props.adresses[0].lignes[0]} <br />
                {props.adresses[0].commune} {props.adresses[0].codePostal}
            </p>

            {
                props.horaires && <p className="card-text">
                    <strong>Horaire : </strong><br />
                    <Horaires horaires = {props.horaires}/>
                </p>
            }

            {
                props.url && <p className="card-text">
                    <strong>Site web : </strong><br />
                    <a href={props.url} className="btn btn-primary">Visiter le site</a>
                </p>
            }

        </div>
    </div>
);


export default etablissement;