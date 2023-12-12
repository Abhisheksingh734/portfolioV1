// import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import './App.css'
import { Container } from 'postcss'
import AboutSection from './components/AboutSection'
import ProjectContainer from './components/ProjectContainer'

function App() {

  return (
    <main className="flex flex-col bg-[#121212] min-h-screen ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 ">
      <HeroSection/>
      <AboutSection/>
      <ProjectContainer/>
      </div>
    </main>
  )
}

export default App
