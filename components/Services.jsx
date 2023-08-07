"use client"
import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  PiPaintBrushLight,
  PiCodeLight,
  PiCellSignalFullLight,
} from "react-icons/pi"
import ServiceCard from "@/components/ServiceCard"
import { useInView } from "react-intersection-observer"

const Services = () => {
  const headerControls = useAnimation()
  const cardControls = useAnimation()
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true })

  // Use useEffect to trigger animations after loading and when the services section comes into view
  useEffect(() => {
    if (servicesInView) {
      // Trigger animation for the header when the services section is in view
      headerControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      })

      // Trigger animation for the cards when the services section is in view
      cardControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5, // Add a slight delay to make the cards animation start after the header animation
        },
      })
    }
  }, [headerControls, cardControls, servicesInView])

  const serviceData = [
    {
      icon: PiCodeLight,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: PiPaintBrushLight,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: PiCellSignalFullLight,
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center text-clr2 mt-36 md:mt-0">
      <motion.div
        className="text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={headerControls}
      >
        <h1 className="text-5xl md:text-7xl">
          My <span className="text-clr3">Services</span>
        </h1>
      </motion.div>
      <div className="my-20" ref={servicesRef}>
        <ul className="flex flex-col md:flex-row gap-10">
          {serviceData.map((service, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ y: 100, opacity: 0 }}
              animate={cardControls}
              className="flex flex-col items-center gap-5"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
