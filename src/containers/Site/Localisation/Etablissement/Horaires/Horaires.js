import React from "react";


const horaires = (props) => {

    let content = props.horaires.map((horaire,index) => {
        return <li key={index}> 
        {
            horaire.du === horaire.au ? `${horaire.du} ` : `du ${horaire.du} au ${horaire.au} `
        } 
        : de {horaire.heures[0].de} à {horaire.heures[0].a} 
        {
            horaire.heures[1] && 
            <> et de {horaire.heures[1].de} à {horaire.heures[1].a} </>
        }
        
        
        </li>
    })

    return (
        <>
            <ul>
                {content}
            </ul>
        </>
    )
};


export default horaires;