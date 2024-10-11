 //import Link from "next/link";
 //import Menu from "@/components/menu";
import Navbar from "@/components/navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
 //import  "@/app/estilos.css"
 export const metadata={
    title:"Web con next",
    description:"Front end con next"
 }
 
 export default function RootLayout ({children}){ //va a recibir un atributo
    return(
        <html>
            <head>
                  <title>Next</title>
            </head>
         <body>
            <Navbar/> 
             {children}
             <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></Script>
             <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></Script>
             
             

         </body>
        </html>
//import "bootstrap/dist/css/bootstrap.min.css";
    );
}