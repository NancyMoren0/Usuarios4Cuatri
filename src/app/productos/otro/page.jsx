"use client"
import axios from "axios";
async function nuevoProducto(e){
    e.preventDefault();
    console.log("Estas en nuevoProducto");
    const url="http://localhost:3000/nuevoProducto";
    const datos={
        cantidad:document.getElementById("cantidad").value,
        nombre:document.getElementById("nombre").value,
        precio:document.getElementById("precio").value
    }
    //console.log(datos);
    const respuestas = await axios.post(url,datos);
    //console.log(respuesta.data);
    location.replace("http://localhost:3001/productos/ver");

}
export default function NuevoProducto() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5 " onSubmit={nuevoProducto} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        
                        <input id="cantidad" placeholder ="Cantidad" autoFocus className="form-control mb-3" type="text" />
                        <input id="nombre" placeholder ="Nombre"  className="form-control mb-3" type="text" />
                        <input id="precio" placeholder ="Precio"  className="form-control mb-3" type="text" />
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-dark col-12 mt-3 mb-3" type="submit">Guardar producto</button>
                    </div>
                </div>

            </form>
        </div>
    )
}