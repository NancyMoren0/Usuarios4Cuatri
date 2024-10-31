import BorrarUsuario from "@/components/borrar";
import Link from "next/link";
import axios from "axios";

async function getUsuarios(){
    
    const url="http://localhost:3000";
    const usuarios=await axios.get(url);
   // console.log(usuarios)
   //console.log({process.env.BASE_URL});
    return usuarios.data;
}
//noticias()
export default async function Usuarios (){
    const usuarios= await getUsuarios();
    return(
        <>
       
        <h1>Usuarios</h1>
        <p>Estas en usuarios</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    usuarios.map((usuarios,i)=>(
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.usuario}</td>
                        <td>
                        <Link href={`/usuarios/editar/${usuarios.id}`}>Editar</Link>
                         /
                         <BorrarUsuario id={usuarios.id}/> 
                         
                        </td>
                        </tr>
                    ))

                } 

            </tbody>
        </table>
        </>
    );
}