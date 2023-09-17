
// About.js

import hero from "../assets/hero.svg"
import World from "../assets/Connected world.svg"
// import hero from "../assets/hero.svg"

export default function Aboutus() {

  return (
    <section id="about" className="px-4 md:px-32 text-center">
      <div className="container mx-auto px-4">

        <h2 className=" md:text-xl font-semibold text-indigo-500">About Us</h2>
        <h2 className="text-lg md:text-2xl font-semibold mb-8 ">What's important to us</h2>
        

        <div className="flex flex-wrap">
        
          <div className="flex flex-wrap items-center w-full h-3/5 ">

            <div className="w-full md:w-1/2 px-4   items-center">
              <h3 className="text-2xl font-bold mb-4">Our company's mission and vision</h3>
              <p className="text-gray-600 leading-relaxed">
              At Blu Lab Software, we leverage our decades of software engineering expertise to help businesses accelerate growth and innovation. 
              Our custom software development services allow companies to transform legacy systems, develop cutting-edge apps, and keep pace with industry disruption. We focus on understanding your business goals first, then develop software that meets those objectives.
                </p>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-8">
              <img src={hero} alt="" className="rounded-lg max-h-80" /> 
            </div>

          </div>

          <div className="flex flex-wrap items-center w-full h-3/5 ">

            <div className="w-full md:w-1/2 px-4 mb-8">
              <img src={World} alt="" className="rounded-lg max-h-80" /> 
            </div>

            <div className="w-full md:w-1/2 px-4   items-center">
              <h3 className="text-2xl font-bold mb-4">We Are Here to Boost Your Business</h3>
              <p className="text-gray-600 leading-relaxed">
              At Blu Lab Software, we leverage our decades of software engineering expertise to help businesses accelerate growth and innovation. 
              Our custom software development services allow companies to transform legacy systems, develop cutting-edge apps, and keep pace with industry disruption. We focus on understanding your business goals first, then develop software that meets those objectives.
                </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )

}