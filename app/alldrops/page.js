import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
export default function Drops(){
    return(
        <div>
            <div>
            <header className="bg-neutral-300 py-4 px-6 flex justify-between items-center m-5 rounded-md">
                <Link href="\fandrops">
                <img src="/back-button.png" width={50} />
                </Link>
                <div className="flex space-x-2">
                    <ConnectButton />
                </div>
            </header>
        </div>
        <div className="w-full max-w-4xl mt-10 mx-auto space-y-4">
 
  <div className="flex items-center justify-between text-black border bg-neutral-400 border-gray-100 rounded-lg p-4">
    <div className="w-1/5">
      <span className="font-semibold">Drop Name</span> 
    </div>
    <div className="w-1/5">
      <span className="font-semibold">Start Date</span>
    </div>
    <div className="w-1/5">
      <span className="font-semibold">Items Left</span>
    </div>
    <div className="w-1/5">
      <span className="font-semibold">is Eligible</span>
    </div>
    <button className="w-1/5 bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600">
      Buy
    </button>
  </div>
        </div>
        </div>
    )
}