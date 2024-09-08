"use client"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import React, { use, useState } from 'react';
import { registerNewFan } from "../../utils.js"
import { useRouter } from "next/navigation";

export default function Fansetup() {
  const router = useRouter()
  // fullName,
  //   fanInstagramHandle,
  //   fanTwitterHandle,
  //   deliveryAddress,
  //   fanUserBio,
  //   fanUserProfileImage
  const [fullName, setFullName] = useState("")
  const [fanInstagramHandle, setFanInstagramHandle] = useState("")
  const [fanTwitterHandle, setFanTwitterHandle] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [fanUserBio, setFanUserBio] = useState("")
  const [fanUserProfileImage, setFanUserProfileImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const registerNewClubUser = async () => {
    const res = await registerNewFan(fullName, fanInstagramHandle, fanTwitterHandle, deliveryAddress, fanUserBio, fanUserProfileImage)
    console.log("result for registring new fan op", res)
    router.push("/fandrops")
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full max-w-3xl mx-auto p-6 space-y-4 bg-neutral-300 shadow-md rounded-lg mb-3">
          <div className="p-3 border-b border-gray-700">
            <h2 className="text-5xl font-extrabold text-center font-body text-black">Fan Setup</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Left Section (Form Fields) */}
            <div className="col-span-2 space-y-4">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-700">
                  Name
                </label>
                <input
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                  }}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black p-2"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block text-md font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  value={fanUserBio}
                  onChange={(e) => {
                    setFanUserBio(e.target.value)
                  }}
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="mt-1 block w-full border border-gray-300 rounded-md text-black shadow-sm p-2"
                ></textarea>
              </div>
              <div>
                <label htmlFor="address" className="block text-md font-medium text-gray-700">
                  Address
                </label>
                <input
                  value={deliveryAddress}
                  onChange={(e) => {
                    setDeliveryAddress(e.target.value)
                  }}
                  id="address"
                  type="text"
                  placeholder="Your address"
                  className="mt-1 block w-full border border-gray-300 rounded-md text-black shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="instagram" className="block text-md font-medium text-gray-700">
                  Instagram
                </label>
                <input
                  value={fanInstagramHandle}
                  onChange={(e) => {
                    setFanInstagramHandle(e.target.value)
                  }}
                  id="instagram"
                  type="text"
                  placeholder="Your Instagram handle"
                  className="mt-1 block w-full border border-gray-300 rounded-md text-black shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="twitter" className="block text-md font-medium text-gray-700">
                  Twitter
                </label>
                <input
                  value={fanTwitterHandle}
                  onChange={(e) => {
                    setFanTwitterHandle(e.target.value)
                  }}
                  id="twitter"
                  type="text"
                  placeholder="Your Twitter handle"
                  className="mt-1 block w-full border border-gray-300 rounded-md text-black shadow-sm p-2"
                />
              </div>
            </div>

            {/* Right Section (Profile Picture Upload) */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 border-2 border-dashed border-black rounded-lg flex items-center justify-center overflow-hidden">
                {fanUserProfileImage ? (
                  <img src={fanUserProfileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500">Profile pic</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 text-sm text-gray-500"
                id="profile-pic"
              />
              <label htmlFor="profile-pic" className="sr-only">
                Upload profile picture
              </label>
            </div>
          </div>


          <button onClick={registerNewClubUser} className="w-full mt-8 bg-black text-white hover:text-black font-bold py-2 rounded-md shadow hover:bg-white border hover:border-black transition">
            Continue
          </button>


        </div>

      </div>
    </div>
  )
}