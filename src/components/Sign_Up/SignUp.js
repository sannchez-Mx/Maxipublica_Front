import React, { Component } from "react";
import {
  faUser,
  faEnvelope,
  faUnlockAlt,
  faSignInAlt,
  faTable,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUp from "../Sign_Up_Form/Sign_Form";
import { Link } from "react-router-dom";

class Sign_Up extends Component {
  render() {
    return (
        <div className="containerRegistro">
        <div className="containerLogo">
          <img className="logoMaxiPublica" src="/images/logo_maxipublica.png" alt="Maxipublica_Logo" width="600px" height="360px"/>
        </div>
          <div className="formRegistro">
            <div>
              <h3 className="tituloFormLogin">Regístrate o inicia sesión.</h3>
            </div>
            <form onSubmit={this.props.handleSignup}>
              <SignUp
                name="nombre"
                type="text"
                handleChange={this.props.handleChange}
                placeholder="Nombre"
                icon={faUser}
              />
              <SignUp
                name="email"
                type="email"
                handleChange={this.props.handleChange}
                placeholder="ejemplo@live.com"
                icon={faEnvelope}
              />
              <SignUp
                name="fecha"
                type="date"
                handleChange={this.props.handleChange}
                placeholder="ejemplo@live.com"
                icon={faTable}
              />
              <div className="uk-margin">
                <div className="uk-inline">
                  <span className="uk-form-icon">
                    <FontAwesomeIcon icon={faFutbol} />
                  </span>
                  <select
                    required
                    className="uk-select"
                    name="deportes"
                    onChange={this.props.handleChange}
                    type="text"
                  >
                    <option>...</option>
                    <option>Fútbol</option>
                    <option>Basquetbol</option>
                    <option>Natación</option>
                  </select>
                </div>
              </div>
              <SignUp
                name="password"
                type="password"
                handleChange={this.props.handleChange}
                placeholder="Contraseña"
                icon={faUnlockAlt}
              />
              <SignUp
                name="confirmPassword"
                type="password"
                handleChange={this.props.handleChange}
                placeholder="Repite tu contraseña"
                icon={faUnlockAlt}
              />
              <p>
                Ya tienes cuenta?&nbsp;
                <Link to={`/`}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Iniciar sesión
                </Link>
              </p>
              <button className="uk-button" type="submit">Registrarme</button>
            </form>
          </div>
        </div>
    );
  }
}

export default Sign_Up;
