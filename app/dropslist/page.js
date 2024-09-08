"use client"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import { useState } from "react"
import { listDrop } from "../utils.js"
import { useRouter } from "next/navigation"
export default function Dropslist() {
  const router = useRouter()
  // dropName,
  // minimumFanTokenRequired,
  // totalItemQuantity,
  // itemsLeft,
  // dropStartDate,
  // dropItemImage,
  // price
  const [dropName, setDropName] = useState("")
  const [minimumFanTokenRequired, setMinimumFanTokenRequired] = useState(0)
  const [totalItemQuantity, setTotalItemQuantity] = useState(0)
  const [itemsLeft, setItemsLeft] = useState(0)
  const [dropStartDate, setDropStartDate] = useState(0)
  const [dropItemImage, setDropItemImage] = useState("https://res.cloudinary.com/dopdbwaiw/image/upload/v1720991163/cld-sample-5.jpg")
  const [price, setPrice] = useState(0)
  const handlelistDrop = async () => {
    const res = await listDrop(dropName, minimumFanTokenRequired, totalItemQuantity, itemsLeft, dropStartDate, dropItemImage, price)
    console.log("result for list drop op", res)
    if (res) {
      router.push("/listingconfirmation")
    }
  }

  return (
    <div className="">
      <Navbar />
      <div className="max-w-2xl mx-auto bg-neutral-300 p-6 rounded-lg shadow-md mt-20">
        <h1 className="text-5xl font-extrabold mb-6 text-center font-body text-black">Drop Setup</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dropName" className="block text-md font-medium  text-gray-700 mb-1">
              Drop name
            </label>
            <input
              value={dropName}
              onChange={(e) => {
                setDropName(e.target.value)
              }}
              type="text"
              id="dropName"
              placeholder="Enter drop name"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="minTokens" className="block text-md font-medium text-gray-700 mb-1">
              Minimum fan tokens required
            </label>
            <input
              value={minimumFanTokenRequired}
              onChange={(e) => {
                setMinimumFanTokenRequired(e.target.value)
              }}
              type="number"
              id="minTokens"
              placeholder="Enter minimum tokens"
              className="w-full px-3 py-2 border placeholder-gray-400 text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-md font-medium text-gray-700 mb-1">
              Item quantity
            </label>
            <input
              value={totalItemQuantity}
              onChange={(e) => {
                setTotalItemQuantity(e.target.value)
                setItemsLeft(e.target.value)
              }}
              type="number"
              id="quantity"
              placeholder="Enter quantity"
              className="w-full px-3 py-2 border placeholder-gray-400 text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="startDate" className="block text-md font-medium text-gray-700 mb-1">
              Start date & time
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full px-3 py-2 border placeholder-gray-400 text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-md font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value)

              }}
              type="number"
              id="price"
              placeholder="Enter price"
              className="w-full px-3 py-2 border placeholder-gray-400 text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-md font-medium text-gray-700 mb-1">
              Item / Image
            </label>
            <div className="w-full px-3 py-2 border border-gray-300 border-dashed rounded-md text-center cursor-pointer hover:bg-gray-50">
              <span className="text-gray-500">Upload item image</span>
            </div>
          </div>
        </div>


        <button onClick={handlelistDrop} className="w-full mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black">
          Continue
        </button>

      </div>
    </div>
  )
}