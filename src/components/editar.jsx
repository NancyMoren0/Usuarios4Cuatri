"use client"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function EditarUsuario({ id, usuario }) {
    // Estado para almacenar los datos del usuario
    const [nombre, setNombre] = useState(usuario.nombre);
    const [usuarioNombre, setUsuarioNombre] = useState(usuario.usuario);
    const [password, setPassword] = useState('');

    async function editar() {
        const url = `http://localhost:3000/editarUsuario/${id}`;
        
        // Crea un objeto con los datos que deseas actualizar
        const datosActualizados = {
            nombre,
            usuario: usuarioNombre,
            password: password ? password : undefined, // Solo incluye la contraseña si se proporciona
        };

        try {
            const respuesta = await axios.put(url, datosActualizados);
            console.log(respuesta.data); // Muestra la respuesta del servidor
            window.location.replace("/usuarios/mostrar"); // Redirige después de la edición
        } catch (error) {
            console.error("Error al editar el usuario:", error);
        }
    }

    return (
        <div>
            <h1>Editar Usuario</h1>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
            />
            <input
                type="text"
                value={usuarioNombre}
                onChange={(e) => setUsuarioNombre(e.target.value)}
                placeholder="Nombre de Usuario"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nueva Contraseña (opcional)"
            />
            <button onClick={editar}>Guardar Cambios</button>
            <Link href="/usuarios/mostrar">Cancelar</Link>
        </div>
    );
}
