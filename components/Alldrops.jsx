"use client";
import { useEffect, useState } from "react";
import { placeOrder, checkDropEligiblity } from "../app/utils.js";
export default function AllDropsCard({
  dropId,
  productImage,
  dropName,
  startDate,
  itemsLeft,
  isEligible,
  listingClubAddress,
  minimumFanTokenRequired,
  price,
}) {
  const [itemsAvailable, setItemsAvailable] = useState(itemsLeft);
  const [isEligibleForDrop, setIsEligibleForDrop] = useState("false");
  console.log(price);
  const handlePlaceOrder = async () => {
    const res = await placeOrder(dropId, price);
    console.log("Placing order for drop op", res);
    if (res) {
      setItemsAvailable(itemsAvailable - 1);
    }
  };

  useEffect(() => {
    const checkEligiblity = async () => {
      console.log("elogoblity cgheck called", minimumFanTokenRequired);
      const res = await checkDropEligiblity(listingClubAddress);
      console.log("is eligible for drop", res);
      if (res) {
        console.log("chek", minimumFanTokenRequired, res);
        if (minimumFanTokenRequired < res) setIsEligibleForDrop("true");
      }
    };
    checkEligiblity();
  }, []);

  const currentDate = new Date();
  const startDateObj = new Date(startDate * 1000);

  return (
    <div className="flex flex-row items-center justify-between bg-neutral-400 p-4 py-5 rounded-lg ">
      <div className="w-20 h-20">
        <img
          src={productImage}
          alt="item image"
          className="w-full h-full object-cover rounded-lg border-dashed border-black border-2"
        />
      </div>

      <div className="text-black text-xl font-body text-center">
        <span className="block font-semibold">{dropName}</span>
      </div>

      <div className="text-black text-xl font-body text-center">
        <span className="block font-semibold">
          {new Date(startDate * 1000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <div className="text-black text-xl font-body text-center">
        <span className="block font-semibold">{itemsAvailable}</span>
      </div>

      <div className="text-black text-xl font-body text-center">
        <span className="block font-semibold">{isEligibleForDrop}</span>
      </div>

      <div>
        {itemsLeft &&
        currentDate > startDateObj &&
        isEligibleForDrop == "true" ? (
          <button
            onClick={handlePlaceOrder}
            className="bg-emerald-600 border hover:border-black text-white font-semibold hover:text-black px-8 py-2 rounded-lg hover:bg-white transition"
          >
            Buy
          </button>
        ) : (
          <button className="bg-red-600 border hover:border-black text-white font-semibold hover:text-black px-8 py-2 rounded-lg hover:bg-white transition">
            Unavailable
          </button>
        )}
      </div>
    </div>
  );
}
