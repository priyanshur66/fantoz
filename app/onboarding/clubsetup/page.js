
import Link from "next/link"
import Navbar from "../../../components/Navbar"
export default function clubsetup(){
    
    return(
        <div className="min-h-screen bg-black p-2">
            <Navbar />
            <div className="flex items-center justify-center">
              <div className="w-full max-w-4xl bg-neutral-300 text-black rounded-lg shadow-xl overflow-hidden mb-3">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-5xl font-extrabold text-center">Club Setup</h2>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="clubName" className="block text-md font-medium">Official club name</label>
                          <input id="clubName" placeholder="Enter club name" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="instagram" className="block text-md font-medium">Official Instagram</label>
                          <input id="instagram" placeholder="Instagram handle" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="announcementChannel" className="block text-md font-medium">Official Announcement Channel</label>
                                <input id="announcementChannel" placeholder="Channel link" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="fanTokenChannel" className="block text-md font-medium">Fan Token Channel</label>
                                <input id="fanTokenChannel" placeholder="Channel link" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label htmlFor="twitter" className="block text-md font-medium">Official Twitter</label>
                                <input id="twitter" placeholder="Twitter handle" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="kayenPool" className="block text-md font-medium">Kayen pool link</label>
                                <input id="kayenPool" placeholder="Pool link" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="fanTokenContract" className="block text-md font-medium">Fan token contract address</label>
                                <input id="fanTokenContract" placeholder="Contract address" className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                                <label htmlFor="clubPic" className="cursor-pointer">
                                  <upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <span className="mt-2 block text-md font-medium text-gray-400">
                                      Upload Club Logo
                                    </span>
                                    <input id="clubPic" type="file" accept="image/*" className="hidden" />
                                </label>
                            </div>
                         </div>
                      </div>
                  </div>
              </div>
              <div className="p-6 border-t border-gray-700 flex justify-end">
                <Link href="\clubshome">
                <button className="px-8 py-2 bg-black text-white rounded-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:text-black hover:border-black border font-semibold">
                  Continue
                </button></Link>
                
              </div>
            </div>
          </div>
      </div>
    )
}