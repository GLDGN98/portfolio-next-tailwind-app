"use client"
import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Inter } from "next/font/google"
import { useInView } from "react-intersection-observer"

const inter = Inter({ subsets: ["latin"] })

const Contact = () => {
  const headerControls = useAnimation()
  const formControls = useAnimation()
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [contactWrapperRef, contactInView] = useInView({ triggerOnce: true })

  useEffect(() => {
    // Hide the header and form initially
    headerControls.start({ y: -100, opacity: 0 })
    formControls.start({ y: 50, opacity: 0 })

    // Trigger animation for the header and form when the component is in view
    if (contactInView) {
      headerControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      })

      formControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      })
    }
  }, [headerControls, formControls, contactInView])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("_replyto", formData.get("email")) // Add the email field as "_replyto"
    const url = "https://formspree.io/f/xnqkjkvz" // Replace with your Formspree endpoint

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Handle successful form submission (e.g., show a success message)
        setIsSubmitted(true)
      } else {
        // Handle failed form submission (e.g., show an error message)
        console.error("Form submission failed!")
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-center ${inter.className} mt-16 md:mt-0`}
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={headerControls}
        className="text-5xl md:text-7xl text-clr2"
      >
        Contact <span className="text-clr3">Me!</span>
      </motion.h1>
      {isSubmitted ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-clr3 text-xl font-semibold mt-6"
        >
          Thank you for your message! I'll get back to you soon. 😊
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          animate={formControls}
          className="w-full max-w-lg my-20"
          ref={contactWrapperRef}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-clr1 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="first_name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-clr1 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="last_name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-clr1 text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-clr1 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 1.2 }}
                className={`border-2 font-medium rounded-lg hover:font-semibold border-clr2 px-8 py-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer ${inter.className} tracking-wide `}
              >
                Send
              </motion.button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </motion.form>
      )}
    </div>
  )
}

export default Contact
