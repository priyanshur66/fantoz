"use client"
import { getAllOrders, fulfillOrder } from "../utils.js"
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function OrderDetails() {
    const [trackingLinks, setTrackingLinks] = useState({});  
    const [allOrders, setAllOrders] = useState([]);

    const handleFulfillOrder = async (orderId) => {
        const trackingLink = trackingLinks[orderId] || "";  
        const res = fulfillOrder(orderId, trackingLink);
        console.log("Fulfilled order response:", res);
    }

   
    useEffect(() => {
        const fetchAllOrders = async () => {
            const res = await getAllOrders();
            console.log("All orders are: ", res.length);
            setAllOrders(res);
        };
        fetchAllOrders();
    }, []);

   
    const handleTrackingLinkChange = (orderId, value) => {
        setTrackingLinks(prev => ({ ...prev, [orderId]: value }));
    };

    return (
        <div>
            <div>
                <header className="bg-neutral-300 py-4 px-6 flex justify-between items-center m-5 rounded-md">
                    <Link href="/clubshome">
                        <img src="/back-button.png" width={50} />
                    </Link>
                    <div className="flex space-x-2">
                        <ConnectButton />
                    </div>
                </header>
            </div>

            {allOrders.map((order) => (
                <div key={order[0]}>
                <div className="flex border border-white bg-neutral-300 rounded p-2 space-x-2 mx-10 mt-10">
                    <div className="flex-1 border border-black px-4 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
                        {order[5]}
                    </div>
                    <div className="flex-1 border border-black px-4 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center">
                        {order[6]}
                    </div>
            
                    {!order[8] ? (
                        <input
                            value={trackingLinks[order[0]] || ""}
                            onChange={(e) => handleTrackingLinkChange(order[0], e.target.value)}
                            type="text"
                            placeholder="Track Order"
                            className="flex-1 border border-black px-4 py-2 bg-neutral-400 rounded-xl text-black font-bold text-center placeholder-gray-600"
                        />
                    ) : (
                        <button className="flex-1 border border-black px-4 py-2 bg-neutral-400 hover:bg-emerald-600 hover:text-white rounded-xl text-black font-bold text-center">
                            Track Order
                        </button>
                    )}
            
                    {!order[8] ? (
                        <button
                            onClick={() => handleFulfillOrder(order[0])}
                            className="flex-1 border border-black px-4 py-2 bg-neutral-400 hover:bg-emerald-600 hover:text-white rounded-xl text-black font-bold text-center"
                        >
                            Fulfill Order
                        </button>
                    ) : (
                        <button className="flex-1 border border-black px-4 py-2 bg-neutral-400 hover:bg-emerald-600 hover:text-white rounded-xl text-black font-bold text-center">
                            Fulfilled
                        </button>
                    )}
                </div>
            </div>
            ))}
        </div>
    );
}
