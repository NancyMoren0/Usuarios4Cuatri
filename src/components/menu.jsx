import "@/components/menu.css"
import Link from "next/link";
export default function Menu(){
    return(
        <>
        <Link className="link" href="/chat">Chat</Link>
        <Link className="link" href="/universidades">Universidades</Link>
        <Link className="link" href="/usuarios">Usuarios</Link>
        </>
    );
}