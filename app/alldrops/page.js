"use client"
import { getAllOrders, getAllDrops } from "../utils.js"
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import AllDropsCard from "../../components/Alldrops"
export default function Drops() {
    const [allDrops, setAllDrops] = useState([])
    useEffect(() => {
        const fetchAllDrops = async () => {
            const res = await getAllDrops()

            console.log("all orders are ", res.length)
            // for (let index = 0; index < res.length; index++) {
            //     setAllDrops((prev) => [...prev, res[index]]);

            // }
            setAllDrops(res)
            // console.log(allDrops)
            // console.log(res[0][0])
        }
        fetchAllDrops()
    }, [])
    useEffect(() => {
        if (allDrops.length > 0) {
            console.log("Updated allDrops: ", allDrops);
        }
    }, [allDrops]);
    return (
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
                {
                    allDrops.map((e) => <AllDropsCard
                        dropId={Number(String(e[0]))}
                        productImage={"https://res.cloudinary.com/dopdbwaiw/image/upload/v1720991163/cld-sample-5.jpg"}
                        dropName={e[2]}
                        startDate={Number(String(e[6]))}
                        itemsLeft={Number(String(e[5]))}
                        isEligible={"no"}
                        price={String(e[8])} />)
                }
                <AllDropsCard productImage={"https://res.cloudinary.com/dopdbwaiw/image/upload/v1720991163/cld-sample-5.jpg"}
                    dropName={"drop1"}
                    startDate={"25"}
                    itemsLeft={"45"}
                    isEligible={"no"} />
            </div>
        </div>
    )
}