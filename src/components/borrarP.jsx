"use client"
import Link from "next/link";
import axios from "axios";

export default function BorrarProducto({id}){
    //console.log(id);
    async function borrar() {
        //console.log("Estas en borrar"+id);
        const url="http://localhost:3000/borrarProducto/"+id;
        const respuestas=await axios.delete(url);
        window.location.replace("/productos/ver")
    }
    return(
        <Link href="" onClick={borrar}>borrar</Link>
    );
}
