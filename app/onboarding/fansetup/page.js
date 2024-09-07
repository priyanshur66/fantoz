"use client"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import React, { useState } from 'react';

export default function Fansetup(){
    const [profilePic, setProfilePic] = useState(null);

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

    return(
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
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-md font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Tell us about yourself"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>
          </div>
          <div>
            <label htmlFor="address" className="block text-md font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Your address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="instagram" className="block text-md font-medium text-gray-700">
              Instagram
            </label>
            <input
              id="instagram"
              type="text"
              placeholder="Your Instagram handle"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="block text-md font-medium text-gray-700">
              Twitter
            </label>
            <input
              id="twitter"
              type="text"
              placeholder="Your Twitter handle"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        {/* Right Section (Profile Picture Upload) */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-32 h-32 border-2 border-dashed border-black rounded-lg flex items-center justify-center overflow-hidden">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
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
    
      <Link href="\fandrops">
      <button className="w-full mt-8 bg-black text-white hover:text-black font-bold py-2 rounded-md shadow hover:bg-white border hover:border-black transition">
        Continue
      </button>
      </Link>
      
    </div>

            </div>
        </div>
    )
}