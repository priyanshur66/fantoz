import Navbar from "../../components/Navbar"
import Link from "next/link"
import Spline from "@splinetool/react-spline";
export default function ClubsHome() {
  return (
    <div>
      <Navbar />
      <div>
        <section className=" text-white py-20">
          <div className="container mx-auto px-6 flex flex-row md:flex-row items-center">
            <div className="md:w-full  md:mb-0 mx-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We are transforming <mark className="bg-pink-500 rounded-xl">fan loyalty</mark> with blockchain-powered rewards
              </h1>
              <div className="flex flex-row sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/dropslist"> <div className="bg-white text-black hover:text-white border border-black hover:border-white px-20 py-8 rounded-lg text-center text-3xl font-extrabold hover:bg-black transition duration-300">
                  List drops
                </div>
                </Link>

                <Link href="/orderdetails"> <div className="bg-white text-black hover:text-white border border-black  px-20 hover:border-white text-3xl py-8 rounded-lg text-center font-extrabold hover:bg-black transition duration-300">
                  Manage Orders
                </div>
                </Link>
              </div>
            </div>

            <div className="w-full ml-1">
              
              <Spline scene="https://prod.spline.design/9GAia2Fvu0HwOWrZ/scene.splinecode"
               className="rounded-2xl" width={700} height={600} />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}