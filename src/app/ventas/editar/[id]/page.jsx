'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EditarVenta = ({ params }) => {
    const { id } = params; 
    const [venta, setVenta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(''); // Solo estado para cantidad

    const router = useRouter();

    // Función para cargar la venta
    useEffect(() => {
        const fetchVenta = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/encontrado/${id}`); // Cambia la ruta si es necesario
                setVenta(response.data);
                setLoading(false);
                setCantidad(response.data.cantidad); // Cargar la cantidad desde la respuesta
            } catch (error) {
                console.error('Error al cargar la venta:', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchVenta();
        }
    }, [id]);

    const guardarVenta = async (e) => {
        e.preventDefault();
    
        const updatedData = {
            cantidad: cantidad // Solo actualizar el campo de cantidad
        };
    
        console.log('Datos a enviar:', updatedData);
    
        try {
            const response = await axios.put(`http://localhost:3000/editarVenta/${id}`, updatedData);
            router.push('/ventas/mostrar'); // Redirigir a la lista de ventas después de guardar
        } catch (error) {
            console.error('Error al actualizar la venta:', error);
            alert('Error al actualizar la venta');
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!venta) {
        return <p>Venta no encontrada.</p>;
    }

    return (
        <div className="m-0 row row-justify-content">
            <form onSubmit={guardarVenta} className="col-6 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Cantidad de Venta</h1>
                    </div>
                    <div className="card-body">
                        <input
                            style={{ height: "70px" }}
                            className="form-control mb-3"
                            type="number"
                            id="cantidad"
                            placeholder="Cantidad"
                            value={cantidad} // Solo se muestra la cantidad
                            onChange={(e) => setCantidad(e.target.value)} // Actualiza solo el estado de cantidad
                            autoFocus
                        />
                    </div>
                    <div className="card-footer">
                        <button type="submit" style={{ height: "50px" }} className="btn btn-primary col-12">Actualizar Cantidad</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditarVenta;
