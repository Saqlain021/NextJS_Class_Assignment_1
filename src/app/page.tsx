import Image from "next/image";
import Navbar from "./component/nav";
export default function Home() {
  return (
    
import Link from "next/link";

export default function Navbar(){
    return(
    


       <div className="w-auto h-[100px] bg-black text-white text-center flex justify-around items-center   ">
        <h1 className="text-white text-center w-[250px] text-6xl uppercase">brand</h1>
        <ul className="w-[700px] capitalize flex justify-end text-xl gap-[40px] items-center">
            <li><Link href="home">home</Link></li>
            <li><Link href="about">about</Link></li>
            <li><Link href="contact">contact</Link></li>
        </ul>
        
        
        <div className="flex items-center gap-[10px]">
            <button className="bg-yellow-300 px-[20px] py-[10px] rounded-[8px] cursor-pointer text-black">login</button>
            <label className="capitalize">search: </label>
            <input type="search" className="rounded-[8px] text-black" />
        </div>
        
       </div>
    
    )
}

      );
}
