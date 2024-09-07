import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Orderdetails(){
    return(
        <div>
        <div>
            <header className="bg-neutral-300 py-4 px-6 flex justify-between items-center m-5 rounded-md">
                <Link href="\clubshome">
                <img src="/back-button.png" width={50} />
                </Link>
                <div className="flex space-x-2">
                    <ConnectButton />
                </div>
            </header>
        </div>
        <div className="flex border border-white bg-neutral-300 rounded p-2 space-x-32 mx-10 mt-10">
            <div className="ml-20 border border-black px-16 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
             Fan Name
            </div>
            <div className=" border border-black px-16 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
            Address
            </div>
            <div className=" border border-black px-16 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
            Tracking Link
            </div>
        
            <button className=" border border-black px-16 py-2 bg-neutral-400 hover:bg-emerald-600 hover:text-white rounded-xl text-black font-bold text-center">
            Mark as Fulfilled
            </button>
            
            </div>
        </div>
    )
}