import { BrowserRouter } from "react-router-dom";

import {About ,Contact, Hero,Tech,Works,StarsCanvas, Navbar, Experience } from './components'

const  App=() => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience />
      <Tech/>
      <Works/>
      <div className="relative ">
        <StarsCanvas/>
        <Contact/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
