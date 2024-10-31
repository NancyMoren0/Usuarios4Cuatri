import Link from "next/link";
import CancelarVenta from "@/components/borrarV";
//import BorrarVenta from "@/components/borrarV";
import axios from "axios";

async function getVentas(){
    
    const url="http://localhost:3000/mostrarVentas";
    const ventas= await axios.get(url);
   // console.log(usuarios)
   //console.log({process.env.BASE_URL});
    return ventas.data;





}
//noticias()
export default async function Ventas (){
    const ventas= await getVentas();
    return(
        <>
       
        <h1>Ventas</h1>
        <p>Estas en ventas</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>ID Productos</th>
                    
                    <th>Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    ventas.map((ventas,i)=>(
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{ventas.cantidad}</td>
                        <td>{ventas.estado}</td>
                        <td>{ventas.fecha}</td>
                        <td>{ventas.hora}</td>
                        <td>{ventas.nombreProducto}</td>
                       
                        <td>
                        <Link href={`/ventas/editar/${ventas.id}`}>Editar</Link>
                        /
                          <CancelarVenta id={ventas.id}/>
                        </td>
                        </tr>
                    ))

                } 

            </tbody>
        </table>
        </>
    );
}