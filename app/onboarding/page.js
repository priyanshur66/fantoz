import Link from "next/link"
export default function Onboarding(){
    return(
        <div className="pt-16">
           <section className=" text-white py-20">
          <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 mx-20">
              <div className="flex mb-8 flex-col sm:flex-col justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/onboarding/clubsetup" className="bg-white text-black hover:text-white border border-black hover:border-white px-3 py-10 rounded-lg text-center font-semibold hover:bg-black transition duration-300 mb-7 text-2xl">
                  Club: Issue gated flash drops
                </Link>
                <Link href="/onboarding/fansetup" className="bg-white text-black hover:text-white border border-black  px-3 hover:border-white py-10 rounded-lg text-center font-semibold hover:bg-black transition duration-300 text-2xl">
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