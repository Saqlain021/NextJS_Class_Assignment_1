import { promises } from "dns"
import Navbar from "../component/nav"
import { resolve } from "path"
export default async function About(){
    await new Promise((resolve)=>{
        setTimeout(resolve,5000);
    });
    return(
        <div>
         
            
            <div className="bg-blue-800 w-auto h-[100%] py-[50px] text-center text-white">
         <div className="w-[1000px] h-[400px] bg-black m-auto place-items-center">
            <h1 className="w-[220px] py-[30px] capitalize text-5xl font-bold" >about us</h1>
            <p className="w-[400px] py-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia adipisci accusamus minus voluptatum itaque consectetur, magnam consequatur reprehenderit esse, fugit maxime iusto sint veniam sit molestiae optio impedit unde beatae.</p>
         </div>

         </div>
        </div>
    )
}