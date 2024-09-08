import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
export default function Navbar(){
    return(
        <div>
            <header className="bg-neutral-300 py-4 px-6 flex justify-between items-center m-5 rounded-md">
                <Link href="\landing">
                <h1 className="text-4xl font-extrabold font-body text-pink-700">Fantoz</h1>
                </Link>
                <div className="flex space-x-2">
                    <ConnectButton />
                </div>
            </header>
        </div>
    )
}