"use client";
import Link from "next/link";
import axios from "axios";

export default function CancelarVenta({ id }) {
    async function cancelar() {
        // URL para la función de cancelar venta en el backend
        const url = `http://localhost:3000/cancelarVenta/${id}`;
        
        try {
            // Realizar la petición para cambiar el estado de la venta a "cancelado"
            await axios.patch(url, { estado: 'cancelado' }); // Cambiado a patch
            // Redirigir a la página de mostrar ventas después de cancelar
            window.location.replace("/ventas/mostrar");
        } catch (error) {
            console.error("Error al cancelar la venta:", error);
        }
    }

    return (
        <Link href="#" onClick={(e) => { e.preventDefault(); cancelar(); }}>
            Cancelar
        </Link>
    );
}