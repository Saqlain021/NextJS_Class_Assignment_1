import Navbar from "../component/nav"
export default function Contact(){
    return(
        <div>
        
         <div className="bg-blue-800 w-auto h-[100%] py-[50px] text-center text-white">
         <div className="w-[1000px] h-[400px] bg-black m-auto place-items-center">
            <h1 className="w-[300px] py-[30px] capitalize text-5xl font-bold" >contact us</h1>
            <p className="w-[400px] py-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia adipisci accusamus minus voluptatum itaque consectetur, magnam consequatur reprehenderit esse, fugit maxime iusto sint veniam sit molestiae optio impedit unde beatae.</p>
            <div className=" mt-[20px] capitalize flex gap-[10px]">
                <label>email:</label>
                <input type="email" className="rounded-[8px] text-black" />
                <p>phone: +92-0000000000</p>
                

            </div>
         </div>

         </div>
       

        </div>
    )
}