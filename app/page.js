"use client"
import React, { useEffect, useState } from "react"
import Home from "../components/Home"
import Navbar from "@/components/Navbar"
import ScrollToTopButton from "@/components/ScrollToTopButton" // Import the ScrollToTopButton component
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { RotateLoader } from "react-spinners"

const MainApp = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <RotateLoader color="#BCAB79" />
        </div>
      ) : (
        <>
          <div
            className="min-h-screen flex justify-center items-center"
            id="home"
          >
            <Home />
          </div>
          <div
            className="min-h-screen flex justify-center items-center"
            id="services"
          >
            <Services />
          </div>
          <div
            className="min-h-screen flex justify-center items-center"
            id="projects"
          >
            <Projects />
          </div>
          <div
            className="min-h-screen flex justify-center items-center"
            id="contact"
          >
            <Contact />
          </div>
        </>
      )}
      <ScrollToTopButton />
    </main>
  )
}

export default MainApp
