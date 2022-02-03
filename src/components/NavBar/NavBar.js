import React from "react";

import { NavLink } from "react-router-dom";


const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact="true"  to="/projet-react/">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact="true" to="/projet-react/localisation">Localisation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact="true" to="/projet-react/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
);


export default navbar;