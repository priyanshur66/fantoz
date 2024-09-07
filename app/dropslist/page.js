import Link from "next/link"
import Navbar from "../../components/Navbar"
export default function Dropslist(){
    return(
        <div className="">
            <Navbar />
            <div className="max-w-2xl mx-auto bg-neutral-300 p-6 rounded-lg shadow-md mt-20">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-black">Drop Setup</h1>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                        <label htmlFor="dropName" className="block text-md font-medium text-gray-700 mb-1">
                            Drop name
                        </label>
                        <input
                            type="text"
                            id="dropName"
                            placeholder="Enter drop name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
        
                    <div>
          <label htmlFor="minTokens" className="block text-md font-medium text-gray-700 mb-1">
            Minimum fan tokens required
          </label>
          <input
            type="number"
            id="minTokens"
            placeholder="Enter minimum tokens"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="quantity" className="block text-md font-medium text-gray-700 mb-1">
            Item quantity
          </label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter quantity"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="startDate" className="block text-md font-medium text-gray-700 mb-1">
            Start date & time
          </label>
          <input
            type="datetime-local"
            id="startDate"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="price" className="block text-md font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
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
      
      <Link href="\listingconfirmation">
      <button className="w-full mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black">
        Continue
      </button></Link>
      
    </div>
        </div>
    )
}