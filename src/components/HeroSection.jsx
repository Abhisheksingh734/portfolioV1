// import React from 'react'
import programmerLogo from "../assets/code-hero.webp"

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 m-5'>
      <div className='col-span-7 place-self-center text-center sm:text-left animate-fade-right '>
      <p className='text-[#6a6b6c] text-base lg:text-lg px-2'>Hello!, my name is</p>
      <h1 className='text-[#1f2937] m-3 text-3xl lg:text-5xl font-semibold animate-fade-right  animate-delay-200'>Abhishek Singh</h1>
      <p className='text-[#6a6b6c] text-base lg:text-lg px-2'>Immersed in FullStack development since 2022, I embrace the philosophy of creating digital solutions that not only overcome obstacles but also provoke surprise. I am here to bring ideas to life. Join me, and let&apos;s discover how we can create wonders in this vast digital world.</p>
      <div className="mt-4">
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-4 bg-[#c6d2e2] hover:bg-slate-200 shadow shadow-lg transition hover:-translate-y-1 delay-200 duration-300 ease-in-out  ">Hire Me</button>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-4 br-transparent bg-[#dae1ea] shadow shadow-lg transition hover:-translate-y-1 delay-200 duration-300 ease-in-out ">Download CV</button>
      </div>
      </div>

      <div className='col-span-5 place-self-center animate-fade-right animate-delay-200 '>
        <div className="w-[300px] h-[250px] lg:w-[500px] lg:h-[300px] mt-10 ">
        <img className='transform -translate-y-10 pt-10' src={programmerLogo} width={450} height={300}/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection