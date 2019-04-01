import React, { Component } from "react";
import {
  faUser,
  faEnvelope,
  faTable,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUp from "../Sign_Up_Form/Sign_Form";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../service";

class FormEdit extends Component {
  componentWillMount() {
    isLoggedIn(this.props.history);
  }
  render() {
    let { user } = this.props.state;
    return (
      <div className="profileEdit">
        <div className="containerProfile">
          <h1 className="userName">Edita tu perfil</h1>
          <form onSubmit={this.props.handleEditUser}>
            <SignUp
              name="nombre"
              type="text"
              handleChange={this.props.handleChange}
              placeholder={user.nombre}
              icon={faUser}
            />
            <SignUp
              name="email"
              type="email"
              handleChange={this.props.handleChange}
              placeholder={user.email}
              icon={faEnvelope}
            />
            <SignUp
              name="fecha"
              type="date"
              handleChange={this.props.handleChange}
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
            <div>
              <button className="buttonPerfil">
                <Link to={`/profile/${user._id}`}>Regresar</Link>
              </button >
              <button className="buttonPerfil" type="submit">Editar perfil</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormEdit;
