"use client"
import { getAllOrders, getAllDrops } from "../utils.js"
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
export default function Previousdrop() {

    // useEffect(() => {
    //     const fetchAllOrders = async () => {
    //         const res = await getAllOrders()
    //         console.log("all orders are ", res)
    //     }
    //     fetchAllOrders()
    // }, [])


    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        const fetchAllOrders = async () => {
            const res = await getAllOrders()

            console.log("all orders are ", res.length)
            // for (let index = 0; index < res.length; index++) {
            //     setAllDrops((prev) => [...prev, res[index]]);

            // }
            setAllOrders(res)
            // console.log(allDrops)
            // console.log(res[0][0])
        }
        fetchAllOrders()
    }, [])
    useEffect(() => {
        if (allOrders.length > 0) {
            console.log("Updated allDrops: ", allOrders);
        }
    }, [allOrders]);


    return (
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
            {allOrders.map((e) => <div>
                <div className="flex border border-white bg-neutral-300 rounded p-2 space-x-40 mx-10 mt-10">
                    <div className="ml-40 border border-black px-16 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
                        {e[5]}
                    </div>
                    <div className="ml-40 border border-black px-16 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
                        {e[6]}
                    </div>
                    <Link href="\orderdetails">
                        {e[8] ? (<div className=" border border-black px-16 py-2 bg-neutral-400 hover:bg-neutral-700 hover:text-white rounded-xl text-black font-bold text-center">

                            Fulfilled
                        </div>) : (<div className=" border border-black px-16 py-2 bg-neutral-400 hover:bg-neutral-700 hover:text-white rounded-xl text-black font-bold text-center">

                            Fulfill Orders
                        </div>)}

                    </Link>
                </div>
            </div>)}

        </div>
    )
}



