export default function AllDropsCard(){
    return(
        <div className="flex items-center justify-between bg-neutral-400 p-4 py-8 rounded-lg">
  
      <div className="w-20 h-20">
        <img src="/" alt="item image" className="w-full h-full object-cover rounded-lg border-dashed border-black border-2" />
      </div>

      <div className="text-black text-2xl text-center">
        <span className="block font-semibold">Drop Name</span>
      </div>

      <div className="text-black text-2xl text-center">
        <span className="block font-semibold">Start Date</span>
      </div>

      <div className="text-black text-2xl text-center">
        <span className="block font-semibold">Items Left</span>
      </div>

      <div className="text-black text-2xl text-center">
        <span className="block font-semibold">Is Eligible</span>
      </div>

      <div>
        <button className="bg-black text-white font-semibold hover:text-black px-8 py-2 rounded-lg hover:bg-white transition">
          Buy
        </button>
      </div>
    </div>
    )
}