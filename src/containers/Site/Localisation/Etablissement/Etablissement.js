import React from "react";


const etablissement = (props) => (
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-header">{props.nom}</div>
        <div class="card-body">
            <h4 class="card-title">
                Telephone : {props.telephone}
                <br />
                {props.mail && `Mail : ${props.mail}`}

            </h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
);


export default etablissement;