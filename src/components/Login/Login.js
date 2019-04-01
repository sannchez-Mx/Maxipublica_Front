import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faUnlockAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import SignUp from "../Sign_Up_Form/Sign_Form";

library.add(faUser, faEnvelope, faUnlockAlt);

class Login extends Component {
  render() {
    return (
      <div className="containerLogin">
        <div id="formLogin">
          <div className="container_Logo">
            <img
              id="maxipublica_Logo"
              src="/images/logo_maxipublica.png"
              alt="Maxipublica_logo"
              width="320" 
              height="345"
            />
          </div>
          <h1 className="tituloForm">Inicia sesión</h1>
          <form onSubmit={this.props.handleLogin}>
            <SignUp
              name="email"
              type="email"
              icon={faEnvelope}
              placeholder="Correo Electrónico"
              handleChange={this.props.handleChange}
            />
            <SignUp
              name="password"
              type="password"
              icon={faUnlockAlt}
              placeholder="Contraseña"
              handleChange={this.props.handleChange}
            />
            <p>
              No tienes cuenta?&nbsp;
              <Link className="linkRegistro" to={`/registro`}>
                <FontAwesomeIcon icon={faUserPlus} /> Registrate
              </Link>
            </p>
            <button className="uk-button" type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
