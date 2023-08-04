import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import GetWassified from './components/GetWassified/GetWassified'
import Rewards from './components/Rewards/Rewards'
import Roadmap from './components/Roadmap/Roadmap'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <GetWassified />
      <Rewards />
      <Roadmap />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
