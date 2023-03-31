import React from "react"

import { Experience } from "@/components/Experience"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"

const Home = () => {
  return (
    <div className="container h-full py-8 mx-auto">
      <div className="px-4 lg:px-0">
        <Hero />
        <Skills />
        <Experience />
      </div>
    </div>
  )
}

export default Home
