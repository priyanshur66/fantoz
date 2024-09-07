import Link from "next/link"
export default function Onboarding(){
    return(
        <div className="pt-16">
           <section className=" text-white py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 mx-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We are transforming fan loyalty with blockchain-powered rewards
              </h1>
              <p className="text-xl mb-8">
              Unveiling Token-Gated Flash Drops, where fan tokens unlock exclusive, limited-time opportunities. 
              </p>
              <div className="flex mb-8 flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/onboarding/clubsetup" className="bg-white text-black hover:text-white border border-black hover:border-white px-6 py-5 rounded-lg text-center font-semibold hover:bg-black transition duration-300">
                  Club: Issue gated flash drops
                </Link>
                <Link href="/onboarding/fansetup" className="bg-white text-black hover:text-white border border-black  px-6 hover:border-white py-5 rounded-lg text-center font-semibold hover:bg-black transition duration-300">
                  Fan: Participate in flash sales for your clubs
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <img src="https://theanalyst.com/wp-content/uploads/2021/07/club-vs-country-analyst-banner.jpg" alt="Sports Illustration" width={600} height={600} className="rounded-lg" />
            </div>
          </div>
        </section>
        </div>
    )
}