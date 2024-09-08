"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { signer, provider, getFanID, getClubID } from "../utils.js"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const [isFan, setIsFan] = useState()
  const [isClub, setIsClub] = useState()
  const router = useRouter()
  useEffect(() => {
    const checkUserType = async () => {
      try {
        const fanId = await getFanID()
        const clubId = await getClubID()
        if (fanId) {
          console.log("fan id is ", fanId)
          router.push("/fandrops")
        } else if (clubId) {
          console.log("club id is ", clubId)
          router.push("/clubshome")
        } else {
          router.push("/onboarding")
        }
      } catch (error) {
        console.log("error checking user type ", error)
      }


    }
    checkUserType()

  }, [router])


  // if (isFan && isClub) {
  //   router.push("/onboarding")
  // }
  return (
    <div className="min-h-screen flex flex-col bg-black text-black">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 mx-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We are transforming fan loyalty with blockchain-powered rewards
              </h1>
              <p className="text-xl mb-8">
                Unveiling Token-Gated Flash Drops, where fan tokens unlock exclusive, limited-time opportunities. Our platform bridges the gap between clubs and their most devoted supporters, offering unique rewards that recognize and celebrate fan commitment.
              </p>

            </div>

            <div className="md:w-1/2">
              <img src="https://theanalyst.com/wp-content/uploads/2021/07/club-vs-country-analyst-banner.jpg" alt="Sports Illustration" width={600} height={600} className="rounded-lg" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">5+</h3>
                <p className="text-gray-600">Fan Tokens</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">Chiliz</h3>
                <p className="text-gray-600">Global Sports Partners</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">20+</h3>
                <p className="text-gray-600">Ecosystem Users</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold mb-2">Incoming</h3>
                <p className="text-gray-600">Market Cap</p>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-center mb-8 text-white">Chiliz fan token powering the Fantoz network</h2>
            <div className="flex justify-center space-x-4 mb-16">
              {['PSG', 'Inter', 'Napoli', 'Man City', 'Manchester'].map((team) => (
                <div key={team} className="bg-white p-[0.10rem] rounded-full shadow-md">
                  <Image src={`/logo3.png?text=${team}`} alt={`${team} logo`} width={80} height={80}
                    className="rounded-full" />
                </div>
              ))}
            </div>
            <div className="bg-neutral-900 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Fantoz : Fan token gated flash drops
                </h3>
                <p>Introducing Token-Gated Flash Drops on the Chiliz blockchain, where fan tokens unlock exclusive, time-sensitive opportunities. Leveraging the power of blockchain technology, our platform creates a secure and transparent connection between clubs and their most passionate supporters.</p>
              </div>
              <div className="md:w-1/2 mb-6 md:pl-8 mt-10">
                
                <p> Fan tokens open the door to unique rewards, experiences, and merchandise, reserved only for the most dedicated. With Chiliz, fan loyalty is celebrated and rewarded like never before, bridging the gap between clubs and their communities through blockchain-powered exclusivity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 m-3 rounded-xl text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-extrabold font-sans">Fantoz</h1>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="#" className="hover:text-gray-300">Terms</Link>
              <Link href="#" className="hover:text-gray-300">Privacy</Link>
              <Link href="#" className="hover:text-gray-300">Cookies</Link>
              <Link href="#" className="hover:text-gray-300">Contact</Link>
            </nav>
          </div>

        </div>
      </footer>
    </div>
  );
}
