import { isLoggedIn } from "../../service";
import { Link } from "react-router-dom";
import { Logout } from "../../service";
import React, { useState, useEffect } from "react";

export default function Profile() {
  // Declare a nueva variable state , a la cual llamare "user"
  const [user, setUser] = useState({});
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el state del documento
    isLoggedIn();
    const token = localStorage.getItem("token");
    if (token) {
      let userJSon = JSON.parse(localStorage.getItem("user"));
      setUser(userJSon);
    }
  }, []);
  return (
    <div className="profile">
      <div className="containerProfile">
        <div>
          <img
            src={user.imagenPerfil}
            alt={user.nombre}
            width="280px"
            height="200"
          />
        </div>
        <h1 className="userName">{user.nombre}</h1>
        <div className="containerInfo">
          <p>
            <strong>Status:</strong> {user.status}
          </p>
          <p>
            <strong>Correo:</strong> {user.email}
          </p>
          <p>
            <strong>Deporte:</strong> {user.deportes_favoritos}
          </p>
          <p>
            <strong>Fecha de nacimiento:</strong> {user.fecha_nacimiento}
          </p>
        </div>
          <button className="buttonPerfil"> 
            <Link to={`/edit/${user._id}`}>
              Editar perfil
            </Link>
          </button>
          <button className="buttonPerfil" onClick={Logout}>Cerrar sesión</button>
      </div>
    </div>
  );
}
