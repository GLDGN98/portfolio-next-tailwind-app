"use client"
import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Inter } from "next/font/google"
import { useInView } from "react-intersection-observer"
import InputField from "@/components/InputField"

const inter = Inter({ subsets: ["latin"] })

const Contact = () => {
  const headerControls = useAnimation()
  const formControls = useAnimation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [contactWrapperRef, contactInView] = useInView({ triggerOnce: true })

  useEffect(() => {
    headerControls.start({ y: -100, opacity: 0 })
    formControls.start({ y: 50, opacity: 0 })

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const fieldErrors = {}
    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName]) {
        fieldErrors[fieldName] = true
      }
    })

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    const url = "https://formspree.io/f/xnqkjkvz"

    try {
      const response = await fetch(url, {
        method: "POST",
        body: new FormData(event.target),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.log("Form submission failed!")
      }
    } catch (error) {
      console.log("Form submission error:", error)
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-center ${inter.className} mt-16 md:mt-0 relative`}
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
            <InputField
              id="grid-first-name"
              label="First Name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              isError={errors.first_name}
            />
            <InputField
              id="grid-last-name"
              label="Last Name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              isError={errors.last_name}
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <InputField
              id="email"
              label="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isError={errors.email}
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <InputField
              id="message"
              label="Message"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              isError={errors.message}
            />
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
