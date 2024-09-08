"use client"
import { getAllOrders, fulfillOrder } from "../utils.js"
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
export default function Myorders() {
  const [allOrders, setAllOrders] = useState([]);


  useEffect(() => {
    const fetchAllOrders = async () => {
      const res = await getAllOrders();
      console.log(res)
      console.log("All orders are: ", res.length);
      setAllOrders(res);
    };
    fetchAllOrders();
  }, []);
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
      {allOrders.map((order) => (
        <div className="w-full max-w-4xl mx-auto border border-gray-300 rounded-lg p-4 flex items-center justify-between">

          <div className="flex space-x-4">
            <div className="px-4 py-2 border rounded-md bg-gray-100">
              <span className="font-semibold text-black">{order[4]}</span>
            </div>
            <div className="px-4 py-2 border rounded-md bg-gray-100">
              {order[8] ? <span className="font-semibold text-green-500">Fulfilled by seller</span> : <span className="font-semibold text-red-500">Not yet Fulfilled</span>}

            </div>
          </div>
          <div className="px-16 py-2 border rounded-md bg-gray-100">
            <span className="font-semibold text-black">Tracking Link</span>
          </div>
        </div>
      ))}
    </div>
  )
}