import "@/components/menu.css"
import Link from "next/link";
export default function Menu(){
    return(
        <>
        <Link className="link" href="/ventas">Ventas</Link>
        <Link className="link" href="/productos">Productos</Link>
        <Link className="link" href="/usuarios">Usuarios</Link>
        </>
    );
}