import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
export default function Myorders(){
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
        <div className="w-full max-w-4xl mx-auto border border-gray-300 rounded-lg p-4 flex items-center justify-between">

  <div className="flex space-x-4">
    <div className="px-4 py-2 border rounded-md bg-gray-100">
      <span className="font-semibold text-black">Drop Name</span>
    </div>
    <div className="px-4 py-2 border rounded-md bg-gray-100">
      <span className="font-semibold text-black">Status</span>
    </div>
  </div>

  
  <div className="px-16 py-2 border rounded-md bg-gray-100">
    <span className="font-semibold text-black">Tracking Link</span>
  </div>
</div>

        </div>
    )
}