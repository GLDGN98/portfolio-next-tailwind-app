"use client"
import React, { useEffect } from "react"
import { Inter } from "next/font/google"
import { motion, useAnimation } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

const Contact = () => {
  const headerControls = useAnimation()
  const formControls = useAnimation()

  useEffect(() => {
    // Trigger animation for the header when the component mounts
    headerControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    })

    // Trigger animation for the form when the component mounts
    formControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    })
  }, [headerControls, formControls])
  return (
    <div
      className={`w-5/6 m-auto flex flex-col items-center justify-center mt-40 ${inter.className}`}
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={headerControls}
        className="text-7xl text-clr2"
      >
        Contact <span className="text-clr3">Me!</span>
      </motion.h1>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={formControls}
        className="w-full max-w-lg my-20"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-clr1  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-clr1  text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-clr1 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-clr1 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1.2 }}
              className={`border-2 font-medium rounded-lg hover:font-semibold  border-clr2 px-8 py-3 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer ${inter.className} tracking-wide `}
            >
              Send
            </motion.button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </motion.form>
    </div>
  )
}

export default Contact
