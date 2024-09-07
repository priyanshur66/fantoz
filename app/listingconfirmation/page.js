import Link from "next/link"
import Navbar from "../../components/Navbar"
export default function DropConfirmed(){
    return(
        <div>
            <Navbar />
            <div>
                <div className="text-center rounded-xl py-1 bg-slate-900 mt-28 text-7xl font-semibold border-2 mx-96">
                ⚡ Drop Listed ⚡
                </div>
                <div className="text-center rounded-xl py-1 bg-slate-900 mt-4 text-7xl font-semibold border-2 mx-96">
                ⚡ Drop Listed ⚡
                </div>
                <div className="text-center rounded-xl py-1 bg-slate-900 mt-4 text-7xl font-semibold border-2 mx-96">
                ⚡ Drop Listed ⚡
                </div>
            </div>
            <div className="">
                <Link href="\clubshome">
                <button className="absolute bottom-14 right-20 border-2 border-white bg-blue-600 rounded-full px-10 py-2 text-white text-md font-medium transition-colors duration-300">
                    Continue
                </button>
                </Link>
                
            </div>
        </div>
    )
}