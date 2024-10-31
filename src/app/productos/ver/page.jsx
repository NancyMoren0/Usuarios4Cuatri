import Link from "next/link";
import BorrarProducto from "@/components/borrarP";
import axios from "axios";

async function getProductos(){
    
    const url="http://localhost:3000/mostrarProductos";
    const productos=await axios.get(url);
   // console.log(usuarios)
   //console.log({process.env.BASE_URL});
    return productos.data;
}
//noticias()
export default async function Productos (){
    const productos= await getProductos();
    return(
        <>
       
        <h1>Productos</h1>
        <p>Estas en productos</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Cantidad</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((productos,i)=>(
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{productos.cantidad}</td>
                        <td>{productos.nombre}</td>
                        <td>{productos.precio}</td>
                        <td>
                        <Link href={`/productos/editar/${productos.id}`}>Editar</Link>
                        /
                          <BorrarProducto id={productos.id}/>
                        </td>
                        </tr>
                    ))

                } 

            </tbody>
        </table>
        </>
    );
}