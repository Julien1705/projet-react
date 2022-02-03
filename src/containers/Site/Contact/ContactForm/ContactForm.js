import React, { Component } from 'react';
import Titre from '../../../../components/Titres/TitreH1';
import Bouton from '../../../../components/Bouton/Bouton';

import { withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";


class ContactForm extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous !</Titre>
                <div>
                    <h2>Adresse : </h2>
                    xxxxxxxxxxxxxxxxxxx
                    <h2>Telephone : </h2>
                    00 00 00 00 00
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <Bouton typeBtn={"btn-info"}><NavLink className="nav-link text-white" exact="true" to="/projet-react/contact">Fermer le formulaire</NavLink></Bouton>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Nom <span style={{ backgroundColor: "yellow", borderRadius: "10px" }}>(min 5 caractères)</span> </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Votre nom"
                            name="nom"
                            onChange={this.props.handleChange}
                            value={this.props.values.nom}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.nom && this.props.errors.nom && <span className='text-danger'>{this.props.errors.nom}</span>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Votre email"
                            name="email"
                            onChange={this.props.handleChange}
                            value={this.props.values.email}
                            onBlur={this.props.handleBlur}
                        />
                        {
                           this.props.touched.email && this.props.errors.email && <span className='text-danger'>{this.props.errors.email}</span>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Votre message <span style={{ backgroundColor: "yellow", borderRadius: "10px" }}>(entre 100 et 200 caractères)</span></label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="message"
                            onChange={this.props.handleChange}
                            value={this.props.values.message}
                            onBlur={this.props.handleBlur}
                        ></textarea>
                        {
                            this.props.touched.message && this.props.errors.message && <span className='text-danger'>{this.props.errors.message}</span>
                        }
                    </div>
                    <button onClick={this.props.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}


export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema : Yup.object().shape({
        nom: Yup.string()
                .min(5,'Le nom doit avoir plus de 5 caractères !')
                .required('Le nom est obligatoire'),
        email: Yup.string()
                .email("L'email n'a pas le bon format")
                .required("L'email est obligatoire"),
        message: Yup.string()
                .min(100, "Le message doit avoir plus de 100 caractères")
                .max(200, "Le message doit avoir moins de 200 caractères")
                .required("Le message est obligatoire")
    }),
    handleSubmit: (values, { props }) => {
        alert("message envoyé");
    }
})(ContactForm);