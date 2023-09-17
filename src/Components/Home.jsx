import React from 'react'
import hero from "../assets/Typing-bro.svg"


const Home = () => {
  return (
    <main className="">
      
    <div className="flex flex-wrap-reverse">

      <div className=" md:w-1/2">
        <div className="h-full flex items-center justify-center ">
          <div className=" md:pl-32 px-10">
            <h1 className="  text-2xl md:text-6xl font-semibold mb-4 md:text-left dark:text-white" >We build <span className='text-indigo-600'>software solution </span> that lead & inspire</h1> 
            <p className=" text-base mb-8 text-left dark:text-white">The perfect digital solution for startups, corporations and bussiness.    </p>
            <button className="md:mt-10 text-white text-lg justify-start bg-indigo-600 py-2 px-4 rounded-md "><a href="https://www.isms.et/" target="_blank">Get Started</a></button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2  md:py-4 ">
        <img src={hero} alt="Hero Image" className=' md:rounded-l-xl  max-h-screen shadow-indigo-200 ' />
      </div>

    </div>

  </main>
  )
}

export default Home