// import { useState } from 'react'
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";
import { Container } from "postcss";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
function App() {
  return (
    <main className="flex flex-col bg-[#ffffff] min-h-screen ">
      <Navbar />
      <div className="container mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}

export default App;
