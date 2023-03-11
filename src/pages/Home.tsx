import React from 'react'
import { Navbar, Hero, Category } from "../components"

const Home = () => {
  return (
    <div className="relative z-0">
      <div className="green-gradient">
        <Navbar/>
        <Hero/>
      </div>
      <Category/>
    </div>
  )
}

export default Home