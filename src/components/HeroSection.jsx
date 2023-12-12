// import React from 'react'
import programmerLogo from "../assets/programmer-logo.png"

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
      <h1 className='text-white mb-4 text-4xl lg:text-6xl font-semibold'>Hello, I'm Abhishek</h1>
      <p className='text-[#ADB7BE] text-lg lg:text-xl px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem, nemo aliquam odit reiciendis sint explicabo nam. Perferendis sed sunt ratione tempore accusantium magnam, ab iure dolor, eum, voluptate itaque?</p>
      <div className="mt-4">
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-4 br-transparent hover:bg-slate-800 text-white border border-white">Download CV</button>
      </div>
      </div>

      <div className='col-span-5 place-self-center'>
        <div className=" rounded-full bg-neutral-700 w-[300px] h-[250px] lg:w-[500px] lg:h-[300px] mt-10 ">
        <img className='transform -translate-y-10 translate-x-16 ' src={programmerLogo} width={300} height={300}/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection