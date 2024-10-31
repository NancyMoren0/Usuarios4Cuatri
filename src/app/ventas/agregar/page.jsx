"use client"
import axios from "axios";
async function nuevaVentas(v){
    v.preventDefault();
    console.log("Estas en nuevaVenta");
    const url="http://localhost:3000/nuevoVentas";
    const datos={
        cantidad:document.getElementById("cantidad").value,
      // estado:document.getElementById("estado").value,
       //fecha:document.getElementById("fecha").value,
      // hora:document.getElementById("hora").value,
        idprod:document.getElementById("idprod").value,
        idusu:document.getElementById("idusu").value
        
    }
    //console.log(datos);
    const respuestas = await axios.post(url,datos);
    //console.log(respuesta.data);
    location.replace("http://localhost:3001/ventas/mostrar");

}
export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5 " onSubmit={nuevaVentas} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva Venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="cantidad" placeholder ="Cantidad" autoFocus className="form-control mb-3" type="text" />
                        <input id="idprod" placeholder ="IdProd" className="form-control mb-3" type="text" />
                        <input id="idusu" placeholder ="IdUsu" className="form-control mb-3" type="text" />
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-dark col-12 mt-3 mb-3" type="submit">Guardar venta</button>
                    </div>
                </div>

            </form>
        </div>
    )
}