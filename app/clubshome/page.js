import Navbar from "../../components/Navbar"
import Link from "next/link"
import Spline from "@splinetool/react-spline";
export default function ClubsHome(){
    return(
        <div>
            <Navbar />
            <div>
            <section className="bg-black text-white py-20">
              <div className="container mx-auto px-6 flex flex-row md:flex-row items-center">
                <div className="md:w-1/2  md:mb-0 mx-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We are transforming fan loyalty with blockchain-powered rewards
              </h1>
                  <div className="flex flex-row sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/dropslist"> <div className="bg-white text-black hover:text-white border border-black hover:border-white px-20 py-8 rounded-lg text-center text-3xl font-extrabold hover:bg-black transition duration-300">
                      List drops
                      </div>
                    </Link>
                
                    <Link href="/previousdrop"> <div className="bg-white text-black hover:text-white border border-black  px-20 hover:border-white text-3xl py-8 rounded-lg text-center font-extrabold hover:bg-black transition duration-300">
                      Previous drops
                      </div>
                    </Link>
              </div>
            </div>

            <div className="md:w-1/2 ml-10">
            <img src="https://www.hubspot.com/hs-fs/hubfs/267_Future-of-Sales.png?width=595&height=400&name=267_Future-of-Sales.png" alt="Sports Illustration" width={700} height={600} className="rounded-lg" />
              {/* <Spline scene="https://prod.spline.design/9GAia2Fvu0HwOWrZ/scene.splinecode"
               className="rounded-2xl"/> */}
            </div>
          </div>
        </section>
        
            </div>
        </div> 
    )
}