import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import AllDropsCard from "../../components/Alldrops"
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
        <div className="w-full max-w-7xl mt-10 mx-auto space-y-4">
        <AllDropsCard />
        </div>
        </div>
    )
}