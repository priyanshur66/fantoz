"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { listDrop } from "../utils.js";
import axios from 'axios';

export default function Dropslist() {
  const router = useRouter();
  const [dropName, setDropName] = useState("");
  const [minimumFanTokenRequired, setMinimumFanTokenRequired] = useState(0);
  const [totalItemQuantity, setTotalItemQuantity] = useState(0);
  const [itemsLeft, setItemsLeft] = useState(0);
  const [dropStartDate, setDropStartDate] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [dropItemImage, setDropItemImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_AIP_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY,
            "Content-Type": "multipart/form-data",
          },
        });

        const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        setDropItemImage(ipfsUrl);
      } catch (error) {
        console.error("Error uploading to IPFS:", error);
      }
    }
  };

  const handleContinue = async () => {
    if (selectedDate) {
      const unixTimestamp = Math.floor(new Date(selectedDate).getTime() / 1000);
      setDropStartDate(unixTimestamp);

      const res = await listDrop(dropName, minimumFanTokenRequired, totalItemQuantity, itemsLeft, unixTimestamp, dropItemImage, price);
      console.log("result for list drop op", res);
      if (res) {
        router.push("/listingconfirmation");
      }
    } else {
      console.error('Please select a date before continuing');
    }
  };

  useEffect(() => {
    console.log('dropStartDate updated:', dropStartDate);
  }, [dropStartDate]);

  return (
    <div className="">
      <div>
        <header className="bg-neutral-300 py-4 px-6 flex justify-between items-center m-5 rounded-md">
          <Link href="/clubshome">
            <img src="/back-button.png" width={50} alt="Back" />
          </Link>
          <div className="flex space-x-2">
            <ConnectButton />
          </div>
        </header>
      </div>
      <div className="max-w-2xl mx-auto bg-neutral-300 p-6 rounded-lg shadow-md mt-20">
        <h1 className="text-5xl font-extrabold mb-6 text-center font-body text-black">Drop Setup</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dropName" className="block text-md font-medium text-gray-700 mb-1">
              Drop name
            </label>
            <input
              value={dropName}
              onChange={(e) => setDropName(e.target.value)}
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
              onChange={(e) => setMinimumFanTokenRequired(e.target.value)}
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
                setTotalItemQuantity(e.target.value);
                setItemsLeft(e.target.value);
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
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-md font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
            <div className="relative w-full h-40 border border-gray-700 border-dashed rounded-md text-center cursor-pointer bg-gray-300 hover:bg-gray-50 overflow-hidden">
              <input
                type="file"
                id="image"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageUpload}
                accept="image/*"
              />
              {dropItemImage ? (
                <img src={dropItemImage} alt="Uploaded" className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500">Upload item image</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <button onClick={handleContinue} className="w-full mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black">
          Continue
        </button>
      </div>
    </div>
  );
}