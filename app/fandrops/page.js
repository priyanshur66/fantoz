import Navbar from "../../components/Navbar";
import Link from "next/link";
export default function Fandrops(){
    return(
        <div>
            <Navbar />
            <div>
            <section className="bg-black text-white py-20">
              <div className="container mx-auto px-6 flex flex-row md:flex-row items-center">
                <div className="md:w-1/2  md:mb-0 mx-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stay Ahead with the <mark className="bg-pink-500 px-2">Latest Drop</mark>- Track My Orders Effortlessly.
              </h1>
                  <div className="flex flex-row sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/alldrops"> <div className="bg-white text-black hover:text-white border border-black hover:border-white px-20 py-8 rounded-lg text-center text-3xl font-extrabold hover:bg-black transition duration-300">
                      Latest drops
                      </div>
                    </Link>
                
                    <Link href="/myorders"> <div className="bg-white text-black hover:text-white border border-black  px-20 hover:border-white text-3xl py-8 rounded-lg text-center font-extrabold hover:bg-black transition duration-300">
                      My orders
                      </div>
                    </Link>
              </div>
            </div>

            <div className="md:w-1/2 ml-32">
            <img src="https://img.freepik.com/free-vector/gradient-airdrop-illustration_23-2149397486.jpg" alt="Sports Illustration" width={400} height={500} className="rounded-lg" />
              {/* <Spline scene="https://prod.spline.design/9GAia2Fvu0HwOWrZ/scene.splinecode"
               className="rounded-2xl"/> */}
            </div>
          </div>
        </section>
        
            </div>
        </div>
    )
}