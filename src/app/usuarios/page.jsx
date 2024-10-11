"use client";
import { useState, useEffect } from "react";
import axios from "axios";

async function getNoti() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const usuarios = await axios.get(url);
  return usuarios.data;
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNoti();
      setUsuarios(data);
    };
    fetchData();
  }, []);

  const handleNombreClick = (usuario) => {
    setUsuarioSeleccionado(usuario);
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show(); // Mostrar el modal cuando se selecciona un usuario
  };

  return (
    <>
      <h1>Usuarios</h1>
      <p>Estas en usuarios</p>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <a href="#!" onClick={() => handleNombreClick(usuario)}>
                  {usuario.name}
                </a>
              </td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Detalles del Usuario
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {usuarioSeleccionado ? (
                <>
                  <p><strong>Nombre:</strong> {usuarioSeleccionado.name}</p>
                  <p><strong>Usuario:</strong> {usuarioSeleccionado.username}</p>
                  <p><strong>Email:</strong> {usuarioSeleccionado.email}</p>
                  <p><strong>Dirección:</strong></p>
                  <ul>
                    <li><strong>Calle:</strong> {usuarioSeleccionado.address.street}</li>
                    <li><strong>Suite:</strong> {usuarioSeleccionado.address.suite}</li>
                    <li><strong>Ciudad:</strong> {usuarioSeleccionado.address.city}</li>
                    <li><strong>Código postal:</strong> {usuarioSeleccionado.address.zipcode}</li>
                  </ul>
                  <p><strong>Teléfono:</strong> {usuarioSeleccionado.phone}</p>
                  <p><strong>Sitio web:</strong> {usuarioSeleccionado.website}</p>
                  <p><strong>Compañía:</strong> {usuarioSeleccionado.company.name}</p>
                  <p><strong>catchPhrase:</strong> {usuarioSeleccionado.company.catchPhrase}</p>
                  <p><strong>bs:</strong> {usuarioSeleccionado.company.bs}</p>
                </>
              ) : (
                <p>Cargando datos del usuario...</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
